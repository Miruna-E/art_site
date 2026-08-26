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

function add_to_cart_CSS(art_piece_index, listing_quantity){
    //creating the new cart listing, with the following model:

    // <div class="cart_listing">
    //     <div class="cart_listing_image">
    //         <img src="..\art\reptile reddit 25 07 2024.jpg">
    //     </div>
    //     <div class="cart_listing_name">tester</div>
    //     <input class="product_quantity_input_box" type="number" id="quantity1" name="quantity1" placeholder="0">
    // </div>

    let new_cart_listing = document.createElement("div");
    new_cart_listing.classList.add("cart_listing");

    let new_cart_listing_image_container = document.createElement("div");
    new_cart_listing_image_container.classList.add("cart_listing_image");

    let new_cart_listing_image = document.createElement("img");
    new_cart_listing_image.setAttribute("src", art_pieces[art_piece_index].photo_src);

    new_cart_listing_image_container.appendChild(new_cart_listing_image);

    let new_cart_listing_name = document.createElement("div");
    new_cart_listing_name.classList.add("cart_listing_name");
    new_cart_listing_name.innerText = art_pieces[art_piece_index].title;
    let new_title = new_cart_listing_name.innerText;

    let new_cart_listing_quantity_input_box = document.createElement("input");
    new_cart_listing_quantity_input_box.classList.add("product_quantity_input_box");
    new_cart_listing_quantity_input_box.setAttribute("type", "number");
    new_cart_listing_quantity_input_box.setAttribute("id", String("quantity" + art_piece_index));
    new_cart_listing_quantity_input_box.setAttribute("name", new_cart_listing_quantity_input_box.getAttribute("id"));
    new_cart_listing_quantity_input_box.setAttribute("placeholder","0");
    new_cart_listing_quantity_input_box.setAttribute("value", listing_quantity);

    new_cart_listing.appendChild(new_cart_listing_image_container);
    new_cart_listing.appendChild(new_cart_listing_name);
    new_cart_listing.appendChild(new_cart_listing_quantity_input_box);

    //adding the new cart listing to the container
    let cart_listings_container = document.getElementById("cart_listings_container");
    cart_listings_container.appendChild(new_cart_listing);
}

// //testing localStorage
// //these are strings
// console.log(localStorage.getItem("cart_listings"));
// console.log(localStorage.getItem("cart_quantities"));

//these are OBJECTS of numbers
cart_listings = localStorage.getItem("cart_listings").split(",");
quantities = localStorage.getItem("cart_quantities").split(",");

// //testing different scenarios
// console.log(cart_listings)
// console.log(`cart_listings: ${cart_listings}; of type ${typeof(cart_listings)}`);
// console.log(`quantities: ${quantities}; of type ${typeof(quantities)}`);

//if the cart has items in localStorage and they're correctly stored (index of art_pieces + quantity)
if(cart_listings && quantities && cart_listings[0] !== "null" && quantities[0] !== "null"){
   for(let index = 0; index < cart_listings.length; index++){
        add_to_cart_CSS(cart_listings[index], quantities[index]);
   }
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
    //index of art_pieces in shopping cart for each product, in order
    localStorage.setItem("cart_listings", null);
    //quantity in shopping cart for each product, in order
    localStorage.setItem("cart_quantities", null);

    //deleting the cart_listings_container in real time
    let cart_listings_container = document.getElementById("cart_listings_container");
    cart_listings_container.innerHTML = "";
}
