Fonctionnalité: Register
	En tant qu’utilisateur
	Je peut m’inscrire sur la plateforme

    Règle: Un utilisateur n'est pas connecté

        Contexte: Un utilisateur est sur la page Register
            Etant donné que je suis sur la page Register sans être connecté

        Scénario: Un utilisateur s'est inscrit
            Étant donné que j’ai remplis tous les champs du formulaire en respectant les normes
            Lorsque je clique sur le bouton Register
            Alors je suis redirigé vers la page Feed

        Scénario: Un utilisateur ne s'est pas inscrit car le nom d’utilisateur est déjà existant
            Étant donné que je saisis un nom d'utilisateur déjà existant
            Et que je remplis correctement les champs du formulaire autre que nom d'utilisateur
            Lorsque je clique sur le bouton Register
            Alors je ne suis pas inscrit

        Scénario: Un utilisateur ne s'est pas inscrit car l'email est déjà utilisé
            Étant donné que je saisis un email déjà existant
            Et que je remplis correctement les champs du formulaire autre que email
            Lorsque je clique sur le bouton Register
            Alors je ne suis pas inscrit

        Scénario: Un utilisateur ne s'est pas inscrit car tous les champs ne sont pas remplis
            Étant donné que je n’ai pas remplis tous les champs du formulaire
            Alors je ne peux pas cliquer sur le bouton Register

        Scénario: Un utilisateur ne s'est pas inscrit car des champs ne sont pas valides
            Étant donné que j’ai des champs invalides dans le formulaire
            Lorsque je clique sur le bouton Register
            Alors je ne suis pas inscrit
    
    Règle: Un utilisateur est connecté

        Scénario: Un utilisateur ne peut pas s'incrire
            Etant donné que je suis connecté
            Alors je ne vois pas le bouton Register
    