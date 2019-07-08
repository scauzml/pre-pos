'use strict';

function collectSameElements(collectionA, objectB) {
  const result=[];

  for(var i=0;i<collectionA.length;i++){
   for(var j=0;j<objectB.value.length;j++){
     if(objectB.value[j]==collectionA[i].key){
      result.push(collectionA[i].key);
     }
   }
  
  }
 
  console.log(result);
 return result;
}
