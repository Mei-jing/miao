var mei_jing = function () {

  function chunk(ary, size = 1) {
    let result = []
    for (let i = 0; i < ary.length; i += size) {
      result.push(ary.slice(i, i + size))
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

  function difference(ary, ...values) {
    let result = []
    var args = [].concat(...values)
    for (let j = 0; j < ary.length; j++) {
      if (!args.includes(ary[j])) {
        result.push(ary[j])
      }
    }
    return result
  }

  function drop(ary, n = 1) {
    let result = []
    result.push(ary.slice(n))
    return result
  }

  function dropRight(ary, n = 1) {
    let result = []
    let count = 0
    if(n>ary.length){
      return []
    }
    if(n == 0){
      return ary
    }
    while (count < n) {
      result.push(ary.shift())
      count++
    }
    return result
  }

  function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }

  function fromPairs(pairs) {
    let map = {}
    if (!pairs) {
      return {}
    }
    for (let i = 0; i < pairs.length; i++) {
        map[pairs[i][0]] = pairs[i][1]
    }
    return map
  }


  return {
    concat: concat,
    chunk: chunk,
    compact: compact,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    difference:difference,
    drop:drop,
    dropRight:dropRight,
    fill:fill,
    fromPairs:fromPairs,
  }
  
}()