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

/*
<main>
        <ul class="main_container" id="main_container">
            <!-- make changes to the first one only, copy it -->
            <li class="art_piece_container" id="piece1" data-product-type="print">
                <div class="art_piece_photo_container">
                    <a class="art_piece_photo"  id="art_piece_photo1" href="\art_site\main\art_site_product_model.html" target="_self">
                        <img src="\art_site\art\reptile reddit 25 07 2024.jpg" width="80%" height="80%">
                    </a>
                </div>
                <p class="art_piece_title" id="art_piece_title1">Jack in the army</p>
                <p class="art_piece_price" id="price1">Price: 10RON</p>
                <div class="add_to_cart_button" id="add_to_cart_piece1" onclick="add_to_cart()">add to cart</div>
            </li>
        </ul>
    </main>
*/

//implement function to add products to shopping cart page


//wheel of fortune part:
let wheelSlices = document.getElementById("wheel_of_fortune").getElementsByTagName("li");
let sliceRotation = 0;
for(let slice of wheelSlices){
    slice.style.setProperty("--sliceRotation", sliceRotation); //can then be accessed in css
    sliceRotation += parseFloat(slice.getAttribute("data-percentage"));
}

//!!!put isMoving in localStorage => wheel won't move when changing page
let isMoving = true;
document.getElementById("wheel_of_fortune").addEventListener("click", () => {
    let wheel = document.getElementById("wheel_of_fortune");
    if(!isMoving){
        return;
    }
    if(wheel.className == "rotating_element"){
        //removing the rotating element class would return to wheel to its original position
        wheel.className = "rotating_element paused_element";
        isMoving = false;
    }
});
