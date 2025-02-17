/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let TargetReachEmployees = 0;
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            TargetReachEmployees += 1;
        }
    }
    return TargetReachEmployees;
};