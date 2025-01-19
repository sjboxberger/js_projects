const captureSearchValue = () => {
    let input_val = document.getElementById('search-bar').value;
    return input_val;
    };
    const renderBooksToDom = (elements) => {
    const bookListContainer = document.querySelector("#bookList");
    bookListContainer.innerHTML = "";


    bookListContainer.append(...elements);
};


// Filter books based on search input
const filterBooks = (search, book_arr) => {
//let input = captureSearchValue();
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
    let book_div_arr=[]
    for(var book of book_list){
        book_div_arr.push(structureBookAsHtml(book));
    }
    return book_div_arr;
};


// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (list) => {  
    renderBooksToDom(structureBooksAsHtml(filterBooks(captureSearchValue(), list)));
}


// Grab search button from the DOM
let searchBtn = document.getElementById('search-btn');


// Attach an event listener to the search button    
//searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });
searchBtn.addEventListener('click', function(){
    document.getElementById('test').innerHTML='Changed!';
});