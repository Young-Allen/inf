<template>
<el-row>
    <el-col :span="15" :offset="4">
        <h1 style="color: #20a0ff">新建工单</h1>
        <hr>
    </el-col>
    <el-form ref="form" :model="form" label-width="80px">
        <el-col :span="8" :offset="4" class="rowtop">
            <el-form-item label="工单标题">
                <el-input v-model="form.name" width placeholder="请输入标题"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="12" :offset="4" class="rowtop">
            <el-form-item label="工单内容">
                <el-input type="textarea" v-model="form.desc" rows="7" placeholder="请输入内容"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="12" :offset="4" class="rowtop">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList">
                <span style="font-size: 14px; color: #606266; font-weight: 700; padding-right: 10px; padding-left: 15px">上传附件</span>
                <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
        </el-col>
        <el-col :span="12" :offset="4" class="rowtop">
            <el-form-item>
                <el-button type="primary" @click="onSubmit">点击提交</el-button>
            </el-form-item>
        </el-col>
    </el-form>

</el-row>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            form: {
                name: '',
                type: '',
                nums: '',
            }
        }
    },
}
</script>

<style scoped>
.rowtop {
    margin-top: 40px;
}
</style>
