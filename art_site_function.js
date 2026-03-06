// how to write new art pieces and art products' properties' values:
// container_id = piece + index 
// photo_id = art_piece_photo + index
// title_id = art_piece_title + index
// price_id = price + index
// description_id = art_piece_description + index
// add_to_cart_button_id = add_to_cart_piece + index
// quantity_id = quantity + index

let art_pieces=[{
    title: "Jack in the army",
    photo_src: "\\art_site\\art\\reptile reddit 25 07 2024.jpg",
    print_price: 10,
    original_price: 60,
    description: "A reptile in the army with a bottle of Jack.",
    product_page_href: "\\art_site\\main\\art_site_product_model_Jack_in_the_army.html",
}, {title: "Jack in the army 2",
    photo_src: "art_site\\art\\reptile reddit 25 07 2024.jpg",
    print_price: 10,
    original_price: 60,
    description: "A reptile in the army with a bottle of Jack, hidden behind his back.",
    product_page_href: "\\art_site\\main\\art_site_product_model_Jack_in_the_army_2.html",
}, {title: "Rat smoking a cig",
    photo_src: "\\art_site\\art\\rat reddit 06 07 2024.jpg",
    print_price: 5,
    original_price: 30,
    description: "A rat waiting for someone, while smoking a cig.",
    product_page_href: "\\art_site\\main\\art_site_product_model_Rat_smoking_a_cig.html",
}, {title: "A dog's life",
    photo_src: "\\art_site\\art\\viata de caine 31 08 2024.jpg",
    print_price: 8,
    original_price: 40,
    description: "A coloring page, with a labyrinth and hidden hearts (can you count them all?). Help my dog reach the socks on the floor, color everything in and find his name!",
    product_page_href: "\\art_site\\main\\art_site_product_model_A_dog's_life.html",
}];

//quantity in shopping cart for each product
let quantities = [0];

//cart number always shows up
var cart_items_nr = document.getElementById("cart_count");
if(typeof(Storage) == "undefined"){
    cart_items_nr.innerHTML = "No web storage support!";
} else {
    if(localStorage.cart_items_nr){
        localStorage.cart_items_nr = Number(localStorage.cart_items_nr);
    } else localStorage.cart_items_nr = 0;
    cart_items_nr.innerHTML = localStorage.cart_items_nr;
}

function add_to_cart(){
    var cart_items_nr = document.getElementById("cart_count");
    if(typeof(Storage) == "undefined"){
        cart_items_nr.innerHTML = "No web storage support!";
    } else {
        if(localStorage.cart_items_nr){
            localStorage.cart_items_nr = Number(localStorage.cart_items_nr) + 1;
        } else localStorage.cart_items_nr = 0;
        cart_items_nr.innerHTML = localStorage.cart_items_nr;
    }
}

function add_nr_to_cart(){
    var cart_items_nr = document.getElementById("cart_count");
    var nr_to_add = document.getElementById("quantity1");
    if(typeof(Storage) == "undefined"){
        cart_items_nr.innerHTML = "No web storage support!";
    } else if(nr_to_add.value > 0){
        if(localStorage.cart_items_nr){
            localStorage.cart_items_nr = Number(localStorage.cart_items_nr) + parseInt(nr_to_add.value);
        } else localStorage.cart_items_nr = 0;
        cart_items_nr.innerHTML = localStorage.cart_items_nr;
    }
}

var cart_items_nr = document.getElementById("cart_count");
var cart_message = document.getElementById("cart_message");
if(typeof(Storage) == "undefined"){
    cart_message.innerHTML = "No web storage support!";
} else {
    if(localStorage.cart_message && localStorage.cart_items_nr != 0){
        localStorage.cart_message = String(localStorage.cart_items_nr) + " items";
    } else localStorage.cart_message = "Your cart is empty.";
    cart_message.innerHTML = localStorage.cart_message;
}

//implement function to filter products, add to banner
// function filter_art(filter_by){
//     var container = document.getElementsByClassName("art_piece_container");
    
// }

//implement function to add new art pieces from the art_pieces array to the main page
// function create_first_art_piece(){
//     const firt_art_piece = document.getElementsByClassName
// }

//implement function to add products to shopping cart page