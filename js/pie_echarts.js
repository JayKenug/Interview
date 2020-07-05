var myChart2 = echarts.init(document.getElementById('pie'));
        // 显示标题，图例和空的坐标轴
        myChart2.setOption({
            title: {
                text: '饼状图数据展示',
                left: 'center',
                textStyle: {
                    fontSize: 20,
                },
            },
            tooltip: {
                
            },
            series: [
                {
                    name: 'data',
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '52%'],
                    data: [],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });

        // 异步加载数据
        $.ajax({
            url: 'https://edu.telking.com/api/?type=week',    //后端程序的url地址
            type: 'get',
            dataType: 'json',
        })

        .done(function(resp){        //请求成功以后的操作（resp是后端返回的json数据
            console.log(resp);   
            myChart2.setOption({
            series: [{
                // 根据名字对应到相应的系列
                data: [
                    {value: resp.data.series[0] , name: resp.data.xAxis[0] },  
                    {value: resp.data.series[1] , name: resp.data.xAxis[1] },       
                    {value: resp.data.series[2] , name: resp.data.xAxis[2] },       
                    {value: resp.data.series[3] , name: resp.data.xAxis[3] },       
                    {value: resp.data.series[4] , name: resp.data.xAxis[4] },       
                    {value: resp.data.series[5] , name: resp.data.xAxis[5] },       
                    {value: resp.data.series[6] , name: resp.data.xAxis[6] },       
                ],
            }]
    });             
})