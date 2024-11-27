import type { AnyZodObject, TypeOf } from 'zod';
import { z } from 'zod';

export const NoteSchema: AnyZodObject = z.object({
  body: z.object({
    title: z.string().trim().min(4).max(50),
    body: z.string().trim().min(4).max(500)
  })
});

export type CreateNoteInput = TypeOf<typeof NoteSchema>;
