
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	this.x1 = 0;
	this.y1 = 0;
	this.x2 = 0;
	this.y2 = 0;
	this.pressed = false;

	this.interactor = interactor;

	// Developper les 3 fonctions gérant les événements
	this.mouseClick = function(evt){
		if(!this.pressed){
			var crd = getMousePosition(canvas, evt);
			this.x1 = crd.x;
			this.y1 = crd.y;
			this.interactor.onInteractionStart(this);
			this.pressed = true;
			console.log("click: "+crd.x+" "+crd.y);
		}
	}.bind(this);

	this.mouseMove = function(evt){
		if(this.pressed){
			var crd = getMousePosition(canvas, evt);
			this.x2 = crd.x;
			this.y2 = crd.y;
			this.interactor.onInteractionUpdate(this);
			console.log("move: "+crd.x+" "+crd.y);
		}
	}.bind(this);

	this.mouseReleased = function(evt){
		if(this.pressed){
			var crd = getMousePosition(canvas, evt);
			this.x2 = crd.x;
			this.y2 = crd.y;
			this.interactor.onInteractionEnd(this);
			this.pressed = false;
			console.log("release: "+crd.x+" "+crd.y);
		}
	}.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown', this.mouseClick, false);
    canvas.addEventListener('mousemove', this.mouseMove, false);
    canvas.addEventListener('mouseup', this.mouseReleased, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



