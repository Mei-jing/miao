var mei_jing = function(){
  
  function chunk(ary, size = 1) {

  }
  function compact(ary) {
    for(let i =0;i<ary.length;i++){
      if(ary[i] == 0 || ary[i] == null || ary[i] == "" || ary[i] == undefined ){
         ary.splice(i,1)
      }
    }
    return ary
  }

  return {
    chunk: chunk,
    compact: compact,
  }
}()
