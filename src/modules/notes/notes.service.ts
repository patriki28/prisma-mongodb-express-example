import type { Notes } from '@prisma/client';
import type { CreateNoteInput } from '@/schemas/notes.schema';
import { prisma } from '@/config/db.config';

export default class NoteService {
  public async getAllNotes(): Promise<Notes[]> {
    const notes = await prisma.notes.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return notes;
  }

  public async getNoteById(noteId: string): Promise<Notes | null> {
    const note = await prisma.notes.findUnique({
      where: {
        id: noteId
      }
    });

    return note;
  }

  public async createNote(data: CreateNoteInput['body']): Promise<Notes> {
    const note = await prisma.notes.create({ data });

    return note;
  }
}
