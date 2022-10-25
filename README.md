# bataillejs
énoncé
attendu 1 fichiers .js

Comprenant individuellement le fichier « bataille.JS » 

une fonction « creeJeu( jeu , nbrJocker ) » qui reçoit en paramètre un tableau
réinitialise ce tableau à  « vide » 
crée dans ce tableau les 52 cartes 
ajoute dans ce tableau « nbrJocker » (second paramètre)
---- pas de retour ! --------
une fonction « melangeJeu( jeu , nbr ) » 
qui mélange le jeu de carte reçu un certain nombre de fois « nbr » : par défaut ... 1x
------ pas de retour ------
une fonction « coupeJeu( jeu ) »
qui demande au joueur s'il veut « couper  ?»
si NON : on ne fait rien
si OUI : on tire une position au hasard et toutes les cartes après cette position doivent aller à l'avant du jeu
 une fonction distribueJeu( jeu , joueurA , joueurB , nbr) 
qui distribue les cartes du  « jeu » entre les deux joueurs A et B
en donnant « nbr » cartes à la fois. 
une fonction joueBataille( joueurA, joueurB )
qui fait jouer à bataille les deux joueurs jusqu'à ce qu'un d'eux n'ait plus de carte
pour se prémunir des boucles infinies, on ajoutera un arrêt après 2000 tirages !
Vous avez besoin de
trois variables globales : « jeu », « joueurA » et  « joueurB » initialisées à « tableau vide »
une constante reprenant le nombre de « joker » souhaités (0..3)
une constante pour le nombre de cartes distribuées en même temps
une constante d'arrêt d'urgence  :  2000
