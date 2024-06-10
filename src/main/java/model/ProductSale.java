package model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProductSale {
    @JsonProperty
    private String product;
    @JsonProperty
    private int quantity;
}
