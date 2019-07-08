'use strict';

function countSameElements(collection) {
  const result=[];
  const result2=[];
  for(let i=0;i<collection.length;i++){
   
    if(!result2.includes(collection[i])){
      var num=0;
      if(collection[i].includes("-")){

        var value=collection[i].split("-");
        num+=Number.parseInt(value[1]);
        result.push({key:value[0],count:num});
        result2.push(collection[i]);
      }else{
        for(let j=0;j<collection.length;j++){
         
          if(collection[i]==collection[j]){
            num++;
          }
        }
        result.push({key:collection[i],count:num});
        result2.push(collection[i]);
      }
      
     
    }

  }
  
  console.log(result);
  return result;
}
