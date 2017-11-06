// library doc at github.com/catamphetamine/libphonenumber-js
const { parse, format, asYouType, isValidNumber, getPhoneCode } = require('libphonenumber-js');

/**
 * A general utility class for methods shared by both front and backend
 */
module.exports = class GktUtil {
  /**
   * Checks for validity of email with regex.
   *
   * @param  {String} email
   * @return {Boolean}
   */
  static validEmail(email) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  /**
   * Checks for validity of password with regex.
   *
   * @param  {String} password
   * @return {Boolean}
   */
  static validPassword(password) {
    return GktUtil.containsNumbers(password)
      && GktUtil.isMixedCase(password)
      && GktUtil.containsSpecialCharacters(password)
      && password.length > 8;
  }

  static passwordError() {
    return 'Password Must Contain both an uppercase / lowercase letter, number, and special character.';
  }

  static validUserName(username) {
    const anyLetters = /[a-z]/i;
    return anyLetters.test(username);
  }

  static containsNumbers(string) {
    let numbers = /[0-9]+/;
    return numbers.test(string);
  }

  static containsSpecialCharacters(string) {
    let specialCharacters = /[!@#$%^&*()\-+=?":;<>[{}|~_`',.\]]+/;
    return specialCharacters.test(string);
  }

  static isMixedCase(string) {
    return GktUtil.containsLowerCaseCharacters(string) && GktUtil.containsUpperCaseCharacters(string);
  }

  static containsLowerCaseCharacters(string) {
    let lowerCaseLetters = /[a-z]+/;
    return lowerCaseLetters.test(string);
  }

  static containsUpperCaseCharacters(string) {
    let capitalLetters = /[A-Z]+/;
    return capitalLetters.test(string);
  }

  static isNaNValue(value) {
    return +value != +value;
  }

  static isNotNaN(value) {
    return !GktUtil.isNaNValue(value);
  }

  /**
    Phone number methods
  */
  static isValidNumber(number, country) {
    return typeof country === 'string' ? isValidNumber(number, country) : isValidNumber(number);
  }

  static partialFormat(number, country) {
    const isInternationalFormat = number.charAt(0) === '+';

    if (isInternationalFormat || !country) {
      return new phone.asYouType().input(number);
    }

    return new phone.asYouType(country).input(number);
  }

  /**
    converts a string to a phone number formatted as the specified type
    This method is for formatting an already completed number.
    Use the method `partialFormat` for as-you-type formatting.

    @param (required)
      number {String}
        will be parsed then converted into a given format.
        If you do not provide country, this string must be in e.164 format.

    @param (optional)
      formatType {String}
        3 choices.
        (Default) 'International' - e.g. +1 234 234 2323
        'International_plaintext' - e.g. +12342342323 (This is e.164 format)
        'National' - e.g. (234) 234-2323

      country {String}
        2-letter country code that decides the format.
        If not given, given number must be e.164 so it can be parsed

    @return {String || false} formatted number string or false if invalid number
  */
  static numberFormat(number, formatType = 'International', country) {
    if (typeof number === 'string') {
      let parsed;

      if (country) {
        parsed = parse(number, country);
      }
      else {
        parsed = parse(number);
      }

      if (!parsed.phone) {
        return false;
      }

      return format(parsed, formatType);
    }

    return false;
  }
};
