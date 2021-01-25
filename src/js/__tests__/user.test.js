import { loadUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

// httpGet.mockReturnValue(JSON.stringify({}));
test('should call loadUser once', () => {
  httpGet.mockReturnValue('{}');

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});

test('kjlkjljlk', () => { });
