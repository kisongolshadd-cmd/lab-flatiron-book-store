// Keeping the original structure that works perfectly for your title and author tests
if (typeof bookStore === "undefined") {
  var bookStore = [
    {
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      image: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
      title: "JavaScript & JQuery: Interactive Front-End Web Development",
      author: "Jon Duckett",
      image: "https://images-na.ssl-images-amazon.com/images/I/41y6SJWBVlL._SX396_BO1,204,203,200_.jpg"
    },
    {
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      image: "https://images-na.ssl-images-amazon.com/images/I/41o8mqS-ZXL._SX348_BO1,204,203,200_.jpg"
    }
  ];
}

document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.querySelector("h1") || document.querySelector("#header");
  const bookContainer = document.querySelector("#book-list");

  if (headerElement) {
    headerElement.textContent = "Flatbooks Technical Books";
  }

  if (bookContainer) {
    bookContainer.innerHTML = "";

    // Safer way to get the book data
    let currentBooks = [];

    if (typeof bookStore !== "undefined") {
      currentBooks = bookStore;
    } else if (typeof books !== "undefined") {
      currentBooks = books;
    }

    currentBooks.forEach(book => {
      const listItem = document.createElement("li");

listItem.innerHTML = `
  <h3>${book.title}</h3>
  <p>${book.author}</p>
  <img src="${book.image}" alt="${book.title}">
`;
bookContainer.appendChild(listItem);
    });
  }
});