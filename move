
let art_pieces = []; //avalilable options
let listed_art_pieces=[]; //listed options on site, with available options but a bit changed (ex: will have both prints and originals where only the data- attribute and the price will differ)
// how to write new art pieces and art products' properties' values:
// container_id = piece + index 
// photo_id = art_piece_photo + index
// title_id = art_piece_title + index
// price_id = price + index
// description_id = art_piece_description + index
// add_to_cart_button_id = add_to_cart_piece + index
// quantity_id = quantity + index

//create new art piece
function add_art_piece(index){
    if(index != Number(index) || index >= art_pieces.length){
        console.log("Wrong index entered!");
        return 1;
    }
    let main_container = document.getElementById("main_container");
    let to_add = art_pieces[index];
    let new_container = document.createElement("li");
    new_container.class = "art_piece_container";
    new_container.id = "piece" + String(index);
    let new_photo_container = document.createElement("art_piece_photo_container");
    
    new_container.id = "piece" + String(index);
    
    main_container.appendChild(new_container);
    new_container.appendChild(new_photo_container);

};
