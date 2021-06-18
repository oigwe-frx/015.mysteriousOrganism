// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// A factory function that has two parameters: The first parameter is number (no two organisms should have the same number). The second parameter is an array of 15 DNA bases. Return an pAequor object that contains properties and methods
const pAequorFactory = (number, array) => {
  return {
    //Properties
    specimenNum: number,
    dna: array,



    //Methods

    //.mutate() a method responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base.
    mutate() {
      let index = Math.floor(Math.random()*15);
      let baseOptions = ['A','T','C','G'];
      if(this.dna){
          let baseIndx = baseOptions.indexOf(this.dna[index]);
          this.dna[index] = baseOptions[baseIndx-1];
      }
      return this.dna
    }, 



    //.compareDNA() a method that has one parameter, another pAequor object. The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common.
    compareDNA(pAequorObj){
      let spec1 = this.dna;
      let spec2 = pAequorObj.dna;

      let counter = 0;

      let index = 0;
      while(index < 15) {
        if(spec1[index] === spec2[index]){
          counter++;
        }
          index ++;
      }
      let percentage = ((counter/15)*100).toFixed(2);

      console.log(`specimen #1 and specimen #2 have ${percentage}% DNA in common`)
    },



//The method returns true if the object's .dna array contains at least 60% 'C' or 'G' bases. Otherwise returns false. 
willLikelySurvive(){
      let counter = 0;

      let index = 0;
      while(index < 15) {
        if(this.dna[index] === 'C' || this.dna[index] === 'G' ){
          counter++;
        }
          index ++;
      }
      let percentage = ((counter/15)*100).toFixed(2);

      if(percentage >= 60) {return true}
      else {return false};
},
  } //end of object
} //end of function



//This function is used to provide the research team with the requested number of simulated DNA sequences that can potentially survive in their natural environment. The function has one parameter, number. This number represents the requested number of sequencs. The function will return an array of pAequor objects.
const viableStrands = (number) => {
    let counter = 1;
    let dnaArray = [];
    while(counter <= number){
      let dna = mockUpStrand();
      let pAequor = pAequorFactory(counter,dna);
    if(pAequor.willLikelySurvive() === true){
      dnaArray.push(pAequor);
      counter++;
    }

    }
    return dnaArray;
}




console.log(viableStrands(30))


