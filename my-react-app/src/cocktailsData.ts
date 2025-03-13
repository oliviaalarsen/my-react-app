import aperolSpritz from "./assets/aperolSpritz.png";
import espresso from "./assets/espresso.png";
import margarita from "./assets/margarita.png";
import moscowMule from "./assets/moscowMule.png";
import oldFashioned from "./assets/oldFashioned.png";

// imports and exports to be used across different files

export interface Cocktail {
    id: number
    name: string
    glass: string
    image: string
    ingredients: string
    method: string
    notes: string
  }

//   cocktails array to display info on recipe cards

export const cocktails = [
  { 
    id: 1, 
    name: "Aperol Spritz", 
    glass: "Wine Glass", 
    image: aperolSpritz, 
    ingredients: "Aperol, prosecco, soda", 
    method: "Build in glass over ice and stir gently.", 
    notes: "Best enjoyed outdoors on a sunny day!" 
  },
  { 
    id: 2, 
    name: "Espresso Martini", 
    glass: "Martini Glass", 
    image: espresso,
    ingredients: "Vodka, coffee liqueur, espresso, sugar syrup", 
    method: "Shake with ice and fine strain into a martini glass.", 
    notes: "Shake hard to create a creamy foam on top!" 
  },
  { 
    id: 3, 
    name: "Margarita", 
    glass: "Cocktail Glass", 
    image: margarita, 
    ingredients: "Tequila, lime, triple sec, salt", 
    method: "Shake with ice, strain into a salted rim glass.", 
    notes: "Best with fresh lime juice!" 
  },
  { 
    id: 4, 
    name: "Moscow Mule", 
    glass: "Copper Mug", 
    image: moscowMule, 
    ingredients: "Vodka, bitters, ginger beer, lime juice", 
    method: "Build in a copper mug over ice and stir.", 
    notes: "Use crushed ice for a better texture!" 
  },
  { 
    id: 5, 
    name: "Old Fashioned", 
    glass: "Rocks Glass", 
    image: oldFashioned, 
    ingredients: "Bourbon, bitters, sugar, orange peel", 
    method: "Stir for at least 30 seconds and strain over ice.", 
    notes: "Stirring is key—don’t shake!" 
  }
];
