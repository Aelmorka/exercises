function Render() {
    let prodList = $(".products")
    let cartList = $(".cart")
    let about = $(".about")
    let content = $(".content")
    
    function showProd(index, item, mode) {
        let main = $(`<div class="item" data-id="${index}"></div>`)
        main.append($(`<div class="item__img"><img src="${item.img}" /></div>`))
        let info = $(`<div class="item__info"></div>`)
        info.append($(`<div class="item__name">${item.name}</div>`))
        info.append($(`<div class="price">Price: ${item.price}</div>`))
        if (mode == 'products') {
            info.append($(`<button class="item__add">Add to cart</button>`))
        } else {
            info.append($(`<div class="item_quant">Qty: ${item.quantity}</div>`))
            info.append($(`<div class="item__sum">Total: ${item.quantity*item.price}</div>`))
            info.append($(`<button class="item__delete">Delete from cart</button>`))
        }
        main.append(info)
        return main
    }

    function renderList(list, mode) {
        let container = mode == 'products' ? prodList.find(".items") : cartList.find(".items")
        let name = mode == 'products' ? 'Product list' : 'Cart' 
        container.empty()
        if (list.length == 0) {
            container.append($(`<div class="info">For now there is nothing</div>`))
        }
        for (let i = 0; i < list.length; i++) {
            container.append(showProd(i, list[i], mode))
        }
    }
    function closeAllAcceptThis(menuItemId) {
        let unhide = '.' + menuItemId
        content.children("div").hide()
        content.children(unhide).show()
    }
    return {
        renderList, 
        closeAllAcceptThis
    }
}