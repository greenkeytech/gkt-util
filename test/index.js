var should = require('chai').should();
const { validEmail, validPassword, containsNumbers, containsSpecialCharacters, isMixedCase } = require('../index');

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