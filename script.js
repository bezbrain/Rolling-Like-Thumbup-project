const iconContainer = document.querySelector(".icon-container");
const container = document.querySelector(".container");
const iconContainer2 = document.querySelector(".icon-container2");
const header = document.querySelector(".header");

iconContainer.addEventListener("click", function() {
        container.style.width = "120px";
        iconContainer2.style.color = "blue"
        iconContainer.style.display = "none";
        iconContainer2.style.transform = "rotate(360deg)";
        iconContainer2.style.transition = "all 2s ease";
        
        console.log("Thanks");
});


container.addEventListener("click", function() {
        container.style.width = "0";
        iconContainer.style.display = "flex";
        iconContainer2.style.transform = "rotate(0deg)";
        iconContainer2.style.transition = "all 2s ease";

        console.log("Hi");
});
