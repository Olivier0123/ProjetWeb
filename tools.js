function truncate(val)
{
    return (intval = val - val%1);
}
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandom(min, max)
{ return (Math.random() * (max-min+1)) + min; }

function Grille(nbX,nbY,mon_canvas) {
    tab=[];
    for(i=0;i<nbX;i++){
	var ligne=[];
	for(j=0;j<nbY;j++){
	    ligne.push(false);
	}
	tab.push(ligne);
    }
    return(tab);   
}


function dessinGrille(nbX,nbY,mon_canva){
    var dX= 350/nbX;
    var dY=350/nbY;
    
    for(i=1;i<nbY;i++){
	ctx.moveTo(i*dY,0);
	ctx.lineTo(i*dY,350);
	ctx.stroke();
    }
    
    for(j=1;j<nbX;j++)
    {
	ctx.moveTo(0,j*dX);
	ctx.lineTo(350,j*dX);
	ctx.stroke();
    }}

function ajoutObjet(objet){}

function dessin(){}

function mvtAdmis(objet,dx,dy){}

function majDessinObjet(objet,dx,dy){}

function stopObjets() {}

function Robot(x,y,vitesse,couleur){}

function dessin(ctx,dx,dy){}

function perception() {}

function reflexion(tabMvt){}

function action(act){}

function reveille(){}

