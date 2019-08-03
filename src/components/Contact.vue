<template>

    <div class="container contact ">
        <div class="row">
            <div class="col s12 l5 offset-l1">
                <div class="card grey lighten-5 center-align">
                    <div class="card-content grey-text text-darken-2">
                        <span class="card-title">联系我们</span>
                        <p style="font-size:1.35em;">无论您是同济大学教职工、学生，还是其他社会人士，都欢迎扫描下方微信二维码关注我们的微信公众号，获取我们的最新动态。 若对我们的社团活动或本网站有任何意见，或希望表达观点，同样欢迎在留言区留言！</p>
                    </div>
                </div>
            </div>
            
            <div class="col s12 l5 offset-l1">
                <form>
                    <div class="input-field">
                        <i class="material-icons prefix">email</i>
                        <input type="email" id="email">
                        <label for="email">联系方式</label>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix">import_contacts</i>
                        <input type="text" id="date" class="datepicker">
                        <label for="date">主题</label>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix">message</i>
                        <textarea id="message" class="materialize-textarea" cols="20" rows="20"></textarea>
                        <label for="message">留言内容</label>
                    </div>
                    <div class="input-field center">
                        <el-button type="primary" round>提交</el-button>
                    </div>
                </form>
            </div>
        </div>
        <div class="container center-align demo-image__placeholder">
            <div class="row">
                <div class="block col s12 l5">
                <span class="demonstration grey-text text-darken-2">四平路校区</span>
                    <div class="qrCode ">
                        <el-image :src="src">
                            <div slot="placeholder" class="image-slot">
                                加载中<span class="dot">...</span>
                            </div>
                        </el-image>
                    </div>
                </div>
                <div class="block col s12 l5 offset-l2">
                    <span class="demonstration grey-text text-darken-2">嘉定校区</span>
                    <div class="qrCode">
                        <el-image :src="src">
                            <div slot="placeholder" class="image-slot">
                                加载中<span class="dot">...</span>
                            </div>
                        </el-image>
                    </div>
                </div>
            </div>

        </div>
    </div>

    
</template>

<script>
export default {
    data(){
    return{
      src: '/qr2.jpg'
    }
  }
}
</script>

<style>
    .contact{
        margin-top:2em;
    }
</style>
