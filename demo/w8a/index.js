const myArray = [2,4,5,6];
console.log(myArray)

//traditional for loop
let sum = 0 
for(let index = 0; index< myArray.length;index++){
    sum = sum + myArray[index]
}
console.log(sum);


//for of array 
 sum = 0 
for(const item of myArray){
    sum = sum + item
}
console.log(sum);


//divide each element by two
console.log("before",myArray);
for(let index = 0; index< myArray.length;index++){
    myArray[index] = myArray[index] /2
}
console.log("after",myArray);


//put divide each element by two in new array
const newArray=[]
console.log("before", myArray);
for(let index = 0; index < myArray.length;index++){
    newArray.push(myArray[index] /2)
}
console.log("after", newArray,'original', myArray);


//map array
function addTwo (value){
    return value + 2;

}
//console log with function 
const resultArray = myArray.map(addTwo)
console.log(resultArray);


//console log map array with anaomonyous arrow function
const resultArray2 = myArray.map((value)=> value +2)
console.log(resultArray2);


//HTML array print
const htmlArray = myArray.map((value)=>`<p>${value}</p>` )
console.log(htmlArray);


//sort array print
function printItems(){
const htmlArray = myArray.map((value)=>`<p>${value}</p>` )
console.log(htmlArray);
return htmlArray
}
printItems(myArray)


//use sort with function to compare numbers sort function usually sorts strings 
    function CompareNumbers(a, b){
        return a - b;
    }
printItems(myArray.sort(CompareNumbers));


//sort with arrow function
printItems(myArray.sort((a,b) => a-b))


const todoList = [
{
    content :'task 1', priority: 2, completed: true 
},
{
    content :'task 2', priority: 1, completed: true
},
{
    content :'task 3', priority:3, completed: false 
}
]
console.log(todoList)


//join todo lines in html 
function printTodo(arrayInput){
    const htmlArray2 = arrayInput.map((value) =>
    `<p${
        (value.completed) ? 'class="done"' :''}>
        ${value.priority}: ${value.content}
        </p>`)
        return htmlArray2
}
console.log(printTodo(todoList).join('\n'))


//filter array
const filteredArray = []
for(const item of todolist){
if(!item.completed){
    filteredArray.push(item)
 }
}
//console.log filtered array
console.log(printTodo(filteredArray).join('\n'))

//evaluate only completed items in todoList
function evalItem (item){
    return item.completed
}
console.log(printTodo(todoList.filter(evalItem)).join('\n'))

//arrow function to filter evaluated 
console.log(prinTodo(todoList.filter((item) => item.completed)))