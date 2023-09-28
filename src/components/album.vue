<template>
<div class="shell">
    <ul class="image-frame"  ref="imageRef">
        <li v-for="item in img_list">
            <img :src="item"/>
        </li>
    </ul>
    <ul class="indicators">
        <li class="i" v-for="number in 5" ref="indicatorRefs" @click="indicatorClick(number)">
        </li>
    </ul>
    <div class="button-group">
        <div @click="leftClick" class="button-left">&lt;</div>
        <div @click="rightClick" class="button-right">&gt;</div>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
const img_list = ref (["/src/assets/images/self_img/1.jpg",
                        "/src/assets/images/self_img/2.jpg",
                        "/src/assets/images/self_img/3.jpg",
                        "/src/assets/images/self_img/4.jpg",
                        "/src/assets/images/self_img/5.jpg"])


const indicatorRefs = ref([])
const imageRef = ref()

var index = 0
var time
var rapid = false
onMounted(()=>{
    //left = this.$refs.button-left
    //console.log(imageRef)
    setPosition()
    timer()
})
function setPosition() {
    for(let i = 0; i < indicatorRefs.value.length; i++){
        if(i==index){
            indicatorRefs.value[i].style.backgroundColor = 'lightskyblue'
        }else{
            indicatorRefs.value[i].style.backgroundColor = 'white'
        }
    }

    if(rapid){
        imageRef.value.style.transition = "0s"
        imageRef.value.style.left = (index * -320) + "px"
    }else{
        imageRef.value.style.transition = "1s"
        imageRef.value.style.left = (index * -320) + "px"
    }
}

function changeIndex(){
    if(index >= indicatorRefs.value.length - 1){
        index = 0
        rapid = true
    }
    else if(index < 0)
    {
        index = indicatorRefs.value.length - 1
        rapid = true
    }
    else{
        rapid = false
        index++
    }
}

function add()
{
    if(index >= indicatorRefs.value.length - 1){
        index = 0
        rapid = true
    }else{
        rapid = false
        index++
    }
}

function subtract()
{
    if(index <= 0){
        index = indicatorRefs.value.length - 1
        rapid = true
    }else{
        rapid = false
        index--
    }
}

function timer(){
    time = setInterval(() =>{
        changeIndex()
        //console.log(index)
        //console.log(indicatorRefs.value.length)
        setPosition()
    }, 3000)
}

function leftClick(){
    subtract()
    setPosition()
    clearInterval(time)
    timer()
}

function rightClick(){
    add()
    setPosition()
    clearInterval(time)
    timer()
}

function indicatorClick(number){
    index = number-1
    rapid = true
    setPosition()
    clearInterval(time)
    timer()
}
</script>

<style scoped>
.shell{
    width: 320px;
    height: 450px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 10px 20px 10px gainsboro;
    margin-top: 100px;
}

.image-frame{
    margin: 0;
    width: 1600px;
    height: 100%;
    position: absolute;
    display: flex;
    transition: 1s;
    padding: 0;
}

img{
    width: 320px;
    height: auto;
}

.indicators{
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    padding-left: 0;
    bottom: 10px;
    width: 50%;
    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
}

.i{
    width: 8px;
    height: 8px;
    cursor: pointer;
    border-radius: 50%;
    border: solid rgba(255, 255, 255, 1) 2px;
    background-color: white;
}
.i:hover{
    background-color: lightskyblue;
}
.button-group{
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    user-select: none;
    top: 0;
}


.button-right,
.button-left{
    font-size: 30px;

    padding: 0 5px;
    cursor: pointer;
    line-height: 450px;
    color: #fff;
}

.button-right:hover{
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
}

.button-left:hover
{
    background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
}
</style>
