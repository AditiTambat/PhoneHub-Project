package com.phonehub.phonehub_backend.Controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.phonehub.phonehub_backend.Dto.LoginDto;
import com.phonehub.phonehub_backend.Dto.UserDto;
import com.phonehub.phonehub_backend.Entity.User;
import com.phonehub.phonehub_backend.Repository.UserRepository;



@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody UserDto dto) {

        if (userRepo.findByEmail(dto.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Map.of("message", "Email already exists"));
        }

        User u = new User();
        u.setName(dto.getName());
        u.setEmail(dto.getEmail());
        u.setPassword(passwordEncoder.encode(dto.getPassword())); // ✅ Hash
        u.setRole("USER");

        userRepo.save(u);

        return ResponseEntity.ok(Map.of("message", "Account created successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDto dto) {

        Optional<User> user = userRepo.findByEmail(dto.getEmail());

        if (user.isEmpty() ||
            !passwordEncoder.matches(dto.getPassword(), user.get().getPassword())) {

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid email or password"));
        }

        return ResponseEntity.ok(Map.of(
                "message", "Login successful",
                "userId", user.get().getId(),
                "role", user.get().getRole()
        ));
    }

}

