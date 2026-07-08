import { Router } from 'express';
import { db } from '../config/firebase.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

router.use(verifyToken);

// Helper: get user's favorites subcollection ref
const favoritesRef = (uid) => db.collection('users').doc(uid).collection('favorites');

/**
 * GET /api/favorites
 * Returns all favorite algorithms for the authenticated user.
 */
router.get('/', async (req, res, next) => {
  try {
    const { uid } = req.user;
    const snap = await favoritesRef(uid).orderBy('savedAt', 'desc').get();

    const favorites = snap.docs.map((doc) => doc.data());
    return res.json({ favorites });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/favorites/:algoId
 * Add an algorithm to the user's favorites.
 * Body: { name?: string, category?: string }
 */
router.post('/:algoId', async (req, res, next) => {
  try {
    const { uid } = req.user;
    const { algoId } = req.params;
    const { name, category } = req.body;

    const docRef = favoritesRef(uid).doc(algoId);
    const existing = await docRef.get();

    if (existing.exists) {
      return res.status(409).json({ message: `${algoId} is already in favorites` });
    }

    const record = {
      algoId,
      name: name || algoId,
      category: category || 'unknown',
      savedAt: new Date().toISOString(),
    };

    await docRef.set(record);
    return res.status(201).json({ message: 'Added to favorites', record });
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /api/favorites/:algoId
 * Remove an algorithm from the user's favorites.
 */
router.delete('/:algoId', async (req, res, next) => {
  try {
    const { uid } = req.user;
    const { algoId } = req.params;

    await favoritesRef(uid).doc(algoId).delete();
    return res.json({ message: `${algoId} removed from favorites` });
  } catch (err) {
    next(err);
  }
});

export default router;
