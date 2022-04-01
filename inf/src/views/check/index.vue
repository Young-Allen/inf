<template>
<el-form ref="checkform" :model="checkform" label-width="80px" :rules="rules">
    <el-row>
        <el-col :span="4" :offset="9">
            <h2 style="color: #20a0ff">产 品 数 据 录 入</h2>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="16" :offset="3">
            <hr>
        </el-col>
    </el-row>

    <!--上传照片-->
    <el-row class="rowtop" type="flex" align="middle">
        <el-col :span="2" :offset="6" style="font-weight: 700; color: #606266; font-size: 14px">上传数据</el-col>
        <el-col :span="3">
            <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
        </el-col>
    </el-row>

    <el-row class="rowtop" type="flex" align="middle">
        <el-col :span="8" :offset="6">
            <el-form-item label="检测批次" prop="name">
                <el-input v-model="checkform.name" placeholder="请输入检测批次"></el-input>
            </el-form-item>
            <el-form-item label="检测型号" prop="type">
                <el-input v-model="checkform.type" placeholder="请输入检测型号"></el-input>
            </el-form-item>
            <el-form-item label="检测数量" prop="nums">
                <el-input v-model="checkform.nums" placeholder="请输入检测数量"></el-input>
            </el-form-item>
        </el-col>
    </el-row>

    <el-row class="rowtop">
        <el-col :offset="7">
            <el-form-item prop="checked">
                <el-checkbox-group v-model="checkform.checked">
                  <el-checkbox label="我已仔细阅读并同意《检测说明及注意事项》" name="checked"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
        </el-col>

        <el-col :offset="8">
            <el-form-item>
                <!-- <router-link to="/check/result"> -->
                <el-button type="primary" @click="onSubmit" style="width:150px">点击提交</el-button>
                <!-- </router-link> -->
            </el-form-item>
        </el-col>
    </el-row>

    {{ showdata }}
</el-form>
</template>

<script>

export default {
    name: 'Check',
    // 存储数据的地方，页面需要显示的数据，都需要显示在data里面定义
    data() {
        return {
            // 登录数据域
            checkform: {
                name: '',
                type: '',
                nums: '',
                checked: [],
            },

            showdata: 'sdads',

            // 表单验证规则
            rules: {
                name: [{
                    required: true,
                    trigger: 'blur',
                    message: '请输入检测批次'
                }],
                type: [{
                    required: true,
                    trigger: 'blur',
                    message: '请输入检测型号'
                }],
                nums: [{
                    required: true,
                    trigger: 'blur',
                    message: '请输入检测数量'
                }],
                checked: [{
                    type: 'array',
                    required: true,
                    message: '请勾选检测条款',
                    trigger: 'change'
                }]
            }
        }
    },
    methods: {
        // 点击提交表单，逻辑处理
          onSubmit() {
              this.$refs.checkform.validate(valid => {
                  if (valid) {
                      alert('验证通过！');

                      //路由跳转，页面到跳转到检测结果页面
                      this.$router.push({path: '/check/result'})

                  }else{
                      //表单验证失败不跳转页面
                      alert('验证失败！');
                  }
              })
          },
    },
}
</script>

<style scoped>
.rowtop {
    margin-top: 20px;
}
</style>
