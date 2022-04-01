<template>
<el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 90%; margin-left: 40px" :header-cell-style="{background:'#DCDFE6',color:'#606266'}" height="700" :default-sort = "{prop: 'data', order: 'descending',prop: 'good',order: 'descending'}">
    <el-table-column label="检测日期" prop="data" sortable>
    </el-table-column>
    <el-table-column label="检测批次" prop="name">
    </el-table-column>
    <el-table-column label="检测数量" prop="number" >
    </el-table-column>
    <el-table-column label="良品率" prop="good" sortable>
    </el-table-column>
    <el-table-column>
        <template slot="header" slot-scope="">
            <el-input v-model="search" size="mini" placeholder="输入检测批次搜索" />
        </template>
        <template slot-scope="scope">
            <router-link to="../check/result">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
            </router-link>
        </template>
    </el-table-column>
</el-table>
</template>

<script>

export default {
    name: 'index',
    data() {
        return {
            tableData: [{
                data: '2016-05-04',
                name: '1',
                number: '200',
                good: '90%',
            }, {
                data: '2016-01-02',
                name: '2',
                number: '200',
                good: '99%',
            }, {
                data: '2016-07-02',
                name: '3',
                number: '200',
                good: '91%',
            },{
                data: '2016-05-22',
                name: '4',
                number: '200',
                good: '88%',
            },{
                data: '2016-05-06',
                name: '5',
                number: '200',
                good: '76%',
            },{
                data: '2016-04-02',
                name: '6',
                number: '200',
                good: '97%',
            },{
                data: '2016-08-02',
                name: '7',
                number: '200',
                good: '97%',
            },{
                data: '2016-07-02',
                name: '8',
                number: '200',
                good: '97%',
            },{
                data: '2016-05-02',
                name: '9',
                number: '200',
                good: '79%',
            },{
                data: '2016-05-02',
                name: '10',
                number: '200',
                good: '89%',
            },{
                data: '2016-05-02',
                name: '11',
                number: '200',
                good: '92%',
            },{
                data: '2016-05-02',
                name: '12',
                number: '200',
                good: '97%',
            },{
                data: '2016-05-02',
                name: '13',
                number: '200',
                good: '97%',
            }],
            search: ''
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
            console.log(index.data);
            alert('您点击了详情，点击确定跳转');
        },
    },
}
</script>
