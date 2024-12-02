import { z } from 'zod';

export const NoteSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
        invalid_type_error: 'Title must be a string'
      })
      .trim()
      .min(4, 'Title is required and must be at least 4 characters')
      .max(50, 'Title must be at most 50 characters'),
    body: z
      .string({
        required_error: 'Body is required',
        invalid_type_error: 'Body must be a string'
      })
      .trim()
      .min(4, { message: 'Body must be 5 or more characters long' })
      .max(500, { message: 'Body must be 5 or fewer characters long' })
  })
});

export type NoteInput = z.infer<typeof NoteSchema>;
