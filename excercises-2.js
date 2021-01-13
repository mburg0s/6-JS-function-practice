// ---------------------
// Define a function max() that takes two numbers as 
// arguments and returns the largest of them. Use the 
// if-then-else construct available in JavaScript.
// ---------------------
function max(num1,num2){
    if (num1>num2){
        return num1
    }
    else {
        return num2
    }


}
console.assert(max(2,3) === 3)
console.assert(max(23,24) === 24)
console.assert(max(-23, 12) === 12)

// ---------------------
// Define a function maxOfThree() that takes three 
// numbers as arguments and returns the largest of them.
// ---------------------
var numGreater=0
function maxOfThree(num1, num2, num3){
    if (num1 > num2) {
        numGreater=num1
    } else {
        if  (num2 > num3) {
            numGreater=num2
        } else{ 
            numGreater=num3
    }

}
console.assert(maxOfThree(2,56,3) === 56)
console.assert(maxOfThree(12,3,4) === 12)
console.assert(maxOfThree(-12,4,-5) === 4)

// ---------------------
// Write a function isVowel() that takes a character (i.e. a 
// string of length 1) and returns true if it is a 
// vowel, false otherwise.
// ---------------------

var charVowel = false
function isVowel(char){
    if (char.length == 1) {
        if (char=='a' || char =='e' || char =='i' || char =='o' || char =='u' || char =='A' || char =='E' || char =='I' || char =='O' || char =='U'){
           charVowel=true
        } 
    }
    return charVowel   
}
console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);
console.assert(isVowel("2") === false)

// ---------------------
// Write a function rovarspraket() that will translate 
// a text into "Rovarspraket". That is, double every 
// consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return 
// the string "tothohisos isos fofunon".
// ---------------------
function rovarspraket(str){
    
        var vowels = ["a", "e", "i", "o", "u", " "]
        var pHolder = ""
        for (i = 0; i < str.length; i++) {
           var current = str.charAt(i); 
          if (vowels.indexOf(current) != -1) {
              pHolder = (pHolder+ (current))
          } else {
              pHolder = (pHolder + (current + "o" + current))
          }
        }
        return pHolder
}
console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")


// ---------------------
// Define a function reverse() that computes the reversal 
// of a string. For example, reverse("jag testar") should 
// return the string "ratset gaj".
// ---------------------

function reverse(str){

    var revString=''
    for(var i =str.length-1;i>=0;i--){
        revString=revString + str[i]
    }
    return revString

}
console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")
}