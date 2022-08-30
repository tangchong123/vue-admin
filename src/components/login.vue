<template>
    <div>
        <ul class="login-head-ul">
            <li v-for="(item,index) in items" :key="item" @click="changeCurrent2(index)" :class="[CurrentIndex ==index ?'login-head-li-current':'']">
                {{item}}
            </li>
            <li :class="{'login-head-li-current':isCurrent}" @click="changeCurrent">登录</li>
            <li>注册</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Login",
    data(){
        return {
            isCurrent:true,
            items:['登录','注册','忘记密码'],
            CurrentIndex:0
        }
    },
    methods: {
        changeCurrent(){
            this.isCurrent = !this.isCurrent
        },
        changeCurrent2(index){
            this.CurrentIndex = index
        }
    }
}
</script>
<style scoped>
.login-head-ul {
    width:600px;
    height: 60px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.login-head-ul li {
    display: inline-block;
    width: 100px;
    height: 100%;
    box-sizing: border-box;
    border-radius:2px;
    background-color:blue;
    color:#fff;
    margin: auto;
    text-align: center;
    line-height:60px;
}
.login-head-li-current {
    opacity: 0.9;
    color: red !important;
    font-weight: 600;
}
</style>