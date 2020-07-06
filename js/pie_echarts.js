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
            var vllist = resp.data.series;
            var nelist = resp.data.xAxis;
            var str = new Array();
            for(i=0; i<nelist.length;i++){
                var str3 = new Object();
                str3.value = vllist[i];
                str3.name = nelist[i];   
                str.push(str3);
                console.log(str) 
            }
            
            var servicedata = str;
            myChart2.setOption({ 
                series:[{
                    data:servicedata,
                }]

            });
         
})