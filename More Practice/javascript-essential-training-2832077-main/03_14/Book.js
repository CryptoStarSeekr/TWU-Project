class Book {
    constructor(
        name, 
        author, 
        publisher, 
        illustrator,
        currentPage,
    )
    {
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.illustrator = illustrator; 
        this.currentPage = currentPage; 

        updatecurrentPage(newcurrentPage); {
            this.currentPage = newcurrentPage;
        }
        updateillustrator(newillustrator); {
            this.illustrator = newillustrator; 
        }
    
    }
}