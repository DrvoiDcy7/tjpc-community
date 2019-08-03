<template>
    <div class="carousel">
        <el-col :xs="20" :lg="20" :offset="2" >
            <el-carousel :interval="4000" >
                <el-carousel-item >
                    <img src="/carousel-1.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="/carousel-2.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="/carousel-3.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="/carousel-4.jpg" alt="">
                </el-carousel-item>
            </el-carousel>
        </el-col>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .carousel{
        margin-top:2em;
    }
</style>
