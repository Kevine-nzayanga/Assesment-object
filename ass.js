const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

    // 1. Create a function called getAvailableBooks that returns an array of all available
// books.
function getAvailableBooks(books) {
    newarr=[]
    books.forEach(element => {
       if (element.isAvailable==true) {
        newarr.push(element.title)
       }
    })
    console.log(newarr);    
  
}
getAvailableBooks(books)

// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
//   let book =books.forEach(book =>
//    console.log(book))


// function getBooksByAuthor(author) {
// this.
//     books.forEach(element => {
//         if (element.isAvailable==true) {
//          newarr.push(element.title)
//         }

//         function get(element) {
//             let arr=[]
//             for(element.author in element){
//                arr.push (element)
//             }
//             console.log("arr", arr);
//         }
//         get(element)
//      })

//  console.log( bookAuthor.title); 

//  }
//  getBooksByAuthor(books)



 const getBooksByAuthor=(name)=>{
    let allBooksByAuthor = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].author ==name) {
            allBooksByAuthor.push(books[i])
        }
    }
    return allBooksByAuthor;
    }

  console.log(  "yo",getBooksByAuthor("Charles Dickens"));




// // 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
//     publicationYear, and isAvailable).

let book =books.forEach(book =>
    console.log(book))
function addNewBook(books) {
   console.log(books);
}
addNewBook(book)


// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.

function checkoutBook(books) {
    books.forEach(book =>
       console.log( book.title))
}

// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook(books) {
    books.forEach(book)
}




  