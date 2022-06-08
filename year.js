yearHigh = highch(yearData)
yearLine = tri(highBar(yearData))
console.log(yearHigh)
Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    })
});

Highcharts.chart('donutChart', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        },
        backgroundColor: "#26203d",
        polar: true
    },
    title: {
        text: "Dernière communication",
        style: {
            color: "#fff"
        }
    },
    plotOptions: {
        dataLabels: {
            itemStyle: { color: '#fff' }
        },
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    legend: {
        itemStyle: { color: '#fff' }
    },
    series: [{
        name: "Dernière Communication",
        data: yearHigh
    }]
})

