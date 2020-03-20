const myBooks = [
  {
    bookName: "The Lord of the Rings",
    year: "1954",
    pages: "1323",
    authorName: "John Ronald Reuel Tolkien",
    mainCharacters: [
      {
        name: "Gollum",
        age: 589
      },
      {
        name: "Aragorn",
        age: 87
      },
      {
        name: "Gandalf",
        age: 60
      },
      {
        name: "Frodo Baggins",
        age: 33
      },
      {
        name: "Sauron",
        age: 2000
      }
    ]
  },
  {
    bookName: "Alice Adventures in Wonderland",
    year: "1865",
    pages: "200",
    authorName: "Lewis Carroll",
    mainCharacters: []
  },
  {
    bookName: "Fifty Shades of Grey",
    year: "2011",
    pages: "514",
    authorName: "Erika James",
    mainCharacters: [
      {
        name: "Christian Grey",
        age: 27
      },
      {
        name: "Anastasia Steele",
        age: 25
      },
      {
        name: "Katherine Kavanagh",
        age: 25
      },
      {
        name: "Grace Trevelyan Grey",
        age: 49
      }
    ]
  },
  {
    bookName: "Season of Storms",
    year: "2013",
    pages: "384",
    authorName: "Andrzej Sapkowski",
    mainCharacters: [
      {
        name: "Geralt",
        age: 85
      },
      {
        name: "Yennefer",
        age: 100
      },
      {
        name: "Ciri",
        age: 22
      }
    ]
  },
  {
    bookName: "The Little Prince",
    year: "1943",
    pages: "93",
    authorName: "Antoine de Saint-Exupéry",
    mainCharacters: [
      {
        name: "the Little Prince",
        age: 12
      },
      {
        name: "the Fox",
        age: 3
      },
      {
        name: "the Turkish Astronomer",
        age: 55
      }
    ]
  }
];

// const myList = document.getElementById("myList");

// for (const book of myBooks) {
//   const listElement = document.createElement("li");

//   listElement.classList.add("list-item");

//   listElement.innerHTML = `<div class='flex'>
//                               ${book.bookName}, ${book.authorName}                                               <div>${book.year}</div>
//                            </div>`;

//   const listCharacters = document.createElement("ul");

//   myList.appendChild(listElement);
// }

// const yearSelect = document.getElementById("yearFilter");

export default myBooks;