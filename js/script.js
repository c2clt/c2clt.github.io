/**First Slider */
$(".slider-one")
.not(".slick-initialized")
.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
});

/**Second Slider */
$(".slider-two")
.not(".slick-initialized")
.slick({
    prevArrow: ".site-slider-two .prev",
    nextArrow: ".site-slider-two .next",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
});

/** optional display of individual category */
function holiday() {
    var title = document.getElementById("category-title");
    title.innerText = "Holiday Cards";
    document.getElementById("holiday-category").style.display="";
    document.getElementById("birthday-category").style.display="none";    
    document.getElementById("valentines-category").style.display="none";    
    document.getElementById("anniversary-category").style.display="none";
}

function birthday() {
    var title = document.getElementById("category-title");
    title.innerText = "Birthday Cards";
    document.getElementById("holiday-category").style.display="none";
    document.getElementById("birthday-category").style.display="";    
    document.getElementById("valentines-category").style.display="none";    
    document.getElementById("anniversary-category").style.display="none";
}

function valentines() {
    var title = document.getElementById("category-title");
    title.innerText = "Valentines Cards";
    document.getElementById("holiday-category").style.display="none";
    document.getElementById("birthday-category").style.display="none";    
    document.getElementById("valentines-category").style.display="";    
    document.getElementById("anniversary-category").style.display="none";
}

function anniversary() {
    var title = document.getElementById("category-title");
    title.innerText = "Anniversary Cards";
    style="visibility: none;"
    document.getElementById("holiday-category").style.display="none";
    document.getElementById("birthday-category").style.display="none";    
    document.getElementById("valentines-category").style.display="none";    
    document.getElementById("anniversary-category").style.display="";
}

/** validation contact form */
function hideOrderNumber() {
    var order = document.getElementById("ordernumber");
    while (order.firstChild) {
        order.removeChild(order.firstChild);
    }
}

function createOrderNumber() {
    var order = document.getElementById("ordernumber");
    while (order.firstChild) {
        order.removeChild(order.firstChild);
    }
    var lable = document.createElement("label");
    lable.setAttribute("for", "order");
    var text = document.createTextNode("Please enter your order number: ");
    lable.appendChild(text);
    order.appendChild(lable);

    var number = document.createElement("input");
    number.type = "text";
    number.className = "form-control";
    number.id = "order";
    number.name = "order number";
    number.value = "";
    number.required = true;
    order.appendChild(number);
    order.style.display="";
}
