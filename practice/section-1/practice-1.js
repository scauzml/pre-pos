'use strict';

function collectSameElements(collectionA, collectionB) {
  const result=[];
   for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<collectionB.length;j++){
      if(collectionB[j]==collectionA[i]){
       result.push(collectionA[i]);
      }
    }
   
   }
  
   console.log(result);
  return result;
}
