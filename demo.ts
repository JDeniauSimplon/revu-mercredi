

// // Exercice # 1 

// Prendre la valeur du ticket client 
// Verifier si la valeur est comprise entre 1 et 5
// Si oui alors lui dire qu'il a gagné , sinon lui dire qu'il a perdu et l'inviter à recommencer

// // Exercice # 2 

// Prendre les valeurs des produits HT
// additionner chaque valeurs
// multiplier le résultat de l'addition par 1,2
// donner le résultat final

// // Exercice # 3

// const organism : string ="Simplon"
// const learners : number = 15
// const promotionStarted : boolean = true
// const learnerNames : any[] = ["Vincent", "Toufik", "Tom", "Samuel", "Orhan"]
// const pedagogicalReferent : Record<string, string> = { name : "Tiphaine", work: "Simplon" }
// const absentLearner: undefined = undefined

// // Exercice #4

// const country: string = "France";
// function Exercice4 (){
//     console.log(country);
// }

// Exercice4();

// // Exercice #5

// const firstName: string = "Jérôme";
// const lastName: string = "DENIAU";

// function Exercice5{
//     console.log(firstName + " " + lastName);
// }

// Exercice5();

// Exercice #6

// const adress: string = "150"
// const zipCode: number = 4000

// const adressFull: String = adress + " " + zipCode;

// function Exercice6{
//     console.log(adressFull)
// }

// Exercice6();

// function Pays() {
//     const listpays = ['France', 'SriLanka', 'Allemagne', 'Portugal', 'Suède'];
  
//     for (let i = 0; i < listpays.length; i++) {
//       console.log(listpays[i]);
//     }
//   }

//   Pays() ;
  
// function decomposerString(i) {
//     const tableauCaracteres = i.split('');
//     return tableauCaracteres;
//   }

//   const resultat = decomposerString('developpement');
// console.log(resultat);

// function recomposerString(tableau) {
//     let chaine = '';
//     for (let i = 0; i < tableau.length; i++) {
//       chaine += tableau[i];
//     }
//     return chaine;
//   }
//   const resultat = recomposerString(['d', 'e', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'm', 'e', 'n', 't']);
// console.log(resultat);

// const data = ['Théo', 'Martin', 'Lucas', 'Antoine', 'Etienne']


//     for (let i = 0; i < data.length; i++) {
//         if (data[i].length <= 5) {
//             console.log(data[i]);
//         }
//     }

// const countries = ['France', 'Allemagne', 'Italie', 'Suisse', 'Belgique'];
// let sentence = '';

// for (let i = 0; i < countries.length; i++) {
//   sentence += countries[i];
//   if (i < countries.length - 1) {
//     sentence += ', ';
//   }
// }

// console.log(sentence);

const numbers: number[] = [123, 999, 340, 12390];
const results: number[] = [];

for (let i = 0; i < numbers.length; i++) {
  results.push(numbers[i] * 180);
}

console.log(results);





