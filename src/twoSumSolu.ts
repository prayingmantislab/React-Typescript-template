function twoSum(nums: number[], target: number): number[] {
  const map: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return [];
}

// Test the function with the provided examples
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0,1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1,2]
console.log(twoSum([3, 3], 6)); // Output: [0,1]
