let jeu = [];
let joueurA =[];
let joueurB =[];
const JOKER = 3;
const CARTESDISTRIB = 2;
const ARRURG = 2000;
function creeJeu( jeu , nbrJocker )
{
    //debugger;
    if (jeu.length!==0)
    {
        jeu = [];
    }
    let couleurs = ["Trèfles","Pique","Coeur","Carreau"];
    let comptCouleurs =0;
    let valeurs =[1,2,3,4,5,6,7,8,9,10,"Vallet","dame","roi"];
    let comptValeurs = 0;
    for(let compteur = 0; compteur < 52 ;compteur++)
    {
        if (comptValeurs === 13)
        {
            comptCouleurs++;
            comptValeurs =0;
        }
        jeu.push([valeurs[comptValeurs],couleurs[comptCouleurs]]);
        comptValeurs++;
        
    }
    //return jeu;
}
//creeJeu([],5);

function melangeJeu( jeu , nbr ) 
{
    let location1 ;
    let location2 ;
    let tmp;
    for (let compteur = 0; compteur < nbr;compteur++)
    {
        location1 = Math.floor((Math.random() * jeu.length));
		location2 = Math.floor((Math.random() * jeu.length));
		tmp = jeu [location1];

		jeu[location1] = jeu[location2];
		jeu[location2] = tmp;
    }
}

function coupeJeu( jeu )
{
    //debugger;
    let confirmCoupe;
    let posCoupe;
    let move;
    confirmCoupe = confirm("Voulez vous vraiment couper le jeu ?");
    if (confirmCoupe)
    {
        posCoupe = Math.floor((Math.random() * (-jeu.length)));
        move = jeu.splice(posCoupe);
        for(let compteur = move.length-1; compteur>=0;compteur--)
        {
            jeu.unshift(move[compteur]);
        }
       
    }
   // return jeu;
}

function distribueJeu( jeu , joueurA , joueurB , nbr)
{
    for (let compteur = 0; compteur<52; compteur+=nbr*2)
    {
        for (let compt = 0; compt<nbr;compt++)
        {
        joueurA.push(jeu.splice(-1));
        }
        for (let compt = 0; compt<nbr;compt++)
        {
        joueurB.push(jeu.splice(-1));
        }
    }
}

function joueBataille( joueurA, joueurB )
{
    let carteA;
    let carteB;
    let maxCartes;
    let pointA = 0;
    let pointB = 0;

    if (joueurA.length<=joueurB.length)
    {
        maxCartes=joueurA.length;
    }
    else{maxCartes=joueurB;}

    for (let compteur = 0; compteur<maxCartes;compteur++)
    {
        console.log("Joueur A : "+joueurA[compteur]);
        console.log("Joueur B : "+joueurB[compteur]);
        if (joueurA[compteur][0]>joueurB[compteur][0])
        {
            console.log("Joueur A remporte un point !");
            pointA++;
        }
        else if (joueurA[compteur][0]<joueurB[compteur][0])
        {
            console.log("Joueur B remporte un point !");
            pointB++;
       }
    }
    if (pointA>pointB)
    {
        console.log("Joueur A vainqueur avec "+pointA+" contre "+pointB);
    }
    else if (pointA<pointB)
    {
        console.log("Joueur B vainqueur avec "+pointB+" contre "+pointA);
    }
    else 
    {
        console.log("Joueur B et Joueur A vainqueurs avec "+pointA+" et "+pointB);
    }
}
