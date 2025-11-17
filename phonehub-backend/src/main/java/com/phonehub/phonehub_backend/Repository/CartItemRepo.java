package com.phonehub.phonehub_backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phonehub.phonehub_backend.Entity.CartItem;

public interface CartItemRepo extends JpaRepository<CartItem, Long> {
	List<CartItem> findByUser_Id(Long userId);
}
