exports.checkYorN = function (input) {
  return "ynYN".includes(input) && input.length == 1;
};

exports.acctNumExists = function (records, accountNumber) {
  const foundAcct = records.find((each) => each.accountNumber == accountNumber);
  return foundAcct ? true : false;
};

exports.validateNewAcctInputs = function (firstName, lastName, balance) {
  return (
    /^[A-Za-z]*$/.test(firstName.trim()) &&
    /^[A-Za-z]*$/.test(lastName.trim()) &&
    /^[0-9]*$/.test(balance.trim())
  );
};

exports.getAccount = function (records, accountNumber) {
  return records.find((each) => each.accountNumber == accountNumber);
};
