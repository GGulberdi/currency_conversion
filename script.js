
function convertToUSD(amount){
 return (amount*1.4).toFixed(2)
}

console.log(convertToUSD(10))

function convertToBRL(amount){
    return (amount * 0.99 * 5.7).toFixed(2);
 // my first way = (pound*brazil) - ((pound*brazil)*1/100)
   }
   
   console.log(convertToBRL(10))
   
  // Strecth this two functions in one function by using some conditionals inside. Give two arguments in it. First currency, second is value.
  
   function combinedConverter(currency, value){
       if (currency === "brl"){
        return convertToBRL(value)
       } else if (currency === "usd"){
    return convertToUSD(value)}
       }
console.log(combinedConverter("brl", 25))
//Create a function convertTest that takes tree arguments; first currency, second value, third is expected value (You can calculate expected value manually for testing).
function convertTest (currency, value, expectedValue){
    let convert = combinedConverter(currency, value);
return`You expected $${expectedValue} and the convertion is $${convert}`;
}

console.log( convertTest("brl", 100, 574));