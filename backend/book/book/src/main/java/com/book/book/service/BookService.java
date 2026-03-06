package com.book.book.service;

import com.book.book.model.*;
import com.book.book.repository.*;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookService {

    private final BookRepository repo;

    public BookService(BookRepository repo) {
        this.repo = repo;
    }

    public List<Book> getAllBooks() { return repo.findAll(); }
    public Book addBook(Book book) { return repo.save(book); }
    public void deleteBook(Long id) { repo.deleteById(id); }
}