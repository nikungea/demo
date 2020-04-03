<template>
  <div class="skills">
    <div class="pic">
      <el-progress type="circle" :percentage="95" color="#017CE5"></el-progress>
      <el-progress type="circle" :percentage="93" color="#017CE5"></el-progress>
      <el-progress type="circle" :percentage="90" color="#017CE5"></el-progress>
    </div>
    <ul class="title">
      <li>HTML/CSS</li>
      <li>Javascript</li>
      <li>Vue</li>
    </ul>
    <ul class="details">
      <li>
        <i class="el-icon-s-tools"></i>
        熟练掌握HTML5/CSS3，熟练使用less/sass等CSS预处理器；
      </li>
      <li>
        <i class="el-icon-s-tools"></i>
        熟练使用flex布局，rem布局等方式进行响应式开发；
      </li>
      <li>
        <i class="el-icon-s-tools"></i>
        熟练掌握原生JavaScript以及ES6新增特性；
      </li>
      <li>
        <i class="el-icon-s-tools"></i>
        熟练使用Ajax进行前后端交互，以及使用模板引擎渲染视图；
      </li>
      <li>
        <i class="el-icon-s-tools"></i>
        熟练掌握Vue全家桶，并结合UI框架快速构建单页面程序;
      </li>
      <li>
        <i class="el-icon-s-tools"></i>
        熟练使用Bootstrap / Element / Vant等前端框架；
      </li>
      <li>
        <i class="el-icon-s-tools"></i>
        熟练使用jQuery / Zepto 等JavaScript库操作DOM元素，处理页面逻辑;
      </li>
      <li>
        <i class="el-icon-s-tools"></i>
        熟练使用 swiper / artTemplate / echarts / axios等插件；
      </li>
      <li>
        <i class="el-icon-s-tools"></i>
        熟悉webpack自动化构建工具、npm/yarn包管理工具、git代码版本管理，以及postman/swagger进行后台接口测试；
      </li>
      <li>
        <i class="el-icon-s-tools"></i>
        了解小程序，react，node.js，以及linux命令行的基本使用；
      </li>
      <li>
        <i class="el-icon-s-tools"></i>
        代码风格良好，尽力编写符合规范、高质量、可维护的代码；
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
ul {
  list-style: none;
}
.skills {
  color: #ccc;
  .pic {
    display: flex;
    justify-content: space-around;
  }
  .title {
    margin: 10px 0;
    justify-content: space-around;
    display: flex;
    li {
      display: block;
      width: 126px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      color: #000;
    }
  }
  .details {
    padding: 30px;
    padding-left: 69px;
    li {
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
