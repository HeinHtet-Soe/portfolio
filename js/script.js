//Get the button
const mybutton = document.querySelector("#btn-up");

// When the user scrolls down 200px from the top of the document, show the button
const scrollFunction = () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = () => scrollFunction();