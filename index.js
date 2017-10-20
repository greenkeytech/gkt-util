/**
 * Validates a string as being a valid email or not.
 *
 * @param  {String} html
 * @return {String}
 */
module.exports = {
  validEmail: function(email) {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  },

  validPassword: function(password) {
    let numbers = /[0-9]+/;
    let capitalLetters = /[A-Z]+/;
    let lowerCaseLetters = /[a-z]+/;
    let specialCharacters = /[\!\@\#\$\%\^\&\*\(\)\-\+\=\?\"\:\;\<\>\[\{\}\|\~\_\`\'\,\.\]]+/;

    return numbers.test(password) 
      && capitalLetters.test(password) 
      && lowerCaseLetters.test(password) 
      && specialCharacters.test(password);
  }
}