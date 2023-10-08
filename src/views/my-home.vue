<template>
    <div class="self-intro">
      <album/>
        <div class="self-intro-text">
            <h2>
                自我介绍
            </h2>
            <p>
                我是丁雨昕，打算在这个网站分享些自己学习生活上的体会与经验。
            </p>
            <h4>
                试试把鼠标移到卡片上~
            </h4>
            <puzzle/>
            <p>
                不知道你有没有发现小彩蛋hhh
            </p>
        </div>
    </div>  
</template>

<script>
import album from '../components/album.vue'
import puzzle from '../components/puzzle.vue'
export default{
    components:{
        album,
        puzzle,
    }
}
</script>

<style>
.self-intro{
    margin: 20px 0px;
    padding: 0px 120px;
    display: flex;
    height: 450px;
}

.self-intro-text{
    margin-left: 100px;
}
</style>