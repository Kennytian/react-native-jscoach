import fetchIt from 'fetch-it';

const request = (url, ...options) => {
  if (__DEV__) {
    console.debug('print-url', url);
  }
  const apiFetch = fetchIt.fetch(url, {
    headers: options.headers,
    body: options.body,
    method: options.method,
    data: options.params,
  });
  return apiFetch;
};

export default request;
