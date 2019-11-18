<template>
  <div>
    <el-button type="primary" size="small" v-on:click="query">查询</el-button>

  <el-table
    :data="list"
    style="width: 100%">
    <el-table-column
      prop="pageName"
      label="页面名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="pageAliase"
      label="别名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="pageType"
      label="页面类型">
    </el-table-column>
    <el-table-column
      prop="pageWebPath"
      label="访问路径">
    </el-table-column>
    <el-table-column
      prop="pagePhysicalPath"
      label="物理路径">
    </el-table-column>
  </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :current-page="params.page"
      :current-size="params.size"
      @current-change="changePage"
      style="float:right">
    </el-pagination>
  </div>
</template>
<script>
  import * as cmsApi from '../api/cms'
  export default {
    data() {
      return {
        params:{
          page:1,
          size:10
        },
        list:[

      ],
      total: 0
      }
    },
    methods:{
      query:function () {
        cmsApi.page_list(this.params.size,this.params.page).then((result)=>{
          this.list = result.queryResult.list;
          this.total = result.queryResult.total;
        })
      },
      changePage:function (page) {
        this.params.page=page;
        this.query();
      }
    },
    mounted() {
      //当Dom元素渲染完调用Query
      this.query();
    }

  }
</script>
<style>

</style>
