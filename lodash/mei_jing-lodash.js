var mei_jing = function () {

  function chunk(ary, size = 1) {
    let result = []
    for (let i = 0; i < ary.length; i++) {
      result.push(ary.splice(i, i + size))
      if (ary.length < size) {
        result.push(ary)
      }
    }
    return result
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

  function concat(ary, ...value) {
    let result = []
    for (let i = 0; i < ary.length; i++) {
      result.push(ary[i])
    }
    let mid = result
    for (let i = 0; i < value.length; i++) {
      if (typeof value[i] == "object") {
        for (let j = 0; j < value[i].length; j++) {
          mid.push(value[i][j])
        }
      } else {
        mid.push(value[i])
      }
    }
    return mid
  }

  function flatten(array) {
    return array.reduce((result, currItem) => {
      result = result.concat(currItem)
      return result
    }, [])
  }


  function flattenDeep(array) {
    return array.reduce((result, currItem) => {
      count++
      result = result.concat(currItem)
      if (!Array.isArray(currItem)) {
        return result
      }
      return flattenDeep(result)
    }, [])
  }

  function flattenDepth(array, depth = 1) {
    return array.reduce((result, currItem) => {
      result = result.concat(currItem)

      if (Array.isArray(currItem) && depth > 1) {
        return flattenDepth(result, --depth)
      } else {
        return result
      }
    }, [])
  }


  return {
    concat: concat,
    chunk: chunk,
    compact: compact,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
  }
  
}()