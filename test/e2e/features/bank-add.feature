@bank @bankCreate
Feature: ajout d'un pokemon à la ma banque
    En tant que utilisateur connecté
    Je veux ajouter un pokemon à ma banque
    Afin de le sauvegarder et ainsi garde la connaissance de cette possession

    Background:
        Given l'utilisateur "Test" avec l'email "test.test@test.fr" et le mdp "AZERTY01" est enregistré
        And je suis connecté avec l'email "test.test@test.fr" avec le mdp "AZERTY01"

    Scenario: autocompletion sur la sélection d'un pokemon
        Given le pokemon "Pikachu" existe
        And le pokemon "Pitchu" existe
        And je suis sur l'écran de ma banque
        When je renseigne "P" dans le champ "pokemon"
        Then l'autocompletion me propose "Pikachu"
        And l'autocompletion me propose "Pitchu"
    
    Scenario: réinitialisation du champ pokemon à la perte du focus
        Given je suis sur l'écran de ma banque
        And je renseigne "P" dans le champ "pokemon"
        When je renseigne "P" dans le champ "tags"
        And la valeur du champ "pokemon" est ""

    Scenario: autocompletion sur la sélection d'un tags
        Given le tag "Tag1" du type "nature" existe 
        And le tag "Tag2" du type "nature" existe 
        And je suis sur l'écran de ma banque
        When je renseigne "T" dans le champ "tags"
        Then l'autocompletion me propose "Tag1"
        And l'autocompletion me propose "Tag2"

    Scenario: réinitialisation du champ tags à la perte du focus
        Given je suis sur l'écran de ma banque
        When je renseigne "P" dans le champ "tags"
        And je renseigne "P" dans le champ "pokemon"
        And la valeur du champ "pokemon" est ""

    Scenario: création d'un pokemon avec un tag nature
        Given le pokemon "Poke1" existe
        And le tag "Tag1" du type "nature" existe 
        And je suis sur l'écran de ma banque
        When je selectionne la valeur d'autocompletion "Poke1" pour le champ "pokemon"
        And je selectionne la valeur d'autocompletion "Tag1" pour le champ "tags"
        And Je valide l'ajout du pokemon dans ma banque
        Then la liste des pokemons contient l'espèce "Poke1"