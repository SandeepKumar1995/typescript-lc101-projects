// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html

// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.

export class Astronaut {
   massKg : number;
   name : string;

   constructor(massKg: number, name  : string) {
      this.massKg = massKg;
      this.name = name;
   }

   interface Payload {
        massKg: number;
  }