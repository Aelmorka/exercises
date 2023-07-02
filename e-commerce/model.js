function Shop() {
    let _products = [
        {
            "name": "Apple",
            "price": 10,
            "img": "img/apple.jpeg"
        },
        {
            "name": "Orange",
            "price": 15,
            "img": "img/orange.jpg"
        },
        {
            "name": "Cucumber",
            "price": 7,
            "img": "img/cucumber.jpg"
        },
        {
            "name": "Potato",
            "price": 3,
            "img": "img/potato.jpg"
        }
    ]
    let _cart = []
    let _cartQty = 0

    function getProducts() {
        return JSON.parse(JSON.stringify(_products))
    }

    function getCart() {
        return JSON.parse(JSON.stringify(_cart))
    }

    function addToCart(index) {
        let obj = {
            name: null,
            price: null,
            quantity: null,
            img: null
        }
        let cartIndex = _cart.findIndex(el => el.name === _products[index].name)
        if (cartIndex < 0) {
            obj.name = _products[index].name
            obj.price = _products[index].price
            obj.quantity = 1
            obj.img = _products[index].img
            _cart.push(obj)
        } else {
            _cart[cartIndex].quantity++
        }
        _cartQty++
    }

    function removeFromCart(index) {
        _cartQty -= _cart[index].quantity
        _cart.splice(index, 1)
    }

    function getCartQty() {
        return _cartQty
    }

    return {
        getProducts,
        getCart,
        addToCart,
        removeFromCart,
        getCartQty
    }
}