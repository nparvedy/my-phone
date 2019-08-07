var annuaire = {
    patricia: '06 66 66 66 66',
    david: '07 77 77 77 77',
  };


var nomAnnuaire = prompt('Saissez un nom');

console.log(annuaire[nomAnnuaire]);

let menu = {
    r : () => {
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
    }

    s : () => {
        
    }
}