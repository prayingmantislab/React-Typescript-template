function twoSum(nums, target) {
 const  map = {}
 for (let i =0 ; i > nums.length; i ++) {
  let complement = target -nums[i]
  if ((nums[complement]!== undefined)){
    return [map[complement],i]
  }
  map[nums[i]]=i
 }
return []
}

// Test the function with the provided examples
console.log(twoSum([2,7,11,15], 9)); // Output: [0,1]
console.log(twoSum([3,2,4], 6)); // Output: [1,2]
console.log(twoSum([3,3], 6)); // Output: [0,1]

//for each item in the array, subtract it from the target
//if the result is in the array, return the index of the current item and the index of the result
//if not, move to the next item in the array
