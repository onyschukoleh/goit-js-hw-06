"use strict";
import users from "./users.js";
console.log("users: ", users);
//////////////////////////////////////////////////////////
//Задание 1 Получить массив имен всех пользователей (поле name).
//////////////////////////////////////////////////////////
function getUserNames(arr) {
  return arr.map((user) => user.name);
}

console.log("#1: ", getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
//////////////////////////////////////////////////////////
//Задание 2 Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// //////////////////////////////////////////////////////////
function getUsersWithEyeColor(arr, color) {
  return arr.filter((user) => user.eyeColor.includes(color));
}

console.log("#2: ", getUsersWithEyeColor(users, "blue"));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//////////////////////////////////////////////////////////
// Задание 3 Получить массив имен пользователей по полу (поле gender).
//////////////////////////////////////////////////////////
function getUsersWithGender(arr, gender) {
  return arr
    .filter((user) => {
      if (user.gender === gender) return user.name;
    })
    .map((user) => user.name);
}

console.log("#3: ", getUsersWithGender(users, "male"));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//////////////////////////////////////////////////////////
// Задание 4 Получить массив только неактивных пользователей (поле isActive).
//////////////////////////////////////////////////////////
function getInactiveUsers(arr) {
  return arr.filter((user) => !user.isActive);
  // return arr.filter((user) => user.eyeColor.includes(color));
}
console.log("#4: ", getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//////////////////////////////////////////////////////////
// Задание 5 Получить пользоваля (не массив) по email (поле email, он уникальный).
//////////////////////////////////////////////////////////
function getUserWithEmail(objects, email) {
  return objects.filter((object) => object.email.includes(email));
}

console.log("#5: ", getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log("#5: ", getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

//////////////////////////////////////////////////////////
// Задание 6 Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
//////////////////////////////////////////////////////////
function getUsersWithAge(objects, min, max) {
  return objects.filter((object) => object.age > min && object.age < max);
  // return objects.filter((object) => object.age > min).filter((object) => object.age < max);
}

console.log("#6: ", getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log("#6: ", getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//////////////////////////////////////////////////////////
// Задание 7 Получить общую сумму баланса (поле balance) всех пользователей.
//////////////////////////////////////////////////////////
function calculateTotalBalance(objects) {
  return objects.reduce((acc, object) => acc + object.balance, 0);
}
console.log("#7: ", calculateTotalBalance(users)); // 20916

//////////////////////////////////////////////////////////
// Задание 8 Массив имен всех пользователей у которых есть друг с указанным именем.
//////////////////////////////////////////////////////////
function getUsersWithFriend(objects, friendName) {
  return objects
    .filter((object) => object.friends.includes(friendName))
    .map((object) => object.name);
}

console.log("#8: ", getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log("#8: ", getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

//////////////////////////////////////////////////////////
// Задание 9 Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
//////////////////////////////////////////////////////////
function getNamesSortedByFriendsCount(objects) {
  return [...objects]
    .sort((a, b) =>
      //  -1 <
      {
        if ([...a.friends].length < [...b.friends].length) {
          return -1;
        }
        // 1 >
        if ([...a.friends].length > [...b.friends].length) {
          return 1;
        }
        // 0 =
        return 0;
      }
    )
    .map((object) => object.name);
}

console.log("#9: ", getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//////////////////////////////////////////////////////////
// Задание 10 Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
//////////////////////////////////////////////////////////
function getSortedUniqueSkills(objects) {
  // return objects.map((object) => object.skills.flat());
  return objects
    .reduce((acc, object) => acc.concat(object.skills), [])
    .filter((item, index, arr) => index === arr.indexOf(item))
    .sort();
  // твой код
}

console.log("#10: ", getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nu
