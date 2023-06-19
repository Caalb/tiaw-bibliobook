export function getFavoritesBooks() {
  const favorites = localStorage.getItem('favorites_books');

  if (favorites) {
    return JSON.parse(favorites);
  }

  return [];
}