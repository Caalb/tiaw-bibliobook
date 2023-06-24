export function getUserName() {
  const user = localStorage.getItem('user');

  return user || '';
}