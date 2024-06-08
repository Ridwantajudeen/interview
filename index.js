const textElement = document.getElementById('typing-text');
const textToType = "Hello, My name is Ridwan Tajudeen.\nI am a Knowledgeable Front End Web Developer adept at creating successful websites\nthat meet User's needs.  produce plans and improve designs for usability and functionality.";
let charIndex = 0;

function type() {
    const text = textToType.slice(0, ++charIndex);
    textElement.textContent = text;
    if (charIndex < textToType.length) {
        setTimeout(type, 70);
    }
}

window.onload = function () {
    type();
    showPage('page1'); 
};

