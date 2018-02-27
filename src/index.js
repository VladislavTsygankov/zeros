module.exports = function getZerosCount(number) {
    var count = 0;
    var ext = 1;
    while (Math.pow(5,ext)<number)
    {
        count = count + Math.floor(number/Math.pow(5,ext));
         ext++;
    }
    return count;
  // your implementation
}
