function TreeConstructor(strArr) { 

    const arr=strArr.map(c=>c.replace(/[(/)/]/g,'').split(',')
    .map(a=>parseInt(a))),
      parents={};
  
  
       
    for(var i=0;i<arr.length;i++){
  
    if(parents[arr[i][1]]){
  
      parents[arr[i][1]]++
  
    }else{
     
      parents[arr[i][1]]=1
     
    }
  
  
    }
  
  
    for(key in parents){
      
      if(parents[key]>2){return 'false'}
        
      }
      return 'true';  
  
  }
     
  console.log(TreeConstructor(readline()));