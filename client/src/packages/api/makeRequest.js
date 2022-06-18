import { HTTP_URL } from '../../constants/http';

export default async ({ endpoint = '', method = 'GET', data = {}, query }) => {
  const URL = `${HTTP_URL}/api/${endpoint}${query ? `?${query}` : ''}`;

  const isPost = method === 'POST';

  return await fetch(
    URL,
    isPost
      ? {
          method,
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      : {},
  ).catch(() => {
    console.log('Ошибка запроса');
  });
};
