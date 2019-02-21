/*$(function () {*/

  var username = prompt("Quel est ton prénom ?");
  document.getElementById("bienvenue").innerHTML = "Bienvenue " + username + " !";

  $(".dropdown-toggle").dropdown();

/*var today = new Date(),
  open = "We're open today from 9am - 5pm",
  closed = "We're closed and will open again tomorrow 9am - 6pm",
  mention = document.getElementsByClassName('mention');

if (today.getHours() >= 9 && today.getHours() < 18) {
    display.innerHTML = open;
} else {
    display.innerHTML = closed;
}*/

var frDate = new Date();
var display = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementsByClassName('mention').innerHTML = (frDate.toLocaleDateString('fr-CA', display));

  if (new Date().getHours() < 22) {
    document.getElementsByClassName('mention').innerHTML = 'Ouvert';
  } else {
    document.getElementsByClassName('mention').innerHTML = 'Fermé';
  }

  /*function getName() {

    var n, q = "Enter votre nom";
  if (!window.sessionStorage) { // if sessionStorage not supported
    return window.prompt(q); // perform other action
}
  n = window.sessionStorage.getItem("name");

  if (!n) {
    n = window.prompt(q);
    window.sessionStorage.setItem("name", n);
  }
}
  document.getElementById("bienvenue").innerHTML = "Bienvenue " + n + " !";
  return n;*/

  		var flightpath = {
  			entry : {
  				curviness: 1.25,
  				autoRotate: true,
  				values: [
  						{x: 100,	y: -20},
  						{x: 300,	y: 10}
  					]
  			},
  			looping : {
  				curviness: 1.25,
  				autoRotate: true,
  				values: [
  						{x: 510,	y: 60},
  						{x: 620,	y: -60},
  						{x: 500,	y: -100},
  						{x: 380,	y: 20},
  						{x: 500,	y: 60},
  						{x: 580,	y: 20},
  						{x: 620,	y: 15}
  					]
  			},
  			leave : {
  				curviness: 1.25,
  				autoRotate: true,
  				values: [
  						{x: 660,	y: 20},
  						{x: 800,	y: 130},
  						{x: $(window).width() + 300,	y: -100},
  					]
  			}
  		};
  		// init controller
  		var controller = new ScrollMagic.Controller();

  		// create tween
  		var tween = new TimelineMax()
  			.add(TweenMax.to($("#plane"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
  			.add(TweenMax.to($("#plane"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
  			.add(TweenMax.to($("#plane"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

  		// build scene
  		var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 100})
  						.setPin("#target")
  						.setTween(tween)
  						.addIndicators() // add indicators (requires plugin)
  						.addTo(controller);
/*})*/
