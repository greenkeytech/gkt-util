var should = require('chai').should();
const { validEmail, validPassword, validUserName, containsNumbers, containsSpecialCharacters, isMixedCase, isNotNaN, isNaNValue } = require('../index');

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

describe('#upperCaseFirst', () => {
  it('capitalizes banana', () => {
    return 'banana'.upperCaseFirst().should.equal('Banana')
  });

  it('capitalizes banana fofana', () => {
    return 'banana fofana'.upperCaseFirst().should.equal('Banana fofana')
  });
});

describe('#isNaNValue', () => {
  it('returns true for NaN', () => {
    let NaNs = [
      'password',
      '1000b',
      'Password11',
      'password123!',
      'PANTHEUSNH1234{'
    ];
    NaNs.forEach((NaNValue) => {
      return isNaNValue(NaNValue).should.equal(true);
    });
  });

  it('returns false for not NaN', () => {
    let notNaNs = [
      '30',
      '1000',
      134,
      5634.123
    ];
    notNaNs.forEach((notNaN) => {
      return isNaNValue(notNaN).should.equal(false);
    });
  });
});

describe('#isNotNaN', () => {
  it('returns false for NaN', () => {
    let notNaNs = [
      '30',
      '1000',
      134,
      5634.123
    ];
    notNaNs.forEach((notNaN) => {
      return isNotNaN(NaN).should.equal(false);
    });
  });

  it('returns false for values other than NaN', () => {
    let NaNs = [
      'password',
      '1000b',
      'Password11',
      'password123!',
      'PANTHEUSNH1234{'
    ];
    NaNs.forEach((NaNValue) => {
      return isNotNaN(NaNValue).should.equal(false);
    });
  });
});