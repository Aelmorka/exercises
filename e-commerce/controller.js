$(document).ready(function() {
    let shop = Shop()
    let render = Render()

    render.closeAllAcceptThis('about')
    
    $(".menu li").click(function() {
        if ($(this).attr("id") == 'products') {
            render.renderList(shop.getProducts(), $(this).attr("id"))
        }
        if ($(this).attr("id") == 'cart') {
            render.renderList(shop.getCart(), $(this).attr("id"))
        }
        render.closeAllAcceptThis($(this).attr("id"))
    })

    $("body").on("click", ".item__add", function() {
        shop.addToCart($(this).closest(".item").data().id)
        render.renderList(shop.getProducts(), $(this).attr("id"))
        render.renderQty(shop.getCartQty())
    })

    $("body").on("click", ".item__delete", function() {
        shop.removeFromCart($(this).closest(".item").data().id)
        render.renderList(shop.getCart(), $(this).attr("id"))
        render.renderQty(shop.getCartQty())
    })
})