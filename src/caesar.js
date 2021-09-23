// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift=0, encode = true) {
    // your solution code here
     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
 if(shift<-25 || shift==0 || shift>25){return false}
 if(shift===false){return false}   
 if(encode===false){shift=shift*-1}   
 const newInput=input.toLowerCase();
 let encodedText = '';
 
 for (let i=0;i< newInput.length;i++) {
   if( newInput[i].toUpperCase() != newInput[i].toLowerCase()){
    const alphabetIndex = alphabet.indexOf((newInput[i]));
    if(alphabetIndex+shift>=26){
      let newAlphabetIndex= alphabetIndex+shift;
      let correctedAlphabetIndex=newAlphabetIndex-26;
      encodedText+=alphabet[correctedAlphabetIndex];
    }
    else if(alphabetIndex+shift<=25 && alphabetIndex+shift>=0){
      encodedText+=alphabet[alphabetIndex+shift]
    }
    else{
      let negativePosition=alphabetIndex+shift
      let newAlphabetIndex=26+negativePosition
       encodedText+=alphabet[newAlphabetIndex]
    }
   }
   else{encodedText += newInput[i];}
}

    return encodedText
}

  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
