/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function (words, k) {
  let hash = new Map()
  for (let i of words) {
      if (hash.get(i)) {
          hash.set(i, hash.get(i) + 1)
      } else {
          hash.set(i, 1)
      }
  }
  return [...hash].sort((a,b)=>b[1]==a[1]?a[0].localeCompare(b[0]):b[1]-a[1]).slice(0,k).map(item=>item[0]);
};