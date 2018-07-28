/// <reference path="utility-functions.ts" />

import util = Utility.Fees;

const fee = util.calculateFee(10);
console.log(fee);