exports.checkYorN = function (input) {
  return "ynYN".includes(input) && input.length == 1;
};

exports.acctNumExists = function (records, accountNumber) {
  const foundAcct = records.find((each) => each.accountNumber == accountNumber);
  return foundAcct ? true : false;
};
