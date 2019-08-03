<template>
    <!-- Register form -->
    <div class="register">
        
        <el-button style="display:block;margin:0 auto" round type="primary" @click="dialogFormVisible = true">加入我们</el-button>
        <el-dialog title="请留下您的个人信息" :visible.sync="dialogFormVisible" width="80%">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="年级专业" prop="major">
                    <el-input v-model="ruleForm.major" placeholder="  如“20土木”"></el-input>
                </el-form-item>
                <el-form-item label="校区" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择所在校区">
                    <el-option label="四平路校区" value="siping"></el-option>
                    <el-option label="嘉定校区" value="jiading"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="加入时间" required>
                    <el-col :span="11">
                    <el-form-item prop="date">
                        <el-date-picker type="date" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="想对我们说：" prop="coverletter">
                    <el-input type="textarea" v-model="ruleForm.coverletter" placeholder="你的想法，和对我们的期待："></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">提交</el-button>
            </div>
        </el-dialog>
    </div>
        
        
</template>

<style>
    .register{
        margin:1em;
        display:inline-flex;
    }
</style>


<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        ruleForm: {
          name: '',
          major: '',
          region: '',
          date: '',
          coverletter: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
          ],
          major: [
            { required: true, message: '请输入年级专业', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择当前所在校区', trigger: 'change' }
          ],
          date: [
            { type: 'date', required: true, trigger: 'change' }
          ],
        }
      };
    }
  }
</script>