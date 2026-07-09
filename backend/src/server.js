import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';

// Load environment variables before any other imports
dotenv.config();

import userRoutes from './routes/users.js';
import progressRoutes from './routes/progress.js';
import favoritesRoutes from './routes/favorites.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 5000;

// -------------------------------------------------------------------
// Global Middleware
// -------------------------------------------------------------------

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -------------------------------------------------------------------
// Session (1.5-hour cookie)
// -------------------------------------------------------------------

app.use(session({
  secret: process.env.SESSION_SECRET || 'dsa-visualizer-dev-secret-change-in-prod',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,                  // Not accessible via JS
    secure: process.env.NODE_ENV === 'production', // HTTPS only in prod
    sameSite: 'lax',
    maxAge: 1.5 * 60 * 60 * 1000,    // 1.5 hours in milliseconds
  },
  name: 'dsa.sid',
}));

// -------------------------------------------------------------------
// Health Check
// -------------------------------------------------------------------

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'DSA Visualizer API',
    version: '1.0.0',
  });
});

// -------------------------------------------------------------------
// API Routes
// -------------------------------------------------------------------

app.use('/api/users', userRoutes);
app.use('/api/favorites', favoritesRoutes);

// 404 handler for unknown routes
app.use((_req, res) => {
  res.status(404).json({ error: 'Not Found', message: 'This route does not exist.' });
});

// -------------------------------------------------------------------
// Global Error Handler (must be last)
// -------------------------------------------------------------------

app.use(errorHandler);

// -------------------------------------------------------------------
// Start Server
// -------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`\n🚀  DSA Visualizer API running at http://localhost:${PORT}`);
  console.log(`📋  Health check: http://localhost:${PORT}/health`);
  console.log(`🔐  Auth: Firebase Admin SDK`);
  console.log(`🗄️   Database: Firebase Firestore\n`);
});

export default app;
