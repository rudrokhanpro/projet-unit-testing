Fonctionnalité: Profile
    En tant qu'utilisateur
    Je peux consulter mes informations personnelles et mes posts
    
    Règle: Un utilisateur est connecté

        Contexte: Un utilisateur est sur la page Profile
            Etant donné que je suis connecté
            Et que je suis sur la page Profile

        Scénario: Un utilisateur voit ses informations personnelles et ses posts
            Alors je vois mes informations personnelles
            Et je vois mes posts

        Scénario: Un utilisateur peut éditer son profile
            Lorsque je clique sur le bouton Edit
            Alors je suis redirigé vers la page Settings

        Scénario: Un utilisateur peut consulter un de ses posts
            Lorsque je clique sur un post
            Alors je suis redirigé vers la page du post

    Règle: Un utilisateur n'est pas connecté

        Scénario: Un utilisateur non connecté ne peut pas accéder à la page Profile
            Etant donné que je suis sur la page Feed sans être connecté
            Alors je ne vois pas l'onglet Profile