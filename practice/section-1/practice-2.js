'use strict';

function collectSameElements(collectionA, collectionB) {
  const result=[];
  for(var i=0;i<collectionA.length;i++){
   for(var j=0;j<collectionB[0].length;j++){
     if((collectionB[0])[j]==collectionA[i]){
      result.push(collectionA[i]);
     }
   }
  
  }
 
  console.log(result);
 return result;
}
