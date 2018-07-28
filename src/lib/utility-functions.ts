import {Category} from '../enums';
import {Book, LibMgrCallback} from '../interfaces';

export function purge<T>(inventary: Array<T>): Array<T> {
    return inventary.splice(2, inventary.length);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    return getAllBooks()
        .filter(b => b.category === category)
        .map(b => b.title);
}

export function logBookTitles(BookTitles: string[]): void {
    BookTitles.forEach(b => console.log(b));
}

export function getAllBooks(): Book[] {
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

export function logFirstAvailable(books: any[] = getAllBooks()): void {
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

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name is: ${name}`);

    if (age) {
        console.log(`Customer age is: ${age}`);
    }

    if (city) {
        console.log(`Customer city is: ${city}`);
    }
}

export function сheckoutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log(`Customer name is: ${customer}`);

    return bookIds
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}


export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`)
}

export function getBookByID(id: number): Book {
    return getAllBooks().find(b => b.id === id)
}

export function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback) {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (e) {
            callback(e, null);
        }
    }, 2000)
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`Error message: ${err.message}`);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
                const titles = getBookTitlesByCategory(category);
                if (titles.length > 0) {
                    resolve(titles);
                } else {
                    reject('No books found');
                }
        }, 2000)
    });

    return p;
}

export async function logSearchResults(category: Category) {
    let foundBooks = await getBooksByCategoryPromise(category);
    console.log(foundBooks);
}
