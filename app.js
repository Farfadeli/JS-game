dataHigh = highch(typeData);
databar = tri(highBar(typeData));

Highcharts.chart('donutChart', {
  chart: {
    type: 'pie',
    maxwidth: 100,
    backgroundColor: '#26203d',
    polar: true

  },
  title: {
    text: "Type de boitier en circulation",
    style: {
      color: "#fff"
    }
  },
  legend: {
    itemStyle: { color: '#fff' },
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [{
    minPointSize: 5,
    innerSize: '10%',
    zMin: 0,
    name: "type",
    colorByPoint: true,
    data: dataHigh
  }]
})

Highcharts.chart('pieChart', {
  chart: {
    type: 'pie',
    maxwidth: 100,
    backgroundColor: '#26203d',
    polar: true
  },
  title: {
    text: "Type de boitier en circulation",
    style: {
      color: '#fff'
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  legend: {
    itemStyle: { color: '#fff' },
  },
  series: [{
    name: "type",
    colorByPoint: true,
    data: dataHigh
  }]
})

Highcharts.chart('barChart', {
  chart: {
    type: 'column',
    backgroundColor: '#26203d',
    polar: true,
  },
  title: {
    text: "Type de boitier",
    style: {
      color: '#fff'
    }
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: -45,
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif',
        color: '#fff'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Type',
      style: {
        color: '#fff'
      }
    },
  },
  legend: {
    itemStyle: { color: '#fff' },
  },
  series: [{
    name: "Type",
    style: {
      color: '#fff'
    },
    data: databar
  }]

})