"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("../db/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';
const INSTITUTE_CODE = 'EX-001';
// login: { email, password }
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ error: 'email and password required' });
    // 1. Find the institute by its code
    const institute = await client_1.prisma.institute.findFirst({ where: { code: INSTITUTE_CODE } });
    if (!institute)
        return res.status(404).json({ error: 'institute not found' });
    // 2. Find the user by their email and institute
    const user = await client_1.prisma.user.findFirst({ where: { email, instituteId: institute.id } });
    if (!user)
        return res.status(401).json({ error: 'invalid credentials' });
    const match = await bcrypt_1.default.compare(password, user.passwordHash);
    if (!match)
        return res.status(401).json({ error: 'invalid credentials' });
    const token = jsonwebtoken_1.default.sign({ sub: user.id, instituteId: user.instituteId, role: user.role }, JWT_SECRET, { expiresIn: '8h' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role, instituteId: user.instituteId } });
});
// me
const auth_1 = require("../middleware/auth");
router.get('/me', auth_1.authMiddleware, async (req, res) => {
    const user = req.user;
    const dbUser = await client_1.prisma.user.findUnique({ where: { id: user.id }, include: { hodOf: true } });
    if (!dbUser)
        return res.status(404).json({ error: 'not found' });
    // shape response for frontend/Zustand
    res.json({ id: dbUser.id, name: dbUser.name, email: dbUser.email, role: dbUser.role, instituteId: dbUser.instituteId, department: dbUser.hodOf && dbUser.hodOf.length ? dbUser.hodOf[0] : null });
});
exports.default = router;
