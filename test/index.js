const should = require('chai').should();
const { expect } = require('chai');
const { validEmail, validPassword, validUserName,
  containsNumbers, containsSpecialCharacters, isMixedCase,
  isNotNaN, isNaNValue, isValidNumber } = require('../index');

describe('#validEmail', () => {
  it('returns true for valid emails', () => {
    let validEmails = [
     'test@test.com',
     'TEST@TEST.com',
     'Test.Person@testing.com',
     'test.Person10100100@somesite.net'
    ];
    validEmails.forEach((email) => {
      return validEmail(email).should.equal(true);
    });
  });

  it('returns false for invalid emails', () => {
    let invalidEmails = [
     'test@test.',
     '@TEST.com',
     'Test.com',
     'test.Pers  on10100100@somesite.net',
     'test.fun@mysite...com',
     'fun@fun',
     '@test'
    ];
    invalidEmails.forEach((email) => {
      return validEmail(email).should.equal(false);
    });
  });

});

describe('#validPassword', () => {
  it('returns true for valid passwords', () => {
    let validPasswords = [
      'Password1!',
      'Greenkey2017!',
      'totallyS3cret@',
      '1111AOEUaoeu.'
    ];
    validPasswords.forEach((password) => {
      return validPassword(password).should.equal(true);
    });
  });

  it('returns false for invalid passwords', () => {
    let invalidPasswords = [
      'password',
      '1000',
      'aoeu',
      '$()$()!{}%',
      'Password11',
      'password123!',
      'PANTHEUSNH1234{',
      '12aoAO$('
    ];
    invalidPasswords.forEach((password) => {
      return validPassword(password).should.equal(false);
    });
  });
});

describe('#validUserName', () => {
  it('returns true for valid usernames', () => {
    let validUserNames = [
      'fun120',
      'GreenkeyIsGreat',
      'tomSmith',
      'asmith'
    ];
    validUserNames.forEach((userName) => {
      return validUserName(userName).should.equal(true);
    });
  });

  it('returns false for invalid usernames', () => {
    let invalidUserNames = [
      '123456',
      '$()#&'
    ];
    invalidUserNames.forEach((userName) => {
      return validUserName(userName).should.equal(false);
    });
  });
});

describe('#containsNumbers', () => {
  it('returns false for strings without numbers', () => {
    let stringsWithoutNumbers = [
     'test@test.',
     '@TEST.com',
     'Test.com',
     'test.Pers  onet',
     'test.fun@mysite...com',
     'fun@fun',
     '@test'
    ];
    stringsWithoutNumbers.forEach((email) => {
      return containsNumbers(email).should.equal(false);
    });
  });

 it('returns true for strings with numbers', () => {
   let stringsWithNumbers = [
    't2',
    '(833) 132-3124',
   ];
   stringsWithNumbers.forEach((email) => {
     return containsNumbers(email).should.equal(true);
   });
 });
});

describe('#isNaNValue & #isNotNaN', () => {
  let NaNs = [
    'password',
    '1000b',
    'Password11',
    'password123!',
    'PANTHEUSNH1234{'
  ];
  let notNaNs = [
    '30',
    '1000',
    134,
    5634.123
  ];
  it('isNaNValue returns true for NaN', () => {
    NaNs.forEach((NaNValue) => {
      return isNaNValue(NaNValue).should.equal(true);
    });
  });

  it('isNaNValue returns false for not NaN', () => {
    notNaNs.forEach((notNaN) => {
      return isNaNValue(notNaN).should.equal(false);
    });
  });

  it('isNotNaN returns false for NaN', () => {
    notNaNs.forEach((notNaN) => {
      return isNotNaN(NaN).should.equal(false);
    });
  });

  it('isNotNaN returns false for values other than NaN', () => {
    NaNs.forEach((NaNValue) => {
      return isNotNaN(NaNValue).should.equal(false);
    });
  });
});

describe('#isValidNumber', () => {
  const validInternationalNumbers = [
    '+12246269999',
    '+1 224-242-8346',
    '+44 844 335 1801',
    '+525524822400',
    '+52 1 55 1234 2123',
    '+52 01 55 1234 2123',
    '+52 011 55 1234 2123',
    '+52 044 55 1234 2123',
    '+52 045 55 1234 2123',
  ];

  const validCountryNumbers = [
    { phone: '(213) 373-4253', country: 'US' },
    { phone: '1 213 373 4253', country: 'US' },
    { phone: '2133734253', country: 'US' },
    { phone: '55 2482 2400', country: 'MX' },
    { phone: '+52 55 2482 2400', country: 'MX' },
    { phone: '+52 1 55 2482 2400', country: 'MX' },
    { phone: '+52 01 55 2482 2400', country: 'MX' },
    { phone: '+52 011 55 2482 2400', country: 'MX' },
  ];

  const invalidNumbers = [
    '',
    {},
    null,
    false,
    true,
    12246169999,
    'word',
    'wordwithvalidnumber+12246269999',
    '+1 800 GOT MILK',
    '+1 111 111 1111', // invalid area code
    '+1 224 616 999', // invalid length
    '+52 041 55 1234 2123', // 041 is an invalid prefix
    '1 224 616 9999', // without +1 denoting international, invalid length
  ];

  it('should return true for valid E.164-format numbers', () => {
    validInternationalNumbers.forEach((num) => {
      return isValidNumber(num).should.equal(true);
    });
  });

  it('should return true for valid numbers given a country', () => {
    validCountryNumbers.forEach((num, i) => {
      return expect(isValidNumber(num.phone, num.country),
        `when calling isValidNumber with phone:${num.phone} and country:${num.country} [index ${i}]`)
        .to.equal(true);
    });
  });

  it('should return false for invalid inputs', () => {
    invalidNumbers.forEach((el, i) => {
      return expect(isValidNumber(el),
        `when calling isValidNumber with invalid element ${el} [index ${i}]`)
        .to.equal(false);
    });
  });
});