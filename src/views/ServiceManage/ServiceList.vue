<template>
  <div>
    <!-- 工具条 -->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-row>
          <el-form-item>
            <el-button>按编辑时间排序</el-button>
            <el-button>按销量排序</el-button>
          </el-form-item>
          <el-form-item>
            <el-button>今日发布</el-button>
            <el-button>本周发布</el-button>
          </el-form-item>
        </el-row>
        <!-- <el-row>
          <el-form-item>
            <el-select placeholder="请选择">
              <el-option value="1">1</el-option>
              <el-option value="2">1</el-option>
              <el-option value="3">1</el-option>
            </el-select>
            <el-button>按类型搜索</el-button>
          </el-form-item>
        </el-row> -->
        <el-row>
          <el-form-item>
            <el-input placeholder="标题模糊搜索" icon="search" size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="标题模糊搜索" icon="search" size="small"></el-input>
          </el-form-item>
        </el-row>
        
      </el-form>
    </el-col>
    <!-- 表格 -->
    <el-col :span="24">
      <template>
        <el-table highlight-current-row style="width:100%" v-loading="listLoading" :data="serviceList">
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="id" label="服务标题"></el-table-column>
          <el-table-column prop="id" label="服务分类"></el-table-column>
          <el-table-column prop="id" label="服务价格"></el-table-column>
          <el-table-column prop="id" label="产品列表"></el-table-column>
          <el-table-column prop="id" label="评分"></el-table-column>
          <el-table-column prop="id" label="销量"></el-table-column>
        </el-table>
      </template>
    </el-col>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        serviceList:[],
        listLoading: false
      }
    }
  }

</script>