# WhatsApp Business Platform — configuration du chat

## 1. Prérequis Meta

Avant de pouvoir envoyer des messages depuis le site :

- créer un compte Meta Business Suite
- créer une app WhatsApp Business Platform
- vérifier le numéro utilisé pour le commerce
- activer le webhook HTTPS
- configurer les permissions `whatsapp_business_messaging`

Important : si vous utilisez un numéro personnel WhatsApp, vérifiez la compatibilité de la fonctionnalité Coexistence. Sans cette activation officielle, le compte personnel et le compte Business ne peuvent pas coexister sur le même numéro.

## 2. Variables backend à ajouter dans backend/.env

Copiez le fichier d’exemple et remplacez les valeurs :

```env
WHATSAPP_API_TOKEN=replace_with_long_lived_token
WHATSAPP_PHONE_NUMBER_ID=replace_with_phone_number_id
WHATSAPP_WEBHOOK_VERIFY_TOKEN=replace_with_secure_token
WHATSAPP_APP_SECRET=replace_with_app_secret
WHATSAPP_API_BASE=https://graph.facebook.com/v20.0
WHATSAPP_BUSINESS_NUMBER=+33123456789
```

> Le frontend ne reçoit jamais ces secrets. Ils restent uniquement côté PHP / Hostinger.

## 3. Webhook Meta

Dans le dashboard Meta :

- URL : `https://votre-domaine.com/api/chat/whatsapp-webhook.php`
- Vérification : `hub_verify_token` = votre valeur WHATSAPP_WEBHOOK_VERIFY_TOKEN
- événements activés : `messages`, `message_status`

## 4. Base de données

Exécutez le script SQL :

```bash
mysql -u votre_utilisateur -p votre_base < backend/schema/chat_tables.sql
```

## 5. Déploiement Hostinger

1. téléchargez le dossier `backend/` sur le hosting
2. vérifiez que le serveur accepte PHP 8+ et PDO MySQL
3. configurez `backend/.env` avec les valeurs de production
4. vérifiez le certificat HTTPS pour le webhook
5. testez le GET du webhook et un message d’essai via l’API Meta

## 6. Tests de validation

### Test 1 — message outbound

- ouvrir le widget
- saisir un numéro WhatsApp valide
- accepter la case de consentement
- envoyer un message de test
- vérifier que le message est bien enregistré dans `chat_messages` avec le statut `sent` ou `queued`

### Test 2 — webhook inbound

- envoyer un message depuis le numéro WhatsApp Business
- vérifier la réception sur le webhook
- vérifier l’insertion dans `chat_messages` avec `direction = 'incoming'`

## 7. Cas de non-fonctionnement réel

Si le numéro n’est pas encore validé ou si la plateforme Meta n’est pas activée, le backend est conçu pour enregistrer le message et le mettre en file d’attente (`queued`) sans faux positif. Cela évite de prétendre que la messagerie est active sans le compte Meta configuré.
