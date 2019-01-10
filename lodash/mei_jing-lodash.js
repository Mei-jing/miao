var mei_jing = function () {

  function chunk(ary, size = 1) {
    let result = []
    for(let i =0;i<ary.length;i++){

    }
  }

  function compact(ary) {
    let result = []
    for (let i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  }

  return {
    chunk: chunk,
    compact: compact,
  }
}()