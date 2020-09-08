// Задание 1

class PrintEditionItem {
     constructor(name, releaseDate, pagesCount) {
          this.name = name;
          this.releaseDate = releaseDate;
          this.pagesCount = pagesCount;
          this.state = 100;
          this.type = null;
     }

     fix() {
          return (this.state *= 1.5);
         }
          set state(state) {
               if (state < 0) {
               return (this._state = 0);
               } else if (state > 100) {
               return (this._state = 100);
               } else {
               return (this._state = state);
               }
          }
      
     get state() {
          return this._state;
     }
}

class Magazine extends PrintEditionItem {
     constructor(name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount)
          this.state = 100;
          this.type = "magazine";
     }
}

class Book extends PrintEditionItem {
     constructor(author, name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.type = "book";
          this.author = author;
     }
}

class NovelBook extends PrintEditionItem {
     constructor(author, name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount)
          this.state = 100;
          this.type = "novel";
          this.author = author;
     }
}

class FantasticBook extends PrintEditionItem {
     constructor(author, name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount)
          this.state = 100;
          this.type = "fantastic";
          this.author = author;
     }
}
class DetectiveBook extends PrintEditionItem {
     constructor(author, name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount)
          this.state = 100;
          this.type = "detective";
          this.author = author;
     }
};



// Задание 2


class Library {
     constructor(name) {
          this.name = name;
          this.books = []; 
     }


     addBook(book) {
          if (book.state > 30)
          return this.books.push(book);
     }

     findBookBy(type, value) {
          for (let key in this.books) {
              if (this.books[key][type] == value)
              return this.books[key];
          }
          return null;
     }


     giveBookByName(bookName) {
          for (let key in this.books) {
               if (this.books[key].name == bookName) 
               return this.books.splice(key, 1)[0];
          }
          return null;
     }
};
