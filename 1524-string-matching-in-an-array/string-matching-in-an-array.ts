function stringMatching(words: string[]): string[] {
    const res = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[j].includes(words[i])) {
                res.push(words[i]);
                break;
            }
        }
    }
    return res;
};