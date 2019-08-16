<template>
  <div class="pages">
    <el-pagination
      background
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      :current-page="currentPageNum"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="sizes,slot,prev"
      :total="total"
    >
      <el-button :disabled="firstPageBtnDisabled" class="first-pager" @click="toFirstPage" type=""><i class="el-icon el-icon-arrow-left"></i></el-button>
    </el-pagination>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      :current-page="currentPageNum"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="pager,next,slot,jumper"
      :total="total"
    >
      <el-button :disabled="lastPageBtnDisabled" class="last-pager" @click="toLastPage"><i class="el-icon el-icon-arrow-right"></i></el-button>
    </el-pagination>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      :current-page="currentPageNum"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="slot"
      :total="total"
    >
      <el-button @click="handleTableFresh"><i class="el-icon el-icon-refresh"></i></el-button>
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "pages",
  components: {},
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSizes:{//选择每页显示几条
      type:Array, 
      default:[1]
    },
    pageSize: {//每页显示的条数
      type: Number,
      default: 2
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentPageNum: this.currentPage,
      firstPageBtnDisabled: true,
      lastPageBtnDisabled: false,
      lastPageNum: Math.ceil(this.total / this.pageSize),
      firstPageNum:1
    };
  },

  watch: {
    total(newVal, oldVal) {
      this.total = newVal;
      this.lastPageNum = Math.ceil(newVal / this.pageSize);
    }
  },
  created() {},
  methods: {
    handleCurrentChange(val) {
      this.firstPageBtnDisabled = val === 1 ? true : false;
      this.lastPageBtnDisabled = val === this.lastPageNum ? true : false;
      this.currentPageNum = val;
      this.$emit("handleCurrentChangeNum", val);
    },
    toFirstPage(val) {
      this.currentPageNum = this.firstPageNum;
      this.handleCurrentChange(this.currentPageNum);
    },
    toLastPage(val) {
      this.currentPageNum = this.lastPageNum;
      this.handleCurrentChange(this.lastPageNum);
    },
    handleSizeChange:function(val){ //切换每页多少条数据时触发
      this.$emit("handleSizeChangeNum", val);
    },
    handleTableFresh:function(){
      // this.$forceUpdate()
      this.$emit("handleTableFreshNum")
    }
  },
  created() {},
  mounted() {},
  destroyed() {}
};
</script>
<style lang="less">
  .pages{
      // position: absolute;
      // bottom: 15px;
      // left: 50%;
      // transform: translateX(-50%);
      // -webkit-transform: translateX(-50%);
      // -moz-transform: translateX(-50%);
      // -ms-transform: translateX(-50%);
      // -o-transform: translateX(-50%);
      width: 100%;
      text-align: center;
      .el-pagination {
        display: inline-block;
        .el-icon{
          color: #0abd90;
        }
        .el-icon-refresh:hover{
          color: #000;
        }
      }
      .is-background .el-pager li:not(.disabled){
        &.active{
          background-color: #0abd90;
          &:hover{
            color: #fff;
          }
        }
        &:hover{
          color: #0abd90;
        }
      }
      
      .el-pagination__sizes .el-input .el-input__inner:hover,
      .el-select .el-input.is-focus .el-input__inner,
      .el-select .el-input__inner:focus{
        color:#0abd90;
        border: 1px solid #0abd90;
      }
      .el-pagination__editor.el-input .el-input__inner:focus{
        border: 1px solid #0abd90;
      }  
  }
  .el-select-dropdown__item.selected{
    color:#0abd90;
  }
</style>