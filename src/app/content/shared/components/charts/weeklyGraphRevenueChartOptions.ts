export const weeklyGraphRevenueChartOptions = {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%A',
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Day'
        }
    },
    yAxis: [{
        title: {
            text: null
        },
        min: 0,
        opposite: false
    },
    {
        title: {
            text: 'Revenue'
        },
        min: 0,
        opposite: true
    }],
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x: %b}: {point.y:.5f}'
    },
    colors: ['#1fcd94', '#00A6A6'],
    series: [{
        name: 'Profits',
        data: []
    },
    {
        name: 'Commissions',
        data: []
    }],
    plotOptions: {
        areaspline: {
            fillColor: {
                linearGradient: [0, 0, 0, 300],
                stops: [
                    [0, '#1fcd94'],
                    [1, 'rgba(31,205,148, 0)']
                ]
            }
        }
    },
    legend: {
        itemMarginTop: -15,
        itemMarginBottom: -20,
    },
    credits: {
        enabled: false
    }
};

export const last8CyclesChartOptions = {
    chart: {
        type: 'areaspline',
        height: '340px'
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%A',
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Day'
        },
    },
    yAxis: [{
        title: {
            text: ''
        },
        min: 0,
        opposite: false
    }],
    tooltip: {
        // headerFormat: '<b>{series.name}</b><br>',
        // pointFormat: '{point.x: %b}: {point.y:.5f}',
        shared: true,
        valueSuffix: ' %'
    },
    colors: ['#1fcd94', '#00A6A6'],
    series: [{
        name: 'Profits',
        data: []
    },
    {
        name: 'Commissions',
        data: []
    }],
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    legend: {
        itemMarginTop: -15,
        itemMarginBottom: -20,
    },
    credits: {
        enabled: false
    }
};

export const lastCyclesActivity = {
    chart: {
        type: 'column'
    },
    title: {
        text: null,
        // text: 'Last Cycles Activity',
        style: {
            color: "#1fcd94"
        }
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Volume of Payments over the last week'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'overlap',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Payments',
        data: [],
        color: '#00A6A6'
    }, {
        name: 'Reinvestments',
        data: [],
        color: '#1fcd94'
    }],
    credits: {
        enabled: false
    }
};

export const totalUserByCapital = {
    chart: {
        type: 'bar'
    },
    title: {
        text: null,
        // text: 'Total User by Capital Invested',
        style: {
            color: "#1fcd94"
        }
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        min: 0,
        // title: {
        //     text:'User Ventilation by Total Invested'
        // }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Number of users',
        data: [],
        color: "#1fcd94"
    }],
    credits: {
        enabled: false
    }
}
