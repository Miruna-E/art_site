//available art pieces options
let art_pieces=[{
    title: "Jack in the army",
    photo_src: "..\\art\\reptile reddit 25 07 2024.jpg",
    print_price: 10,
    original_price: 60,
    description: "A reptile in the army with a bottle of Jack.",
    product_page_href: "..\\\main\\art_site_product_model_Jack_in_the_army.html",
}, {title: "Jack in the army 2",
    photo_src: "..\\\..\\art\\reptile reddit 25 07 2024.jpg",
    print_price: 10,
    original_price: 60,
    description: "A reptile in the army with a bottle of Jack, hidden behind his back.",
    product_page_href: "..\\\main\\art_site_product_model_Jack_in_the_army_2.html",
}, {title: "Rat smoking a cig",
    photo_src: "..\\\..\\art\\rat reddit 06 07 2024.jpg",
    print_price: 5,
    original_price: 30,
    description: "A rat waiting for someone, while smoking a cig.",
    product_page_href: "..\\\main\\art_site_product_model_Rat_smoking_a_cig.html",
}, {title: "A dog's life",
    photo_src: "..\\\..\\art\\viata de caine 31 08 2024.jpg",
    print_price: 8,
    original_price: 40,
    description: "A coloring page, with a labyrinth and hidden hearts (can you count them all?). Help my dog reach the socks on the floor, color everything in and find his name!",
    product_page_href: "..\\\main\\art_site_product_model_A_dog's_life.html",
}];

localStorage.setItem("art_pieces", art_pieces);

let listed_art_pieces=[]; //listed options on site, with available options but a bit changed (ex: will have both prints and originals where only the data- attribute and the price will differ)

//index of art_pieces in shopping cart for each product, in order
let cart_listings=[];
//quantity in shopping cart for each product, in order
let quantities=[];

if(localStorage.getItem("cart_listings") !== "null" || localStorage.getItem("cart_quantities") !== "null"){ 
    console.log("items exist in localStorage");
    console.log(localStorage.getItem("cart_listings"));
    console.log(localStorage.getItem("cart_listings").split(','));
    cart_listings = localStorage.getItem("cart_listings").split(',');
    quantities = localStorage.getItem("cart_quantities").split(',');
}

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

function add_to_cart(art_piece_index){
    // changing the text ("cart_count", id="cart_message")

    //converting to string => can be found in the string "cart_listings" stored in local storage
    art_piece_index = String(art_piece_index);
    let nr_to_add = document.getElementById("quantity1");
    if(nr_to_add === null){ //<=> quantity1 is undefined => the simple variation of the button was used, where the quantity is not specified
        nr_to_add = Number(1);
    } else nr_to_add = nr_to_add.value;
    
    if(typeof(Storage) == "undefined"){
        cart_items_nr.innerHTML = "No web storage support!";
    } else if(nr_to_add > 0){
        if(localStorage.cart_items_nr){
            localStorage.cart_items_nr = Number(localStorage.cart_items_nr) + parseInt(nr_to_add);
        } else localStorage.cart_items_nr = 0;
        cart_items_nr.innerHTML = localStorage.cart_items_nr;
    }

    //creating the cart_listings and quantities arrays
    let new_index = cart_listings.indexOf(art_piece_index);

    //if there are no cart listings, or the art piece isn't already in the cart
    if(cart_listings == null || new_index === -1){
        cart_listings.push(art_piece_index);
        quantities.push(nr_to_add);
    } else {
        let found_product_index = cart_listings.indexOf(art_piece_index); //index in the cart listings => changing the product listing (the quantity)
        //converting the quantity that needs to be changed to a number and converting the number to add to it => making sure the addition is right (no strings)
        quantities[found_product_index] = Number(quantities[found_product_index]) + Number(nr_to_add);
    }

    //storing in order, only the art_pieces index of each cart listing, along with the quantity of each cart listing, in order
    //these are strings
    localStorage.setItem("cart_listings", cart_listings);
    localStorage.setItem("cart_quantities", quantities);
}

// //testing localStorage
// console.log(localStorage.getItem("cart_listings"));
// console.log(localStorage.getItem("cart_quantities"));

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
/*
If an event causes both a default action and execution of a event handling script:
the event handler script is executed first
the default action takes place afterwards
=> onclick -> href
*/

// how to write new art pieces and art products' properties' values:
// container_id = piece + index 
// photo_id = art_piece_photo + index
// title_id = art_piece_title + index
// price_id = price + index
// description_id = art_piece_description + index
// add_to_cart_button_id = add_to_cart_piece + index
// quantity_id = quantity + index

// //create new art piece
// function add_art_piece(index){
//     if(index != Number(index) || index >= art_pieces.length){
//         console.log("Wrong index entered!");
//         return 1;
//     }
//     let main_container = document.getElementById("main_container");
//     let to_add = art_pieces[index];
//     let new_container = document.createElement("li");
//     new_container.class = "art_piece_container";
//     new_container.id = "piece" + String(index);
//     let new_photo_container = document.createElement("art_piece_photo_container");
    
    
    
//     main_container.appendChild(new_container);
//     new_container.appendChild(new_photo_container);

// };
