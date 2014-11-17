$(document).ready(function () {
 	//$('#nav').localScroll(800);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	//$('#about_me').parallax("50%", 0.1);
	//$('#projects').parallax("50%", 0.1);
	//$('.trees_bg').parallax("50%", 0.4);
	//$('#resume').parallax("50%", 0.3);
	var controller = new ScrollMagic();
	var scene = new ScrollScene({duration: 100}).setPin("#clouds").addTo(controller);
	//var tween = TweenMax.to("#clouds", 0.5, {opacity: 1, top: 0});
	//var scene = new ScrollScene({triggerElement: "#trigger1"}).setTween(tween).addTo(controller);
	//scene.addIndicators();
});
