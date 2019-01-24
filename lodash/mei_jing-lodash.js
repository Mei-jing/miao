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
    let result = [].concat(ary.slice(n))
    return result
  }

  function dropRight(ary, n = 1) {
    if (n == 0) {
      return ary
    }
    let m = -n
    ary.splice(m)
    return ary
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

  function head(array) {
    if (array.length == 0) {
      return undefined
    } else {
      return array[0]
    }
  }

  function indexOf(array, value, fromIndex = 0) {
    if (!array || fromIndex > array.length) {
      return undefined
    }
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
  }

  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    if (!array || fromIndex > array.length) {
      return undefined
    }
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  }

  function initial(array) {
    array.pop()
    return array
  }

  function intersection([arrays]) {
    return arguments[0].filter(value => arguments[1].indexOf(value) !== -1)
  }

  function join(array, separator = ',') {
    let str = ""
    for (let i = 0; i < array.length; i++) {
      str = str + array[i]
      if (i != array.length - 1) {
        str = str + separator
      }
    }
    return str
  }

  function last(array) {
    return array[array.length - 1]
  }

  function pull(array, ...values) {
    let map = {}
    let result = []
    for (let item of values) {
      if (!map[item]) {
        map[item] = 1
      }
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] in map) {
        array.splice(i, 1)
        i--
      }
    }
    return array
  }

  function reverse(array) {
    let count = 0
    for (let i = 0, j = array.length - 1; i < j; i++, j--) {
      if (count < (array.length % 2 >> 0)) {
        array[i] = array[i] ^ array[j]
        array[j] = array[i] ^ array[j]
        array[i] = array[i] ^ array[j]
        count++
      }
    }
    return array
  }

  function sortedIndex(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (value >= array[i]) {
        return i + 1
      }
    }
  }

  function union(...arrays) {
    let result = []
    //  let arr = [].concat.apply([], arguments) 不用 ... 的写法
    let arr = [].concat(...arrays)
    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) == -1) {
        result.push(arr[i])
      }
    }
    return result
  }

  function zip(...arrays) {
    // let result1 = []
    // let result2 = []
    // let result = []
    // for (let i = 0; i < arguments.length; i++) {
    //   result1.push(arguments[i][0])
    //   result2.push(arguments[i][1])
    // }
    // result.push(result1)
    // result.push(result2)
    // return result


    let result = []
    for (let i = 0; i < arguments[0].length; i++) {
      let arr = []
      for (let index of arguments) {
        arr.push(index[i])
      }
      result.push(arr)
    }
    return result
  }

  function unzip(...arrays) {
    let result = []
    for (let i = 0; i < arguments[0][0].length; i++) {
      let arr = []
      for (let index of arguments[0]) {
        arr.push(index[i])
      }
      result.push(arr)
    }
    return result
  }

  function uniq(array) {
    let map = {}
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (!map[array[i]]) {
        result.push(array[i])
        map[array[i]] = 1
      }
    }
    return result
  }

  function without(array, ...values) {
    let arr = Array.from(values)
    return array.reduce((result, currItem) => {
      return array.filter(values => arr.indexOf(values) == -1)
    }, [])
  }

  function xor(arrays) {
    return arrays.reduce((result, currItem) => arguments[0].filter(values => arguments[1].indexOf(values) == -1).concat(arguments[1].filter(values => arguments[0].indexOf(values))), [])
  }

  function forEach(collection, iteratee) {
    for (let key in collection) {
      iteratee(collection[key])
    }
    return collection
  }

  function map(collection, iteratee) {
    let result = []
    for (var currItem in collection) {
      result.push(iteratee(collection[currItem]))
    }
    return result
  }

  function isBoolean(value) {
    if (value === true || value === false) {
      return true
    } else {
      return false
    }
  }

  function isEmpty(value) {
    if (value == null) {
      return true
    } else if (typeof value == "number") {
      return true
    } else if (typeof value == "boolean") {
      return true
    } else if (arguments[0].length !== 0 || arguments[0].size !== 0) {
      return false
    }
  }

  function toArray(value) {
    let result = []
    if (value == null) {
      return []
    } else if (typeof value == "number") {
      return []
    } else if (typeof value == "boolean") {
      return []
    } else if (typeof value == "object") {
      for (let i in value) {
        result.push(value[i])
      }
      return result
    } else if (typeof value == "string") {
      return value.split("")
    }
  }

  function forOwn(a, iterator) {
    var hasOwn = Object.prototype.hasOwnProperty
    for (var prop in a) {
      if (hasOwn.call(a, prop)) {
        iterator(a, prop) // 属性值，属性名，对象
      }
    }
  }

  function findIndex(array, predicate = identity, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        return i
      }
    }
    return -1
  }

  function findLastIndex(array, predicate = identity, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (predicate(array[i], i, array)) {
        return i
      }
    }
    return -1
  }



  return {
    concat: concat,
    chunk: chunk,
    compact: compact,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    difference: difference,
    drop: drop,
    dropRight: dropRight,
    fill: fill,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,
    initial: initial,
    intersection: intersection,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    pull: pull,
    reverse: reverse,
    sortedIndex: sortedIndex,
    union: union,
    zip: zip,
    unzip: unzip,
    uniq: uniq,
    without: without,
    xor: xor,
    forEach: forEach,
    map: map,
    isBoolean: isBoolean,
    isEmpty: isEmpty,
    toArray: toArray,
    forOwn: forOwn,
    findIndex:findIndex,
    findLastIndex:findLastIndex,
  }

}()