export function removeFavoriteBook({ book_id }) {
  const favorites = localStorage.getItem('favorites_books');

  if (! favorites) {
    return;
  }

  const favoritesArr = JSON.parse(favorites);

  const updatedFavorites = favoritesArr.filter((book) => book.id !== book_id);

  localStorage.setItem('favorites_books', JSON.stringify(updatedFavorites));
}
