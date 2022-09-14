import makeRequest from '../makeRequest';

export const genderRequest = (query) => makeRequest({ endpoint: 'gender', method: 'GET', query: `gender=${query}` });

export const createImageRequest = (data) => makeRequest({ endpoint: 'create', method: 'POST', data });

export const downloadImageRequest = (id) => makeRequest({ endpoint: 'downloadCard', method: 'GET', query: `id=${id}` });
