// Q9. Create a nested object representing a `library` with books, where each book has a `title`, `author`, and `available` (boolean). Write a function that returns all available books.
const library = {
  books: [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      available: true,
    },
    {
      title: "1984",
      author: "George Orwell",
      available: false,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      available: true,
    },
  ],
};

function getAvailableBooks(library) {
  const availableBooks = [];

  for (let i = 0; i < library.books.length; i++) {
    if (library.books[i].available === true) {
      availableBooks.push(library.books[i]);
    }
  }

  return availableBooks;
}

console.log(getAvailableBooks(library));
