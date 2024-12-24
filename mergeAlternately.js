//Merge Strings Alternately
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
function mergeAlternately(word1, word2) {
    debugger;
    let value = word1.split('');
    let value2 = word2.split('');
    let result = [];
    for (let i = 0; i < value.length; i++) {
        let val = value[i] + value2[i];
        result.push(val);
        value.slice(i, 1);
        value2.slice(i, 1);
    }
    if (value.length > 0) {
        result.concat(value);
    }
    if (value2.length > 0) {
        result.concat(value2);
    }

    return result.join('');
}