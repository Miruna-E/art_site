//available art pieces options
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

let listed_art_pieces=[]; //listed options on site, with available options but a bit changed (ex: will have both prints and originals where only the data- attribute and the price will differ)

//quantity in shopping cart for each product
let quantities = [0];

//cart number always shows up
let cart_items_nr = document.getElementById("cart_count");
if(typeof(Storage) == "undefined"){
    cart_items_nr.innerHTML = "No web storage support!";
} else {
    if(localStorage.cart_items_nr){
        localStorage.cart_items_nr = Number(localStorage.cart_items_nr);
    } else localStorage.cart_items_nr = 0;
    cart_items_nr.innerHTML = localStorage.cart_items_nr;
}

function add_to_cart(){
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
    let nr_to_add = document.getElementById("quantity1");
    if(typeof(Storage) == "undefined"){
        cart_items_nr.innerHTML = "No web storage support!";
    } else if(nr_to_add.value > 0){
        if(localStorage.cart_items_nr){
            localStorage.cart_items_nr = Number(localStorage.cart_items_nr) + parseInt(nr_to_add.value);
        } else localStorage.cart_items_nr = 0;
        cart_items_nr.innerHTML = localStorage.cart_items_nr;
    }
}

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
// document.location.href is not reliable (originally read-only ex: Internet Explorer) => use window.location.href
document.getElementById("shop_all_menu_option").addEventListener("click", () => {
    filter_art("all");
});
document.getElementById("shop_originals_menu_option").addEventListener("click", () => {
    filter_art("original");
});
document.getElementById("shop_prints_menu_option").addEventListener("click", () => {
    filter_art("print");
});
document.getElementById("shop_crafts_menu_option").addEventListener("click", () => {
    filter_art("craft");
});

container_visible = [];
container_hidden = [];

function filter_art(filter_by){
    const container_arr = Array.from(document.getElementsByClassName("art_piece_container")); 
    const page_container = document.getElementById("main_container");
    for(let container of container_arr){
        switch(filter_by){
            case "all": case container.getAttribute("data-product-type"):
                container.style.visibility="visible";
                container_visible.push(container);
                break;
            default:
                container.style.visibility="hidden";
                container_hidden.push(container);
        }
    }
    page_container.replaceChildren(...container_visible, ...container_hidden);
    return false; //doesn't do default action
}


//implement function to add products to shopping cart page