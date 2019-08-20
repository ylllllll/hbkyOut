<template>
    <div id="register">
        <header>
            <img src="../../assets/images/login_title.png" alt="">
        </header>
        <section>
            <div class="box">
                <router-link to="/register/enterpriseRegister">企业注册</router-link>
                <router-link to="/register/expertRegister">专家注册</router-link>
            </div>
        </section>
        <div class="register_box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'register'
    }
</script>

<style lang="less">
    #register {
        width: 100%;
        height: 100%;
        background-image: url(../../assets/images/login_bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        header {
            img {
                display: block;
                width: 50%;
                margin: auto;
                padding-top: 2%; 
            }
        }
        section {
            .box {
                width: 780px;
                height: 140px;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                display: flex;
                justify-content: space-between;
                a {
                    display: inline-block;
                    width: 350px;
                    height: 140px;
                    text-align: center;
                    line-height: 140px;
                    background-color: #fafaf8;
                    border-radius: 20px;
                    font-size: 40px;
                    color: #20b58f;
                    letter-spacing: 5px;
                    cursor: pointer;
                }
            }
        }
        .register_box {
            position: fixed;
            top: 0;
            left: 0;
        }
    }
</style>
