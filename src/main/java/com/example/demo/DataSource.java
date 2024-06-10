package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;
import model.MonthlySale;
import model.ProductSale;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DataSource {
    @JsonProperty("total_sale")
    private  Integer totalSale;
    @JsonProperty("monthly_sale")
    private List<MonthlySale> monthlySaleList;
    @JsonProperty("best_sale_product")
    private List<ProductSale> productSales;


    public Integer getTotalSale() {
        //Integer objects are immutable, so you cannot modify the value once they have been created
        return totalSale;
    }

    public List<MonthlySale> getMonthlySaleList() {
        // Create a deep copy of original list so original list is unmodifiable
        return new ArrayList<>(monthlySaleList);
    }

    public List<ProductSale> getProductSales() {
        // Create a deep copy of original list so original list is unmodifiable
        return new ArrayList<>(productSales);
    }
}
