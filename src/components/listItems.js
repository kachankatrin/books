import myBooks from '../books';
const listEl = myBooks.map(function(item) {
  return `${item.bookName}, ${item.authorName}, ${item.year}`;
})
export default listEl;
