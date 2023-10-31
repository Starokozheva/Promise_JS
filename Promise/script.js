// 1) Создайте функцию delayedTask, которая возвращает промис.
// Функция delayedTask должна принимать два аргумента: 
// taskName (название задачи) и  delay (задержка в миллисекундах).
// Внутри функции, используйте setTimeout для задержки выполнения задачи
// на указанное количество миллисекунд.
// После задержки, функция должна разрешить промис с сообщением, 
// содержащим название задачи и время выполнения.

const delayedTask = (delay) => new Promise(resolve => { 
    const taskName = "Name"; 
    setTimeout(() => resolve({ taskName, delay }), delay); 
}); 
 
delayedTask(3000).then(({ taskName, delay }) => console.log(taskName, delay));



function delayedTask2(taskName, delay) { 
    return new Promise(resolve => { 
        setTimeout(() => resolve({taskName, delay}), delay); 
    }); 
} 
 
delayedTask2("Name", 3000).then(result => console.log(result));



function delayedTask3(taskName, delay) { 
    return new Promise(resolve => { 
        setTimeout(() => { 
            const consoleResult = `${taskName} ${delay}`; 
            resolve(consoleResult); 
        }, delay); 
    }); 
} 
 
delayedTask3("taskName", 3000).then(result => console.log(result));



// 2) Задача: Создайте функцию, которая проверяет, 
// является ли заданное число четным, и возвращает Promise с результатом проверки.
// Если переданное значение не является числом, Promise будет отклонен с сообщением 
// об ошибке.

function checkIfEven(number) {
    return new Promise((resolve, reject) => {
      if (typeof number !== 'number') {
        reject("Ошибка: Введенное значение не является числом");
      } else {
        if (number % 2 === 0) {
          resolve(`${number} является четным числом`);
        } else {
          resolve(`${number} не является четным числом`);
        }
      }
    });
  }
  

  checkIfEven(8)
    .then(result => console.log(result))
    .catch(error => console.error(error));
  
//   checkIfEven("не число")
//     .then(result => console.log(result))
//     .catch(error => console.error(error));
  