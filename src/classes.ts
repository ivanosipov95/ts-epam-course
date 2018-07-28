import {Librarian} from './interfaces';
import {logger, sealed, writable} from './decorators';

@sealed('UniversityLibrarian')
@logger
class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty() {
        console.log(`Assisting faculty`);
    }

    @writable(false)
    teachCommunity() {
        console.log(`Teaching Community`);
    }
}

abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     this.title = newTitle;
    //     this.year = newYear;
    //     console.log('Creating a new ReferenceItem...')
    // }
    //

    private _publisher: string;
    static department: string = 'New';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(value: string) {
        this._publisher = value;
    }

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...')
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
    }

    abstract printCitation();
}

export {UniversityLibrarian, ReferenceItem};