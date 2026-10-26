import type { ErrorRequestHandler, RequestHandler } from 'express';

export const notFound: RequestHandler = (req, res) => {
  res.status(404).json({ message: `Not found: ${req.method} ${req.originalUrl}` });
};

// Express 5 forwards errors thrown in async handlers here automatically.
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const status = typeof err.status === 'number' ? err.status : 500;
  if (status >= 500) console.error(err);
  res.status(status).json({
    message: status >= 500 ? 'Internal server error' : err.message,
  });
};
