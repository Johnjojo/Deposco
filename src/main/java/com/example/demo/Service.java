package com.example.demo;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import model.MonthlySale;
import model.ProductSale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class Service {
    static DataSource dataSource;

    @Value("classpath:data.json")
    Resource resourceFile;

    @Autowired
    private ObjectMapper objectMapper;

    @PostConstruct
    public void postConstructRoutine() {
        // read JSON file and map/convert to java POJO
        try {
             dataSource = objectMapper.readValue(resourceFile.getFile(), DataSource.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public Integer getTotalSale()
    {
        return dataSource.getTotalSale();
    }

    public List<MonthlySale> getMonthlySales()
    {
        return  dataSource.getMonthlySaleList();
    }

    public  List<ProductSale> getTopSale(Optional<Integer> limit, Optional<Boolean>  desc)
    {
        List<ProductSale> productSales = dataSource.getProductSales();
        boolean isDesc = desc.orElse(true);
        int rowNumInt = limit.orElse(20);
        productSales = dataSource.getProductSales();
        if( isDesc)
            return productSales.subList(0,rowNumInt);
        else
            return productSales.reversed().subList(0,rowNumInt);
    }

}
