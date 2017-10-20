var should = require('chai').should(),
    util = require('../index'),
    validEmail = util.validEmail;
    validPassword = util.validPassword;

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
     'test.fun@mysite...com'
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
      'PANTHEUSNH1234{'
    ];
    invalidPasswords.forEach((password) => {
      return validPassword(password).should.equal(false);
    });
  });
});