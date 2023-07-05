// loginValidation.js
const greetingMessage = (user) => {
    return `Hello, ${user}! Que bom ter você de volta`;
  };
  
  const loginErrorMessage = (user) => {
    return `Pessoa usuária ${user} não encontrada, tente novamente!`;
  };
  
  // trazemos aqui esse objeto somente para demonstrar como funciona a função verifyCredentials, mas poderiam ser quaisquer outros dados.
  const user = {
    userName: 'Joana',
    password: 123456,
  };
  
  const verifyCredentials = (userInfo) => {
    const userName = userInfo.userName;
    const password = userInfo.password;
  
    if (password === 123456 && userName === 'Joana') {
      return greetingMessage(userName);
    } else {
      return loginErrorMessage(userName);
    }
  };
  
  module.exports = { greetingMessage, loginErrorMessage, verifyCredentials };

  // loginValidation.test.js
/*const {
    greetingMessage,
    loginErrorMessage,
    verifyCredentials,
  } = require('./loginValidation.js');
  
  describe('a função verifyCredentials()', () => {
    // veja que testamos o objeto `user` agora com outros dados
    const user = {
      userName: 'Bob',
      password: 123456,
    };
  
    it('verifyCredentials() calls the correct function depending on the user and password input', () => {
      expect(verifyCredentials(user)).toBe(
        'Hello, Joana! Que bom ter você de volta'
      );
    });
  
    it('greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`', () => {
      expect(greetingMessage('Lucas')).toBe(
        'Hello, Lucas! Que bom ter você de volta'
      );
    });
  
    it('loginErrorMessage() returns a message in the format: `Pessoa usuária ${user} não encontrada, tente novamente!`', () => {
      expect(loginErrorMessage('Bob')).toBe(
        'Pessoa usuária Bob não encontrada, tente novamente!'
      );
    });
  });*/