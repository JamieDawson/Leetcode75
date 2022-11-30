var isSubsequence = function (s, t) {
  var p1 = 0;
  var p2 = 0;

  while (p1 < s.length) {
    if (s[p1] == t[p2]) {
      p1++;
      p2++;
    } else {
      p2++;
      if (p2 > t.length) {
        return false;
      }
    }
  }
  return true;
};

var s = "abc";
var t = "ahbgdc";
console.log(isSubsequence(s, t));

/*
Logic:
create pointer variables to track s and t number spaces

while p1 is smaller than lenght of s
    if s[p1] is the same as t[p1]
        increase both p1 and p2
    else
        increase just p2
        if p2 is greater than the lenght of t
            return false

return true because you're done with the loop.

*/

/*
Runtime: 85 ms, faster than 72.38% of JavaScript online submissions for Is Subsequence.
Memory Usage: 41.9 MB, less than 73.98% of JavaScript online submissions for Is Subsequence.
*/

/*
Time complexity - O(N). Worse case is that we scroll through t string (which could be larger than s) once. This isn't  a loop in a loop.
Space complexity - O(1) - We are only making two counter variables. 
*/
