import type { Request, NextFunction } from 'express';
import type { CustomResponse } from '@/types/common.type';
import type { Notes } from '@prisma/client';
import NoteService from './notes.service';

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import BadRequestError from '@/utils/errors/bad-request-error';
import NotFoundError from '@/utils/errors/not-found-error';

export default class NoteController {
  private readonly noteService = new NoteService();

  public getAllNotes = async (
    req: Request,
    res: CustomResponse<Notes>,
    next: NextFunction
  ) => {
    try {
      const notes = await this.noteService.getAllNotes();

      res.send({
        message: 'Notes fetched succesfully',
        data: notes
      });
    } catch (e) {
      next(e);
    }
  };

  public getNoteById = async (
    req: Request,
    res: CustomResponse<Notes>,
    next: NextFunction
  ) => {
    const noteId = req.params.noteId as string;

    try {
      if (!noteId) {
        next(
          new BadRequestError({
            code: 400,
            message: 'Note Id is required!',
            logging: true
          })
        );
      }

      const note = await this.noteService.getNoteById(noteId);

      res.send({
        message: 'Note fetched succesfully',
        data: note
      });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        next(
          new NotFoundError({
            code: 404,
            message: `Note with ID ${noteId} not found`,
            logging: true
          })
        );
      } else {
        next(e);
      }
    }
  };
}