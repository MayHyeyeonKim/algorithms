const isSubsequence = (s, t) => {
    //! Edge case
    if (s.length > t.length) return false; //! if len of s is greater than len of t, return false because s cant be a subsequence of t
    `
    Example:
      s='Leetcode'
      t='Code'
      here we are trying to find if 'Leetcode' is a subsequence of 'Code' which is not possible because 'Leetcode' is longer than 'Code'
  
    `;
    const t_length = t.length;
    let subsequence = 0;
    for (let i = 0; i < t_length; i++) {
      if (s[subsequence] === t[i]) {
        // ! if it is matching, increment subsequence
        subsequence++;
      }
    }
    return subsequence === s.length
  };