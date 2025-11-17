package com.phonehub.phonehub_backend.Dto;

import lombok.Data;

@Data
public class CartResponseDto {
    private Long cartItemId;
    private Long phoneId;
    private String phoneName;
    private Double price;
    private Integer quantity;
}

