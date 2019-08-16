import pageComponent from './pages.vue'

const pages={
    install:function(Vue){
        // 注册全局组件
        Vue.component('pages', pageComponent)
    }  //'pages'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default pages;