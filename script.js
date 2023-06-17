let arr= [
          
  {id:1,name:"john",age:"18",profession:"developer"},
  {id:2, name:"jack",age:"20", profession:"developer"},
  {id:3, name:"karen", age:"19",profession:"admin"},
  
  ];
  
  
const PrintDeveloperbyMap= ()=> {
  arr.map(function(element){
    if(element.profession==="developer"){
      console.log(element);
    }
  });
}

PrintDeveloperbyMap();



 const PrintDeveloperbyForEach= ()=> {
  arr.forEach(function(element){
    if(element.profession==="developer"){
      console.log(element);
    }
  });
}
PrintDeveloperbyForEach();

const addData = () => {
let developerobject= {id:4,name:"susan",age:"20",profession:"intern"};
arr.push(developerobject)
}
addData();
console.log(arr);

const removeAdmin= ()=> {
let newarr= arr.filter(function(element){
return element.profession!=="admin";

})

console.log(newarr);
}
removeAdmin();

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 11, name: "jyoti", age: "28", profession: "dava_programmer" },
    { id: 12, name: "Ram", age: "21", profession: "Designer" },
    { id: 13, name: "mohan", age: "115", profession: "aWeb_Devloper" },
  ];
  const data = arr.concat(newArr);
  console.log(data);
}