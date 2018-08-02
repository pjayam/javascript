// console.log(navigator.appVersion)

//Object Literal
// const book1 = {
//     title : 'Javascript',
//     author: 'pavan',
//     getName : function(){
//         return `${this.title} written by ${this.author}`;
//     }
// }
// console.log(book1.getName())
// console.log(Object.values(book1))
// console.log(Object.keys(book1))

//Constructor
// function Book(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.getSummary = function(){
//         return `${this.title} written by ${this.author} in ${this.year}`;
//     }
// }

// const b1 = new Book('A','B',12);
// console.log(b1);
// console.log(b1.getSummary())

//Prototypes
// function Book(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
    
// }
// //Get summary
// Book.prototype.getSummary = function(){
//     return `${this.title} written by ${this.author} in ${this.year}`;
// }

// //Get Age
// Book.prototype.getAge = function(){
//     const years = new Date().getFullYear()-this.year;
//     return `Age of the book is ${years} years`;

// }

// const b1 = new Book('A','B',2006);
// console.log(b1);
// console.log(b1.getSummary())
// console.log(b1.getAge())


//Inheritance
// function Book(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
    
// }
// //Get summary
// Book.prototype.getSummary = function(){
//     return `${this.title} written by ${this.author} in ${this.year}`;
// }

// function Magazine(title, author, year, month){
//     Book.call(this, title, author, year);
//     this.month = month;
// }

// //Inherit prototype
// Magazine.prototype = Object.create(Book.prototype);

// //Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;

// const m1 = new Magazine('Mag1','Aut', 2017, 8);
// console.log(m1);
// console.log(m1.getSummary())

//Object Create
// const bookProtos = {
//     getSummary: function(){
//         return `${this.title} written by ${this.author} in ${this.year}`;
//     },
//     getAge: function(){
//         const years = new Date().getFullYear()-this.year;
//         return `Age of the book is ${years} years`;

//     }
// }

// //One method of doing it
// // const book1 = Object.create(bookProtos);
// // book1.title = 'Title1';
// // book1.author = 'Author 1';
// // book1.year = 1987;

// const book1 = Object.create(bookProtos,{
//     title:{value:'Book1'},
//     author:{value:'auasdsdth 1'},
//     year:{value:1987}
// });

// console.log(book1);


//CLASSES

// class Book{
//     constructor(title, author, year){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary(){
//         return `${this.title} written by ${this.author} in ${this.year}`;
//     }

//     getAge(){
//         const years = new Date().getFullYear()-this.year;
//         return `Age of the book is ${years} years`;
//     }

//     static topBookStore(){
//         return 'Static Method';
//     }
// }
// console.log(Book.topBookStore());

// //Instantiate Objects
// const book1 = new Book('Mag1','Aut', 2017)

// console.log(book1.getAge());


//SUB CLASSES

class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} written by ${this.author} in ${this.year}`;
    }

    getAge(){
        const years = new Date().getFullYear()-this.year;
        return `Age of the book is ${years} years`;
    }

    static topBookStore(){
        return 'Static Method';
    }
}

class Magazine extends Book{
    constructor(title, author, year, month){
        super(title,author,year);
        this.month = month;
    }
}

const mag1 = new Magazine('Mag1','Aut', 2017, 8);
console.log(mag1);
console.log(mag1.getSummary());














