
/////getelemtn for button
var clickmacla=document.getElementById("maclabutton");
var clicklanbo=document.getElementById("lanbobutton");
var clickchev=document.getElementById("chevbutton");
var clickdonke=document.getElementById("donkebutton");
var clickferrari=document.getElementById("ferraibutton");
var clicklada=document.getElementById("ladabutton");
var dropdownclick=document.getElementById("dropdownbar");




///get elemnt for box
var boxmaclaren=document.getElementById("mclaren");
var boxlanbo=document.getElementById("lanbo");
var boxchev=document.getElementById("chev");
var boxdonke=document.getElementById("donke");
var boxferrari=document.getElementById("ferrari");
var boxlada=document.getElementById("lada");

///nav item colelction

var collctionbutton=document.getElementById("navbar__item-collection");

////icon for selction button

var collectionicon=document.getElementById("navbar__link__icon-xlink");






/// onclick for macklaren
clickmacla.addEventListener("mouseenter", function(){
    boxmaclaren.style.display="block";
    boxmaclaren.style.animation = "pulse .5s";
    

    boxmaclaren.addEventListener("mouseenter", function(){
        boxmaclaren.style.display="block";

        boxmaclaren.addEventListener("mouseleave", function( ) {
            boxmaclaren.style.display="none";
        
        });

    });



});

clickmacla.addEventListener("mouseleave", function( ) {
    boxmaclaren.style.display="none";

});

/// onclick for lanbo?????????///////////////////////////
clicklanbo.addEventListener("mouseenter", function(){
    boxlanbo.style.display="block";
    boxlanbo.style.animation = "pulse .5s";

    boxlanbo.addEventListener("mouseenter", function(){
        boxlanbo.style.display="block";

        boxlanbo.addEventListener("mouseleave", function( ) {
            boxlanbo.style.display="none";
        });
    });
});

clicklanbo.addEventListener("mouseleave", function( ) {
    boxlanbo.style.display="none";

});
///////for cheve//////
clickchev.addEventListener("mouseenter", function(){
    boxchev.style.display="block";
    boxchev.style.animation = "pulse .5s";

    boxchev.addEventListener("mouseenter", function(){
        boxchev.style.display="block";

        boxchev.addEventListener("mouseleave", function( ) {
            boxchev.style.display="none";
        });
    });
});

clickchev.addEventListener("mouseleave", function( ) {
    boxchev.style.display="none";

});

////for donke/////?//
clickdonke.addEventListener("mouseenter", function(){
    boxdonke.style.display="block";
    boxdonke.style.animation = "pulse .5s";

    boxdonke.addEventListener("mouseenter", function(){
        boxdonke.style.display="block";

        boxdonke.addEventListener("mouseleave", function( ) {
            boxdonke.style.display="none";
        });
    });
});

clickdonke.addEventListener("mouseleave", function( ) {
    boxdonke.style.display="none";

});

// for ferrari button//////////

clickferrari.addEventListener("mouseenter", function(){
    boxferrari.style.display="block";
    boxferrari.style.animation = "pulse .5s";

    boxferrari.addEventListener("mouseenter", function(){
        boxferrari.style.display="block";

        boxferrari.addEventListener("mouseleave", function( ) {
            boxferrari.style.display="none";
        });
    });
});

clickferrari.addEventListener("mouseleave", function( ) {
    boxferrari.style.display="none";

});
/////for lada/////

clicklada.addEventListener("mouseenter", function(){
    boxlada.style.display="block";
    boxlada.style.animation = "pulse .5s";


    boxlada.addEventListener("mouseenter", function(){
        boxlada.style.display="block";

        boxlada.addEventListener("mouseleave", function( ) {
            boxlada.style.display="none";
        });
    });
});

clicklada.addEventListener("mouseleave", function( ) {
    boxlada.style.display="none";

});


// //////////////////drop down animaiton//////


// dropdownclick.addEventListener("click", function(){
//     document.getElementById("mySidebar").style.width = "200px";
//     // document.getElementById("dropdownbar").style.marginRight = "250px";


// });

// clickcha.addEventListener("click",function(){
//     document.getElementById("mySidebar").style.width = "0";
//     // document.getElementById("dropdownbar").style.marginRight= "0";
// });

////////next pic slide

// var clicknextbuuton= document.getElementById("nextbu");
// var clickprevious= document.getElementById("previbu");
// var slideIndex=1;

// clicknextbuuton.addEventListener("click",function(){
//     showSlides(slideIndex += n);
// });

// clickprevious.addEventListener("click",function(){
//     showSlides(slideIndex += n);
// });


var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  console.log(slides.length);
  console.log(dots.length);


  
  if (n > slides.length) {
      slideIndex = 1
    }
    
    
  if (n < 1) {
      slideIndex = slides.length
    }


  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

 for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }


  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/////for colection button

collctionbutton.addEventListener("mouseenter", function(){
    collectionicon.xlink

   
   
});







