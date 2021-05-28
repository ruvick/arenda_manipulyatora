// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


function number_format() {
    let elements = document.querySelectorAll('.price_formator');
    for (let elem of elements) {
        elem.dataset.realPrice = elem.innerHTML;
        elem.innerHTML = Number(elem.innerHTML).toLocaleString('ru-RU');
    }
}

function set_size(sizeName) {
    let btn = document.getElementById('btn__to-card');
    btn.dataset.size = sizeName;
    console.log(sizeName);
}

document.addEventListener("DOMContentLoaded", () => {
    number_format();
    cart_recalc();
});

//--- Корзина ----------------------------------------------------------------------------------------------

let cart = [];
let cartCount = 0;

function cart_recalc() {
    cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null) cart = [];
    cartCount = 0;
    cartSumm = 0;
    for (let i = 0; i < cart.length; i++) {
        cartCount += Number(cart[i].count);

        cartSumm += Number(cart[i].count) * parseFloat(cart[i].price);
    }

    localStorage.setItem("cartcount", cartCount);
    localStorage.setItem("cartsumm", cartSumm);

    let elements = document.querySelectorAll('.bascet_counter');
    for (let elem of elements) {
        elem.innerHTML = cartCount;
    }

}

function add_tocart(elem, countElem) {


    let cartElem = {
        sku: elem.dataset.sku,
        size: elem.dataset.size,
        lnk: elem.dataset.lnk,
        price: elem.dataset.price,
        priceold: elem.dataset.oldprice,
        subtotal: elem.dataset.price,
        name: elem.dataset.name,
        count: (countElem == 0) ? elem.dataset.count : countElem,
        picture: elem.dataset.picture
    };

    if (cart.length == 0) {
        cart.push(cartElem);
    } else {
        let addet = true;
        for (let i = 0; i < cart.length; i++) {
            if ((cart[i].sku == cartElem.sku) && (cart[i].size == cartElem.size)) {
                cart[i].count++;
                cart[i].subtotal = Number(cart[i].count) * parseFloat(cart[i].price);
                addet = false;
                break;
            }
        }

        if (addet)
            cart.push(cartElem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    cart_recalc();

    console.log(cartElem);
}

//-------------------------------------
