package com.example.demo;

import model.MonthlySale;
import model.ProductSale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(value="http://localhost:4200/")
public class Controller {
    @Autowired
    Service service;

    @GetMapping("/totalSale")
    public Integer totalSale() {
        return service.getTotalSale();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/monthlySale")
    public List<MonthlySale> monthlySale() {
        return service.getMonthlySales();
    }

    @GetMapping("/topSale")
    public List<ProductSale> getBestSale(
            @RequestParam("limit") Optional<Integer> limit, @RequestParam("desc") Optional<Boolean> desc
    ) {
        return  service.getTopSale(limit, desc);
    }
}
