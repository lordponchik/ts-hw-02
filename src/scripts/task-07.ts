console.log('task-07');

type IsLoginValid = (login: string) => boolean;
type IsLoginUnique = (allLogins: string[], login: string) => boolean;
type AddLogin = (allLogins: string[], login: string) => string;

const logins: string[] = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid: IsLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique: IsLoginUnique = function (allLogins, login) {
  return allLogins.includes(login);
};

const addLogin: AddLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  if (isLoginUnique(allLogins, login)) {
    return 'Такой логин уже используется!';
  }

  allLogins.push(login);

  return 'Логин успешно добавлен!';
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

export {};
