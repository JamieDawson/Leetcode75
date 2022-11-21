var pivotIndex = function (nums) {
  var sum = 0;
  var leftsum = 0;

  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (var i = 0; i < nums.length; i++) {
    if (leftsum == sum - leftsum - nums[i]) {
      return i;
    }
    leftsum += nums[i];
  }

  return -1;
};

var nums = [1, 7, 3, 6, 5, 6];

console.log(pivotIndex(nums));

/*
Runtime: 91 ms, faster than 87.60% of JavaScript online submissions for Find Pivot Index.
Memory Usage: 44.4 MB, less than 63.76% of JavaScript online submissions for Find Pivot Index.
*/

/*
Time complexity: O(n) - Worst case it goes through array once.
Space complexity: O(1) - We are just creating two variables. 
*/
