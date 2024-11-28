import request from 'supertest';
import app from '../index';
import { prismaMock } from './singleton';

describe('GET /api/notes', () => {
  it('Should be able to get all notes', async () => {
    const response = await request(app)
      .get('/api/notes')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message).toBe('Notes fetched succesfully');
    prismaMock.notes.findMany.mockResolvedValue(response.body.data);
  });
});

describe('GET /api/notes/:noteId', () => {
  it('Should be able to find a note by its ID', async () => {
    const noteId = '6745af5666afa2a589a793b7';

    const response = await request(app)
      .get(`/api/notes/${noteId}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message).toBe('Note fetched succesfully');
    prismaMock.notes.findUnique.mockResolvedValue(response.body.data);
  });
});

describe('POST /api/notes/', () => {
  it('Should be able to create a new note and validate the input data', async () => {
    const noteInput = {
      title: 'Task for Today',
      body: 'Clean my room'
    };

    const response = await request(app)
      .post(`/api/notes/`)
      .send(noteInput)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body.message).toBe('Note created succesfully');
    prismaMock.notes.create.mockResolvedValue(response.body.data);
  });
});

describe('PUT /api/notes/:noteId', () => {
  it('Should update a note by its ID', async () => {
    const noteId = '6745af5666afa2a589a793b7';

    const noteInput = {
      title: 'Task for Today',
      body: 'Clean my room'
    };

    const response = await request(app)
      .put(`/api/notes/${noteId}`)
      .send(noteInput)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body.message).toBe('Note updated succesfully');
    prismaMock.notes.update.mockResolvedValue(response.body.data);
  });
});
