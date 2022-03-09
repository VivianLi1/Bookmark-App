package com.bookmark.book;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
	
	@Autowired
	BookRepository bookRepo;

	public List<Book> getAllBooks(String userId) {
		List<Book> books = new ArrayList<>();
		bookRepo.findByUserId(userId).forEach(books::add);
		return books;
	}
	
	public Optional<Book> getBook(String id) {
		return bookRepo.findById(id);
	}
	
	public void addBook(Book book) {
		bookRepo.save(book);
		
	}
	
	public void updateBook(Book book) {
		bookRepo.save(book);
		
	}
	
	public void deleteBook(String id) {
		bookRepo.deleteById(id);

	}
      
}
