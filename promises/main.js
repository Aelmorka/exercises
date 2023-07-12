function bookGenerator() {
    class RandomWord {
        fetch() {
            return new Promise((resolve, reject) => { 
                $.ajax({
                    method: "GET",
                    url: "http://random-word-api.herokuapp.com/word",
                    success: (data) => {
                        resolve(data)
                    },
                    error: function (xhr, text, error) {
                        reject(error);
                    }
                })
            })
        }
    }

    class RandomBook {
        fetch(word) {
            return new Promise ((resolve, reject) => {
                $.ajax({
                    method: "GET",
                    url: `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}&limit=10`,
                    success: (books) => {
                        resolve(books)
                    },
                    error: function (xhr, text, error) {
                        reject(error);
                    }
                });
            })
              
            
        }
    }

    class RandomGif {
        fetch(word) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    method: "GET",
                    url: `https://api.giphy.com/v1/gifs/search?api_key=wHBlvCmiGEcd63wfdckwnpnprv7voTse&q=${word}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
                    success: (gif) => {
                        resolve(gif)
                    },
                    error: function (xhr, text, error) {
                        reject(error);
                    }
                }); 
            })  
        }  
    }

    class Render {
        renderWord(word) {
            $('.word').append($(`<p>The word is ${word}</p>`))
        }
        renderGif(gif) {
            if (gif.data.length != 0) {
                $('#frame').attr('src', gif.data[0].embed_url)
            } else {
                console.log('no gif')
            }
            
        }
        renderBooks(books) {
            let bookdiv = $('.books')
            if (books.totalItems != 0) {
                for (let book of books.items) {
                    if (book.volumeInfo.authors) {
                        bookdiv.append(`<div>"${book.volumeInfo.title}" written by ${book.volumeInfo.authors[0]}</div>`)
                    } else {
                        bookdiv.append(`<div>"${book.volumeInfo.title}" written by nobody</div>`)
                    }
                    
                }
            } else {
                bookdiv.append(`<p>No books</p>`)
            }
            
        }
    }

    let word = new RandomWord()
    let books = new RandomBook()
    let gif = new RandomGif()
    let render = new Render()
    word.fetch()
        .then((word) => {
            render.renderWord(word)
            let gifPromise = gif.fetch(word)
            let booksPromise = books.fetch(word)
            return Promise.all([gifPromise, booksPromise])
        })
        .then((promiseResults) => {
            let [gif, books] = promiseResults
            render.renderGif(gif)
            render.renderBooks(books)
        })
    
}

bookGenerator()

