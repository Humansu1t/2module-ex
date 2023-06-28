/*
  ЗАДАЧА:
  Напишите функцию-генератор для получения уникальных идентификаторов.
*/

function createIdGenerator () {
    let lastGeneratedId = 0;
  
    return function () {
      lastGeneratedId += 1;
      return lastGeneratedId;
    };
  }
  
  const generatePhotoId = createIdGenerator();
  const generateCommentId = createIdGenerator();
  
  console.log(generatePhotoId()); // 1
  console.log(generatePhotoId()); // 2
  console.log(generateCommentId()); // 1
  console.log(generatePhotoId()); // 3