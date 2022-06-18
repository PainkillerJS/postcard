import makeRequest from '../makeRequest';

export const genderRequest = (query) => makeRequest({ endpoint: 'gender', method: 'GET', query: `gender=${query}` });

export const createImageRequest = (data) => makeRequest({ endpoint: 'create', method: 'POST', data });

export const downloadImageRequest = () => makeRequest({ endpoint: 'downloadCard', method: 'GET' });
