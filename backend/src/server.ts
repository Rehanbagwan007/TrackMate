
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app: Application = express();
const prisma = new PrismaClient();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('TrackMate Backend');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
