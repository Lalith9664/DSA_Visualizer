import { Router } from 'express';
import { db } from '../config/firebase.js';
import { verifyToken } from '../middleware/auth.js';
import { z } from 'zod';

const router = Router();

// All routes require authentication
router.use(verifyToken);

/**
 * GET /api/users/me
 * Returns the authenticated user's profile from Firestore.
 * Creates a default profile document if it doesn't exist yet.
 */
router.get('/me', async (req, res, next) => {
  try {
    const { uid, email, name, picture } = req.user;
    const userRef = db.collection('users').doc(uid);
    const snap = await userRef.get();

    if (!snap.exists) {
      // Auto-create profile on first login
      const newProfile = {
        uid,
        email,
        displayName: name || email?.split('@')[0] || 'User',
        photoURL: picture || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      await userRef.set(newProfile);
      return res.status(201).json({ profile: newProfile });
    }

    return res.json({ profile: snap.data() });
  } catch (err) {
    next(err);
  }
});

const updateSchema = z.object({
  displayName: z.string().min(1).max(60).optional(),
  photoURL: z.string().url().nullable().optional(),
});

/**
 * PUT /api/users/me
 * Updates the authenticated user's profile (displayName, photoURL).
 */
router.put('/me', async (req, res, next) => {
  try {
    const parsed = updateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Validation Error', details: parsed.error.flatten() });
    }

    const { uid } = req.user;
    const updates = { ...parsed.data, updatedAt: new Date().toISOString() };
    await db.collection('users').doc(uid).set(updates, { merge: true });

    return res.json({ message: 'Profile updated', updates });
  } catch (err) {
    next(err);
  }
});

export default router;
