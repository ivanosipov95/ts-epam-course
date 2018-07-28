import {Category} from './enums';
import {DamageLogger, Librarian, Author, Person, Book, Magazine} from './interfaces';
import {
    getBooksByCategory,
    getBooksByCategoryPromise,
    logCategorySearch,
    logSearchResults,
    purge
} from './lib/utility-functions';
import RefBook from './encyclopedia';
import Shelf from './shelf';
import {UniversityLibrarian} from './classes';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}



// Task 01.
// logFirstAvailable(getAllBooks());


//-------------------------------------------------------------------------------------

// Task 02.
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

//-------------------------------------------------------------------------------------


// Task 03. Arrow Functions
// getBookTitlesByCategory(Category.JavaScript).forEach(title => console.log(title));
//
// console.log(getBookByID(4));

//-------------------------------------------------------------------------------------


// Task 04. Function Type
// let myID: string = createCustomerID('Ann', 10);
// console.log(myID);
//
// let IdGenerator: (name: string, id: number) => string;
// IdGenerator = createCustomerID;
//
// myID = IdGenerator("Ivan", 23);
// console.log(myID);

//-------------------------------------------------------------------------------------

// Task 05. Optional, Default and Rest Parameters
// createCustomer('Ivan');
// createCustomer('Ivan', 23);
// createCustomer('Ivan', 23, 'spb');

// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// myBooks.forEach(title => console.log(title));

//-------------------------------------------------------------------------------------

// Task 06. Function Overloading

//-------------------------------------------------------------------------------------

// Task 07. Defining an Interface

// let myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     markDamaged: reason => console.log(`Damaged: ${reason}`)
// };
//
// printBook(myBook);
//
// myBook.markDamaged('missing back cover');

//-------------------------------------------------------------------------------------


// Task 08. Defining an Interface for Function Types

// const logDamage: DamageLogger = (damage: string) => console.log(`Damage: ${damage}`);
//
// logDamage('Stain');


//-------------------------------------------------------------------------------------


// Task 09. Extending Interface

// const favoriteAuthor: Author = {
//     name: 'Ann',
//     email: 'Ann@gmail.com',
//     numBookSPublished: 10
// };
//
// const favoriteLibrarian: Librarian = {
//     name: 'Ann',
//     email: 'Ann@gmail.com',
//     department: 'software',
//     assistCustomer: (custName: string) => console.log(custName)
// };


//-------------------------------------------------------------------------------------

// Task 10. Interfaces for Class Types

// const favoriteLibrarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Ann';
// favoriteLibrarian.assistCustomer('Boris');
//
// favoriteLibrarian.assistFaculty = () => console.log(`!!!!`);
//
// favoriteLibrarian.assistFaculty();
// try {
//     favoriteLibrarian.teachCommunity = () => console.log(`asd`);
// } catch (e) {
//     console.log(e);
// }
// favoriteLibrarian.teachCommunity();


// Task 11. Creating and Using Classes

// const ref = new ReferenceItem('Title', 2018);
// ref.printItem();
// ref.publisher = 'random publisher';
//
// console.log(ref.publisher);


// Task 12. Extending Classes
//
// const refBook = new RefBook('Our Title', 2018, 10);
// refBook.printItem();


// Task 17.
// const inventary: Array<Book> = [
//     {id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software},
//     {id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software},
//     {id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software},
//     {id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software}
// ];

// const result1 = purge<Book>(inventary);
// console.log(result1);
// const result2 = purge([1, 2, 3, 4]);
// console.log(result2);

// Task 18

// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventary.forEach(book => {
//    bookShelf.add(book);
// });
//
// const firstBook: Book = bookShelf.getFirst();
// console.log(firstBook);
//
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
//
// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
//
// const firstMag = magazineShelf.getFirst();
// console.log(firstMag);
//
// // Task 19.
//
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// Task 20.1 class decorator

// Task 22
// console.log('Begin...');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// console.log('End...');

// Task 23
// console.log('Begin...');
// getBooksByCategoryPromise(Category.Software)
//     .then((titles: string[]) => console.log(titles))
//     .catch((err) => console.log(`Error: ${err}`));
//
// console.log('End...');

// Task 24
console.log('Beginning search...');
logSearchResults(Category.JavaScript)
    .catch(reason => console.log(reason));
console.log('Search submitted...');
