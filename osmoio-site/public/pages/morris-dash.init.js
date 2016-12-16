
/**
* Theme: Minton Admin Template
* Author: Coderthemes
* Morris Chart
*/

!function($) {
    "use strict";

    var MorrisCharts = function() {};

    //creates line chart
    MorrisCharts.prototype.createLineChart = function(element, data, xkey, ykeys, labels, opacity, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          fillOpacity: opacity,
          pointFillColors: Pfillcolor,
          pointStrokeColors: Pstockcolor,
          behaveLikeLine: true,
          gridLineColor: '#eef0f2',
          hideHover: 'auto',
          resize: true, //defaulted to true
          lineColors: lineColors,
          parseTime: false
        });
    },
    //creates area chart
    MorrisCharts.prototype.createAreaChart = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 0,
            lineWidth: 0,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true,
            gridLineColor: '#eef0f2',
            lineColors: lineColors
        });
    },
    //creates area chart with dotted
    MorrisCharts.prototype.createAreaChartDotted = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 3,
            lineWidth: 1,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            pointFillColors: Pfillcolor,
            pointStrokeColors: Pstockcolor,
            resize: true,
            gridLineColor: '#eef0f2',
            lineColors: lineColors
        });
    },
    //creates Bar chart
    MorrisCharts.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#eeeeee',
            barColors: lineColors
        });
    },
    //creates Stacked chart
    MorrisCharts.prototype.createStackedChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            stacked: true,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#eeeeee',
            barColors: lineColors
        });
    },
    //creates Donut chart
    MorrisCharts.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true, //defaulted to true
            colors: colors
        });
    },
    MorrisCharts.prototype.init = function() {

        //create line chart
        var $ph  = [
            { y: '-60 min', a: 6.6,  b: 7.2 , c: 7.5 },
            { y: '-45 min', a: 6.5,  b: 7.1 , c: 7.4 },
            { y: '-30 min', a: 6.4,  b: 7.1 , c: 7.4 },
            { y: '-15 min', a: 6.5,  b: 7.1 , c: 7.4 },
            { y: 'Now', a: 6.5,  b: 7.2 , c: 7.4 }
          ];
    
        var $ec  = [
          { y: '-60 min', a: 1086.0,  b: 1029.5, c: 997.6 },
          { y: '-45 min', a: 1086.5,  b: 1029.1, c: 997.7},
          { y: '-30 min', a: 1086.1,  b: 1028.7, c: 997.7 },
          { y: '-15 min', a: 1085.7,  b: 1028.3, c: 988 },
          { y: 'Now',  a: 1084.9,  b: 1027.9, c: 994.5 }
        ];
        
        var $DO =[
            { y: '-60 min', a: 6.6},
            { y: '-45 min', a: 6.5},
            { y: '-30 min', a: 6.6},
            { y: '-15 min', a: 6.4},
            { y: 'Now', a: 6.4}
        ];
        
        var $am =[
            { y: '-60 min', a: 0.005},
            { y: '-45 min', a: 0.005},
            { y: '-30 min', a: 0.005},
            { y: '-15 min', a: 0.005},
            { y: 'Now', a: 0.005}
        ];
        
        var $wtemp  = [
            { y: '-60 min', a: 69.20,  b: 70.1 , c: 69.08},
            { y: '-45 min', a: 69.20,  b: 70.2 , c: 69.05 },
            { y: '-30 min', a: 69.17,  b: 70.1 , c: 69.02 },
            { y: '-15 min', a: 69.12,  b: 70.2 , c: 69.00 },
            { y: 'Now',  a: 69.11,  b: 70.2 , c: 68.97 }
        ];
        
        var $wlvl  = [
            { y: '-60 min', a: 10.2,  b: 6.2 , c: 12.1 },
            { y: '-45 min', a: 10.2,  b: 6.2 , c: 12.1 },
            { y: '-30 min', a: 10.2,  b: 6.2 , c: 12.1 },
            { y: '-15 min', a: 10.1,  b: 6.4 , c: 12.1 },
            { y: 'Now',  a: 10.0,  b: 6.5 , c: 12.1 }
        ];
        
        var $atemp  = [
            { y: '-60 min', a: 74.66,  b: 76.67 , c: 72.5 },
            { y: '-45 min', a: 74.57,  b: 76.58 , c: 72.6 },
            { y: '-30 min', a: 74.48,  b: 76.49 , c: 72.5 },
            { y: '-15 min', a: 74.39,  b: 76.4 , c: 72.5 },
            { y: 'Now',   a: 74.3,  b: 76.31 , c: 72.5 }
          ];
        
        var $par  = [
            { y: '-60 min', a: 158.5,  b: 162.5 , c: 159.1 },
            { y: '-45 min', a: 160.0 ,  b: 162.0 , c: 159.1},
            { y: '-30 min', a: 159.0,  b: 165.0 , c: 159.1 },
            { y: '-15 min', a: 160.0,  b: 160.0 , c: 159.1 },
            { y: 'Now', a: 158.0 , b: 163.0 , c: 159.1  }
        ];
        
        var $lux  = [
            { y: '-60 min', a: 103.4,  b: 105.4 , c: 103.4 },
            { y: '-45 min', a: 103.0,  b: 105.0 , c: 103.4 },
            { y: '-30 min', a: 104.0,  b: 107.0 , c: 103.4 },
            { y: '-15 min', a: 103.4,  b: 105.4 , c: 103.4 },
            { y: 'Now', a: 103.0, b: 106.0 , c: 103.4 }
        ];
        
        var $hum  = [
            { y: '-60 min', a: 70.1,  b: 63.8 , c: 70.1 },
            { y: '-45 min', a: 69.8,  b: 63.7 , c: 70.2 },
            { y: '-30 min', a: 69.7,  b: 63.5 , c: 70.1 },
            { y: '-15 min', a: 69.8,  b: 63.4 , c: 70.1 },
            { y: 'Now', a: 70.0, b: 63.2 , c: 70.2 }
        ];
        
        this.createLineChart('dash-ph', $ph, 'y', ['a', 'b','c'], ['Nutrient Reservoir', 'Grow Bed 1', 'Fish Tank'],['0.1'],['#ffffff'],['#999999'], ["#3bafda", "#dcdcdc", "#80deea"]);
        
        this.createLineChart('dash-ec', $ec, 'y', ['a', 'b','c'], ['Nutrient Reservoir', 'Grow Bed 1', 'Fish Tank'],['0.1'],['#ffffff'],['#999999'], ["#3bafda", "#dcdcdc", "#80deea"]);
        
        this.createLineChart('dash-do', $DO, 'y', ['a'], ['Fish Tank'],['0.1'],['#ffffff'],['#999999'], ["#80deea"]);
        
        this.createLineChart('dash-am', $am, 'y', ['a'], ['Fish Tank'],['0.1'],['#ffffff'],['#999999'], ["#80deea"]);
        
        this.createLineChart('dash-wtemp', $wtemp, 'y', ['a', 'b','c'], ['Nutrient Reservoir', 'Grow Bed 1', 'Fish Tank'],['0.1'],['#ffffff'],['#999999'], ["#3bafda", "#dcdcdc", "#80deea"]);
        
        this.createLineChart('dash-lvl', $wlvl, 'y', ['a', 'b','c'], ['Nutrient Reservoir', 'Grow Bed 1', 'Fish Tank'],['0.1'],['#ffffff'],['#999999'], ["#3bafda", "#dcdcdc", "#80deea"]);

        this.createLineChart('dash-atemp', $atemp, 'y', ['a', 'b','c'], ['Nutrient Reservoir', 'Grow Bed 1', 'Fish Tank'],['0.1'],['#ffffff'],['#999999'], ["#3bafda", "#dcdcdc", "#80deea"]);
        
        this.createLineChart('dash-par', $par, 'y', ['a', 'b','c'], ['Nutrient Reservoir', 'Grow Bed 1', 'Fish Tank'],['0.1'],['#ffffff'],['#999999'], ["#3bafda", "#dcdcdc", "#80deea"]);

        this.createLineChart('dash-lux', $lux, 'y', ['a', 'b','c'], ['Nutrient Reservoir', 'Grow Bed 1', 'Fish Tank'],['0.1'],['#ffffff'],['#999999'], ["#3bafda", "#dcdcdc", "#80deea"]);
        
        this.createLineChart('dash-hum', $hum, 'y', ['a', 'b','c'], ['Nutrient Reservoir', 'Grow Bed 1', 'Fish Tank'],['0.1'],['#ffffff'],['#999999'], ["#3bafda", "#dcdcdc", "#80deea"]);
        
        
        

        //creating area chart
        var $areaData = [
                { y: '2009', a: 10, b: 20, c:30 },
                { y: '2010', a: 75, b: 65, c:30 },
                { y: '2011', a: 50, b: 40, c:30 },
                { y: '2012', a: 75, b: 65, c:30 },
                { y: '2013', a: 50, b: 40, c:30 },
                { y: '2014', a: 75, b: 65, c:30 },
                { y: '2015', a: 90, b: 60, c:30 }
            ];
        this.createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b','c'], ['Series A', 'Series B','Series C'], ["#26c6da", "#80deea","#dcdcdc"]);

        //creating area chart with dotted
        var $areaDotData = [
                { y: '2009', a: 10, b: 20 },
                { y: '2010', a: 75,  b: 65 },
                { y: '2011', a: 50,  b: 40 },
                { y: '2012', a: 75,  b: 65 },
                { y: '2013', a: 50,  b: 40 },
                { y: '2014', a: 75,  b: 65 },
                { y: '2015', a: 90, b: 60 }
            ];
        this.createAreaChartDotted('morris-area-with-dotted', 0, 0, $areaDotData, 'y', ['a', 'b'], ['Series A', 'Series B'],['#ffffff'],['#999999'], ["#26c6da", "#80deea"]);

        //creating bar chart
        var $barData  = [
            { y: '2009', a: 100, b: 90 , c: 40 },
            { y: '2010', a: 75,  b: 65 , c: 20 },
            { y: '2011', a: 50,  b: 40 , c: 50 },
            { y: '2012', a: 75,  b: 65 , c: 95 },
            { y: '2013', a: 50,  b: 40 , c: 22 },
            { y: '2014', a: 75,  b: 65 , c: 56 },
            { y: '2015', a: 100, b: 90 , c: 60 }
        ];
        this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b', 'c'], ['Series A', 'Series B', 'Series C'], ["#3bafda", "#dcdcdc", "#80deea"]);

        //creating Stacked chart
        var $stckedData  = [
            { y: '2005', a: 45, b: 180 },
            { y: '2006', a: 75,  b: 65 },
            { y: '2007', a: 100, b: 90 },
            { y: '2008', a: 75,  b: 65 },
            { y: '2009', a: 100, b: 90 },
            { y: '2010', a: 75,  b: 65 },
            { y: '2011', a: 50,  b: 40 },
            { y: '2012', a: 75,  b: 65 },
            { y: '2013', a: 50,  b: 40 },
            { y: '2014', a: 75,  b: 65 },
            { y: '2015', a: 100, b: 90 }
        ];
        this.createStackedChart('morris-bar-stacked', $stckedData, 'y', ['a', 'b'], ['Series A', 'Series B'], ["#3bafda", "#ededed"]);

        //creating donut chart
        var $donutData = [
                {label: "Download Sales", value: 12},
                {label: "In-Store Sales", value: 30},
                {label: "Mail-Order Sales", value: 20}
            ];
        this.createDonutChart('morris-donut-example', $donutData, ["#3bafda", "#ededed", "#80deea"]);
    },
    //init
    $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.MorrisCharts.init();
}(window.jQuery);