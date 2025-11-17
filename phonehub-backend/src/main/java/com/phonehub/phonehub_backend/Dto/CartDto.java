package com.phonehub.phonehub_backend.Dto;

import lombok.Data;

@Data
public class CartDto {
   
    private Long productId;
    private Long userId;
    private Long phoneId;
    private Integer quantity;
	
}
