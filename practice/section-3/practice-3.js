'use strict';


function createUpdatedCollection1(collectionA, objectB) {
  const collectionA1=collectionA;
  const value=objectB.value;
  for(let i=0;i<collectionA1.length;i++){
    for(let j=0;j<value.length;j++){
      if(collectionA1[i].key==value[j]){
        if(collectionA1[i].count >= 3){

          collectionA1[i].count=collectionA1[i].count-(Number.parseInt(collectionA1[i].count/3));
        }
       
      }
    }
    
  }
  return collectionA1;
}
function countSameElements(collection) {
  const result=[];
  const result2=[];
  for(let i=0;i<collection.length;i++){
   
    if(!result2.includes(collection[i])){
      var num=0;
      for(let j=0;j<collection.length;j++){

        if(collection[i]==collection[j]){
          num++;
        }
      }
      result.push({key:collection[i],count:num});
      result2.push(collection[i]);
    }

  }
  
  console.log(result);
  return result;
}
function createUpdatedCollection(collectionA, objectB) {
  const result11=countSameElements(collectionA);
  console.log(result11);
  const result22=createUpdatedCollection1(result11,objectB);
  console.log(result22);
  return result22;
}