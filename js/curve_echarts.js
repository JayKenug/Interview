var myChart = echarts.init(document.getElementById('curve'));
        // 显示标题，图例和空的坐标轴
        myChart.setOption({
            color: ['#3398DB'],
            title: {
                text: '曲线图数据展示',
                left: 'center',
                
            },
            tooltip: {},
            legend: {
            },
            xAxis: {
                data: []
            },
            yAxis: {},
            series: [{
                type: 'line',
                data: [],
                areaStyle: {},
                smooth: true,
                //去掉点
                symbol: 'none',
            }]
        });

        // 异步加载数据
        $.ajax({
            url: 'https://edu.telking.com/api/?type=month',    //后端程序的url地址
            type: 'get',
            dataType: 'json',
        })

        .done(function(resp){        //请求成功以后的操作（resp是后端返回的json数据
            console.log(resp);   
            myChart.setOption({
            xAxis: {
                data: resp.data.xAxis 
            },
            series: [{
                // 根据名字对应到相应的系列
                data: resp.data.series 
            }]
    });             
})