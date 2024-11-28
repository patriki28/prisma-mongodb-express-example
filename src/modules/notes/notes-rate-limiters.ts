import rateLimit from 'express-rate-limit';

export const getAllNotesRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    errors: [{ message: 'Too many requests, please try again later.' }]
  }
});

export const getNoteByIdRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    errors: [{ message: 'Too many requests, please try again later.' }]
  }
});

export const createNoteRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    errors: [{ message: 'Too many requests, please try again later.' }]
  }
});

export const updateNoteRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    errors: [{ message: 'Too many requests, please try again later.' }]
  }
});

export const deleteNoteByIdRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    errors: [{ message: 'Too many requests, please try again later.' }]
  }
});

export const deleteAllNotesRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    errors: [{ message: 'Too many requests, please try again later.' }]
  }
});
