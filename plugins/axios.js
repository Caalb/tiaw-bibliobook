export default function ({ $axios }, inject) {
  const api = $axios.create();

  api.setBaseURL('https://www.googleapis.com/books/v1');

  inject('api', api);
}