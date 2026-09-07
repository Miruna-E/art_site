function createCouponCSS(message, quantity){
    //creating the new  coupon, with the following model:
    
    // <div id="coupon1" class="coupon center">
    //     <p>example text</p>
    //     <span class="couponQuantityBox">300</span>
    // </div>
    
    let newCoupon = document.createElement("div");

    //Math.random() returns a floating-point number between 0 (inclusive) and 1 (exclusive).
    //I choose to have the id contain an integer, not a floating-point number, for readability
    newCoupon.setAttribute("id", String("coupon" + Math.floor(Math.random() * 100)));
    newCoupon.classList.add("coupon", "center");

    let newMessage = document.createElement("p");
    newMessage.innerText = message;
    newMessage.classList.add("couponName");
    newCoupon.appendChild(newMessage);

    let newQuantityBox = document.createElement("span");
    newQuantityBox.classList.add("couponQuantityBox");
    newQuantityBox.innerText = quantity;
    newCoupon.appendChild(newQuantityBox);

    //adding the new coupon to the container
    document.getElementById("coupons_container").appendChild(newCoupon);
}

function add_to_cart_CSS(art_piece_index, listing_quantity){
    //creating the new cart listing, with the following model:

    // <div class="cart_listing" id="listing0" data-listing-nr="0">
    //     <div class="cart_listing_image"><img src="..\art\reptile reddit 25 07 2024.jpg"></div>
    //     <div class="cart_listing_name">Jack in the army</div>
    //     <div class="cart_listing_quantity_details">
    //         <p class="cart_listing_price">10 RON</p>
    //         <input class="product_quantity_input_box" type="number" id="quantity0" name="quantity0" placeholder="0" value="2">
    //         <p class="cart_listing_price">
    //             <span class="cart_listing_full_price">20</span>
    //             <span> RON</span>
    //         </p>
    //     </div>
    //     <div class="cart_listing_delete_button">
    //         <img src="..\images\garbage_can_icon.png" alt="garbage can">
    //     </div>
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

    let new_cart_listing_quantity_details = document.createElement("div");
    new_cart_listing_quantity_details.classList.add("cart_listing_quantity_details");

    let new_cart_listing_price = document.createElement("p");
    new_cart_listing_price.classList.add("cart_listing_price");
    new_cart_listing_price.innerText = String(art_pieces[art_piece_index].print_price) + " RON";

    let new_cart_listing_quantity_input_box = document.createElement("input");
    new_cart_listing_quantity_input_box.classList.add("product_quantity_input_box");
    new_cart_listing_quantity_input_box.setAttribute("type", "number");
    new_cart_listing_quantity_input_box.setAttribute("id", String("quantity" + art_piece_index));
    new_cart_listing_quantity_input_box.setAttribute("name", new_cart_listing_quantity_input_box.getAttribute("id"));
    new_cart_listing_quantity_input_box.setAttribute("placeholder","0");
    new_cart_listing_quantity_input_box.setAttribute("value", listing_quantity);

    let new_cart_listing_price_full_number = document.createElement("span");
    new_cart_listing_price_full_number.classList.add("cart_listing_full_price");
    new_cart_listing_price_full_number.innerText = Number(art_pieces[art_piece_index].print_price) * Number(listing_quantity);

    let new_cart_listing_price_full_text = document.createElement("span");
    new_cart_listing_price_full_text.innerText = " RON";
    
    let new_cart_listing_price_full = document.createElement("p");
    new_cart_listing_price_full.classList.add("cart_listing_price");
    new_cart_listing_price_full.appendChild(new_cart_listing_price_full_number);
    new_cart_listing_price_full.appendChild(new_cart_listing_price_full_text);

    new_cart_listing_quantity_details.appendChild(new_cart_listing_price);
    new_cart_listing_quantity_details.appendChild(new_cart_listing_quantity_input_box);
    new_cart_listing_quantity_details.appendChild(new_cart_listing_price_full);

    let new_cart_listing_delete_button = document.createElement("div");
    new_cart_listing_delete_button.classList.add("cart_listing_delete_button");

    let new_cart_listing_delete_button_image = document.createElement("img");
    new_cart_listing_delete_button_image.setAttribute("src", "..\\images\\garbage_can_icon.png");
    new_cart_listing_delete_button_image.setAttribute("alt", "garbage can");

    new_cart_listing_delete_button.appendChild(new_cart_listing_delete_button_image);

    new_cart_listing.appendChild(new_cart_listing_image_container);
    new_cart_listing.appendChild(new_cart_listing_name);
    new_cart_listing.appendChild(new_cart_listing_quantity_details);
    new_cart_listing.appendChild(new_cart_listing_delete_button);

    //setting the id of the new listing as "listing" + crt number of elements, making elements have their place in the container in their id
    let cart_listings_container = document.getElementById("cart_listings_container");
    new_cart_listing.setAttribute("id", String("listing" + cart_listings_container.childElementCount));
    new_cart_listing.setAttribute("data-listing-nr", cart_listings_container.childElementCount);

    //adding the new cart listing to the container
    cart_listings_container.appendChild(new_cart_listing);
}

//these are OBJECTS of numbers
if(localStorage.getItem("cart_listings") !== "null" || localStorage.getItem("listingsQuantity") !== "null"){ 
    cart_listings = localStorage.getItem("cart_listings").split(',');
    listingsQuantity = localStorage.getItem("listingsQuantity").split(',');
}

//if the cart has items in localStorage and they're correctly stored (index of art_pieces + quantity)
if(cart_listings && listingsQuantity && cart_listings[0] !== "null" && listingsQuantity[0] !== "null"){
   for(let index = 0; index < cart_listings.length; index++){
        add_to_cart_CSS(cart_listings[index], listingsQuantity[index]);
   }
}

if(localStorage.getItem("couponMessages") !== "null" || localStorage.getItem("couponQuantity") !== "null"){ 
    couponMessages = localStorage.getItem("couponMessages").split(',');
    couponQuantity = localStorage.getItem("couponQuantity").split(',');
}

if(couponMessages && couponQuantity && couponMessages[0] !== "null" && couponQuantity[0] !== "null"){
   for(let index = 0; index < couponMessages.length; index++){
        createCouponCSS(couponMessages[index], couponQuantity[index]);
   }
}

document.getElementById("empty_cart_button").addEventListener("click", () => {
    if(typeof(Storage) == "undefined"){
        cart_items_nr.innerHTML = "No web storage support!";
    } else{
        localStorage.cart_items_nr = 0;
        cart_items_nr.innerHTML = localStorage.cart_items_nr;
        localStorage.cart_count_message = "Your cart is empty.";
        cart_count_message.innerHTML = localStorage.cart_count_message;
    }
    //index of art_pieces in shopping cart for each product, in order
    localStorage.setItem("cart_listings", null);
    //quantity in shopping cart for each product, in order
    localStorage.setItem("listingsQuantity", null);

    //deleting the cart_listings_container in real time
    document.getElementById("cart_listings_container").innerHTML = "";
});

function enable_cart_listing_delete_buttons(){
    let cart_listing_delete_buttons = document.getElementsByClassName("cart_listing_delete_button");
    for(let button of cart_listing_delete_buttons){
        button.addEventListener("click", () => {
            if(cart_listings && listingsQuantity && cart_listings[0] !== "null" && listingsQuantity[0] !== "null"){
                let listing_to_delete_index = Number(button.parentNode.getAttribute("data-listing-nr"));
                
                let temp_cart_items_nr = Number(localStorage.cart_items_nr) - Number(listingsQuantity[listing_to_delete_index]);
                for(let index = listing_to_delete_index; index < cart_listings.length - 1; index++){
                    cart_listings[index] = cart_listings[index + 1];
                    listingsQuantity[index] = listingsQuantity[index + 1];
                }

                if(temp_cart_items_nr == 0){ //last listing was just deleted
                    cart_listings = null;
                    listingsQuantity = null;
                } else {
                    cart_listings.pop();
                    listingsQuantity.pop();
                }

                localStorage.setItem("cart_listings", cart_listings);
                localStorage.setItem("listingsQuantity", listingsQuantity);
                localStorage.cart_items_nr = temp_cart_items_nr;
                window.location.reload(); //refreshing the page, to reload the CSS for the listings
            }
        });
    }
}
enable_cart_listing_delete_buttons();

//TO DO: fix these if's (they're not organized, it's not clear what they do :( ))
let cart_count_message = document.getElementById("cart_count_message");
let cart_price = document.getElementById("cart_price");
let cart_free_transport_fee = document.getElementById("cart_free_transport_fee");

if(typeof(Storage) == "undefined"){
    if(cart_count_message){
        cart_count_message.innerHTML = "No web storage support!";
        cart_price.innerHTML = "0";
        cart_free_transport_fee.innerHTML = "0";
    } else console.log("No web storage support!");
} else {
    //cart_count_message and cart_price only change at the same time
    if(localStorage.cart_count_message && localStorage.cart_price && localStorage.cart_free_transport_fee){
        if(localStorage.cart_items_nr != 0){
            localStorage.cart_count_message = String(localStorage.cart_items_nr) + " items";
            
            //must be placed after the "add_to_cart_CSS" function call
            localStorage.cart_price = 0;
            let listings_full_prices = document.getElementsByClassName("cart_listing_full_price");
            for(let price of listings_full_prices){
                localStorage.cart_price = Number(localStorage.cart_price) + Number(price.innerText);
            }
        } else {
            localStorage.cart_count_message = "Your cart is empty.";
            localStorage.cart_price = "0";
        }

        localStorage.cart_free_transport_fee = 100 - Number(localStorage.cart_price);

        if(cart_count_message && cart_price && cart_free_transport_fee) {
            cart_count_message.innerHTML = localStorage.cart_count_message;
            cart_price.innerHTML = localStorage.cart_price;
            cart_free_transport_fee.innerHTML = localStorage.cart_free_transport_fee;
        }
    } else {
        localStorage.cart_count_message = "Your cart is empty.";
        localStorage.cart_price = "0";
        localStorage.cart_free_transport_fee = "100";
    }
}