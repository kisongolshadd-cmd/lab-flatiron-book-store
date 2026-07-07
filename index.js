
const bookstoreCatalog = {
  title: "Welcome to Flatiron's Literary Corner!",
  books: [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 15.00, image: "https://via.placeholder.com/150" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.50, image: "https://via.placeholder.com/150" },
    { title: "1984", author: "George Orwell", price: 10.99, image: "https://via.placeholder.com/150" }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  renderBookstore();
});

function renderBookstore() {
  
  const titleElement = document.querySelector("#bookstore-title") || document.querySelector("h1");
  if (titleElement) {
    titleElement.textContent = bookstoreCatalog.title;
  }

  
  const bookContainer = document.querySelector("#book-container") || document.querySelector("#book-list");
  
  if (bookContainer) {
   
    bookContainer.innerHTML = "";

    bookstoreCatalog.books.forEach(book => {
    
      const bookCard = document.createElement("div");
      bookCard.className = "book-card";

    
      const bookTitle = document.createElement("h3");
      bookTitle.textContent = book.title;

      const bookAuthor = document.createElement("p");
      bookAuthor.textContent = `By: ${book.author}`;

      const bookPrice = document.createElement("p");
      bookPrice.textContent = `$${book.price.toFixed(2)}`;

      const bookImage = document.createElement("img");
      bookImage.src = book.image;
      bookImage.alt = book.title;
      bookImage.style.width = "100px"; // Clean up sizing

      
      bookCard.append(bookImage, bookTitle, bookAuthor, bookPrice);

      
      bookContainer.appendChild(bookCard);
    });
  }
}
    