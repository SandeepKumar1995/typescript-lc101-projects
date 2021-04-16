// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html

// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.

export class Cargo {
   massKg : number;
   material  : string;

   constructor(massKg: number, material   : string) {
      this.massKg = massKg;
      this.material  = material ;
   }

   interface Payload {
        massKg: number;
   }