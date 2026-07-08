import { Router } from 'express';
import { db } from '../config/firebase.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

router.use(verifyToken);

// Helper: get user's progress subcollection ref
const progressRef = (uid) => db.collection('users').doc(uid).collection('progress');

/**
 * GET /api/progress
 * Returns all algorithm progress records for the authenticated user.
 */
router.get('/', async (req, res, next) => {
  try {
    const { uid } = req.user;
    const snap = await progressRef(uid).get();

    const progress = {};
    snap.forEach((doc) => {
      progress[doc.id] = doc.data();
    });

    return res.json({ progress });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/progress/:algoId
 * Mark an algorithm as visited/completed.
 * Body: { completed?: boolean, visitCount?: number }
 */
router.post('/:algoId', async (req, res, next) => {
  try {
    const { uid } = req.user;
    const { algoId } = req.params;
    const { completed = false } = req.body;

    const docRef = progressRef(uid).doc(algoId);
    const record = {
      algoId,
      completed,
    };

    await docRef.set(record, { merge: true });
    return res.json({ message: 'Progress saved', record });
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /api/progress/:algoId
 * Reset progress for a specific algorithm.
 */
router.delete('/:algoId', async (req, res, next) => {
  try {
    const { uid } = req.user;
    const { algoId } = req.params;

    await progressRef(uid).doc(algoId).delete();
    return res.json({ message: `Progress reset for ${algoId}` });
  } catch (err) {
    next(err);
  }
});

export default router;
