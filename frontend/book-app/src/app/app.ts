import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from './services/book.service';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css' 
})
export class App implements OnInit {
  books: Book[] = [];
  newBook: Book = { title: '', author: '' };

  constructor(private bookService: BookService) {}

  ngOnInit() { this.loadBooks(); }

  loadBooks() {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  addBook() {
    if (!this.newBook.title || !this.newBook.author) return;
    this.bookService.addBook(this.newBook).subscribe(() => {
      this.newBook = { title: '', author: '' };
      this.loadBooks();
    });
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => this.loadBooks());
  }
}