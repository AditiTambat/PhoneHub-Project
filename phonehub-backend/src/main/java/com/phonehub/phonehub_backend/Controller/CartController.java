package com.phonehub.phonehub_backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.phonehub.phonehub_backend.Dto.CartDto;
import com.phonehub.phonehub_backend.Dto.CartResponseDto;
import com.phonehub.phonehub_backend.Entity.CartItem;
import com.phonehub.phonehub_backend.Entity.Phone;
import com.phonehub.phonehub_backend.Entity.User;
import com.phonehub.phonehub_backend.Repository.CartItemRepo;
import com.phonehub.phonehub_backend.Repository.PhoneRepository;
import com.phonehub.phonehub_backend.Repository.UserRepository;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:5173")
public class CartController {

    @Autowired
    private CartItemRepo cartRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PhoneRepository phoneRepo;


    // ✅ ADD TO CART
    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestBody CartDto dto) {

        User user = userRepo.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Phone phone = phoneRepo.findById(dto.getPhoneId())
                .orElseThrow(() -> new RuntimeException("Phone not found"));

        CartItem item = new CartItem();
        item.setUser(user);
        item.setPhone(phone);
        item.setQuantity(dto.getQuantity() == null ? 1 : dto.getQuantity());

        cartRepo.save(item);

        return ResponseEntity.ok("Phone added to cart");
    }


    // ✅ GET USER CART
    @GetMapping("/{userId}")
    public List<CartResponseDto> getCart(@PathVariable Long userId) {

        return cartRepo.findByUser_Id(userId).stream().map(item -> {
            CartResponseDto dto = new CartResponseDto();
            dto.setCartItemId(item.getId());
            dto.setPhoneId(item.getPhone().getId());
            dto.setPhoneName(item.getPhone().getBrand() + " " + item.getPhone().getModel());
            dto.setPrice(item.getPhone().getPrice());
            dto.setQuantity(item.getQuantity());
            return dto;
        }).toList();
    }


    // ✅ REMOVE FROM CART
    @DeleteMapping("/{id}")
    public ResponseEntity<?> remove(@PathVariable Long id) {
        cartRepo.deleteById(id);
        return ResponseEntity.ok("Removed");
    }
}
