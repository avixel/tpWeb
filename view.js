
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.strokeStyle = this.couleur;
  ctx.lineWidth = this.epaisseur;
  ctx.rect(this.x1, this.y1, this.x2, this.y2);
  ctx.stroke();
};

Line.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.strokeStyle = this.couleur;
  ctx.lineWidth = this.epaisseur;
  ctx.beginPath();
  ctx.moveTo(this.x1, this.y1);
  ctx.lineTo(this.x2, this.y2);
  ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.formes.forEach(function(eltDuTableau) {
        eltDuTableau.paint(ctx);
    });
};

// fonction update q12
Drawing.prototype.updateShapeList = function(shape){
  var list = document.getElementById('shapeList');
  var li = document.createElement('li');
  var lg = list.childNodes.length;
  var bt = document.createElement('button');
  var sp = document.createElement('span');

  bt.setAttribute('id', lg);
  bt.setAttribute('class','btn btn-default');
  sp.setAttribute('class', 'glyphicon glyphicon-remove-sign');
  bt.appendChild(sp);

  bt.setAttribute('onClick', 'drawing.delShape('+lg+')');
  li.appendChild(bt);

  if(shape instanceof Rectangle){
    li.appendChild(document.createTextNode('Rectangle('+shape.tlx+","+shape.tly+","+shape.l+","+shape.h+')'));
  } else if(shape instanceof Line){
    li.appendChild(document.createTextNode('Ligne('+shape.x1+","+shape.y1+","+shape.x2+","+shape.y2+')'));
  }

  li.setAttribute('id', 'li'+lg);
  li.setAttribute('class', 'list-group-item');
  list.appendChild(li);

};

Drawing.prototype.delShape = function(id){
  var li = document.getElementById('li'+id);
  var i = $(li).index();
  li.remove();
  this.removeShape(i);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawing.paint(ctx);
};