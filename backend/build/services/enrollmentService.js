"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDepartment = createDepartment;
exports.createHod = createHod;
exports.createFaculty = createFaculty;
exports.enrollStudent = enrollStudent;
exports.studentStoragePath = studentStoragePath;
const client_1 = require("../db/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const supabaseClient_1 = require("../lib/supabaseClient");
/**
 * Create a department — only INSTITUTE_ADMIN allowed
 */
async function createDepartment(actor, data) {
    if (actor.role !== 'INSTITUTE_ADMIN')
        throw new Error('Forbidden');
    // Ensure scoping by instituteId
    // Prisma generated client doesn't have a `name_instituteId` unique input.
    // We'll find by name scoped to institute and create if missing (code is required by model).
    const existing = await client_1.prisma.department.findFirst({ where: { instituteId: actor.instituteId, name: data.name } });
    if (existing)
        return existing;
    const dept = await client_1.prisma.department.create({
        data: {
            instituteId: actor.instituteId,
            name: data.name,
        },
    });
    return dept;
}
/**
 * Admin creates HOD user and links to department. instituteId must match.
 */
async function createHod(actor, data) {
    if (actor.role !== 'INSTITUTE_ADMIN')
        throw new Error('Forbidden');
    // Verify department belongs to same institute
    const dept = await client_1.prisma.department.findUnique({ where: { id: data.departmentId } });
    if (!dept || dept.instituteId !== actor.instituteId)
        throw new Error('Invalid department');
    const passwordHash = await bcrypt_1.default.hash(data.password, 10);
    const hod = await client_1.prisma.user.create({
        data: {
            instituteId: actor.instituteId,
            name: data.name,
            email: data.email,
            passwordHash,
            role: 'HOD',
        },
    });
    // set department.hodId to link HOD
    await client_1.prisma.department.update({ where: { id: dept.id }, data: { hodId: hod.id } });
    return hod;
}
/**
 * HOD creates Faculty under same institute and department
 */
async function createFaculty(actor, data) {
    if (actor.role !== 'HOD')
        throw new Error('Forbidden');
    // Ensure actor has a department
    const hodUser = await client_1.prisma.user.findUnique({ where: { id: actor.id }, include: { hodOf: true } });
    if (!hodUser?.hodOf)
        throw new Error('HOD not assigned to a department');
    if (hodUser.instituteId !== actor.instituteId)
        throw new Error('Cross-institute access denied');
    const passwordHash = await bcrypt_1.default.hash(data.password, 10);
    const faculty = await client_1.prisma.user.create({
        data: {
            instituteId: actor.instituteId,
            name: data.name,
            email: data.email,
            passwordHash,
            role: 'FACULTY',
        },
    });
    if (data.subjectSpecialization) {
        const deptId = hodUser.hodOf.id;
        await client_1.prisma.facultySubject.create({ data: { subject: data.subjectSpecialization, facultyId: faculty.id, departmentId: deptId } });
    }
    return faculty;
}
/**
 * Faculty enrolls Student and creates academic profile. Enforces institute scoping.
 */
async function enrollStudent(actor, data) {
    if (actor.role !== 'FACULTY')
        throw new Error('Forbidden');
    // Check department exists and is same institute
    const dept = await client_1.prisma.department.findUnique({ where: { id: data.departmentId } });
    if (!dept || dept.instituteId !== actor.instituteId)
        throw new Error('Invalid department');
    const passwordHash = await bcrypt_1.default.hash(data.password, 10);
    const student = await client_1.prisma.user.create({
        data: {
            instituteId: actor.instituteId,
            name: data.name,
            email: data.email,
            passwordHash,
            role: 'STUDENT',
            // Prisma expects binary fields as Buffer (Bytes)
            faceData: data.faceData ? Buffer.from(data.faceData, 'base64') : null,
            rfidUid: data.rfidUid ?? null,
            biometricTemplate: data.biometricTemplate ? Buffer.from(data.biometricTemplate, 'base64') : null,
            // roll number belongs on the academic profile in this schema
        },
    });
    await client_1.prisma.studentAcademicProfile.create({
        data: {
            // use unchecked fields (scalars) for creation
            instituteId: actor.instituteId,
            studentId: student.id,
            departmentId: dept.id,
            year: data.year,
            semester: data.semester,
            division: data.division ?? '',
            rollNo: data.rollNumber ?? null,
        },
    });
    return student;
}
/**
 * Example: create storage path for student's uploads
 */
function studentStoragePath(instituteId, studentId, filename) {
    return (0, supabaseClient_1.storagePathForInstitute)(instituteId, `students/${studentId}/${filename}`);
}
