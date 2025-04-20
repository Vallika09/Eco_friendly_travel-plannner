package com.travelplanner.service;

import com.travelplanner.model.User;
import com.travelplanner.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String login(String email, String password) {
        Optional<User> userOptional = Optional.ofNullable(userRepository.findByEmail(email));

        if (userOptional.isEmpty()) {
            return "User not found. Please register first.";
        }

        User user = userOptional.get();
        if (!user.getPassword().equals(password)) {
            return "Incorrect password. Please try again.";
        }

        return "Login successful. Welcome, " + user.getName() + "!";
    }

    public String register(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return "Email already registered. Please log in.";
        }
        userRepository.save(user);
        return "Registration successful. You can now log in.";
    }
}
