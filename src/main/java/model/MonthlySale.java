package model;

import com.fasterxml.jackson.annotation.JsonProperty;


public class MonthlySale {
    @JsonProperty("month")
    private String month;
    @JsonProperty("sale")
    private int sales;
}
