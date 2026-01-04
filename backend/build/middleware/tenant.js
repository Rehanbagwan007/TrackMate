"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireTenant = requireTenant;
exports.assertSameInstitute = assertSameInstitute;
// Ensure tenant context exists on request and provide helper to assert institute scoping
function requireTenant(req, res, next) {
    const user = req.user;
    if (!user || !user.instituteId) {
        return res.status(400).json({ error: 'Tenant context missing' });
    }
    return next();
}
function assertSameInstitute(req, instituteId) {
    const user = req.user;
    if (!user)
        throw new Error('Missing user context');
    if (user.instituteId !== instituteId)
        throw new Error('Cross-institute access denied');
}
