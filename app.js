
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

this.getInfo = function(){
    return "Ma personne s'apelle "+this.nom+" "+this.prenom+" "
        +"elle a "+this.age+" "+"ans"+" "+"elle de de sexe "+this.sexe+" "
        +"son travail est "+this.job+" "+"a "+this.jobPlace+""+"son passe temps "+this.hobbies;
    }
this.setJobHobbies = function(newJob, newHobbies){
     this.job = newJob;
     this.hobbies = newHobbies;
    }
};
    //4. La **première méthode** doit retourner un texte contenant toutes les propriétés
    //    que vous avez définies