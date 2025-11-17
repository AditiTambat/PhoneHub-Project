package com.phonehub.phonehub_backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phonehub.phonehub_backend.Entity.Phone;

public interface PhoneRepository extends JpaRepository<Phone, Long> {
	 List<Phone> findByBrandIgnoreCase(String brand);
}
