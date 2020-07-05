var myChart3 = echarts.init(document.getElementById('bar'));
    myChart3.setOption({
        color: ['#3398DB'],
        title: {
            text: '柱状图数据展示',
            left: 'center',
            textStyle: {
                fontSize: 20,
            }
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: []
        },
        yAxis: {
            name: '商品数',
        },
        series: [{
            type: 'bar',
            data: []
        }]
    });

    // 异步加载数据
    $.ajax({
        url: 'https://edu.telking.com/api/?type=week',    //后端程序的url地址
        type: 'get',
        dataType: 'json',
    })

    .done(function(resb){        //请求成功以后的操作（resp是后端返回的json数据
        console.log(resb);   
        myChart3.setOption({
        xAxis: {
            data: resb.data.xAxis 
        },
        series: [{
            // 根据名字对应到相应的系列
            data: resb.data.series 
        }]
    });             
    })