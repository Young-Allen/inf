<template>
<el-row>
    <el-col :span="2" type="flex" align="middle">
        <router-link to="../check/index">
            <el-button type="primary" icon="el-icon-arrow-left">返回</el-button>
        </router-link>
    </el-col>
    <el-col :span="19" type="flex" align="middle">
        <h1 style="color:#409EFF">检测结果</h1>
    </el-col>
    <el-col :span="10" :offset="2">
        <el-button type="primary" round style="width:150px" icon="el-icon-upload2
">导出数据</el-button>
    </el-col>
     <el-col :span="2" :offset="4">
        <el-button type="primary" round style="width:150px" icon="el-icon-s-data" @click="dataReport">结果报表</el-button>
    </el-col>
    <el-col :span="2" :offset="1">
        <router-link to="../call/index">
            <el-button type="primary" round style="width:150px" icon="el-icon-phone">联系厂家</el-button>
        </router-link>
    </el-col>

    <!-- 表一 -->
    <el-col :span="15" :offset="4">
        <el-table :data="tableData1" border style="width: 100%" class="rowtop" type="primary" :header-cell-style="{background:'#DCDFE6',color:'#606266'}">
            <el-table-column prop="batch" label="产品批次" width="180">
            </el-table-column>
            <el-table-column prop="type" label="产品型号" width="180">
            </el-table-column>
            <el-table-column prop="quantity" label="产品数量" width="120">
            </el-table-column>
            <el-table-column prop="person" label="质检人">
            </el-table-column>
            <el-table-column prop="good" label="良品率" width="110">
            </el-table-column>
        </el-table>
    </el-col>

    <!-- 表二 -->
    <el-col :span="15" :offset="4">
        <el-table :data="tableData2" height="450" style="width: 100%" :header-cell-style="{background:'#DCDFE6',color:'#606266'}">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="主板外观">
                            <span>{{ props.row.appearance }}</span>
                        </el-form-item>
                        <el-form-item label="主板固定螺丝">
                            <span>{{ props.row.screw }}</span>
                        </el-form-item>
                        <el-form-item label="CPU风扇外观">
                            <span>{{ props.row.cpuappearance }}</span>
                        </el-form-item>
                        <el-form-item label="CPU风扇固定螺丝">
                            <span>{{ props.row.cpuscrew }}</span>
                        </el-form-item>
                        <el-form-item label="CPU风扇接线">
                            <span>{{ props.row.cpuline }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="编号" prop="id">
            </el-table-column>
            <el-table-column label="产品型号" prop="name">
            </el-table-column>

            <el-table-column label="产品质量" prop="tag" width="100" :filters="[{ text: '完好', value: '完好' }, { text: '有瑕疵', value: '有瑕疵' }]" :filter-method="filterTag" filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.tag === '有瑕疵' ? 'danger' : 'success'" disable-transitions>{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
        </el-table>
    </el-col>
</el-row>
</template>

<script>


export default {
    name: "result",
    data() {
        return {
            tableData1: [{
                batch: '20220314K5GA',
                type: '华硕EX-B250-V7',
                quantity: '100',
                good: '90%',
                person: '老王'
            }],

            tableData2: [{
                id: '202203151302',
                name: '华硕EX-B250-V7',
                tag: '完好',
                appearance: '完好',
                screw: '螺丝无缺失，型号一致',
                cpuappearance: '完好无损,无碰伤',
                cpuscrew: '螺丝无缺失，型号一致',
                cpuline: '接线正常',
            }, {
                id: '202203151302',
                name: '华硕EX-B250-V7',
                tag: '有瑕疵',
                appearance: '接口有一定程度的氧化，芯片有一定的打磨痕迹',
                screw: '1号和3号螺丝缺失，4号和5号螺丝型号不一致',
                cpuappearance: '风扇有一定程度的碰伤',
                cpuscrew: '四颗螺丝均缺少',
                cpuline: 'CPU_FAN出现插歪的情况',
            }, {
                id: '202203151302',
                name: '华硕EX-B250-V7',
                tag: '有瑕疵',
                appearance: '接口有一定程度的氧化，芯片有一定的打磨痕迹',
                screw: '8颗螺丝均缺失',
                cpuappearance: '风扇损伤严重',
                cpuscrew: '四颗螺丝均缺少',
                cpuline: 'CPU_FAN接线漏插',
            }, {
                id: '202203151302',
                name: '华硕EX-B250-V7',
                tag: '完好',
                appearance: '完好',
                screw: '螺丝无缺失，型号一致',
                cpuappearance: '完好无损,无碰伤',
                cpuscrew: '螺丝无缺失，型号一致',
                cpuline: '接线正常',
            }]

        }
    },
    methods: {
        formatter(row, column) {
            return row.address;
        },
        filterTag(value, row) {
            return row.tag === value;
        },
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        },

        //点击数据报表按钮条状并进行相关的逻辑处理
        dataReport(){
            this.$router.push({path: '../report/index'})
        }
    },
    mounted() {
        this.$http.get('/user?ID=12345')
            .then(function (response) {
                console.log(response);
            })
            .cathch(function (error) {
                console.log(error);
            })
    }
}
</script>

<style scoped>
.rowtop {
    margin-top: 10px;
}
</style>
