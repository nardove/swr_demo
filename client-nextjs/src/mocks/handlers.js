import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http:localhost:3000/api/users', () => {
    return HttpResponse.ok({
      users: [{ id: 1, name: 'John Doe' }],
    });
  }),
];
