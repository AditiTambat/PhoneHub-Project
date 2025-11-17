package com.phonehub.phonehub_backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.phonehub.phonehub_backend.Repository.PhoneRepository;

@Service
public class PhoneService {
	
	@Autowired
	private PhoneRepository repository;
	
	
//	public <List>List<Phone> seePhone(){
//		return repository.findAll();
//		
//	}
}
