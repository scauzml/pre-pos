'use strict';


function createUpdatedCollection(collectionA, objectB) {
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
  console.log(collectionA1);
  return collectionA1;
}

