var annuaire = {
    patricia: '06 66 66 66 66',
    david: '07 77 77 77 77',
  };

let menu = {
    r : () => {
        var nomAnnuaire = prompt('Qui voulez vous rechercher ?');
        alert(`Voici le numéro de celui que vous recherchez : ${annuaire[nomAnnuaire]}`)
    },

    l : () => {
        for (var cle in annuaire){
            alert(`nom : ${cle}, numero : ${annuaire[cle]}`);
        }
    },

    a : () => {
        var nomAnnuaire = prompt('Saississez un nouveau nom dans l\'annuaire');
        var numAnnuaire = prompt('Saississez son numéro');
        annuaire[nomAnnuaire] = numAnnuaire;
    },

    s : () => {
        var nomAnnuaire = prompt('Saississez le nom à supprimer');
        delete annuaire[nomAnnuaire];
    },

    q : () => {
        alert('Bye bye');
    }
};

for(let demande = ''; demande != 'q';){
    demande = prompt('Demande : (r)echercher, (l)iste, (a)jouter, (s)upprimer, (q)uitter');
    if (demande == null // si la demande est null on relance le prompt
        || demande.length === 0 // si la demande vaut 0 alors on relance
        || demande.length > 1 // si la demande est plus grand que 1, on relance
        || ! isLetter(demande) // si c'est une lettre majuscule, on la force en minuscule (?)
        || Object.keys(menu).indexOf(demande) < 0) // J'ai oublié lol
        {
            console.log('Il y a une erreur');
        }else{
            menu[demande](); // on lance l'objet menu avec sa clé
        }
}

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }

  // il y a une erreur, quand j'essaye d'afficher le numéro de celui que j'ai ajouté, alors ça m'affiche finalement undifined