// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// ---------------------------
var  numLargest = Math.max.apply(Math,numbers)

// ---------------------------
// 2. Find longest string
// ---------------------------

var strLongest =''
for (var i=0; i< strings.length; i++){
    if (strLongest.length < strings[i].length){
        strLongest =strings[i]
    }
}
// ---------------------------
// 3. Find even numbers
// ---------------------------
    var evenNumbers =' '
    
     for(var i=0; i<numbers.length; i++){
         if ((numbers[i]%2)==0){
            evenNumbers = evenNumbers + ' '+ numbers[i]
         }
        
     }


// ---------------------------
// 4. Find odd numbers
// ---------------------------
var oddNumbers =''
    
     for(var i=0; i<numbers.length; i++){
         if ((numbers[i]%2)!=0){
             oddNumbers = oddNumbers + ' ' + numbers[i]
         }
     }

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var strIs =''
for(var i=0; i<strings.length; i++){
    if ((strings[i].includes('is'))){
       strIs = strIs  + ' '+ strings[i]
    }   
   
}



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

var concatArray = numbers.concat(strings)


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------
var insName =[]
for( var i=0; i <instructors.length; i++){
    if (instructors[i].teaches = 'JavaScript'){
        insName.push(instructors[i].firstname)
    }
    insName.sort()
}