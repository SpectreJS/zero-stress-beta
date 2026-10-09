# Backend PHP — Zero Stress Travel

## Structure

- `api/contact.php` : point d’entrée principal pour les demandes de contact.
- `config/config.php` : configuration de l’application et des variables d’environnement.
- `includes/Database.php` : connexion MySQL native en PHP.
- `includes/Response.php` : helper JSON standardisé.
- `schema/travel_inquiries.sql` : schéma MySQL à exécuter dans la base.

## Déploiement local

1. Créez une base MySQL nommée `zerostress`.
2. Importez le fichier SQL :
   ```bash
   mysql -u root -p zerostress < backend/schema/travel_inquiries.sql
   ```
3. Copiez `backend/.env.example` vers `backend/.env` et adaptez les valeurs.
4. Lancez le serveur PHP :
   ```bash
   cd /home/design/Musique/COURS-AXIAN/zerostress
   php -S 127.0.0.1:8000 -t backend
   ```
5. Le frontend React peut ensuite envoyer les demandes vers `/api/contact.php`.

## Production Hostinger

- Déposez le dossier `backend/` sur votre hébergement mutual ou réutilisez son emplacement public.
- Vérifiez que votre hébergement autorise PHP MySQL et `mail()`.
- Configurez les variables de connexion dans le fichier `.env` ou directement dans le fichier de config si nécessaire.
- Le routeur frontend doit utiliser l’URL publique du script API, par exemple :
  `https://www.votredomaine.com/api/contact.php`

## Sécurité

- Validation stricte des champs côté serveur.
- Nettoyage des entrées avec `strip_tags` et `trim`.
- Protection CORS pour le call depuis le frontend.
- Rejet des méthodes non autorisées.
