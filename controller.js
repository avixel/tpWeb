
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(DnD){
		ctx.clearRect(0,0, canvas.width, canvas.height);
		drawing.paint(ctx);
		currColour = $('#colour').val(); // couleur
		currLineWidth = $('#spinnerWidth').val(); // spinner taille
		if($('#butRect')[0].checked){
			this.currentShape = new Rectangle(DnD.ix, DnD.iy, DnD.fx, DnD.fy, currLineWidth, currColour);
		} else {
			this.currentShape = new Line(DnD.ix, DnD.iy, DnD.fx, DnD.fy, currLineWidth, currColour);
		}
	}.bind(this);

	this.onInteractionUpdate = function(DnD){
		if(this.currentShape != 0){
			this.currentShape.fx = DnD.fx;
			this.currentShape.fy = DnD.fy;
			ctx.clearRect(0,0, canvas.width, canvas.height);
			drawing.paint(ctx);
			this.currentShape.paint(ctx);
		}
	}.bind(this);

	this.onInteractionEnd = function(DnD){
		this.currentShape.fx = DnD.fx;
		this.currentShape.fy = DnD.fy;
		ctx.clearRect(0,0, canvas.width, canvas.height);
		this.currentShape.paint(ctx);
		drawing.addShape(this.currentShape);
		drawing.paint(ctx);
	}.bind(this);

};
