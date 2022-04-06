Fonctionnalité: Login
    En tant qu'utilisateur
    Je peux me connecter à la plateforme

    Règle: Un utilisateur est connecté

        Scénario: Un utilisateur ne peut se connecter à nouveau
            Etant donné que je suis connecté
            Alors je ne vois pas le bouton Sign in

    Règle: Un utilisateur n'est pas connecté et utilise son nom d'utilisateur pour se connecter

        Contexte: Un utilisateur est sur la page Login
            Etant donné que je suis sur la page Login sans être connecté
        
        Scénario: Un utilisateur se connecte avec son nom d'utilisateur et son mot de passe
            Lorsque je saisis mon nom d'utilisateur
            Et mon mot de passe
            Et que je clique sur le bouton Sign in
            Alors je suis redirigé vers la page Feed

        Scénario: Un utilisateur se connecte pas avec un nom d’utilisateur inexistant
            Lorsque je saisis un nom d'utilisateur inexistant
            Et un mot de passe
            Et que je clique sur le bouton Sign in
            Alors je ne suis pas connecté

        Scénario: Un utilisateur se connecte pas avec son nom d'utilisateur et un mauvais mot de passe
            Lorsque je saisis mon nom d'utilisateur
            Et un mauvais mot de passe
            Lorsque je clique sur le bouton Sign in
            Alors je ne suis pas connecté
    
        Scénario: Un utilisateur se connecte avec son nom d’utilisateur et son nouveau mot de passe
            Etant donné que j'ai un nouveau mot de passe
            Lorsque je saisis mon nom d'utilisateur
            Et mon nouveau mot de passe
            Et je clique sur le bouton Sign in
            Alors je suis redirigé vers la page Feed
    
    Règle: Un utilisateur n'est pas connecté et utilise son email pour se connecter
        
        Contexte: Un utilisateur est sur la page Login
            Etant donné que je suis sur la page Login sans être connecté
        
        Scénario: Un utilisateur se connecte avec son nom d'email et son mot de passe
            Lorsque je saisis mon email
            Et mon mot de passe
            Lorsque je clique sur le bouton Sign in
            Alors je suis redirigé vers la page Feed

        Scénario: Un utilisateur se connecte pas avec un email inexistant
            Lorsque je saisis un email inexistant
            Et un mot de passe
            Et que je clique sur le bouton Sign in
            Alors je ne suis pas connecté

        Scénario: Un utilisateur se connecte pas avec son email et un mauvais mot de passe
            Lorsque je saisis mon email
            Et un mauvais mot de passe
            Et je clique sur le bouton Sign in
            Alors je ne suis pas connecté

        Scénario: Je me connecte avec un email et un nouveau mot de passe
            Etant donné que j'ai un nouveau mot de passe
            Lorsque je saisis mon email
            Et mon nouveau mot de passe
            Et je clique sur le bouton Sign in
            Alors je suis redirigé vers la page Feed