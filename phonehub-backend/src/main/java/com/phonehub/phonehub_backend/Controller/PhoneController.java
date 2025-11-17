package com.phonehub.phonehub_backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.phonehub.phonehub_backend.Entity.Phone;
import com.phonehub.phonehub_backend.Repository.PhoneRepository;

@RestController
@RequestMapping("/api/phones")
public class PhoneController {
	
	@Autowired
	private PhoneRepository phoneRepo;



	  @GetMapping("/allphone")
	  public List<Phone> getAllPhone() {
	    return phoneRepo.findAll();
	  }
	
	  @GetMapping("/brand/{brand}")
	  public List<Phone> getByBrand(@PathVariable String brand) {
	    return phoneRepo.findByBrandIgnoreCase(brand);
	  }
	
	  @GetMapping("/{id}")
	  public ResponseEntity<Phone> getOne(@PathVariable Long id) {
	    return phoneRepo.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	  }
	
//	  // Admin: create phone
//	  @PostMapping
//	  public Phone create(@RequestBody Phone phone) { return phoneRepo.save(phone); }
}

