class PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix(){
    state = state * 1.5;
  }

  set stateAdjust(state) {
    if (this.state < 0) {
      this.this.state = 0;
    } else if (this.this.state > 100) {
        this.state = 100;
    } else {
      this.state = state;
    }
  }
   get stateAdjust(){
    return this.state;
   }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author){
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
    }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = 'novel';s
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = 'detective';    
  }
}

class Library{
  constructor(name, books){
    this.name = name;
    this.books = [];
  }

  addBook(book){
    if (state > 30) {
        this.books.push(book);
    }
  }

  findBookBy(type, value){
    if (this.type.includes(value)){
      return (type +'книга найдена');
    } else {
        return null; 
      }
  }  

  giveBookByName(bookName){
    if (this.name === bookName){
        return bookName;
    } else {
        return null;
      }
  }


}