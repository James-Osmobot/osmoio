/**
* Theme: Minton Admin Template
* Author: Coderthemes
* Component: Ion Slider
* 
*/
$(document).ready(function () {
    $("#range_01").ionRangeSlider();
    
    $("#range_02").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550
    });
    
    $("#range_03").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$"
    });
   
    $("#range_04").ionRangeSlider({
        type: "double",
        grid: true,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500
    });
    
    $("#range_pH").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 14,
        from: 6,
        to: 8,
        step: .1
    });
    
    $("#range_ec").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: 350,
        to: 600,
        step: .1
    });
    
    $("#range_wt").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 50,
        from: 10,
        to: 20,
        step: .1
    });
    
    $("#range_at").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 125,
        from: 65,
        to: 85,
        step: 1
    });
    $("#range_par").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 500,
        from: 40,
        to: 75,
        step: 1
    });
    $("#range_humidity").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 100,
        from: 40,
        to: 80,
        step: 1
    });
    
    $("#range_05").ionRangeSlider({
        type: "double",
        grid: true,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500,
        step: 250
    });
    
    $("#range_06").ionRangeSlider({
        grid: true,
        from: 3,
        values: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    });
    
    $("#range_07").ionRangeSlider({
        grid: true,
        min: 1000,
        max: 1000000,
        from: 200000,
        step: 1000,
        prettify_enabled: true
    });
    
    $("#range_08").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550,
        disable: true
        
        
    });

});