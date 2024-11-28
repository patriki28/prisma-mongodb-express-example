import { Router } from 'express';
import Controller from './notes.controller';

import {
  createNoteRateLimiter,
  deleteAllNotesRateLimiter,
  deleteNoteByIdRateLimiter,
  getAllNotesRateLimit,
  getNoteByIdRateLimiter,
  updateNoteRateLimiter
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
 * NoteInput
 * @typedef {object} NoteInput
 * @property {string} title.required
 * @property {string} body.required
 */

/**
 * GET /api/notes
 * @summary Retrieve All Notes
 * @tags Notes
 * @description Fetches all notes from the database, ordered by the creation date in descending order.
 * @return {array<Notes>} 200 - Successfully retrieved all notes
 */
notes.get('/', getAllNotesRateLimit, controller.getAllNotes);

/**
 * GET /api/notes/{noteId}
 * @summary Retrieve a Note by ID
 * @tags Notes
 * @param {string} noteId.path.required - The ID of the note to retrieve
 * @return {Notes} 200 - Successfully retrieved the note
 */
notes.get('/:noteId', getNoteByIdRateLimiter, controller.getNoteById);

/**
 * POST /api/notes
 * @summary Create Note
 * @tags Notes
 * @param {NoteInput} request.body.required - The note to create
 * @return {Notes} 201 - Successfully created a new note
 */
notes.post(
  '/',
  validator(NoteSchema),
  createNoteRateLimiter,
  controller.createNote
);

/**
 * PUT /api/notes/{noteId}
 * @summary Update a Note
 * @tags Notes
 * @description Updates an existing note with the provided title and body.
 * @param {string} noteId.path.required - The ID of the note to update
 * @param {NoteInput} request.body.required - The updated note data
 * @return {Notes} 200 - Successfully updated the note
 */
notes.put(
  '/:noteId',
  validator(NoteSchema),
  updateNoteRateLimiter,
  controller.updateNote
);

/**
 * DELETE /api/notes/{noteId}
 * @summary Delete a Note by ID
 * @tags Notes
 * @param {string} noteId.path.required - The ID of the note to retrieve
 * @return  200 - Successfully deleted the note
 */
notes.delete('/:noteId', deleteNoteByIdRateLimiter, controller.deleteNoteById);

/**
 * DELETE /api/notes/
 * @summary Delete All Notes
 * @tags Notes
 * @return 200 - Successfully deleted all notes
 */
notes.delete('/', deleteAllNotesRateLimiter, controller.deleteAllNotes);

export default notes;
