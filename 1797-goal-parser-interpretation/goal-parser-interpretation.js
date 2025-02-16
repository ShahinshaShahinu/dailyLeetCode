/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {


    let GoalParser = '';
    for (let i = 0; i < command.length; i++) {

        if ("G" === command[i]) {
            GoalParser += "G"
        } else if (command[i] === '(' && command[i + 1] === ')') {
            GoalParser += "o";
        } else if ((command[i] === '(' && command[i + 1] === 'a' && command[i + 2] === 'l' && command[i + 3] === ')')) {
            GoalParser += 'al'
        }

    }
    return GoalParser;
};