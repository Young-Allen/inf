<template>
<el-row>
    <el-col :span="23">
        <el-card class="box-card">
            <el-row>
                <el-col :span="5"><el-tag type="info">产品批次：{{ sum - destroy }}</el-tag></el-col>
                <el-col :span="5"><el-tag>产品总数：{{ sum }}</el-tag></el-col>
                <el-col :span="5"><el-tag type="success">完好数量：{{ sum - destroy }}</el-tag></el-col>
                <el-col :span="5"><el-tag type="danger">瑕疵数量：{{ destroy }}</el-tag></el-col>
                <el-col :span="4"><el-tag type="warning">良品率：{{ ((sum - destroy)/sum * 100).toFixed(2) }} %</el-tag></el-col>
            </el-row>
            <el-row>
                <el-col :span="4" :offset="16" class="rowtop">
                    <el-input v-model="input" placeholder="请输入批次号查询"></el-input>
                </el-col>
                <el-col :span="3" class="rowtop">
                    <el-button type="primary" @click="changeData">点击查询</el-button>
                </el-col>
            </el-row>
        </el-card>
    </el-col>

    <el-col :span="23" class="rowtop">
        <!-- ref的值是用于获取当前dom节点的名称 -->
        <el-card class="box-card">
            <div ref="mychart1" style="height: 500px; width: auto "></div>
        </el-card>
    </el-col>

    <el-col :span="23" class="rowtop">
        <el-card class="box-card">
            <div ref="mychart2" style="height: 500px; width: auto "></div>
        </el-card>
    </el-col>
</el-row>
</template>

<script>
let echarts = require("echarts");

export default {
    name: "index",
    data() {
        return {
            input:'',   //查询输入绑定的内容
            name: '0212412412', //主板的批次号
            sum: 210, //主板的总数
            destroy: 11, //有问题的主板数
            data1: [1, 2, 3, 4, 5], //表1的数据
            data2: [1, 2, 3, 4, 5, 6],  //表2的数据
        }
    },
    mounted() {
        this.initChart1();
        this.initChart2();
    },
    methods: {
        //表1的初始化函数
        initChart1() {
            //获取dom，初始化echarts实例
            this.chart1 = echarts.init(this.$refs.mychart1);

            //设置图表1的配置属性
            var option1 = {
                title: {
                    text: '主板受损问题统计'
                },
                grid: {
                    x: 110,
                    y: 45,
                    borderWidth: 1
                },
                tooltip: {},
                legend: {
                    data: ['受损数量']
                },
                xAxis: {
                    max: 'dataMax'
                },
                yAxis: {
                    type: 'category',
                    data: ['主板外观', '主板固定螺丝', 'CPU风扇外观', 'CPU风扇固定螺丝', 'CPU风扇接线'],
                    inverse: true,
                    animationDuration: 300,
                    animationDurationUpdate: 300,
                    //max: 2 // only the largest 3 bars will be displayed
                },
                series: [{
                    realtimeSort: true,
                    name: '受损数量',
                    type: 'bar',
                    data: this.data1,
                    label: {
                        show: true,
                        position: 'right',
                        valueAnimation: true
                    }
                }]
            };

            //将图表1的配置显示出来
            this.chart1.setOption(option1);
        },

        //表1的初始化函数
        initChart2() {
            this.chart2 = echarts.init(this.$refs.mychart2);

            var option2 = {
                title: {
                    text: '主板所占百分比',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [{
                    type: 'pie',
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    data: [
                        {
                            value: this.data2[0],
                            name: '合格主板'
                        },{
                            value: this.data2[1],
                            name: '主板外观'
                        },
                        {
                            value: this.data2[2],
                            name: '主板固定螺丝'
                        },
                        {
                            value: this.data2[3],
                            name: 'CPU风扇外观'
                        },
                        {
                            value: this.data2[4],
                            name: 'CPU风扇固定螺丝'
                        },
                        {
                            value: this.data2[5],
                            name: 'CPU风扇接线'
                        }
                    ]
                }]
            };

            this.chart2.setOption(option2);
        },

        //点击查询函数
        changeData() {
            var ddd = [210, 11, 12, 13, 14, 15];
            this.data1 = ddd;
            this.data2 = ddd;
            this.name = 124124;
            this.sum = 275;
            this.destroy = 65;
            this.initChart1();
            this.initChart2();
        }
    }
}
</script>

<style scoped>
.rowtop {
    margin-top: 20px;
}
.el-tag{
  font-size: 20px;
  height: 40px;
  line-height: 40px;
}
</style>
