package com.phonehub.phonehub_backend.Configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.phonehub.phonehub_backend.Entity.User;
import com.phonehub.phonehub_backend.Repository.UserRepository;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {

        if (userRepository.count() == 0) {

            User admin = new User();
            admin.setName("Admin");
            admin.setEmail("admin@phonehub.in");
            admin.setPassword(passwordEncoder.encode("admin123")); // IMPORTANT
            admin.setRole("ADMIN");

            User user = new User();
            user.setName("Test User");
            user.setEmail("user@gmail.com");
            user.setPassword(passwordEncoder.encode("user123")); // IMPORTANT
            user.setRole("USER");

            userRepository.save(admin);
            userRepository.save(user);

            System.out.println("Default users created successfully!");
        }
    }
}