import {Chart} from "angular-highcharts";

export interface TopSale {
  quantity: number;
  product: string;
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


export function createTopSaleChart( topSale: TopSale[], limit: number  ){
  let dataRows = topSale.slice(0,limit);
  return new Chart({
    chart: {
      type: 'bar',
      height: 400,
      width: 600
    },
    title: {
      text: 'Top ' + limit + ' Products'
    },
    xAxis: {
      categories: dataRows.map(ts => ts.product)
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
        type: 'bar',
        showInLegend: false,
        data:  dataRows.map(ts =>
          ({
            color: getRandomColor(),
            name: ts.product,
            y:   ts.quantity
          }))
      }
    ],
    credits: {
      enabled: false
    }
  })
}
