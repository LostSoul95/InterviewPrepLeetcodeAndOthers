// Problem: Find the longest substring without repeating characters
// Time Complexity: O(n)
// Space Complexity: O(min(m,n)) where m is the size of the character set

function lengthOfLongestSubstring(s) {
    const seen = new Map();
    let start = 0;
    let maxLength = 0;
    
    for (let end = 0; end < s.length; end++) {
        if (seen.has(s[end])) {
            start = Math.max(start, seen.get(s[end]) + 1);
        }
        seen.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3