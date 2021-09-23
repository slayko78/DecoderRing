// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
      const encoder = [{letter: "a", number: 11}, {letter: "b", number: 21}, {letter: "c", number: 31}, {letter: "d", number: 41}, {letter: "e", number: 51},
  {letter: "f", number: 12}, {letter: "g", number: 22}, {letter: "h", number: 32}, {letter: "j",number: 42}, {letter: "i", number: 42}, {letter: "k", number: 52},{ letter: "l", number: 13 }, { letter: "m", number: 23 }, { letter: "n", number: 33 }, { letter: "o", number: 43 }, { letter: "p", number: 53 }, { letter: "q", number: 14 }, { letter: "r", number: 24 }, { letter: "s", number: 34 }, { letter: "t", number: 44 }, { letter: "u", number: 54 }, { letter: "v", number: 14 }, { letter: "w", number: 25 }, { letter: "x", number: 35 }, { letter: "y", number: 45 }, { letter: "z", number: 55 }]
 
const decoder = [{letter: "a", number: "11"}, {letter: "b", number: "21"}, {letter: "c", number: "31"}, {letter: "d", number: "41"}, {letter: "e", number: "51"},
  {letter: "f", number: "12"}, {letter: "g", number: "22"}, {letter: "h", number: "32"}, {letter: "(i/j)",number: "42"}, {letter: "k", number: "52"},{ letter: "l", number: "13" }, { letter: "m", number: "23" }, { letter: "n", number: "33" }, { letter: "o", number: "43" }, { letter: "p", number: "53" }, { letter: "q", number: "14" }, { letter: "r", number: "24" }, { letter: "s", number: "34" }, { letter: "t", number: "44" }, { letter: "u", number: "54" }, { letter: "v", number: "14" }, { letter: "w", number: "25" }, { letter: "x", number: "35" }, { letter: "y", number: "45" }, { letter: "z", number: "55" }]


if (encode === true) {
    let encodedString = ""
    for (let i = 0; i < input.length; i++) {
      if (input[i].toLowerCase() != input[i].toUpperCase()) {
        let letterObject = encoder.find((letter) => letter.letter === input[i])
        encodedString += letterObject.number
      }
      else{encodedString+=input[i]}
    }
  
    return encodedString
  }
      
      
    
    if(encode===false){
   let numCount=0; 
  for(let i=0;i<input.length;i++){
    if(input[i]>0){numCount++}
  } 
   if(numCount % 2 !=0) {
      return false} 

  let encodedString="";
  
  for (let i = 0; i < input.length; i++){
   if(input[i]>0){
     const digitPair=input[i]+input[i+1]
     let codeObject=decoder.find((obj)=>obj.number===digitPair)
     encodedString+=codeObject.letter
     i++;
   }
   else{encodedString+=input[i]} 
  }
 return encodedString;
} 
    
    
    
    
    
    
    
    
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
