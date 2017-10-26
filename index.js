/**
 * Validates a string as being a valid email or not.
 *
 * @param  {String} html
 * @return {String}
 */
module.exports = {
  validEmail: function(email) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
      && specialCharacters.test(password)
      && password.length > 8;
  }
}