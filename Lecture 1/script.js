/* Array => Collection of data or group of elements. In javascript array, we can use dissimilar types of data i.e string, number, float, function, object, etc.

Methods in array: 

1. forEach: Iterate or traverse each elements of the array.

2. map: It is similar to the foreach but returns a new array using previous array. The number of elements in new array is equals to the number of elements in the previous array.

3. filter: It is similar to map but it filters the previous array(save that is needed and remove that is not needed) and returns the new array. If true is returned it saves the element in the new array and viceversa. The number of elements in the new array may be less or equal to the number of the elements in the previous array.

4. find: It checks if the element we are searching in the array is present or not. If there are duplicate elements, it always prioritize the first one. 

5. indexOf: Returns the index of the element if present in the array. 

*/


var array = [1, 2, 3, "Sunday"]

// forEach
array.forEach(function (val) {
    console.log(val);
})


// map
var array1 = array.map(function (val) {
    return val + 3;
})

console.log(array1)


//filter
var array2 = array.filter(function (val) {
    if (val === 4) {
        return true;
    }
})

console.log(array2)


//find
var array3 = array.find(function (val) {
    if (val === 1) {
        return val;
    }
})

console.log(array3)

//indexOf
console.log(array.indexOf(4))



/* Objects => Key value pairs enclosed in { } is called object.

Method in object

1. for in: It is used to iterate the object's key value pairs.


Freeze the object: It prevents the object data to be changed. 

Object.freeze(objName)

*/

var obj = {
    fName: 'Prabesh',
    lName: 'Gupta'
}

console.log(obj.fName)
console.log(obj['lName'])

Object.freeze(obj)
obj.fName = 'Aayush'

//for in loop
for (var key in obj) {
    console.log(key + ":" + obj[key])
}



/*
Function => Block of code that is executed only when it called. 

return => Passes the control back to the originator or caller. 

Function length: It returns the number of paramaters we have in a function
*/

function display(p1, p2, p3) {
    return 1;
}

console.log(display())

// Here display function is called at line 101 then the control is moved to line 97 then it goes to line 98. It keeps the value 1 and return the control back to the line 101 again. 

console.log(display.length)



/* Sync js => Code that executes line by line then it's synchronous.

Async js => Code with async nature(depends on third party), where it goes in side stack initially and is moved to the main stack for execution only if  all the sync code is executed already and main stack is empty as well as async code has completed its work. 
*/

async function quotes() {
    var blob = await fetch(`https://type.fit/api/quotes`);
    var result = await blob.json();
    console.log(result[4].text)
}

quotes();