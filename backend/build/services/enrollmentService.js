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
    // This uses the @@unique([name, instituteId]) constraint
    const dept = await client_1.prisma.department.upsert({
        where: {
            name_instituteId: {
                name: data.name,
                instituteId: actor.instituteId,
            },
        },
        update: {},
        create: {
            instituteId: actor.instituteId,
            name: data.name,
            code: data.code,
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
            departmentId: dept.id, // FIX: Assign HOD to the department as a member
        },
    });
    // set department.hodId to establish the 1-to-1 HOD relation
    await client_1.prisma.department.update({ where: { id: dept.id }, data: { hodId: hod.id } });
    return hod;
}
/**
 * HOD creates Faculty under same institute and department
 */
async function createFaculty(actor, data) {
    if (actor.role !== 'HOD')
        throw new Error('Forbidden');
    // FIX: Make finding the HOD's department robust
    const hodUser = await client_1.prisma.user.findUnique({ where: { id: actor.id } });
    if (!hodUser)
        throw new Error('HOD user not found');
    if (hodUser.instituteId !== actor.instituteId)
        throw new Error('Cross-institute access denied');
    let departmentId = hodUser.departmentId;
    // Fallback: if departmentId is not on the user, find the department they are HOD of
    if (!departmentId) {
        const department = await client_1.prisma.department.findUnique({ where: { hodId: actor.id } });
        if (!department)
            throw new Error('HOD not assigned to any department');
        departmentId = department.id;
    }
    const passwordHash = await bcrypt_1.default.hash(data.password, 10);
    const faculty = await client_1.prisma.user.create({
        data: {
            instituteId: actor.instituteId,
            name: data.name,
            email: data.email,
            passwordHash,
            role: 'FACULTY',
            departmentId: departmentId, // This is now reliable
        },
    });
    if (data.subjectSpecialization) {
        await client_1.prisma.facultySubject.create({ data: { subject: data.subjectSpecialization, facultyId: faculty.id, departmentId: departmentId } });
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
            // FIX: Correctly convert base64 string to Buffer for Prisma
            faceData: data.faceData ? Buffer.from(data.faceData, 'base64') : null,
            rfidUid: data.rfidUid ?? null,
            biometricTemplate: data.biometricTemplate ? Buffer.from(data.biometricTemplate, 'base64') : null,
        },
    });
    await client_1.prisma.studentAcademicProfile.create({
        data: {
            instituteId: actor.instituteId,
            studentId: student.id,
            departmentId: dept.id,
            year: data.year,
            semester: data.semester,
            division: data.division,
            // FIX: Schema field is `rollNo`, but incoming data field is `rollNumber`
            rollNo: data.rollNumber,
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
