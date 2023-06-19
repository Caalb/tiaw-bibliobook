export function setFavoriteBook({ book }) {
  const favorites = localStorage.getItem('favorites_books') || '[]';
  const favoritesArr = JSON.parse(favorites);

  const bookInFavorites = favoritesArr.some((item) => item.id === book.id);

  if (! bookInFavorites) {
    favoritesArr.push(book);
    localStorage.setItem('favorites_books', JSON.stringify(favoritesArr));
  }
}
