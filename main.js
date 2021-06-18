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


const pAequorFactory = (number, array) => {
  return {
    //Properties
    specimenNum: number,
    dna: array,

    //Methods
    mutate() {
      let index = Math.floor(Math.random()*15);
      let baseOptions = ['A','T','C','G'];
      if(this.dna){
          let baseIndx = baseOptions.indexOf(this.dna[index]);
          this.dna[index] = baseOptions[baseIndx-1];
      }
      return this.dna
    }, 

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
  }
}


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


