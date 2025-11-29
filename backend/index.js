
const express = require('express');
const enrollmentRoutes = require('./routes/enrollment');
const departmentRoutes = require('./routes/departments');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the TrackMate backend!');
});

// Use routes
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/departments', departmentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
