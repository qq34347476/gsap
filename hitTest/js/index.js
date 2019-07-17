//see https://www.greensock.com/draggable/ for more details.

var droppables = $(".box");

//the overlapThreshold can be a percentage ("50%", for example, would only trigger when 50% or more of the surface area of either element overlaps) or a number of pixels (20 would only trigger when 20 pixels or more overlap), or 0 will trigger when any part of the two elements overlap.
var overlapThreshold = "50%";

//we'll call onDrop() when a Draggable is dropped on top of one of the "droppables", and it'll make it "flash" (blink opacity). Obviously you can do whatever you want in this function.
function onDrop(dragged, dropped) {
	TweenMax.fromTo(dropped, 0.1, {
		opacity: 1
	}, {
		opacity: 0,
		repeat: 3,
		yoyo: true
	});
}

Draggable.create(droppables, {
	bounds: window,
	onDrag: function(e) {
		var i = droppables.length;
		while(--i > -1) {
			if(this.hitTest(droppables[i], overlapThreshold)) {
				$(droppables[i]).addClass("highlight");
			} else {
				$(droppables[i]).removeClass("highlight");
			}

			/* ALTERNATE TEST: you can use the static Draggable.hitTest() method for even more flexibility, like passing in a mouse event to see if the mouse is overlapping with the element...
			if (Draggable.hitTest(droppables[i], e) && droppables[i] !== this.target) {
			  $(droppables[i]).addClass("highlight");
			} else {
			  $(droppables[i]).removeClass("highlight");
			}
			*/
		}
	},
	onDragEnd: function(e) {
		var i = droppables.length;
		while(--i > -1) {
			if(this.hitTest(droppables[i], overlapThreshold)) {
				onDrop(this.target, droppables[i]);
			}
		}
	}
});