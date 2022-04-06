Fonctionnalité: Post
    En tant qu'utilisateur
    Je peux publier, modifier ou supprimer un post

    Règle: Un utilisateur est connecté

        Contexte: Un utilisateur est sur la page New
            Etant donné que je suis connecté
            Et que je suis sur la page New
            
        Scénario: Un utilisateur publie un post sans image avec succès
            Lorsque je remplis le champ textuel en respectant les normes
            Et que je clique sur le bouton Share
            Alors le post est créé

        Scénario: Un utilisateur publie un post sans image avec succès
            Lorsque je remplis le champ textuel en respectant les normes
            Et que je clique sur le bouton Share
            Alors le post est créé

        Scénario: Un utilisateur ne peut pas publier un post sans image lorsque le champ textuel est vide
            Lorsque je ne remplis pas le champ textuel
            Et que je clique sur le bouton Share
            Alors le post n'est pas créé

        Scénario: Un utilisateur publie un post avec une image
            Lorsque je remplis le champ textuel en respectant les normes
            Et que j'ajoute une image
            Et que je clique sur le bouton Share
            Alors le post est créé
        
        Scénario: Un utilisateur ne peut pas publier un post avec une image lorsque le champ textuel est vide
            Lorsque je ne remplis pas le champ textuel
            Et que j'ajoute une image
            Et que je clique sur le bouton Share
            Alors le post n'est pas créé

        Scénario: Un utilisateur a modifié le message de son post
            Lorsque je clique sur un de mes post
            Et je clique sur le bouton Modify du post
            Et je remplis le champ textuel en respectant les normes
            Et que je clique sur le bouton Update
            Alors le texte de mon post est modifié

        Scénario: Un utilisateur n'a pas réussi à modifier le message de son post
            Lorsque je clique sur un de mes post
            Et je clique sur le bouton Modify du post
            Et je ne remplis pas le champ textuel
            Et que je clique sur le bouton Update
            Alors le texte de mon post n'est pas modifié

        Scénario: Un utilisateur a modifié l'image de son post
            Lorsque je clique sur un de mes post
            Et je clique sur le bouton Modify du post
            Et que je choisis une nouvelle image
            Et que je clique sur le bouton Update
            Alors l'image de mon post est modifié

        Scénario: Un utilisateur a supprimé un de ses posts
            Lorsque je clique sur un de mes post
            Lorsque je clique sur le bouton Remove du post
            Alors mon post est supprimé

        Scénario: Un utilisateur ne peut pas modifier un post dont il n'est l'auteur
            Lorsque je clique sur un post d'un autre utilisateur
            Alors je ne vois pas le bouton Modify du post

        Scénario: Un utilisateur ne peut pas supprimer un post dont il n'est l'auteur
            Lorsque je clique sur un post d'un autre utilisateur
            Alors je ne vois pas le bouton Remove du post

    Règle: Un utilisateur n'est pas connecté

        Contexte: Un utilisateur non connecté est sur la page Feed 
            Etant donné que je suis sur la page Feed sans être connecté

        Scénario: Un utilisateur non connecté ne peut pas créer de post depuis l'onglet New
            Alors je ne vois pas l'onglet New

        Scénario: Un utilisateur non connecté ne peut pas créer de post depuis l'onglet New
            Lorsque je clique sur le bouton New Post
            Alors je suis redirigé vers la page Login

        Scénario: Un utilisateur non connecté ne peut pas modifier de post
            Lorsque je clique sur un post
            Alors je ne vois pas le bouton Modify du post

        Scénario: Un utilisateur non connecté ne peut pas supprimer de post
            Lorsque je clique sur un post
            Alors je ne vois pas le bouton Remove du post