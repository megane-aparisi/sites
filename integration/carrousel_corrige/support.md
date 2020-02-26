# Mémo

## Illustration & légende : balise figure

C'est souvent une image, une illustration, un diagramme, un fragment de code ou un schéma auquel il est fait référence dans le texte principal mais qui peut être utilisé sur une autre page ou dans une annexe sans que cela affecte le contenu principal.
L'élément HTML figure peut être accompagné d'une légende grâce à l'élément figcaption.

## Positions CSS

Un élément positionné est un élément dont la propriété de position est :

* relative
* absolute
* fixed
* sticky

L'emplacement de l'élément positionné est déterminé par les propriétés :

* top
* right
* bottom
* left

### Position relative

Le positionnement relatif permet d'inscrire un contenu en flux normal, puis de le décaler horizontalement et/ou verticalement. Le contenu suivant n'est pas affecté par ce déplacement, qui peut donc entraîner des chevauchements.

### Position fixed

L'élément est retiré du flux normal et aucun espace n'est laissé pour l'élément. L'élément est positionné relativement au bloc englobant initial formé par la zone d'affichage (viewport), sauf si un des ancêtres a une propriété transform, perspective ou filter qui est différente de none.

### Position sticky

L'élément se comporte comme un élément positionné de façon relative jusqu'à ce que son bloc englobant dépasse un seuil donné (par exemple fourni par la valeur de top) au sein du conteneur puis il se comporte ensuite comme un élément fixe jusqu'à atteindre le bord opposé du bloc englobant.

### Position absolute

L'élément est retiré du flux normal et aucun espace n'est créé pour l'élément sur la page.
La position absolute permet de placer l'élément par rapport aux limites d'un élément ascendant lui-même positionné (en général en position relative).
