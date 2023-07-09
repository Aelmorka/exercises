function bookAPI() {


    function books(data) {
        let shelf = []
        data.items.forEach(element => {
            let book = {
                name: element.volumeInfo.title,
                authors: element.volumeInfo.authors,
                isbn: element.volumeInfo.industryIdentifiers[0].identifier
            }
            shelf.push(book)
        });
        console.log(shelf)
    }

    function fetch(value) {
        $.ajax({
            method: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=intitle:${value}`,
            success: books,
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    // fetch("isbn", 9789814561778)
    // fetch("title", "How to Win Friends and Influence People")

    fetch("How to Win")
}


function gifSearch() {
    function putGif(data) {
        let frame = $("#frame")
        frame.attr("src", `${data.data[0].embed_url}`)
        //console.log(frame)
    }
    function fetch(value) {
        $.ajax({
            method: "GET",
            url: `https://api.giphy.com/v1/gifs/search?api_key=wHBlvCmiGEcd63wfdckwnpnprv7voTse&q=${value}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
            success: putGif,
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    
    $(document).ready(function() {
        let input = $("#searchInput")
        let button = $("#search")

        button.click(() => {
            if (input.val() != '') {
                fetch(input.val())
            }
        })
    })
}

gifSearch()