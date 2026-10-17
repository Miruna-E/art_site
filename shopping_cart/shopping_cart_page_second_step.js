function enableExpandSectionButtons(){
    let expandSectionButtons = document.getElementsByClassName("shipping_section_button");
    for(let button of expandSectionButtons){
        button.addEventListener("click", () => {
            // changing the arrow orientation
            let button_svg = button.getElementsByClassName("expand_section_arrrow_svg")[0];
            let button_svg_arrow = button_svg.getElementsByTagName("path")[0];
            let form = button.parentElement.getElementsByClassName("shipping_section_form")[0];
            console.log(form);

            if(button.getAttribute("data-dropped-down") === "0"){
                button_svg_arrow.setAttribute("d", "M18 15L12 9L6 15"); //changed to downwards pointing arrow
                button.setAttribute("data-dropped-down", "1");
                form.style.visibility = "hidden";
            } else {
                button_svg_arrow.setAttribute("d", "M6 9L12 15L18 9"); //changed to upwards pointing arrow
                button.setAttribute("data-dropped-down", "0");
                form.style.visibility = "visible";
            }
        });
    }
}
enableExpandSectionButtons();