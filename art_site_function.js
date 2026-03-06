function add_to_cart(){
    var cart_items_nr = document.getElementById("cart_count");
    cart_items_nr.innerHTML++;
}

function add_nr_to_cart(){
    var cart_items_nr = document.getElementById("cart_count");
    var nr_to_add = document.getElementById("quantity1");
    if(nr_to_add.value > 0){
        cart_items_nr.value = cart_items_nr.innerHTML;
        var total_cart_nr = parseInt(cart_items_nr.value) + parseInt(nr_to_add.value);
        cart_items_nr.innerHTML = total_cart_nr;
    }
}

function create_first_art_piece(){
    const firt_art_piece = document.getElementsByClassName
}