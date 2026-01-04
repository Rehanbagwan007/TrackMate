"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const client_1 = require("../db/client");
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
                hod: true,
                members: true,
                students: true,
                _count: true,
            },
        });
        if (!department) {
            return res.status(404).json({ message: 'Department not found for this HOD' });
        }
        // You can filter for faculty from the members list on the frontend or here
        // const faculty = department.members.filter(m => m.role === 'FACULTY');
        res.json(department);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.default = router;
