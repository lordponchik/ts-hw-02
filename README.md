<h1 id="home">Homework :clipboard:</h1>

## ts-hw-02

- 🇺🇸 [English](#en)
- 🇺🇦 [Ukrainian](#uk)
- 🇷🇺 [Russian](#ru)

---

<h3 id="en">📚 EN 📚</h3>

# Acceptance criteria

- Repository created `ts-hw-02`
- When submitting homework there is a link to the source files in the repository
- Each task is executed in a separate file named `task-task_number.js`. Use `<script type="module">`
  to close the job code in a separate scope and avoid identifier name conflicts.
- Variable names are clear and descriptive
- Code formatted using Prettier

# Task 1

Write a `logItems(array)` function that takes an array and uses a `for` loop to each element of the
array will output a message to the console in the format `[element number] - [element value]`.

Numbering must start with `1`. For example, for the first element of the array
`['Mango', 'Poly', 'Ajax']` with index `0` will print `'1 - Mango'`, and for index `2` it will print
`'3 - Ajax'`.

```js
const logItems = function (array) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
```

# Task 2

Write a script for calculating the cost of engraving jewelry. To do this, create a function
`calculateEngravingPrice(message, pricePerWord)` receiving string (the string will contain only
words and spaces) and the cost of engraving one word, and the returning cost of engraving all the
words in the line.

```js
const calculateEngravingPrice = function (message, pricePerWord) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
```

# Task 3

Write a function `findLongestWord(string)` that takes an arbitrary string as a parameter (in the
line there will be only words and spaces) and returns the longest word in this string.

```js
const findLongestWord = function (string) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
```

# Task 4

Write a function `formatString(string)` that takes a string and formats it if necessary.

- If the length of the string does not exceed `40 characters`, the function returns it in its
  original form.
- If the length is more than `40 characters`, then the function trims the string to 40 characters
  and adds it to the end strings with an ellipsis `'...'`, followed by a shortened version.

```js
const formatString = function (string) {
  // твой код
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// the original string will be returned

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// will return a formatted string

console.log(formatString('Curabitur ligula sapien.'));
// the original string will be returned

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// will return a formatted string
```

# Task 5

Write a function `checkForSpam(message)` that takes 1 parameter `message` - a string. The function
checks it on the content of the words `spam` and `sale`. If a forbidden word is found, the function
returns `true`, if there are no prohibited words, the function returns `false`. Words in a line can
be in any order register.

```js
const checkForSpam = function (message) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
```

# Task 6

Write a script with the following functionality:

- When loading the page, the user is prompted to enter a number in the `prompt`. The entry is saved
  in variable `input` and added to the array of numbers `numbers`.
- The operation of entering a number by the user and storing it in an array continues until the user
  will not click `Cancel` in the `prompt`.
- After the user has stopped entering by clicking `Cancel`, if the array is not empty, it is
  necessary calculate the sum of all elements of the array and write it to the `total` variable. Use
  a `for` loop or `for...of`. Then print the line ``The total sum of numbers is equal to [sum]'`
  into the console.

🔔 Checking that the user entered exactly a number and not an arbitrary set of characters is not
Necessarily. If you want, in case of incorrect input, show `alert` with text
`'The entered number was not a number, try again'`, and the result of `prompt` is written to an
array of numbers not necessary, after which the user is again prompted to enter a number in the
`prompt`.

```js
let input;
const numbers = [];
let total = 0;
```

# Task 7 - additional, not necessary

There is an array `logins` with user logins. Write a script for adding a login to the `logins`
array. The login you add must:

- be checked for length from 4 to 16 characters inclusive
- be unique, that is, absent from the `logins` array

Break a task into subtasks using functions.

Write a function `isLoginValid(login)`, in which you check the number of characters of the `login`
parameter and return `true` or `false` depending on whether the length of the parameter falls within
the given range from 4 to 16 characters inclusive.

Write a function `isLoginUnique(allLogins, login)` that takes a list of all logins and adding login
as parameters and checks for the presence of `login` in the `allLogins` array, returning `true` if
there is no such login yet and `false` if the login is already in use.

Write a function `addLogin(allLogins, login)` that:

- Accepts a new login and an array of all logins as parameters
- Checks the validity of the login using the `isLoginValid` auxiliary function
- If the login is not valid, stop executing the `addLogin` function and return the string
  ``Error! Login must be from 4 to 16 characters'`
- If the login is valid, the `addLogin` function checks the uniqueness of the login using the
  function `isLoginUnique`
- If `isLoginUnique` returns `false`, then `addLogin` does not add the login to the array and
  returns the line `'This login is already in use!'`
- If `isLoginUnique` returns `true`, `addLogin` adds the new login to `logins` and returns the line
  `'Login added successfully!'`

🔔 **Principle of single responsibility of a function** - each function does one thing. This allows
you to reuse code and change the logic of a function in only one place, without affecting the
operation of the program as a whole.

Predicate functions only return `true` or `false`. Such functions are usually called starting with
`is`: `isLoginUnique` and `isLoginValid` in our case.

- `isLoginUnique` only checks whether there is such a login in the array and returns `true` or
  `false`.
- `isLoginValid` only checks whether the login is valid and returns `true` or `false`.
- `addLogin` adds or does not add a login to the array. At the same time, for checks, the conditions
  for adding uses the results of calls to other functions - `isLoginUnique` and `isLoginValid`.

```js
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  // code
};

const isLoginUnique = function (allLogins, login) {
  // code
};

const addLogin = function (allLogins, login) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(addLogin(logins, 'Ajax')); // 'Login added successfully!'
console.log(addLogin(logins, 'robotGoogles')); // 'This login is already in use!'
console.log(addLogin(logins, 'Zod')); // 'Error! Login must be from 4 to 16 characters'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Error! Login must be from 4 to 16 characters'
```

---

---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3>

- Створено репозиторій `ts-hw-02`
- При здачі домашньої роботи є посилання на вихідні файли у репозиторії
- Кожне завдання виконане в окремому файлі з ім'ям `task-номер_задания.js`. Використовуй
  `<script type="module">` щоб закрити код завдання в окремій області видимості та уникнути
  конфліктів імен ідентифікаторів
- Імена змінних та функцій зрозумілі, описові
- Код відформатовано за допомогою Prettier

# Завдання 1

Напиши функцію `logItems(array)`, яка отримує масив і використовує цикл `for`, який для кожного
елемента масиву виводитиме в консоль повідомлення у форматі
`[Номер елемента] - [значення елемента]`.

Нумерація має починатися з `1`. Наприклад для першого елемента масиву `['Mango', 'Poly', 'Ajax']` з
індексом `0` буде виведено `'1 - Mango'`, а для індексу `2` виведе `3 - Ajax`.

```js
const logItems = function (array) {
  // твій код
};

/*
 * Виклики функцій для перевірки працездатності твоєї реалізації.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
```

# Завдання 2

Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію
`calculateEngravingPrice(message, pricePerWord)` приймаючий рядок (у рядку будуть лише слова та
пробіли) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів у рядку.

```js
const calculateEngravingPrice = function (message, pricePerWord) {
  // твій код
};

/*
 * Виклики функцій для перевірки працездатності твоєї реалізації.
 */
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
```

# Завдання 3

Напиши функцію `findLongestWord(string)`, яка приймає параметром довільний рядок (у рядку будуть
тільки слова та прогалини) і повертає найдовше слово в цьому рядку.

```js
const findLongestWord = function (string) {
  // твій код
};

/*
 * Виклики функцій для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
```

# Завдання 4

Напиши функцію `formatString(string)` яка приймає рядок і форматує його, якщо необхідно.

- Якщо довжина рядка не перевищує 40 символів, функція повертає її у вихідному вигляді.
- Якщо довжина більше 40 символів, то функція обрізає рядок до 40 символів і додає в кінець рядки
  трикрапка `'...'`, після чого повертає укорочену версію.

```js
const formatString = function (string) {
  // твій код
};

/*
 * Виклики функцій для перевірки працездатності твоєї реалізації.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// повернеться оригінальний рядок

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// повернеться оригінальний рядок

console.log(formatString('Curabitur ligula sapien.'));
// повернеться оригінальний рядок

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вповернеться оригінальний рядок
```

# Завдання 5

Напиши функцію `checkForSpam(message)`, що приймає 1 параметр `message` - рядок. Функція перевіряє
її на зміст слів `spam` та `sale`. Якщо знайшли заборонене слово, то функція повертає `true`, якщо
заборонених слів немає функція повертає `false`. Слова у рядку можуть бути у довільному регістрі.

```js
const checkForSpam = function (message) {
  // твій код
};

/*
 * Виклики функцій для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
```

# Завдання 6

Напиши скрипт із наступним функціоналом:

- При завантаженні сторінки користувачеві пропонується в `prompt` ввести число. Введення
  зберігається в змінну `input` і додається до масиву чисел `numbers`.
- Операція введення числа користувачем та збереження в масив триває доти, доки користувач не натисне
  `Cancel` у `prompt`.
- Після того, як користувач припинив введення натиснувши `Cancel`, якщо масив не порожній, необхідно
  порахувати суму всіх елементів масиву та записати її в змінну `total`. Використовуй цикл `for` або
  `for...of`. Після чого в консоль виведи рядок `'Загальна сума чисел дорівнює [сума]'`.

🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не
обов'язково. Якщо хочеш, у разі некоректного введення, показуй `alert` з текстом "Було введено не
число, спробуйте ще раз", при цьому результат `prompt` записувати в масив чисел не потрібно, після
чого знову користувачеві пропонується ввести число в prompt.

```js
let input;
const numbers = [];
let total = 0;
```

# Завдання 7 - додаткове, виконувати не обов'язково

Є масив `logins` із логінами користувачів. Напиши скрипт додавання логіну в масив `logins`. Доданий
логін повинен:

- проходити перевірку на довжину від 4 до 16 символів включно
- бути унікальним, тобто відсутнім у масиві `logins`

Розбий завдання на підзавдання за допомогою функцій.

Напиши функцію `isLoginValid(login)`, в якій перевір кількість символів параметра `login` і поверни
`true` або `false` залежно від того, чи попадає довжина параметра в заданий діапазон від 4-х до 16
символів включно.

Напиши функцію `isLoginUnique(allLogins, login)`, яка приймає список усіх логінів та додається логін
як параметри і перевіряє наявність `login` у масиві `allLogins`, повертаючи `true` якщо такого
логіну ще немає і `false` якщо логін використовується.

Напиши функцію `addLogin(allLogins, login)` яка:

- Приймає новий логін та масив усіх логінів як параметри
- Перевіряє валідність логіну, використовуючи допоміжну функцію `isLoginValid`
- Якщо логін не валідний, припинити виконання функції `addLogin` і повернути рядок ` Помилка! Логін
  повинен бути від 4 до 16 символів
- Якщо логін валіден, функція `addLogin` перевірятиме унікальність логіну за допомогою функції
  `isLoginUnique`
- Якщо `isLoginUnique` поверне `false`, тоді `addLogin` не додає логін до масиву і повертає рядок
  `'Такий логін вже використовується!'`
- Якщо `isLoginUnique` поверне `true`, `addLogin` додає новий логін у `logins` і повертає рядок
  `'Логін успішно доданий!'`

🔔 **Принцип єдиної відповідальності функції** - кожна функція робить щось одне. Це дозволяє
перевикористовувати код та змінювати логіку роботи функції лише в одному місці, не торкаючись роботу
програми загалом.

Предикатні функції повертають тільки `true` або `false`. Такі функції прийнято називати починаючи з
`is`: `isLoginUnique` та `isLoginValid` у нашому випадку.

- `isLoginUnique` тільки перевіряє чи є такий логін у масиві і повертає `true` або `false`.
- `isLoginValid` тільки перевіряє чи валідний логін і повертає `true` або `false`.
- `addLogin` додає чи не додає логін до масиву. При цьому для перевірок умови додавання використовує
  результати викликів інших функцій - `isLoginUnique` та `isLoginValid`.

```js
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  // твій код
};

const isLoginUnique = function (allLogins, login) {
  // твій код
};

const addLogin = function (allLogins, login) {
  // твій код
};

/*
 * Виклики функцій для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін має бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін має бути від 4 до 16 символів'
```

---

---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Критерии приема

- Создан репозиторий `ts-hw-02`
- При сдаче домашней работы есть ссылка на исходные файлы в репозитории
- Каждое задание выполнено в отдельном файле с именем `task-номер_задания.js`. Используй
  `<script type="module">` чтобы закрыть код задания в отдельной области видимости и избежать
  конфликтов имен идентификаторов.
- Имена переменных и функций понятные, описательные
- Код отформатирован с помощью Prettier

# Задание 1

Напиши функцию `logItems(array)`, которая получает массив и использует цикл `for`, который для
каждого элемента массива будет выводить в консоль сообщение в формате
`[номер элемента] - [значение элемента]`.

Нумерация должна начинаться с `1`. К примеру для первого элемента массива
`['Mango', 'Poly', 'Ajax']` с индексом `0` будет выведено `'1 - Mango'`, а для индекса `2` выведет
`'3 - Ajax'`.

```js
const logItems = function (array) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
```

# Задание 2

Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию
`calculateEngravingPrice(message, pricePerWord)` принимающую строку (в строке будут только слова и
пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

```js
const calculateEngravingPrice = function (message, pricePerWord) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
```

# Задание 3

Напиши фукцнию `findLongestWord(string)`, которая принимает параметром произвольную строку (в строке
будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

```js
const findLongestWord = function (string) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
```

# Задание 4

Напиши функцию `formatString(string)` которая принимает строку и форматирует ее если необходимо.

- Если длина строки не превышает `40 символов`, функция возвращает ее в исходном виде.
- Если длина больше `40 символов`, то функция обрезает строку до 40-ка символов и добавляет в конец
  строки троеточие `'...'`, после чего возвращает укороченную версию.

```js
const formatString = function (string) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка
```

# Задание 5

Напиши функцию `checkForSpam(message)`, принимающую 1 параметр `message` - строку. Функция проверяет
ее на содержание слов `spam` и `sale`. Если нашли зарещенное слово то функция возвращает `true`,
если запрещенных слов нет функция возвращает `false`. Слова в строке могут быть в произвольном
регистре.

```js
const checkForSpam = function (message) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
```

# Задание 6

Напиши скрипт со следующим функционалом:

- При загрузке страницы пользователю предлагается в `prompt` ввести число. Ввод сохраняется в
  переменную `input` и добавляется в массив чисел `numbers`.
- Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока
  пользователь не нажмет `Cancel` в `prompt`.
- После того как пользователь прекратил ввод нажав `Cancel`, если массив не пустой, необходимо
  посчитать сумму всех элементов массива и записать ее в переменную `total`. Используй цикл `for`
  или `for...of`. После чего в консоль выведи строку `'Общая сумма чисел равна [сумма]'`.

🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не
обязательно. Если хочешь, в случае некорректного ввода, показывай `alert` с текстом
`'Было введено не число, попробуйте еще раз'`, при этом результат `prompt` записывать в массив чисел
не нужно, после чего снова пользователю предлагается ввести число в `prompt`.

```js
let input;
const numbers = [];
let total = 0;
```

# Задание 7 - дополнительное, выполнять не обязательно

Есть массив `logins` с логинами пользователей. Напиши скрипт добавления логина в массив `logins`.
Добавляемый логин должен:

- проходить проверку на длину от 4 до 16-ти символов включительно
- быть уникален, то есть отсутствовать в массиве `logins`

Разбей задачу на подзадачи с помощью функций.

Напиши функцию `isLoginValid(login)`, в которой проверь количество символов параметра `login` и
верни `true` или `false` в зависимости от того, попадает ли длина параметра в заданный диапазон от
4-х до 16-ти символов включительно.

Напиши функцию `isLoginUnique(allLogins, login)`, которая принимает список всех логинов и
добавляемый логин как параметры и проверяет наличие `login` в массиве `allLogins`, возвращая `true`
если такого логина еще нет и `false` если логин уже используется.

Напиши функцию `addLogin(allLogins, login)` которая:

- Принимает новый логин и массив всех логинов как параметры
- Проверяет валидность логина используя вспомогательную функцию `isLoginValid`
- Если логин не валиден, прекратить исполнение функции `addLogin` и вернуть строку
  `'Ошибка! Логин должен быть от 4 до 16 символов'`
- Если логин валиден, функция `addLogin` проверяеть уникальность логина с помощью функции
  `isLoginUnique`
- Если `isLoginUnique` вернет `false`, тогда `addLogin` не добавляет логин в массив и возвращает
  строку `'Такой логин уже используется!'`
- Если `isLoginUnique` вернет `true`, `addLogin` добавляет новый логин в `logins` и возвращает
  строку `'Логин успешно добавлен!'`

🔔 **Принцип единственной ответственности функции** - каждая функция делает что-то одно. Это
позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая
работу программы в целом.

Предикатные функции возвращают только `true` или `false`. Такие функции принято называть начиная с
`is`: `isLoginUnique` и `isLoginValid` в нашем случае.

- `isLoginUnique` только проверяет есть ли такой логин в массиве и возвращает `true` или `false`.
- `isLoginValid` только проверяет валидный ли логин и возвращает `true` или `false`.
- `addLogin` добавляет или не добавляет логин в массив. При этом для проверок условия добавления
  использует результаты вызовов других функций - `isLoginUnique` и `isLoginValid`.

```js
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  // твой код
};

const isLoginUnique = function (allLogins, login) {
  // твой код
};

const addLogin = function (allLogins, login) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
```
