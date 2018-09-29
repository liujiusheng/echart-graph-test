var myChart = echarts.init(document.getElementById('chart'));
myChart.showLoading();
    myChart.hideLoading();
    myChart.setOption(option = {
        title: {
            text: 'NPM Dependencies'
        },
        // animationDurationUpdate: 1500,
        // animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout: 'force',
                // progressiveThreshold: 700,
                data: data.node,
                edges: data.link,
                label: {
                    emphasis: {
                        position: 'right',
                        show: true,
                    }
                },
                roam: true,
                focusNodeAdjacency: true,
                lineStyle: {
                    normal: {
                        width: 0.5,
                        curveness: 0.3,
                        opacity: 0.7
                    }
                }
            }
        ]
    }, true);
