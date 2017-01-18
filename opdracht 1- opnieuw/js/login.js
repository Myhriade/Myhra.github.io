

var footer = document.querySelector('.dancer'); // first section element
var button = document.querySelector('footer > button');
var star = document.querySelectorAll("footer ul li:nth-of-type(3) div");
var heart = document.querySelectorAll("footer ul li:nth-of-type(1) div");

var dance = function () {
  /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: section.dance) */
	footer.classList.toggle('dancing')
}

button.addEventListener('click', dance);

document.querySelectorAll("#loginform")[0].addEventListener("click", function(){
  document.querySelectorAll(".login")[0].classList.toggle("open");
});

for(var i = 0; i < star.length; i++) {
    star[i].addEventListener("click", function(){
        this.classList.toggle("active");
    });
}

for(var i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function(){
        this.classList.toggle("active");
    });
}