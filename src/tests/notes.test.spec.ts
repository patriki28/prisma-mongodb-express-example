import request from 'supertest';
import app from '../index';
import { prismaMock } from './singleton';

describe('GET /api/notes', () => {
  it('Should be able to get all notes', async () => {
    const notes = [
      {
        id: '123',
        title: 'Work Out',
        body: 'hello@prisma.io',
        createdAt: new Date('2024-11-26T09:00:00Z'),
        updatedAt: new Date('2024-11-26T10:00:00Z')
      }
    ];

    prismaMock.notes.findMany.mockResolvedValue(notes);

    const response = await request(app)
      .get('/api/notes')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message).toBe('Notes fetched succesfully');
  });
});

describe('GET /api/notes/:noteId', () => {
  it('Should be able to find a note by its ID', async () => {
    const noteId = '6745af5666afa2a589a793b7';

    const note = {
      id: '123',
      title: 'Task for Today',
      body: 'Clean my room',
      createdAt: new Date('2024-11-26T09:00:00Z'),
      updatedAt: new Date('2024-11-26T10:00:00Z')
    };

    prismaMock.notes.findUnique.mockResolvedValue(note);

    const response = await request(app)
      .get(`/api/notes/${noteId}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message).toBe('Note fetched succesfully');
  });
});
