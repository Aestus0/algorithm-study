/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var low = 0;
    var high = x;
    while(low <= high) {
        var middle = Math.floor((low+high) / 2);
        if (middle * middle <= x) {
            if (middle === x|| (middle+1)* (middle + 1) > x) {
                return middle;
            }
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }
};
