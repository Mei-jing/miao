var mei_jing = function(){
  
  function chunk(ary, size = 1) {

  }
  function compact(ary) {
    let result = []
    for(let i =0;i<ary.length;i++){
      if(ary[i] == 0 || ary[i] == null || ary[i] == "" || ary[i] == undefined ){
         result = ary.splice(i,1)
      }
    }
    return result
  }

  return {
    chunk: chunk,
    compact: result,
  }
}()
