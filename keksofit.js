/**
 * KeksoFit v0.1
 * Author: @keksobot
 * License: CatoFree, NoDogs
 */

let timeInMinutes = 180;
let jumps = timeInMinutes / 10 * 3 ;
let message = 'За '+ timeInMinutes + ' минут в соцсетях полагается '+ jumps + ' прыжков.';
console.log(message)
/*
Время в соцсетях хранится в переменной timeInMinutes.
Я сам запишу туда значение, звонить мне на пейджер НЕ надо.

За каждые 10 минут, которые я провёл в соцсетях, я получаю 3 прыжка.
Например: за 50 минут я должен сделать 15 прыжков.
Прыжки храним в переменной jumps.

Сообщение склеиваем из трёх строк: 'За ', ' минут в соцсетях полагается ', ' прыжков.' – и двух переменных: timeInMinutes и jumps.
Например: 'За 50 минут в соцсетях полагается 15 прыжков.'
Сообщение записываем в переменную message.
*/