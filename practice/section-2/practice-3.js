'use strict';

function countSameElements(collection) {
  const result=[];
  const result2=[];
  for(let i=0;i<collection.length;i++){
   
      var flag=false;
      
      //找到适配的元素类型，判断辅助数组是否有
     if(collection[i].includes("-")){
      var value=collection[i].split("-");
      if(result2.includes(value[0])){
        flag=true;
      }
      // }else{//取得数值与类型
      //   current="-";
      //   number=Number.parseInt(value[1]);
      // }

     }else if(collection[i].includes("[")){
      var value=collection[i].split("[");
      if(result2.includes(value[0])){
        flag=true;
      }
      // }else{//取得数值与类型
      //   current="[";
      //   var value2=(value[1]).split("]");
      //   number=Number.parseInt(value2[0]);
      // }
    }else if(collection[i].includes(":")){
      var value=collection[i].split(":");
      if(result2.includes(value[0])){
        flag=true;
      }
      // }else{//取得数值与类型
      //   current=":";
      //   number=Number.parseInt(value[1]);
      // }

     }else{
       if(result2.includes(collection[i])){
         flag=true;
       }
     }

     if(flag==false){

      var num=0;
      var world=null;
        for(let j=0;j<collection.length;j++){
         
          var number=0;
          
          if(collection[j].includes("-")){
            var value=collection[j].split("-");
            //取得数值与类型
            if(collection[i].includes("-")){

                var ci=collection[i].split("-");
                if(ci[0]==value[0]){
                  number=Number.parseInt(value[1]);
                  num+=number;
                  world=value[0];
                 }
            }else{
              if(collection[i]==value[0]){
                number=Number.parseInt(value[1]);
                num+=number;
                world=value[0];
               }
            }
             
                 
           }else if(collection[j].includes("[")){
            var value=collection[j].split("[");
           //取得数值与类型
           if(collection[i]==value[0]){
            var value2=(value[1]).split("]");
            number=Number.parseInt(value2[0]);
            num+=number;
            world=collection[i]
           }
          
          }else if(collection[j].includes(":")){
            var value=collection[j].split(":");
            //取得数值与类型
            if(collection[i].includes(":")){

              var ci=collection[i].split(":");
              if(ci[0]==value[0]){
                number=Number.parseInt(value[1]);
                num+=number;
                world=value[0];
               }
          }else{
            if(collection[i]==value[0]){    
              number=Number.parseInt(value[1]);
              num+=number;
              world=value[0]
             }
          }
               
            
           }else{
             if(collection[i]==collection[j]){
               num++;
               world=collection[i]
             }
           }
        }
        result.push({name:world,summary:num});
        result2.push(world);
      }
     }

  
  
 
  console.log(result);
  return result;
}

