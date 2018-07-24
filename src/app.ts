showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular
}

interface DamageLogger {
    (reason: string): void
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBookSPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    return getAllBooks()
        .filter(b => b.category === category)
        .map(b => b.title);
}

function logBookTitles(BookTitles: string[]): void {
    BookTitles.forEach(b => console.log(b));
}

function getAllBooks(): Book[] {
    const books: Book[] = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript
        },
        {id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript
        }
    ];

    return books;
}

function logFirstAvailable(books: any[] = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    let firstAvailableBookTitle: string;

    for (const book of books) {
        if (book.available) {
            firstAvailableBookTitle = book.title;
            break;
        }
    }

    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Available Book: ${firstAvailableBookTitle}`);
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name is: ${name}`);

    if (age) {
        console.log(`Customer age is: ${age}`);
    }

    if (city) {
        console.log(`Customer city is: ${city}`);
    }
}

function сheckoutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log(`Customer name is: ${customer}`);

    return bookIds
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}


function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`)
}

function getBookByID(id: number): Book {
    return getAllBooks().find(b => b.id === id)
}

function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
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
