let books = ['Улисс', 'Маугли', 'Сияние', 'Ревизор', 'Гамлет', 'Обломов', 'Дюймовочка', 'Шантарам', 'Вий', 'Сильмариллион', 'Оно'];
let minNumber = 3;
let maxNumber = 5;
let filteredBooks = [];

for (let i = 0; i < books.length; i++) {
  const bookName = books[i];
  const nameLength = bookName.length;

  if (nameLength >= minNumber && nameLength <= maxNumber) {
    filteredBooks.push(bookName);
  }
}

console.log(filteredBooks); // выведет массив отфильтрованных книг
