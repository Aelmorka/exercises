function ex1(data) {
    console.log(data.map(i => {return {email: i.email, companyName: i.company.name}}))
}
function ex2(data) {
    console.log(data.filter(i => i.address.zipcode[0] == 5))
}
function ex3(data) {
    console.log(data.filter(i => i.address.zipcode[0] == 5).map(i => i.id))
}
function ex4(data) {
    console.log(data.map(i => i.name).filter(i => i[0] == "C"))
}
function ex5(data) {
    console.log(data.every(i => i.address.city == "South Christy"))
}
function ex6(data) {
    console.log(data.find(i => i.address.suite == "Apt. 950").company.name)
}
function userData(user) {
    console.log(`${user.name} lives in ${user.city} and owns the company ${user.company}`)
}
function ex7(data) {
    data.map(i => { return {name: i.name, city: i.address.city, company: i.company.name}})
        .forEach(i => {userData(i)});
}
function fetch() {
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        success: (data) => {
            ex1(data)
            ex2(data)
            ex3(data)
            ex4(data) 
            ex5(data)
            ex6(data)
            ex7(data)  
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
}

fetch()