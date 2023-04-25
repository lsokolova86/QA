          // Exercise 1
         //Нарисуйте ромб

//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1


// 
// console.log ("1)========")
// let newStr = '';
// for (let i=1; i<=5; i++){
//     for (let j=1; j<=i; j++){
//         newStr += j
//     }
//     newStr += '\n'
// }
// console.log (newStr)

// console.log ('2)')
// let newStr2 = ''
// let x = 5
// let space = ''
// for (let i=1; i<=x; i++){
//     newStr2 += space.repeat(x-i)
//     for (let j=1; j<=i; i++){
//         newStr2 += j
//     }
//     newStr2 += '\n'
// }
// console.log (newStr2)

// console.log ('3)')
// let newStr4 = ""
// let space = " "
// let x = 5
// for (let i=1; i<=x; i++){
//     newStr4 += space.repeat (i-1)
//     for (let j=1; j<= x+1-i; j++){
//         newStr4 += j
//     }
//     newStr4 += '\n'
// }
// console.log (newStr4)

// console.log ('4)')
// let newStr5 = ''
// //let x = 5
// // let space = " "
// for (let i=1; i<=x; i++){
//     for (let j=x+1-i; j>=1; j--){
//         newStr5 +=j
//     }
//     newStr5 += '\n'
// }
// console.log (newStr5)

// console.log ('5.2)')
// console.log ('54321' + '\n'
// + '4321' + '\n'
// + '321' + '\n'
// + '21' + '\n'
// +'1' + '\n')


// let romb = ''
// x = 10 //5
// let space = " "
// for (i=1; i<=x; i++){
//     romb += space.repeat(x-i)
//     for (let j=1; j<=i; j++){
//         if (j==10){   //remove 10
//          romb += 0
//         }
//        else romb +=j
//     //romb +=j
//     }
//     for (let j=i-1; j>=1; j--){//? let j=1; j<=i; j++}
//         romb +=j
// }
// romb += '\n'
// }
// console.log (romb)

// x=9 //4
// for (let i=1; i<=x; i++){
//     romb += space.repeat(i)  //i-1 if x=5
//     for (let j=1; j<= x+1-i; j++){
//     romb +=j}
// for (let j= x-i; j>=1; j--){
//     romb +=j
// }
// romb +='\n'
// }
// console.log (romb)
               

// Exercise 2
            //Нарисуйте елочку
//     *
//    ***
//   *****
//  *******
// *********

// let tree = ''
// let x=5
// let space = " "
// let sum = 1
// for (let i=1; i<=x; i++){
//     tree += space.repeat(x-i) + "*".repeat (sum) + '\n'
//     sum += 2
// }
// console.log (tree)

// let tree = ''
// let x = 5
// let space = " "
// let sum = x * 2 - 1 // initialize sum to the largest number of stars

// for (let i = x; i >= 1; i--) { // loop from x to 1
//   tree += space.repeat(x - i) + "*".repeat(sum) + '\n'
//   sum -= 2 // decrease sum by 2 for each iteration
// }

// console.log(tree)


               // Exercise 3
         //Нарисуйте треугольник
// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15

// let triangle = ''
// let space = " "
// let x = 5
// for (i=1; i<=x; i++){
// let num = i
// for (let j=1; j<=i; j++){
//     triangle += num + space
//     num = num +(x-j)
// }
// triangle += '\n'
// }
// console.log (triangle)


// ( P.s. “Продумайте код для создания сэндвичей с 3-мя начинками и выставите цену в зависимости от вида начинки. Используйте while and do.. while loops” - это задание с предыдущего потока, его разбор есть в видео, можете не делать, по желанию)

                // Exercise 4
// 4. Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла. 

// let dayDistance = 3
// let nightDown = -2
// let distance = 0
// let days = 0
// let wall = 5
// while ((distance += dayDistance) <=5){
//       days++
//       console.log (`Current distance at the end of ${days} is ${distance} meters`)
//       if (distance == wall)console.log ('Finish!')
//       else console.log ('Keep going')
//       distance += nightDown
// }
                 // Exercise 5
// 5. Задача с интервью*
// У вас есть массив с тремя видами скобок, предположим 
// [ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.
//  Пример:
// [ ‘)’, ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘(‘ ] - у двух нет пары (нарушена последовательность)
// [ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’ ] - у всех есть пара
// [ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘[’, ‘)’ ] - у трех нет пары

// let countOpen = 0
// let countClose = 0
// let result = 0
// let myArr = [ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’]
// for (let i=0; i <myArr.length; i++){
//       if (myArr [i] == '(') countOpen += 1
//       else if (myArr [i] == ')') countClose +=1
//       result = countOpen - countClose
//       console.log (result)
// if (result < 0){
//       console.log ('Wrong')
//       break
// }
// }
// if (countOpen == countClose){
//       console.log ('equal')
// }
// else if (countOpen == countClose) 
// console.log ('not equal')


// Креативное задание*(не показываем решение до понедельника):

// Внедрите в свой код про кофе цикл, там, где это может понадобиться. Добавьте комментарии в код с пояснениями изменений, зачем они нужны.

// Продумайте на будущее план развития своего кода с кофе, где в реальной жизни он мог бы быть использован. Начните создавать мини-документацию к своему проекту. Пропишите требования так, как вы хотели бы их видеть на своем проекте и чтобы посторонний человек мог в них разобраться. Скорее всего, что-то придется добавить или изменить позже.
// Очень полезно, если вы сможете работать парами и проверять друг у друга.
//  (это вам поможет впоследствии писать тест кейсы, тестировать документацию и требования)

