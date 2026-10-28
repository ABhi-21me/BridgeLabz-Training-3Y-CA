class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(this.title + " is already issued.");
        } else {
            this.isIssued = true;
            console.log(this.title + " has been issued.");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(this.title + " has been returned.");
    }
}

let books = [
    new Book("The Alchemist", "Paulo Coelho", "101"),
    new Book("Wings of Fire", "A.P.J. Abdul Kalam", "102"),
    new Book("Atomic Habits", "James Clear", "103")
];

function showAvailable() {
    console.log("Available books:");
    books.filter(b => !b.isIssued).forEach(b => console.log(b.title + " by " + b.author));
}

function issueByISBN(isbn) {
    let book = books.find(b => b.ISBN === isbn);
    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }
}

showAvailable();
issueByISBN("102");
showAvailable();
