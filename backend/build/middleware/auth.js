"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
exports.requireRole = requireRole;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("../db/client");
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';
// Attach `user` to request after validating token
async function authMiddleware(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    const token = auth.slice(7);
    let payload;
    try {
        payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    }
    catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
    const userId = payload.sub;
    if (!userId)
        return res.status(401).json({ error: 'Invalid token payload' });
    const user = await client_1.prisma.user.findUnique({ where: { id: userId } });
    if (!user)
        return res.status(401).json({ error: 'User not found' });
    req.user = {
        id: user.id,
        instituteId: user.instituteId,
        role: user.role,
        email: user.email,
        name: user.name,
    };
    return next();
}
function requireRole(...allowedRoles) {
    return (req, res, next) => {
        const user = req.user;
        if (!user)
            return res.status(401).json({ error: 'Unauthorized' });
        if (!allowedRoles.includes(user.role)) {
            return res.status(403).json({ error: 'Forbidden: insufficient role' });
        }
        return next();
    };
}
