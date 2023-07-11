const results = $("#results")
const source = $('#people-template').html()
const template = Handlebars.compile(source)


function renderPeople(people) {
    $("#results").empty()
    console.log(people) //array of apartments to render
    let html = template({ people: people})
    results.append(html)
}

function getData(data) {
    renderPeople(data.results)
}
function fetch() {
    $.ajax({
        url: 'https://randomuser.me/api/?inc=gender,name,email&results=10',
        dataType: 'json',
        success: getData,
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
}

fetch()
