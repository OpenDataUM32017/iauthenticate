# iauthenticate
un projet pour faire du passport js

Pour la partie Facebook :
Connectez-vous sur votre compte développeur facebook
https://developers.facebook.com/

Mes app > ajouter une app
Renseigner le nom de l'app, le mail de contact.
Dans Paramètres > général cliquer sur ajouter une plateforme, choisir Web et vous aurez un champ texte : URL du site
Renseigner avec : http://localhost:8080/auth/facebook/callback

!!! A essayer si pour certain les étapes suivante ne marche pas pour "Domaines de l’app" ajouter : localhost

Enregistrer les modifications.

Dans l'onglet à gauche

Choisisr "Ajouter un produit" -> "Facebook Login"
Ajouter l'adresse du callback : http://localhost:8080/auth/facebook/callback
Enregistrer les modifications
Vérifier si le callback a bien été ajouté.
Retourner dans "Ajouter un produit" et tout en bas de la page dans "Mes Produits" 
Dans "Paramètres", vérifier si pour el champ "URI de redirection OAuth valides" contient bien l'adresse du callback
Sinon ajouter la puis enregistrer

Demandes de Marion à Ponnaka : tout est ok pour moi de ce qui est explicté juste au-dessus mais cela ne marche toujours pas et cela fait crasher le serveur quand je clique sur facebook...

Peut-on préciser les points suivants concernant les paramètres de mon produit :

Connexion OAuth cliente : OUI

Connexion OAuth web : OUI

Connexion OAuth de navigateur intégrée : NON

Forcer la ré-authentification OAuth web : NON

Utiliser le mode strict pour les URL de redirection : OUI

URI de redirection OAuth valides : http://localhost:8080/auth/facebook/callback

Connexion à partir des appareils : NON

URL d’alerte pour les annulations d’autorisation : <rien>
