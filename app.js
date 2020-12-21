
    //1. Créez un objet **Personne** à l'aide d'une fonction constructeur.
    //2. Ajoutez des propriétés, par exemple : nom, prenom, âge, sexe...
let personne = function(nom, prenom, age, sexe, job, jobPlace, hobbies) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sexe = sexe;
    this.job = job;
    this.jobPlace = jobPlace;
    this.hobbies = hobbies;

    //3. Créez au moins deux méthodes, elles porteront le nom de votre choix.
    //4. La **première méthode** doit retourner un texte contenant toutes les propriétés
this.getInfo = function(){
    return "Ma personne s'apelle "+this.nom+" "+this.prenom+" "
        +"elle a "+this.age+" "+"ans"+" "+"elle de de sexe "+this.sexe+" "
        +"son travail est "+this.job+" "+"a "+this.jobPlace+" "+"son passe temps "+this.hobbies;
    }
    //5. La **deuxième méthode** doit modifier deux propriétés de l'objet Personne.
this.setJobHobbies = function(newJob, newHobbies){
     this.job = newJob;
     this.hobbies = newHobbies;
    }
};
    //1. A l'aide de votre fonction constructeur, créez deux **Personne**
let perso1 = new personne("Dark", "vador","50", "masculin", "seigneur sith", "l'etoile noire", "tuer des jedi");
let perso2 = new personne("chuck", "Norris", "45", "masculin", "acteur", "holywood", "les arts martiaux");

    //2. Dans le div #perso1, placez chaque valeur de propriété dans les div prévus à cet effet.
    document.getElementById("propriete1").innerHTML = perso1.nom;
    document.getElementById("propriete2").innerHTML = perso1.prenom;
    document.getElementById("propriete3").innerHTML = perso1.age;
    document.getElementById("propriete4").innerHTML = perso1.sexe;
    document.getElementById("propriete5").innerHTML = perso1.job;
    document.getElementById("propriete6").innerHTML = perso1.jobPlace;
    document.getElementById("propriete7").innerHTML = perso1.hobbies;
    //3. Pareil pour le perso 2
    document.getElementById("propriete8").innerHTML = perso2.nom;
    document.getElementById("propriete9").innerHTML = perso2.prenom;
    document.getElementById("propriete10").innerHTML = perso2.age;
    document.getElementById("propriete11").innerHTML = perso2.sexe;
    document.getElementById("propriete12").innerHTML = perso2.job;
    document.getElementById("propriete13").innerHTML = perso2.jobPlace;
    document.getElementById("propriete14").innerHTML = perso2.hobbies;
    //4. Dans les deux derniers divs:
    //- Le premier doit contenir le résultat de la première méthode ( pour les deux objets instanciés )
    document.getElementById("method1").innerHTML = perso1.getInfo()+"<br>";
    //- Invoquez la fonction permettant de mettre à jour vos deux propriétés.
    `${perso1.setJobHobbies("chevalier jedi", "faire des collier de fleurs")}<br>`;
    //- Invoquez à nouveau la première méthode dans le dernier div.
    document.getElementById("method2").innerHTML = perso1.getInfo();



