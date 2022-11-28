var isIsomorphic = function (s, t) {
  let sMap = {};
  let tMap = {};

  for (var i = 0; i < s.length; i++) {
    if (
      (sMap[s[i]] && sMap[s[i]] != t[i]) ||
      (tMap[t[i]] && tMap[t[i]] != s[i])
    ) {
      return false;
    }

    sMap[s[i]] = t[i];
    tMap[t[i]] = s[i];
    console.log(sMap[s[i]]);
  }
  return true;
};

var s = "egg";
var t = "add";

console.log(isIsomorphic(s, t));

/*
Runtime: 107 ms, faster than 71.72% of JavaScript online submissions for Isomorphic Strings.
Memory Usage: 42.7 MB, less than 71.38% of JavaScript online submissions for Isomorphic Strings.
*/

/*
Time complexity: O(N) only going through lenght of arrays once at the same time
Space Complexity: O(1) Worst case you make two objects that have all 26 letters in the alphabet. 

*/

/*
Create two hashmaps, one for s and one for t (sMap and tMap)

    loop thorugh lenght of s
        if sMap exist and sMap value is NOT the same as t[i] OR tMap exist and tMap value is NOT the same as s[i]
            return false
        
        add key/value to sMap
        add key/Value to tMap

  return true when loop completes. 
  */
