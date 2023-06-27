function humanDB() {
    function DataBase () {
        let ul, add, input
        
        function init() {
            ul = $(".persons")
            add = $(".addPerson")
            input = $("#nameInput")
            add.click(function() {
                if (input.val() != '') addHuman(input.val())
            })
            $("body").on("click", ".person", function() {
                deleteHuman($(this))
            });
        }

        function addHuman(name) {
            ul.append($(`<li class="person">${name}</li>`))
            input.val('')
        }

        function deleteHuman(li) {
            li.remove()
        }
        
        return {
            init: init
        }
    }
    let db = DataBase()
    $( document ).ready(function() {
        db.init()
    });
}

humanDB()

function boxes(num) {
    $( document ).ready(function() {
        for (let i = 1; i <= num; i++) {
            $(".boxes").append(`<div class="box"></div>`)
        }
        let colorAdd = "yellow"
        $("body").on("mouseenter", ".box", function(){
            $(".boxes > .box").css("background-color", colorAdd)
            $(this).css("background-color", "")
        })
        $("body").on("mouseleave", ".box", function(){
            $(".boxes > .box").css("background-color", "")
        })
    });
}

boxes(5)

function shop() {
    $( document ).ready(function() {
        let cart = $("#cart")
        $(".item").click(function() {
            if ($(`#${$(this).text()}`).length == 0 && $(this).data().instock) {
                let elm = $(`<div id="${$(this).text()}" data-num="1">${$(this).text()}</div>`)
                elm.css("cursor", "pointer")
                cart.append(elm)
                elm.click(function() {
                    if (elm.data().num == 1) {
                        elm.remove()  
                    } else {
                        elm.data().num--
                        elm.text(`${elm.attr('id')} x ${elm.data().num}`)
                    }
                })
            } else {
                let elm = $((`#${$(this).text()}`))
                elm.data().num++
                elm.text(`${elm.attr('id')} x ${elm.data().num}`)
            }
        })
    })
}

shop()

function fruitBasket(){
    const fruits = [
        { name: "Orange", color: "orange" },
        { name: "Banana", color: "yellow" },
        { name: "Coconut", color: "brown" },
        { name: "Kiwi", color: "brown" },
        { name: "Lemon", color: "yellow" },
        { name: "Cucumber", color: "green" },
        { name: "Persimmon", color: "orange" },
        { name: "Pumpkin", color: "orange" }
    ]
    $( document ).ready(function() {
        basket = $("#basket")
        for (let fruit in fruits) {
            basket.append($(`<div class="${fruits[fruit].color}">${fruits[fruit].name}</div>`))
        }
    }) 
}

fruitBasket()

function colorPicker(){
    $( document ).ready(function() {
        let box = $(".color-picker .box")
        $('#colors').children('span').each(function () {
            let color = $(this).data().color
            $(this).css("background-color", color)
            $(this).addClass("picker")
            $(this).click(function(){
                box.css("background-color", color)
            })
        });
    })
}

colorPicker()