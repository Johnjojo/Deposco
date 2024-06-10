## Requirements

  ### For backend spring boot application:
    java 22
    Maven 3.8.6

  ### Front End App:
    Node js 10.8.1
  
  ### Python Data Analysis
    Jupyter Notebook

## Pythond Data Analysis
  location: https://github.com/Johnjojo/Deposco/tree/master/Data%20Analysis

## Instructions
  
### Step 1 Start the Backend:
  Run Springboot main in java class com.example.demo.DataAnalyticsDashboardApplication

### Step 2 Start the Front End:
  In terminal, run command 'ng s' in folder 'dashboard' .
  In your brower, access the application through http://localhost:4200/
  
## API End Points
  ### GET http://localhost:8080/totalSale
    input: none
    parameters: none
    response: integer | the total sale amount in dollar of all transaction

  ### GET http://localhost:8080/monthlySale
    input: none
    parameters: none
    response: json array | the total sale amount in dollar of all transaction in each month
    response json format:
    [
      {
        month: sale month in format 'yyyy-mm',
        sale: the total sale in dollar for that month
      }
    ]
    response example:
      [
      {
          "month": "2015-12",
          "sale": 9015
      },
      {
          "month": "2016-01",
          "sale": 84543
      },...]

  ### GET http://localhost:8080/topSale?limit={ limit }&desc={ desc }
    input: none
    parameters: 
      limit:
        type: number
        optional default is 20
        description: the desired return list size
      desc:
        type: boolean | 'true' or false
         optional default is false
         description: If desc=true, the response list will be sorted in descending order. 
                      If desc=false the response list will be sorted in ascending order. 
    response: json array | A list of the product and its total sale quantity in all transcations sorted by product sale quantity.
    response json format:
    [
      {
        product: product description,
        quantity: the total sale quantity for that product
      }
    ]
    response json format:
    [
      {
        "product": "Golf Cart 1/2 18 Holes",
        "quantity": 22135
    },
    {
        "product": "WE Green Fee",
        "quantity": 18313
    },...]
