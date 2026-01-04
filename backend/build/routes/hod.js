"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const client_1 = require("../db/client");
//onst prisma = new PrismaClient();
const router = (0, express_1.Router)();
router.get('/dashboard', auth_1.authMiddleware, async (req, res) => {
    const user = req.user;
    if (user.role !== 'HOD') {
        return res.status(403).json({ message: 'Forbidden' });
    }
    try {
        const department = await client_1.prisma.department.findUnique({
            where: { hodId: user.id },
            include: {
                faculty: true,
                students: true,
            },
        });
        if (!department) {
            return res.status(404).json({ message: 'Department not found for this HOD' });
        }
        res.json(department);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.default = router;
