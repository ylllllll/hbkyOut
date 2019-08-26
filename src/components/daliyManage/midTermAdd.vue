<template>
    <div id="midTermAdd">
        <div class="check_box">
            <router-link to="/index/midTerm/midTermAdd/midTermAddForm1">表一</router-link>
            <router-link to="/index/midTerm/midTermAdd/midTermAddForm2">表二</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'midTermAdd',
        
    }
</script>

<style lang="less">
    #midTermAdd {
        .check_box {
            background-color: #fff;
        }
    }
</style>
