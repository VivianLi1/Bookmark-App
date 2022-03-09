package com.bookmark.book;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.bookmark.user.User;

@Entity
public class Book {

	@Id
	private String id;
	private String title;
	private String author;
	private String publishYear;
	private String coverId;
	private boolean hasRead;
	private int rating;
	
	@ManyToOne
	private User user;
	
	public Book(){
		
	}

	public Book(String id, String title, String author, String publishYear, String coverId, String userId) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.publishYear = publishYear;
		this.coverId = coverId;
		this.hasRead = false;
		this.rating = 0;
		this.user = new User(userId, "");
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getPublishYear() {
		return publishYear;
	}

	public void setPublishYear(String publishYear) {
		this.publishYear = publishYear;
	}

	public String getCoverId() {
		return coverId;
	}

	public void setCoverId(String coverId) {
		this.coverId = coverId;
	}

	public boolean isRead() {
		return hasRead;
	}

	public void setHasRead(boolean read) {
		this.hasRead = read;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}
