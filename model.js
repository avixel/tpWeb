
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
	this.formes = new Array();
	this.addShape = function(forme){
        this.formes.push(forme);
    }.bind(this);
    this.removeShape = function(id){
        this.formes.splice(id,1);
    }.bind(this);
};

function Forme(ix, iy, fx, fy, epaisseur, couleur){
	this.couleur = couleur;
	this.epaisseur = epaisseur;
	this.ix = ix;
	this.iy = iy;
	this.fx = fx;
	this.fy = fy;
};

function Rectangle(ix, iy, fx, fy, epaisseur, couleur){
	Forme.call(this, ix, iy, fx, fy, epaisseur, couleur);
};
Rectangle.prototype = new Forme();

function Line(ix, iy, fx, fy, epaisseur, couleur){
	Forme.call(this, ix, iy, fx, fy, epaisseur, couleur);
};
Line.prototype = new Forme();