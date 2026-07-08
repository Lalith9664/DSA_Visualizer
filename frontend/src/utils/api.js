import { auth } from '../config/firebase';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api';

/**
 * Helper to get the current authenticated user's ID token from Firebase.
 */
async function getAuthHeaders() {
  const user = auth.currentUser;
  if (!user) return {};
  
  const token = await user.getIdToken();
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}

/**
 * Custom fetch wrapper that attaches Authorization header.
 */
async function request(path, options = {}) {
  const headers = await getAuthHeaders();
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const error = new Error(errorData.message || `Request failed with status ${res.status}`);
    error.status = res.status;
    error.details = errorData;
    throw error;
  }

  return res.json();
}

export const api = {
  // Users Profile Endpoints
  profile: {
    get: () => request('/users/me'),
    update: (data) => request('/users/me', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  },

  // Favorites Endpoints
  favorites: {
    list: () => request('/favorites'),
    add: (algoId, details = {}) => request(`/favorites/${algoId}`, {
      method: 'POST',
      body: JSON.stringify(details),
    }),
    remove: (algoId) => request(`/favorites/${algoId}`, {
      method: 'DELETE',
    }),
  },

  // Progress Track Endpoints
  progress: {
    list: () => request('/progress'),
    save: (algoId, details = {}) => request(`/progress/${algoId}`, {
      method: 'POST',
      body: JSON.stringify(details),
    }),
    reset: (algoId) => request(`/progress/${algoId}`, {
      method: 'DELETE',
    }),
  },
};
