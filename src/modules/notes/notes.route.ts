import { Router } from 'express';
import Controller from './notes.controller';

import {
  getAllNotesRateLimit,
  getNoteByIdRateLimiter
} from './notes-rate-limiters';

const notes: Router = Router();
const controller = new Controller();

/**
 * Notes
 * @typedef {object} Notes
 * @property {string} id
 * @property {string} title
 * @property {string} body
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * GET /api/notes
 * @summary Get All Notes
 * @tags notes
 * @return {array<Notes>} 200 - A list of notes
 */
notes.get('/', getAllNotesRateLimit, controller.getAllNotes);

/**
 * GET /api/notes/:noteId
 * @summary Get Note By ID
 * @tags notes
 * @return {Notes} 200 - A notes
 */
notes.get('/:noteId', getNoteByIdRateLimiter, controller.getNoteById);

export default notes;
