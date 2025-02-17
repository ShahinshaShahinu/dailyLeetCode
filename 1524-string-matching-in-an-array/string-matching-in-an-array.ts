function stringMatching(words: string[]): string[] {
    const res = [];
    const n = words.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j && words[j].includes(words[i])) {
                res.push(words[i]);
                break;
            }
        }
    }
    return res;
};