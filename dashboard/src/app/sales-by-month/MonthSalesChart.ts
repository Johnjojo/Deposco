import {Chart} from "angular-highcharts";

export interface MonthSale {
  sale: number;
  month: string;
}
export function createChart( monthSale: MonthSale[] )
{
  return  new Chart({
    chart: {
      type: 'line',
      height: 400
    },
    title: {
      text: 'Monthly Sales'
    },
    xAxis: {
      categories: monthSale.map(ms => ms.month)
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: "Sale",
        type: "line",
        color: '#044342',
        data: monthSale.map(ms => ms.sale)
      },
    ],
    credits: {
      enabled: false
    }
  })
}
