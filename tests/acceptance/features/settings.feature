Fonctionnalité: Settings
    En tant qu'utilisateur
    Je peux modifier mes informations personnelles

    Règle: Un utilisateur est connecté et veut modifier son profile

        Contexte: Un utilisateur est sur la page Profile
            Etant donné que je suis connecté
        
        Scénario: Un utilisateur a modifié sa biographie
            Lorsque je saisie ma biographie en respectant les normes
            Et je clique sur le bouton Update profile
            Alors ma biographie est bien modifiée        
        
        Scénario: Un utilisateur n'a pas réussi à modifier sa biographie
            Lorsque je saisie ma biographie sans respecter les normes
            Et je clique sur le bouton Update profile
            Alors ma biographie ne s'est pas modifiée

    Règle: Un utilisateur est connecté et veut modifier son mot de passe
        
        Contexte: Un utilisateur est sur la page Settings
            Etant donné que je suis connecté
            Et que je suis sur la page Settings

        Scénario: Un utilisateur a modifié son mot de passe
            Lorsque je saisie un nouveau mot de passe en respectant les normes
            Et je saisie le même mot de passe dans le champ de confirmation de mot de passe
            Et je clique sur le bouton Update password
            Alors mon mot de passe est bien modifié
        
        Scénario: Un utilisateur n'a pas réussi à modifier son mot de passe car celui-ci n'est pas valide
            Lorsque je saisie un nouveau mot de passe sans repecter les normes
            Et je saisie le même mot de passe dans le champ de confirmation de mot de passe
            Et je clique sur le bouton Update password
            Alors mon mot de passe ne s'est pas modifié
        
        Scénario: Un utilisateur n'a pas réussi à modifier son mot de passe car la confirmation de celui-ci n'est pas bonne
            Lorsque je saisie un nouveau mot de passe en respectant les normes
            Et je ne saisie pas le même mot de passe dans le champ de confirmation de mot de passe
            Et je clique sur le bouton Update password
            Alors mon mot de passe ne s'est pas modifié
        
        Scénario: Un utilisateur n'a pas réussi à modifier son mot de passe car il est identique que l'ancien
            Lorsque je saisie mon ancien mot de passe
            Et je saisie le même mot de passe dans le champ de confirmation de mot de passe
            Et je clique sur le bouton Update password
            Alors mon mot de passe ne s'est pas modifié

    Règle: Un utilisateur n'est pas connecté
        
        Scénario: Un utilisateur non connecté ne peut pas accéder à la page Settings
            Etant donné que je suis sur la page Feed sans être connecté
            Alors je ne vois pas l'onglet Settings