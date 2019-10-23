
// В массиве, содержащем положительные и отрицательные целые числа, вычислить сумму четных положительных элементов.


// var arr = [1, 2, 3, 4, 2, 7, 8, 4, 12];
// var b = arr.filter(function (item, i) {
//   return item > 0 && item % 2 === 0;
// });
// var c = b.reduce(function (sum, x) {

//   return sum + x;

// }, 0);
// console.log(c);

// var arr = [1, -2, 3, 4, 2, 7, 8, 4, -12];

// function b() {
//   var c = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] % 2 === 0) {
//       c += arr[i];
//     }
//   }
//   return console.log(c);
// }

// b();

// В массиве найти максимальный элемент с четным индексом.

// Другая формулировка задачи: среди элементов массива с четными индексами, найти тот, который имеет максимальное значение.

// var arr = [1, 66, 55, 35, 2, 7, 24, 4, -12];

// function b() {
//   c = [];

//   for (i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       c.push(arr[i]);
//     }
//   }
//   return Math.max.apply(null, c);

// }
// console.log(b());

// var arr = [1, 66, 55, 35, 77, 7, 24, 4, -12];

// var c = arr.filter(function (item, i) {
//   return i % 2 == 0;
// })

// function b() {
//   return Math.max.apply(null, c);
// }
// console.log(b());

// Найти в массиве те элементы, значение которых меньше среднего арифметического, взятого от всех элементов массива.


// var arr = [1, 5, 4, -7, 2, 7, -7, 1, 3, -9];

// var c = arr.reduce(function (sum, item) {
//   var x = sum + item;
//   item < x;
//   return item;
// }, 0)
// console.log(c);

// function c() {
//   var b = 0;
//   for (i = 0; i < arr.length; i++) {
//     b += arr[i];
//   }

//   var x = arr.filter(function (item) {
//     return item < b;
//   })
//   console.log(x);
// }

// console.log(c());

// В одномерном массиве целых чисел определить два наименьших элемента.Они могут быть как равны между собой(оба являться минимальными), так и различаться.

// var arr = [1, 5, 4, -3, 2, 7, -7, 1, 3, -9];

// function c() {
//   arr.sort(function (a, b) {
//     return a - b;
//   })
//   console.log(arr[0], arr[1]);
// }
// c();

// Сжать массив, удалив из него все элементы, величина которых находится в интервале[а, b].Освободившиеся в конце массива элементы заполнить нулями.


// console.log(arr);
// function c() {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > -7 && arr[i] < 4) {
//       arr[i] = 0;
//     }
//   }
//   return console.log(arr);

// }
// c();


// Вычислить сумму модулей элементов массива, расположенных после первого отрицательного элемента.

//   Например, в массиве[5, 3, -1, 8, 0, -6, 1] первый отрицательный элемент является третьим по счету, а сумма модулей стоящих после него элементов массива будет составлять 8 + 0 + 6 + 1 = 15.

// var arr = [1, 5, 4, -3, 2, 7, -7, 1, 3, -9];

// console.log(arr);
// function c() {
//   var i = 0;
//   while (arr[i] >= 0) {
//     arr.shift(arr[i]);
//     i++;
//   }
//   var x = arr.reduce(function (sum, item) {
//     return sum + Math.abs(item);
//   }, 0);
//   console.log(x);
// }
// c();

// Найти номер минимального по модулю элемента массива.

//   Например, в массиве[10, -3, -5, 2, 5] минимальным по модулю элементом является число 2. Его номер 4(в языках, в которых индексация массивов начинается с нуля, его индекс будет равен 3).


// var arr = [1, 5, 4, -3, 2, 7, -7, 1, 3, -9];

// function c() {
//   var x = arr.map(function (item) {
//     return Math.abs(item);
//   })
//   return console.log(Math.min.apply(null, x));
// }
// c();

// Найти сумму всех цифр целочисленного массива.Например, если дан массив[12, 104, 81], то сумма всех его цифр будет равна 1 + 2 + 1 + 0 + 4 + 8 + 1 = 17.


// var arr = [100, 101, 102];
// function c() {
//   var x = arr.join('');
//   var y = x.split('');
//   var z = y.reduce(function (sum, item) {
//     return sum + Number(item);
//   }, 0)
//   return console.log(z);
// }
// c();

// В одномерном массиве найти сумму элементов, находящихся между минимальным и максимальным элементами.Сами минимальный и максимальный элементы в сумму не включать.

// var arr = [5, -2, -4, 2, -7, -7, 1, -6, 4];



// function c() {
//   let a = arr.indexOf(Math.min.apply(null, arr));
//   let b = arr.indexOf(Math.max.apply(null, arr));
//   let x;
//   if (a < b) {
//     x = arr.slice(a + 1, b);
//   } else {
//     x = arr.slice(b + 1, a);
//   }
//   let z = x.reduce(function (sum, item) {
//     return sum + item;
//   }, 0)
//   return z;
// }
// console.log(c());


// Найти среднее арифметическое положительных элементов линейного массива.
// var arr = [5, -2, -4, 2, 7, -7, 1, -6, 4];

// function c() {
//   let a = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       a += arr[i];
//     }
//   }
//   return a;
// }
// console.log(c());

// В массиве найти максимальный отрицательный элемент.Вывести на экран его значение и позицию в массиве.

// var arr = [5, -2, -4, 2, 7, -7, 1, -9, 4];

// function c() {
//   return console.log(arr.indexOf(Math.min.apply(null, arr)))
// }
// c();

// В массиве случайных целых чисел поменять местами минимальный и максимальный элементы.

// var arr = [-10, -9, -4, 2, 7, 2, 3, 3, 10];


// arr = arr.map(item => {
//   if (item == Math.min.apply(null, arr)) {
//     item = Math.max.apply(null, arr);
//   } else if (item == Math.max.apply(null, arr)) {
//     item = Math.min.apply(null, arr);
//   }
//   return item;
// })

// console.log(arr);

