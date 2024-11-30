export class Library {
    constructor() {
        this.books = [];
    }

    addBook = () => {
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const genre = document.querySelector("#genre").value;

        if (title && author && genre) {
            const book = { title, author, genre };
            this.books.push(book);
            this.updateLibrary();

            document.querySelector("#book-form").reset();
        } else {
            alert("Por favor, complete todos los campos.");
        }
    };

    updateLibrary = () => {
        const container = document.querySelector(".container");
        container.innerHTML = ""; // Limpiar contenido previo

        this.books.forEach((book, index) => {
            const bookDiv = document.createElement("div");
            bookDiv.className = "book";
            bookDiv.innerHTML = `
                <p><strong>${book.title}</strong></p>
                <p>Autor: ${book.author}</p>
                <p>Genero: ${book.genre}</p>
                <button class="remove" data-index="${index}">Eliminar</button>
            `;
            container.appendChild(bookDiv);
        });

        document.querySelectorAll(".remove").forEach((button) => {
            button.addEventListener("click", (e) => {
                const index = e.target.dataset.index;
                this.removeBook(index);
            });
        });
    };

    removeBook = (index) => {
        this.books.splice(index, 1);
        this.updateLibrary();
    };
}

const library = new Library();
document.querySelector("#add-book").addEventListener("click", library.addBook);
