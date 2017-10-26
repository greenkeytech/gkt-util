
module.exports = class util {
  constructor() {}

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
    return util.containsNumbers(password) 
      && util.isMixedCase(password)
      && util.containsSpecialCharacters(password)
      && password.length > 8;
  }

  static containsNumbers(string) {
    let numbers = /[0-9]+/;
    return numbers.test(string);
  }

  static containsSpecialCharacters(string) {
    let specialCharacters = /[\!\@\#\$\%\^\&\*\(\)\-\+\=\?\"\:\;\<\>\[\{\}\|\~\_\`\'\,\.\]]+/;
    return specialCharacters.test(string);
  }

  static isMixedCase(string) {
    return util.containsLowerCaseCharacters(string) && util.containsUpperCaseCharacters(string);
  }

  static containsLowerCaseCharacters(string) {
    let lowerCaseLetters = /[a-z]+/;
    return lowerCaseLetters.test(string);
  }

  static containsUpperCaseCharacters(string) {
    let capitalLetters = /[A-Z]+/;
    return capitalLetters.test(string);
  }
}