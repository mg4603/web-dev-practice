function createBook(title, author, numberOfPages, statusReading){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.statusReading = statusReading;
    this.getInfo = ()=>{
        let statusString = "";
        if(this.statusReading)
            statusString = "read";
        else{
            statusString = "not read yet"
        }
        return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${statusString}`;
    }
}

const hobbit = new createBook("The Hobbit", "J.R.R. Tolkien", 295, 0);
console.log(hobbit.getInfo());