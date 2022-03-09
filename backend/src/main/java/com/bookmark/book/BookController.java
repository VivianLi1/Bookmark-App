package com.bookmark.book;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bookmark.user.User;

@RestController
public class BookController {

	@Autowired
	BookService bookService;
	
	// get books belonging to a user
	@GetMapping("/users/{userId}/books")
	public List<Book> getAllBooks(@PathVariable String userId) {
		return bookService.getAllBooks(userId);
	}
	
	@GetMapping("/users/{userId}/books/{bookId}")
	public Optional<Book> getBook(@PathVariable String bookId) {
		return bookService.getBook(bookId);
	}
	
	// add book to user
	@PostMapping(value="/users/{userId}/books")
	public String addBook(@PathVariable String userId, @RequestBody Book book) {
		book.setUser(new User(userId, ""));
		bookService.addBook(book);
		return "Success";
	}
	
	@PutMapping(value="/users/{userId}/books/{bookId}")
	public String updateBook(@PathVariable String userId, @PathVariable String bookId, @RequestBody Book book) {
		book.setUser(new User(userId, ""));
		bookService.updateBook(book);
		return "Success";
	}
	
	@DeleteMapping(value="/users/{userId}/books/{bookId}")
	public String deleteBook(@PathVariable String bookId) {
		bookService.deleteBook(bookId);
		return "Success";
	}
	
}

