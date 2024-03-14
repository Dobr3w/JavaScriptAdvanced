class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title && this.books[i].author === author) {
                return `The book "${title}" by ${author} is already in ${this.library} library.`;
            }
        }

        const newBook = { title: title, author: author };
        this.books.push(newBook);

        return `The book "${title}" by ${author} has been added to ${this.library} library.`;
    }

    addMember(memberName) {
        for (let i = 0; i < this.members.length; i++) {
            if (this.members[i] === memberName) {
                return `Member ${memberName} is already a part of the book club.`;
            }
        }
        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`;
    }

    assignBookToMember(memberName, bookTitle) {
        if (!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`);
        }

        const bookIndex = this.books.findIndex(book => book.title === bookTitle);

        if (bookIndex === -1) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        const [assignedBook] = this.books.splice(bookIndex, 1);
        return `Member ${memberName} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`;
    }

    generateReadingReport() {
        if (this.members.length === 0) {
            return "No members in the book club.";
        }

        if (this.books.length === 0) {
            return "No available books in the library.";
        }

        let report = `Available Books in ${this.library} library:\n`;
        this.books.forEach(book => {
            report += `"${book.title}" by ${book.author}\n`;
        });

        report = report.trim();

        return report;
    }
}


// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
// console.log(myBookClub.generateReadingReport());


// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());