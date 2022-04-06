Fonctionnalité: Logout
    En tant qu'utilisateur
    Je peux me déconnecter de la plateforme

    Règle: Un utilisateur est connecté

        Scénario: Un utilisateur se déconnecte
            Étant donné que je suis connecté
            Lorsque je clique sur le bouton Logout
            Alors je suis redirigé vers la page Login

    Règle: Un utilisateur n'est pas connecté

        Scénario: Un utilisateur non connecté ne peut pas se déconnecter
            Étant donné que je suis sur la page Feed sans être connecté
            Alors je ne vois pas le bouton Logout