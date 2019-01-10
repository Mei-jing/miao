var mei_jing = function(){
  
  function chunk(ary, size = 1) {

  }
  function compact(ary) {
    let result = []
    for(let i =0;i<ary.length;i++){
      if(ary[i]){
         result.push(i)
      }
    }
    return result
  }

  return {
    chunk: chunk,
    compact: compact,
  }
}()
