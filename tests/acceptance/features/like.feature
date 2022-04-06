Fonctionnalité: Like
	En tant qu’utilisateur
	Je peut aimer un post

    Règle: Un utilisateur est connecté

        Contexte: Un utilisateur est sur la page Feed
            Étant donné que je suis connecté
            Et que je suis sur la page Feed

        Scénario: Un utilisateur clique sur le bouton Like que je n'ai encore pas Liker
            Lorsque je clique sur un post d'un autre utilisateur
            Et que je n'ai encore pas Liker
            Et que je clique sur le bouton Like
            Alors la valeur de Like augmente

        Scénario: Un utilisateur clique sur le bouton Like que je ai déjà Liker
            Lorsque je clique sur un post d'un autre utilisateur
            Et que je ai déjà Liker
            Et que je clique sur le bouton Like
            Alors la valeur de Like n'augmente pas
    
    Règle: Un utilisateur n'est pas connecté

        Scénario: Un utilisateur non connecté clique sur le bouton Like que je ai déjà Liker
            Etant donné que je suis sur la page Feed sans être connecté
            Lorsque je clique sur un post d'un autre utilisateur
            Et que je clique sur le bouton Like
            Alors la valeur de Like n'augmente pas