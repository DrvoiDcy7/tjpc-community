<template>
    <div class="recruit container">
      <div class="row">
        <div class="col s12">
          <div class="card grey lighten-5 left-align hoverable">
            <div class="card-image">
              <img src="/recruit-1.jpg">
            </div>
            <div class="card-content grey-text text-darken-2">
                <p style="font-size:1.35em;">如果你是在校学生...</p>
                <p>请关注同济大学社团联“百团大战”的相关消息，我们会和其他社团一起设立摊位，期待你的加入！</p>
                <i class="material-icons left">access_time</i><span>时间</span>
                <p>秋季：9月末； 春季：3月末</p>
                <i class="material-icons left">place</i><span>地点</span>
                <p>四平路校区：人工草坪； 嘉定校区：新天地</p>
                <p style="font-size:1.35em;">如果错过招新...</p>
                <p>直接在下方点击注册！</p>
                <Register />
            </div>
          </div>
        </div>
      </div>
    </div>

</template>


<script>
import Register from './Register'
export default {
    components: {Register}
}
</script>

<style>
    .recruit{
        margin-top: 2em;
    }
</style>
