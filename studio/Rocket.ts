// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html

// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.

export class Cargo {
   totalCapacityKg  : number;
   name : string;
   cargoItems : objects [] = [];
   astronauts :objects [] = [];

   constructor(name : string, totalCapacityKg : number) {
      this.name  = name ;
      this.totalCapacityKg  = totalCapacityKg ;
   }

   interface Payload {
      sumMass( items: Payload[] ): number;
      currentMassKg(): number;
      canAdd(item: Payload): boolean;
      addCargo(cargo: Cargo): boolean;
      addAstronaut(astronaut: Astronaut): boolean;
   }