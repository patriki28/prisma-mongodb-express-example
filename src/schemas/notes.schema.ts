import { z } from 'zod';

export const NoteSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
        invalid_type_error: 'Title must be a string'
      })
      .trim()
      .min(4, {
        message: 'Title must be 4 or more characters long'
      })
      .max(50, { message: 'Title must be 50 or fewer characters long' }),
    body: z
      .string({
        required_error: 'Body is required',
        invalid_type_error: 'Body must be a string'
      })
      .trim()
      .min(4, { message: 'Body must be 4 or more characters long' })
      .max(500, { message: 'Body must be 500 or fewer characters long' })
  })
});

export type NoteInput = z.infer<typeof NoteSchema>;
