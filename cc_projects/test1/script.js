
// const books = [
//     {
//       title: "The City We Became",
//       author: "N. K. Jemisin",
//       tags: ["fantasy", "fiction", "afrofutursim", "science fiction", "sci-fi"]
//     },
//     {
//       title: "The Catcher in the Rye",
//       author: "J. D. Salinger",
//       tags: ["fiction", "young adult", "YA", "realism", "coming of age", "classic"]
//     },
//     {
//       title: "The Hundred Thousand Kingdoms",
//       author: "N. K. Jemisin",
//       tags: ["fantasy", "fiction", "adventure", "series"]
//     },
//     {
//       title: "Sapiens: A Brief History of Humankind",
//       author: "Yuval Noah Harari",
//       tags: ["nonfiction", "history", "anthropology", "science", "sociology"]
//     },
//     {
//       title: "Behave: The Biology of Humans at Our Best and Worst",
//       author: "Robert M. Sapolsky",
//       tags: ["nonfiction", "anthropology", "science", "sociology", "biology"]
//     },
//     {
//       title: "The Parable of the Talents",
//       author: "Octavia Butler",
//       tags: ["fiction", "dystopian", "science fiction"]
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       tags: ["fiction", "dystopian", "science fiction", "classics", "adult"]
//     },
//     {
//       title: "Remarkably Bright Creatures",
//       author: "Shelby Van Pelt",
//       tags: ["fiction", "mystery", "magical realism"]
//     },
//     {
//       title: "Crying in H Mart",
//       author: "Michelle Zauner",
//       tags: ["memoir", "nonfiction", "autobiography"]
//     },
//     {
//       title: "Wild: From Lost to Found on the Pacific Crest Trail",
//       author: "Cheryl Strayed",
//       tags: ["nonfiction", "memoir", "adventure", "travel"]
//     }
//   ]

//   /////////////////////////////////////////////////////////////////////////////////////////////////
//   const flattenObjectValuesIntoArray = (arrOfObjs) => {
//     let flattenedObj;
//     const flattenedObjsArr = [];
//     for (let obj = 0; obj < arrOfObjs.length; obj++) {
//       const objValues = Object.values(arrOfObjs[obj]);
//       flattenedObj = [...objValues.flat()]
//       flattenedObjsArr.push(flattenedObj)
//     }
//     return flattenedObjsArr;
// };

// const structureBookAsHtml = (book) => {
// /*
//     Book object: book={ title, author, tags(array)}
// */
//     const bookDiv = document.createElement("div");
//     bookDiv.setAttribute('class', 'bookDiv');

//     const bookTitle = document.createElement("h2");
//     bookTitle.innerHTML = book.title;
//     bookTitle.setAttribute('class', 'bookTitle');


//     const bookAuthor = document.createElement("h3");
//     bookAuthor.innerHTML = book.author;


//     const bookTags = document.createElement("p");
//     bookTags.innerHTML = book.tags.join(", ");


//     bookDiv.append(bookTitle, bookAuthor, bookTags);

//     return bookDiv;
// /*

//     returns the following div to function caller

//     <div class='bookdiv'>                           example:
//         <h2 class='booktitle'>book.title</h2>      1984
//         <h3>book.author</h3>                       George Orwell
//         <p>book.tags</p>                           fiction, dystopian, science fiction, classics, adult
//     </div>

// */
// };


// const renderBooksToDom = (elements) => {
//     const bookListContainer = document.querySelector("#bookList");

//     //Resets search results area
//     bookListContainer.innerHTML = "";


//     //Appends new divs based on array parameter (should be structured as divs)
//     bookListContainer.append(...elements);
// };

// ///////////////////////////////////////////////////////////////////////////////////////////////////



const captureSearchValue = () => {
    let input_val = document.getElementById('search-bar').value;
    return input_val;
 };

// Filter books based on search input
const filterBooks = (search, book_arr) => {
    let flattened_books=flattenObjectValuesIntoArray(book_arr);
    let ret_books=[];
    for(var book_details of flattened_books){
        if (book_details.includes(search)){
        let book={
            title: book_details[0],
            author: book_details[1],
            tags: book_details.slice(2),
        };
        ret_books.push(book);
        }
    }
    return ret_books;
};


// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
const structureBooksAsHtml = (book_list) => {
    let book_div_arr=[];
    for(var book of book_list){
        book_div_arr.push(structureBookAsHtml(book));
    }
    return book_div_arr;
};


// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (list) => {  
    // for(var b of (structureBooksAsHtml((filterBooks(captureSearchValue(), list))))){
    //     renderBooksToDom(b);
    // }


    //search val + books list > filtered array based on search criteria > array of book divs > render div array to DOM
    renderBooksToDom(structureBooksAsHtml(filterBooks(captureSearchValue(), list)));
}


// Grab search button from the DOM
let searchBtn = document.getElementById('search-btn');
// searchBtn.addEventListener('click', function(){
//     if(captureSearchValue()){
//         document.getElementById('test-input').innerHTML = captureSearchValue();
//     }else{
//         document.getElementById('test-input').innerHTML = "It didn't work :(";
//     }
// });



// Attach an event listener to the search button    
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });