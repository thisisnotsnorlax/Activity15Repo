import { Component } from '@angular/core';
import { books } from './books';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'], // Fix typo, should be "styleUrls"
})
export class BooklistComponent {
  searchId!: number;
  selectedBook!: books | undefined;

  book: books[] = [
    {
      bookId: 1,
      bookTitle: 'Harry Potter',
      bookAuthor: 'J.K. Rowling',
      bookPublishedYear: 1997,
    },

    {
      bookId: 2,
      bookTitle: 'The Hobbit',
      bookAuthor: 'J.R.R. Tolkien',
      bookPublishedYear: 1937,
    },
    {
      bookId: 3,
      bookTitle: '1984',
      bookAuthor: 'George Orwell',
      bookPublishedYear: 1949,
    },
    {
      bookId: 4,
      bookTitle: 'To Kill a Mockingbird',
      bookAuthor: 'Harper Lee',
      bookPublishedYear: 1960,
    },
    {
      bookId: 5,
      bookTitle: 'The Great Gatsby',
      bookAuthor: 'F. Scott Fitzgerald',
      bookPublishedYear: 1925,
    },
  ];

  getBook(): void {
    this.selectedBook = this.book.find((book) => book.bookId === this.searchId);
  }
}
