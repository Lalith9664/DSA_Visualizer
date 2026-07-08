import { auth } from '../config/firebase.js';

/**
 * Middleware: verifyToken
 * Extracts the Firebase ID token from the Authorization header,
 * verifies it with Firebase Admin SDK, and attaches decoded user
 * info to req.user for use in downstream route handlers.
 */
export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Missing or malformed Authorization header. Expected: Bearer <token>',
    });
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    req.user = decodedToken; // { uid, email, name, picture, ... }
    next();
  } catch (err) {
    console.error('[auth] Token verification failed:', err.message);
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid or expired token. Please sign in again.',
    });
  }
};
