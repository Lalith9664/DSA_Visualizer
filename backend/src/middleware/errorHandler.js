/**
 * Global error handler middleware.
 * Catches any errors passed via next(err) and returns
 * a structured JSON error response.
 */
export const errorHandler = (err, req, res, _next) => {
  console.error(`[error] ${req.method} ${req.path}:`, err.message);

  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || 'An unexpected error occurred';

  res.status(statusCode).json({
    error: statusCode >= 500 ? 'Internal Server Error' : 'Request Error',
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
