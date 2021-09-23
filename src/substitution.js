// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(alphabet){} else{return false}
    
    if(alphabet.length!=26){return false} 
    
    
    
    let newInput=input.toLowerCase();
    const vanillaAlphabet='abcdefghijklmnopqrstuvwxyz'
    const vanillaArray=vanillaAlphabet.split('')    
   const alphaArray=alphabet.split('')
   
   for(let i=0; i<alphaArray.length;i++){
   let matches=alphaArray.filter((letter)=>letter===alphaArray[i])
   if(matches.length>1){return false}
                                 }
   
   let keyArray=[]
   for(let i=0;i<alphabet.length;i++){
    const keyObject={
      vanillaLetter:vanillaArray[i],
      codedLetter:alphaArray[i],
      index:i
    }
    keyArray.push(keyObject)
   }
   if(encode===true){
   let codeWord="";
   for(let i=0; i<input.length;i++){
     if(newInput[i].toUpperCase()!=newInput[i].toLowerCase()){
     let indexMatchObject=keyArray.find((letter)=>letter.vanillaLetter===newInput[i])
     codeWord+=indexMatchObject.codedLetter
     }
     else{codeWord+=newInput[i]}
   }
   console.log(codeWord)
   return codeWord
  }

if(encode===false){
   let codeWord="";
   for(let i=0; i<input.length;i++){
     if(newInput[i].toUpperCase()!=newInput[i].toLowerCase() || alphabet.includes(input[i])){
     let indexMatchObject=keyArray.find((letter)=>letter.codedLetter===newInput[i])
     codeWord+=indexMatchObject.vanillaLetter
     }
     else{codeWord+=newInput[i]}
   }
   console.log(codeWord)
   return codeWord
  }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
