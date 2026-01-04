"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const tenant_1 = require("../middleware/tenant");
const enrollmentService = __importStar(require("../services/enrollmentService"));
const client_1 = require("../db/client");
const router = express_1.default.Router();
// Create Department (Institute Admin)
router.post('/departments', auth_1.authMiddleware, (0, auth_1.requireRole)('INSTITUTE_ADMIN'), tenant_1.requireTenant, async (req, res) => {
    const user = req.user;
    const { name, code, description } = req.body;
    try {
        const dept = await enrollmentService.createDepartment(user, { name, code, description });
        res.status(201).json(dept);
    }
    catch (err) {
        res.status(400).json({ error: err.message ?? String(err) });
    }
});
// Create HOD (Institute Admin)
router.post('/hods', auth_1.authMiddleware, (0, auth_1.requireRole)('INSTITUTE_ADMIN'), tenant_1.requireTenant, async (req, res) => {
    const user = req.user;
    const { name, email, phone, departmentId, password } = req.body;
    try {
        const hod = await enrollmentService.createHod(user, { name, email, phone, departmentId, password });
        res.status(201).json(hod);
    }
    catch (err) {
        res.status(400).json({ error: err.message ?? String(err) });
    }
});
// Create Faculty (HOD)
router.post('/faculty', auth_1.authMiddleware, (0, auth_1.requireRole)('HOD'), tenant_1.requireTenant, async (req, res) => {
    const user = req.user;
    const { name, email, phone, subjectSpecialization, password } = req.body;
    try {
        const faculty = await enrollmentService.createFaculty(user, { name, email, phone, subjectSpecialization, password });
        res.status(201).json(faculty);
    }
    catch (err) {
        res.status(400).json({ error: err.message ?? String(err) });
    }
});
// Enroll Student (Faculty)
router.post('/students', auth_1.authMiddleware, (0, auth_1.requireRole)('FACULTY'), tenant_1.requireTenant, async (req, res) => {
    const user = req.user;
    const { name, rollNumber, email, phone, departmentId, year, semester, division, password, faceData, rfidUid, biometricTemplate } = req.body;
    try {
        const student = await enrollmentService.enrollStudent(user, { name, rollNumber, email, phone, departmentId, year, semester, division, password, faceData, rfidUid, biometricTemplate });
        res.status(201).json(student);
    }
    catch (err) {
        res.status(400).json({ error: err.message ?? String(err) });
    }
});
// List Departments for current institute
router.get('/departments', auth_1.authMiddleware, tenant_1.requireTenant, async (req, res) => {
    const user = req.user;
    try {
        const depts = await client_1.prisma.department.findMany({ where: { instituteId: user.instituteId }, include: { hod: true } });
        res.json(depts);
    }
    catch (err) {
        res.status(500).json({ error: err.message ?? String(err) });
    }
});
// List HODs
router.get('/hods', auth_1.authMiddleware, tenant_1.requireTenant, async (req, res) => {
    const user = req.user;
    try {
        const hods = await client_1.prisma.user.findMany({ where: { instituteId: user.instituteId, role: 'HOD' } });
        res.json(hods);
    }
    catch (err) {
        res.status(500).json({ error: err.message ?? String(err) });
    }
});
// List Faculty
router.get('/faculty', auth_1.authMiddleware, tenant_1.requireTenant, async (req, res) => {
    const user = req.user;
    try {
        const faculty = await client_1.prisma.user.findMany({ where: { instituteId: user.instituteId, role: 'FACULTY' }, include: { facultySubjects: true } });
        res.json(faculty);
    }
    catch (err) {
        res.status(500).json({ error: err.message ?? String(err) });
    }
});
// List Students
router.get('/students', auth_1.authMiddleware, tenant_1.requireTenant, async (req, res) => {
    const user = req.user;
    try {
        const students = await client_1.prisma.user.findMany({ where: { instituteId: user.instituteId, role: 'STUDENT' }, include: { studentProfile: true } });
        res.json(students);
    }
    catch (err) {
        res.status(500).json({ error: err.message ?? String(err) });
    }
});
exports.default = router;
