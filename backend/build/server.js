"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("./db/client");
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms'));
// Allow all origins
app.use((0, cors_1.default)({ origin: '*' }));
app.use(express_1.default.json());
app.get('/health', async (req, res) => {
    try {
        // quick DB check
        await client_1.prisma.$queryRaw `SELECT 1`;
        res.json({ status: 'ok' });
    }
    catch (err) {
        res.status(500).json({ status: 'error', error: String(err) });
    }
});
// Mount enrollment routes (secure, role-guarded)
const enrollment_1 = __importDefault(require("./routes/enrollment"));
const auth_1 = __importDefault(require("./routes/auth"));
const admin_1 = __importDefault(require("./routes/admin"));
const hod_1 = __importDefault(require("./routes/hod"));
app.use('/api/enrollment', enrollment_1.default);
app.use('/api/auth', auth_1.default);
app.use('/api/admin', admin_1.default);
app.use('/api/hod', hod_1.default);
// NOTE: Enrollment logic lives in services and routes are thin controllers that enforce role + tenant guards.
const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(port, () => console.log(`TrackMate backend running on http://localhost:${port}`));
