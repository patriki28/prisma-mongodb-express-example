import { Router } from 'express';
import Controller from './notes.controller';

import {
  createNoteRateLimiter,
  getAllNotesRateLimit,
  getNoteByIdRateLimiter
} from './notes-rate-limiters';
import { validator } from '@/middlwares/validator.middleware';
import { NoteSchema } from '@/schemas/notes.schema';

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
 * CreateNoteInput
 * @typedef {object} CreateNoteInput
 * @property {string} title.required
 * @property {string} body.required
 */

/**
 * GET /api/notes
 * @summary Retrieve All Notes
 * @tags notes
 * @description Fetches all notes from the database, ordered by the creation date in descending order.
 * @return {array<Notes>} 200 - A list of notes
 */
notes.get('/', getAllNotesRateLimit, controller.getAllNotes);

/**
 * GET /api/notes/{noteId}
 * @summary Retrieve a Note by ID
 * @tags notes
 * @param {string} noteId.path.required - The ID of the note to retrieve
 * @return {Notes} 200 - Successfully retrieved the note
 */
notes.get('/:noteId', getNoteByIdRateLimiter, controller.getNoteById);

/**
 * POST /api/notes
 * @summary Create Note
 * @tags notes
 * @param {CreateNoteInput} request.body.required - The note to create
 * @return {Notes} 201 - The newly created note
 */
notes.post(
  '/',
  validator(NoteSchema),
  createNoteRateLimiter,
  controller.createNote
);

export default notes;
