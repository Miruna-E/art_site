let cart_message = document.getElementById("cart_message");
if(typeof(Storage) == "undefined"){
    if(cart_message) {
        cart_message.innerHTML = "No web storage support!";
    } else console.log("No web storage support!");
} else {
    if(localStorage.cart_message){
        if(localStorage.cart_items_nr != 0){
            localStorage.cart_message = String(localStorage.cart_items_nr) + " items";
        } else localStorage.cart_message = "Your cart is empty.";
        if(cart_message) {
            cart_message.innerHTML = localStorage.cart_message;
        }
    } else localStorage.cart_message = "Your cart is empty.";
}

function empty_cart(){
    if(typeof(Storage) == "undefined"){
        cart_items_nr.innerHTML = "No web storage support!";
    } else{
        localStorage.cart_items_nr = 0;
        cart_items_nr.innerHTML = localStorage.cart_items_nr;
        localStorage.cart_message = "Your cart is empty.";
        cart_message.innerHTML = localStorage.cart_message;
    }
}