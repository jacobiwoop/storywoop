StoryHub — Cahier des Charges v1.0
StoryHub
Plateforme de centralisation de Storytimes & gestion communautaire
Cahier des Charges Fonctionnel — v1.0
Projet StoryHub
Version 1.0 — Bêta fermée
Auteur Woopchi Digital
Date Avril 2026

1. Contexte & Vision
   Les coachs et influenceurs reçoivent des dizaines de messages privés contenant des histoires
   personnelles (Storytimes) qu'ils souhaitent partager avec leur communauté. Aujourd'hui, ce
   processus est fragmenté : les messages arrivent sur différentes plateformes (Instagram DM,
   TikTok, YouTube, WhatsApp), sont traités manuellement, et les abonnés dont les stories sont
   sélectionnées doivent fouiller des centaines de commentaires pour retrouver la réponse qui leur
   est destinée.
   StoryHub est une plateforme SaaS qui centralise ce flux en deux interfaces complémentaires :
   • Un espace Coach/Créateur pour recevoir, trier, publier et répondre aux stories.
   • Un espace Abonné simplifié pour soumettre une story et retrouver facilement la réponse.
   Objectif de la bêta : valider l'intérêt du produit auprès de 10 à 20 coachs via un accès
   gratuit par code, avant de lancer le modèle payant.
2. Acteurs & Rôles
   Acteur Description Accès
   Coach / Créateur Influenceur, coach, YouTubeur qui collecte
   et expose des stories
   Dashboard complet —
   abonnement payant ou
   code bêta
   Abonné / Soumettant Personne qui envoie sa story via le lien
   public du coach
   Interface légère, sans
   compte obligatoire
   Administrateur Plateforme L'équipe StoryHub (Woopchi Digital) Back-office de gestion
   des comptes et codes
   Page 1 — Confidentiel
   StoryHub — Cahier des Charges v1.0
   Acteur Description Accès
   d'accès
3. Cas d'Utilisation Détaillés
   3.1 — Côté Coach
   UC-01 : Inscription & Accès
   • Le coach crée un compte avec email + mot de passe.
   • Au moment du paiement, il peut entrer un code bêta pour accéder gratuitement.
   • Une fois connecté, il configure son profil (nom, photo, description, plateformes liées).
   • Il obtient automatiquement son lien public de soumission de stories.
   ⚠ Zone d'ombre : que se passe-t-il si un code bêta est partagé massivement ? Prévoir
   une limite d'utilisation par code (ex. 1 ou 5 usages max) et une date d'expiration.
   UC-02 : Réception & Gestion des Stories
   • Le coach accède à une liste des stories reçues, triées par date de soumission.
   • Chaque story affiche : pseudonyme ou prénom (si fourni), catégorie, aperçu du texte, statut
   (non lue, en cours, publiée, rejetée).
   • Il peut filtrer par catégorie, statut, ou période.
   • Il peut marquer une story comme "favorite" pour la retrouver rapidement.
   ⚠ Zone d'ombre : les abonnés peuvent envoyer des stories très longues ou hors-sujet.
   Prévoir une limite de caractères à la soumission (ex. 2000 caractères) et un système de
   modération simple.
   UC-03 : Publication d'une Story
   • Le coach sélectionne une story et la publie dans son feed public.
   • Il peut ajouter une réponse textuelle, audio ou vidéo (selon les phases de développement).
   • La story publiée est visible sur la page publique du coach.
   • Un lien unique est généré et peut être envoyé à l'abonné concerné.
   • Le coach peut choisir de rendre la story anonyme (masquer le prénom/pseudo).
   UC-04 : Notification & Envoi du Lien à l'Abonné
   • Après publication, le coach a un bouton "Notifier l'abonné" qui génère un message prérédigé à copier/coller.
   • Ce message contient le lien direct vers la story publiée.
   • Dans une version avancée, si l'abonné a fourni son email, la notification est automatique.
   ⚠ Zone d'ombre : si l'abonné n'a pas fourni d'email, le coach doit retrouver son contact
   manuellement sur la plateforme d'origine (Instagram, etc.). Prévoir un champ optionnel
   "Moyen de contact" dans le formulaire de soumission.
   Page 2 — Confidentiel
   StoryHub — Cahier des Charges v1.0
   UC-05 : Statistiques & Insights
   • Dashboard avec : nombre de stories reçues cette semaine, taux de publication, catégories
   les plus populaires.
   • Visualisation des thèmes récurrents (nuage de mots ou graphique catégories).
   • Historique des publications avec filtres.
   3.2 — Côté Abonné
   UC-06 : Soumission d'une Story
   • L'abonné ouvre le lien public du coach (ex. storyhub.app/coach/nom-du-coach).
   • Il remplit un formulaire simple : prénom ou pseudo (optionnel), catégorie, texte de la story,
   email ou contact (optionnel).
   • Il soumet et reçoit un message de confirmation avec un lien de suivi personnel.
   • Ce lien lui permet de vérifier si sa story a été publiée, sans créer de compte.
   UC-07 : Consultation de la Réponse
   • L'abonné ouvre le lien de suivi ou le lien direct envoyé par le coach.
   • Il voit sa story (partiellement si anonymisée) et la réponse du coach.
   • Il peut partager ce lien sur ses réseaux.
   ⚠ Zone d'ombre : comment empêcher qu'une personne malveillante accède aux stories
   d'autres abonnés via le lien ? Le lien de suivi doit contenir un token unique et nondevinable (UUID v4). Ne jamais afficher les stories d'autres personnes sur la même page.
   3.3 — Administration Plateforme
   UC-08 : Gestion des Coachs & Codes Bêta
   • Créer, activer, désactiver des comptes coach.
   • Générer des codes bêta avec : limite d'usage, date d'expiration, coach cible ou accès
   général.
   • Voir les statistiques globales de la plateforme.
   • Gérer les signalements de contenu inapproprié.
4. Fonctionnalités Détaillées
   4.1 — Dashboard Coach
   Fonctionnalité Description Priorité
   Inbox Stories Liste paginée de toutes les stories reçues
   avec filtres et statuts
   P0 — Essentiel
   Catégorisation Tags prédéfinis : amour, famille, travail,
   argent, santé, autre
   P0 — Essentiel
   Publication Story Publier + écrire une réponse + choisir
   l'anonymat
   P0 — Essentiel
   Lien public coach URL unique pour recevoir les soumissions P0 — Essentiel
   Page 3 — Confidentiel
   StoryHub — Cahier des Charges v1.0
   Fonctionnalité Description Priorité
   d'abonnés
   Gestion codes bêta Entrer un code au moment de l'inscription
   pour accès gratuit
   P0 — Essentiel
   Notifier l'abonné Générer un message pré-rédigé avec le lien
   de la story publiée
   P1 — Important
   Statistiques Stories reçues, publiées, catégories,
   tendances
   P1 — Important
   Modération Rejeter, signaler, bloquer une source P1 — Important
   Favoris Marquer des stories pour traitement ultérieur P2 — Confort
   Réponse audio/vidéo Joindre un media à la réponse du coach P3 — V2
   Notifications auto email Envoyer automatiquement le lien à l'abonné
   si email fourni
   P3 — V2
   4.2 — Interface Abonné
   Fonctionnalité Description Priorité
   Formulaire de soumission Simple, rapide, accessible sur mobile P0 — Essentiel
   Confirmation de soumission Message + lien de suivi personnel (token
   UUID)
   P0 — Essentiel
   Page de suivi Vérifier si la story est publiée, voir la
   réponse
   P0 — Essentiel
   Anonymat Option pour soumettre sans prénom ni
   contact
   P1 — Important
   Partage social Bouton pour partager le lien de la story
   publiée
   P2 — Confort
   Notification email Recevoir un email quand la story est publiée
   (si email fourni)
   P3 — V2
5. Recommandations UX & Design
   5.1 — Principes Généraux
   • Mobile first : la majorité des abonnés soumettront depuis leur téléphone.
   • Zéro friction pour l'abonné : pas de compte obligatoire, formulaire en moins de 2 minutes.
   • Dashboard coach clair : inbox lisible au premier coup d'oeil, actions rapides accessibles.
   • Feedback immédiat : chaque action (soumission, publication) génère une confirmation
   visuelle claire.
   Page 4 — Confidentiel
   StoryHub — Cahier des Charges v1.0
   5.2 — Éléments UX Spécifiques
   Formulaire de soumission (abonné)
   • Barre de progression visible (étape 1/2, 2/2).
   • Compteur de caractères en temps réel (ex. 342/2000).
   • Catégories sous forme de chips cliquables, pas une liste déroulante.
   • Message de confirmation avec illustration engageante et lien de suivi bien mis en évidence.
   • Pas de CAPTCHA intrusif — utiliser honeypot ou scoring comportemental.
   Inbox Coach
   • Swipe actions sur mobile : gauche pour rejeter, droite pour favoris.
   • Preview de la story tronquée à 150 caractères, clic pour voir entier.
   • Badge de comptage non lues bien visible dans la navigation.
   • Mode lecture rapide : navigation clavier (flèches) entre les stories.
   Page Story Publiée
   • Design épuré centré sur le contenu — pas de distractions.
   • Réponse du coach clairement différenciée visuellement de la story (couleur de fond,
   avatar).
   • Bouton de partage natif (Web Share API sur mobile).
   • Message d'appel à l'action pour les autres abonnés ("Tu as une story ? Soumettre la
   mienne").
   5.3 — Onboarding Coach
   • Checklist d'onboarding visible au premier login (5 étapes : photo, description, catégories,
   lien partagé, première story reçue).
   • Tooltip contextuel sur les fonctionnalités clés au premier usage.
   • Email de bienvenue avec guide de démarrage en 3 étapes.
6. Zones d'Ombre & Risques
   Zone d'ombre Risque Solution proposée
   Codes bêta partagés
   massivement
   Perte de revenus potentiels Limite d'usage par code + expiration +
   suivi des usages dans l'admin
   Stories fausses ou
   toxiques
   Atteinte à la réputation du
   coach
   Modération manuelle avant publication

- signalement + limite caractères
  Accès aux stories d'autres
  abonnés
  Violation de la vie privée Lien de suivi avec UUID non-devinable,
  pas d'index public des stories
  Absence d'email abonné Notification impossible sans
  action manuelle du coach
  Champ email optionnel + message prérédigé à copier pour notifier
  manuellement
  RGPD & données Obligation légale européenne Mention légale sur le formulaire,
  Page 5 — Confidentiel
  StoryHub — Cahier des Charges v1.0
  Zone d'ombre Risque Solution proposée
  personnelles politique de confidentialité, suppression
  sur demande
  Spam de soumissions Inbox inondée de contenus
  inutiles
  Rate limiting par IP, CAPTCHA
  invisible, modération manuelle
  Inactivité du coach Les abonnés attendent une
  réponse indéfiniment
  Badge de délai moyen de réponse
  visible sur la page publique du coach
  Plusieurs coachs avec le
  même slug d'URL
  Conflit d'URL publique Vérification unicité du slug à la création
- suggestions automatiques

7. Stack Technique Recommandé
   7.1 — Frontend
   • React 18 + Vite + TypeScript + Tailwind CSS
   • React Router pour la navigation
   • Tanstack Query pour la gestion des états serveur
   • Interface abonné : page ultra-légère, pas de framework lourd
   7.2 — Backend
   • Node.js / Express ou FastAPI (Python)
   • PostgreSQL comme base de données principale
   • Prisma ORM (si Node.js) ou SQLAlchemy (si Python)
   • Redis pour le rate limiting et les sessions
   • JWT pour l'authentification coach
   7.3 — Infrastructure
   • Hébergement : Railway, Render ou Vercel (frontend) + Render/Fly.io (backend)
   • Stockage média : Cloudflare R2 (si réponses audio/vidéo en V2)
   • Emails transactionnels : Resend ou Brevo (gratuit jusqu'à 300 emails/jour)
8. Modèle de Monétisation
   Plan Prix Inclus
   Bêta (Code
   d'accès)
   Gratuit Toutes fonctionnalités P0 + P1 — limité dans le temps
   Starter 5–9 €/mois Jusqu'à 200 stories/mois, 1 lien public, stats de base
   Pro 19–29 €/mois Stories illimitées, notifications email, stats avancées,
   support prioritaire
   Studio 49+ €/mois Multi-comptes, API, white-label partiel, gestion d'équipe
   Page 6 — Confidentiel
   StoryHub — Cahier des Charges v1.0
   Stratégie de lancement : distribuer 20 à 50 codes bêta à des coachs locaux et microinfluenceurs. Observer les usages réels pendant 4 à 8 semaines avant d'ouvrir la vente.
9. Roadmap
   Phase Période Contenu
   V0 — MVP Bêta Semaines 1-6 Formulaire soumission, inbox coach, publication story,
   lien de suivi abonné, codes d'accès bêta
   V1 — Stabilisation Semaines 7-10 Stats, modération, notifications email, onboarding,
   mobile polish
   V2 — Enrichissement Semaines 11-16 Réponses audio/vidéo, notifications automatiques, API
   publique, analytics avancés
   V3 — Monétisation Mois 5+ Stripe/FedaPay, plans payants, white-label, multi-coach
10. Critères de Succès de la Bêta
    • Au moins 10 coachs actifs (= ont publié au moins une story) dans les 30 premiers jours.
    • Taux de soumission : au moins 5 stories soumises par coach actif sur la période.
    • Rétention : au moins 60% des coachs bêta se reconnectent la semaine suivante.
    • Feedback qualitatif : recueillir 5 témoignages détaillés via interview ou formulaire.
    • Au moins 3 coachs bêta déclarent vouloir payer pour continuer à utiliser la plateforme.
    — Fin du document — StoryHub © 2026 Woopchi Digital
    Page 7 — Confidentiel
