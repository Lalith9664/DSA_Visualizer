import admin from 'firebase-admin';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Firebase Admin SDK once
if (!admin.apps.length) {
  const serviceAccountPath = path.join(__dirname, '../../ServiceAccountKey.json');

  if (fs.existsSync(serviceAccountPath)) {
    try {
      const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log('✔ Firebase Admin SDK initialized successfully using ServiceAccountKey.json');
    } catch (err) {
      console.error('❌ Failed to parse ServiceAccountKey.json, trying environment variables...', err.message);
      initializeFromEnv();
    }
  } else {
    initializeFromEnv();
  }
}

function initializeFromEnv() {
  if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
    });
    console.log('✔ Firebase Admin SDK initialized successfully using Environment Variables');
  } else {
    console.error('❌ Missing Firebase Admin SDK configurations. Please provide ServiceAccountKey.json or set env variables.');
  }
}

export const auth = admin.auth();
export const db = admin.firestore();

export default admin;
