package com.bookmark.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepo;

	public List<User> getAllUsers() {
		List<User> users = new ArrayList<>();
		userRepo.findAll().forEach(users::add);
		return users;
		
	}

	public Optional<User> getUser(String id) {
		return userRepo.findById(id);
	}

	public void addUser(User user) {
		userRepo.save(user);
	}
	
	
}
