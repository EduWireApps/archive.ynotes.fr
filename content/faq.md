## Commencer

### Où télécharger yNotes ?

YNotes est actuellement disponible sur le [Play Store](https://play.google.com/store/apps/details?id=fr.ynotes) ainsi que sur l'[App Store](https://apps.apple.com/fr/app/ynotes/id1563624059). Vous pouvez également télécharger les fichiers sur [la page dédiée](/telechargements) ou sur [Github](https://github.com/EduWireApps/ynotes/releases).

### Comment accéder à mon compte ?

Au moment de la connexion, il vous sera demandé de choisir votre service scolaire ainsi qu'une méthode de connexion (si plusieurs sont disponibles). Vous devrez ensuite rentrer vos identifiants correspondants ainsi que d'autres informations selon le service utilisé. Ces informations vous ont été communiquées par votre établissement. Elles seront stockées en toute sûreté sur votre appareil.

### Mon service scolaire n'apparait pas dans la liste

Actuellement, seuls **Ecole Directe** et **Pronote** sont supportés. Tu sais coder ? Prend contact avec nous sur Github ou Discord pour en apprendre plus sur l'implémentation des services et peut-être même participer à l'implémentation du tien.

## Fonctionnement

### Comment l'application fonctionne-t-elle ?

yNotes utilise les APIs des services scolaires auxquels elle permet d'accéder. Ces dernières ne sont pas forcément publiques et il a été nécessaire de recourir à des pratiques de rétro-ingénierie pour y accéder : yNotes n'est pas une application officielle et n'est pas supportée par les éditeurs officiels des services scolaires accessibles. Cependant nous vous garantissons que vos identifants ne sont pas collectés, restent sur votre appareil et ne sont envoyés nulle part d'autre que vers les services scolaires en question. Nous ne nous portons pas responsable de tout dommage pouvant être occasionné par une mauvaise utilisation de l'application ou par décision des services scolaires : bannissement temporaire d'adresse IP (de quelques minutes), retrait de fonctionnalités de l'application, retrait définitif d'un service scolaire par décision des éditeurs.

### Pourquoi utiliser yNotes ?

yNotes est un client open source : le code est accessible au grand public et donc modifiable. La sécurité des échanges avec vos services scolaires n'est pas inférieure à celle proposée d'office par leurs éditeurs, vos identifiants sont chiffrés et stockés en sécurité sur votre appareil. Des fonctionnalités additionnelles vous permettent d'aller plus vite dans votre travail.

### Toutes les fonctionnalités sont-elles disponibles ?

Nous sommes en plein travail pour rendre la majorité des fonctionnalités essentielles proposées par les services scolaires. Ainsi certaines fonctionnalités ne sont pas encore accessibles à ce jour pour des raisons techniques ou parce qu'il n'est pas prévu qu'elles soient intégrées dans l'application.

## Questions fréquentes

### Où mes identifiants sont-ils stockés ?

Vos identifiants sont **uniquement envoyés vers les services scolaires officiels**. Ils sont ensuite stockés et chiffrés directement dans la mémoire de votre appareil. Nous ne vous demanderons jamais vos identifiants de connexion (hormis CAS ou URL pour enquêter directement sur un éventuel problème). Ne communiquez **JAMAIS** vos identifiants scolaires, ils ne sont demandés qu'une seule fois par l'application.

### L'application yNotes est-elle gratuite ?

L'application yNotes est intégralement gratuite et fonctionne grâce au bénévolat. Nous ne revendrons jamais vos identifiants / mails et vous ne verrez jamais la moindre publicité. yNotes n'est pas à but lucratif. Cependant vous pouvez toujours nous aider financièrement sur [Tipeee](https://fr.tipeee.com/jsonlines/)! Par ailleurs, tout report de bug (via l'application ou par email) nous aide énormément !

### L'application yNotes est-elle légale ?

Comme expliqué plus tôt, yNotes se contente de passer par les infrastructures créées par votre service scolaire et d'en afficher les données dans une interface proposant d'autres fonctionnalités. Il n'y a là aucune tentative de vol de propriété intellectuelle, ou de concurrence des services scolaires. Cependant, l'utilisation de l'application peut ne pas respecter les clauses de votre service scolaire pour rétro-ingéniérie par exemple. **L'utilisation de yNotes se fait dans un cadre personnel, et son utilisation reste soumise aux mêmes règles que celles décidées par votre service scolaire. Vous êtes responsables de son utilisation et d'une éventuelle sanction en cas d'abus.**

Nous nous plierons évidemment à toute demande de retrait ou de modification par demande des services scolaires officiels, ainsi les fonctionnalités présentes dans l'application peuvent varier à tout moment.

### J'ai trouvé un bug, que puis-je faire ?

Nous nous excusons d'avance pour la gêne occasionnée. Pour nous aider à éliminer tous les bugs et rendre votre application plus agréable vous pouvez nous contacter directement dans l'application (Préférences / Signaler un bug) ou [nous contacter par mail](mailto:contact@ynotes.fr).

### Comment les notifications de nouvelle note fonctionnent-elles ?

Les notifications de nouvelles notes et de nouveaux mails fonctionnent sur un concept très simple : l'application sauvegarde le nombre actuel de notes et de mails et toutes les 15 minutes en arrière plan, elle vérifie si aucun n'a été ajouté. Il est impossible de réduire le temps d'actualisation des notifications. Sur iOS il se peut que ces actualisations soient moins courantes si vous n'utilisez que très peu l'application, cela est du aux exigences du système d'exploitation que nous ne pouvons contourner.

## Vous n'avez pas trouvé ce que vous cherchiez ? Consultez le [centre d'aide](https://support.ynotes.fr) ou [contactez-nous](mailto:contact@ynotes.fr).