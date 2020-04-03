<template>
  <div class="block" id="timeline">
    <el-tabs tab-position="left" v-model="activeTab" id="el-tabs">
      <el-tab-pane name="0" label="云乐购移动商城(vue,vant)">
        <p>
          <strong>项目概况：</strong>一家线上超市，销售生活用品，食品，数码产品等，包括登录，首页，商品列表，商品详情，购物车，用户中心等页面
        </p>
        <p>
          <strong>技术描述：</strong>
        </p>
        <ul>
          <li>
            <i class="el-icon-setting"></i> vue-cli 脚手架初始化项目，配合vant完成页面的构建；
          </li>
          <li>
            <i class="el-icon-setting"></i> 通过webpack配置lib-flexible与postcss-px2rem插件，实现移动端的rem布局；
          </li>
          <li>
            <i class="el-icon-setting"></i> 使用yarn进行依赖包的安装管理，相比npm部分提高了开发效率；
          </li>
          <li>
            <i class="el-icon-setting"></i> 使用异步组件配合路由懒加载实现组件按需加载，并在详情页使用v-lazy实现商品图片的懒加载，提升性能；
          </li>
          <li>
            <i class="el-icon-setting"></i> 通过配置babel-plugin-import插件实现vant组件的按需引入，减少代码体积；
          </li>
          <li>
            <i class="el-icon-setting"></i> 使用vant的轮播图组件实现首页商品轮播图效果，配合pagination分页器获取每页商品数据；
          </li>
          <li>
            <i class="el-icon-setting"></i> 使用vuex管理组件数据，实现商品列表与购物车等组件之间的通讯；
          </li>
          <li>
            <i class="el-icon-setting"></i> 配置webpack优化打包体积，提高移动端的加载速度，提升用户体验；
          </li>
          <li>
            <i class="el-icon-setting"></i> 配合Eslint完成代码格式规范，提高项目可维护性；
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane name="1" label="好尚品后台管理系统(vue,element)">
        <p>
          <strong>项目概况：</strong>好尚品公司后台管理系统，实现公司内部人员、权限、商品，订单等管理
        </p>
        <p>
          <strong>技术描述：</strong>
        </p>
        <ul>
          <li>
            <i class="el-icon-setting"></i> vue-cli 脚手架初始化项目，配合element UI 完成页面的构建；
          </li>
          <li>
            <i class="el-icon-setting"></i> vue-router 进行嵌套路由开发，在首页中通过路由切换展示不同页面组件，提高用户体验；
          </li>
          <li>
            <i class="el-icon-setting"></i> 提供全局axios工具，配置baseURL和请求拦截，用于发送ajax请求；
          </li>
          <li>
            <i class="el-icon-setting"></i> 登录组件使用element表单验证，并结合token和导航守卫实现登录拦截以及部分功能按登陆状态展示；
          </li>
          <li>
            <i class="el-icon-setting"></i> 使用element树形结构给不同登陆者分配不同的查看权限，每个登陆者可以对相应的用户信息进行操作；
          </li>
          <li>
            <i class="el-icon-setting"></i> 使用element表单+级联选择器完成新增用户、商品，以及相应的展示；
          </li>
          <li>
            <i class="el-icon-setting"></i> 使用echarts完成订单数据，地区的分布，商品统计等数据可视化操作；
          </li>
          <li>
            <i class="el-icon-setting"></i> 使用vue-quill-editor富文本编辑器提供基础的文本编辑功能；
          </li>
          <li>
            <i class="el-icon-setting"></i> 配合Eslint完成代码格式规范，提高项目可维护性；
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane name="2" label="前海酩品商城(rem,flex)">
        <p>
          <strong>项目概况：</strong>前海酩品旗下购物商城，用以出售各种国际名酒以及公司品牌形象宣传
        </p>
        <p>
          <strong>技术描述：</strong>
        </p>
        <ul>
          <li>
            <i class="el-icon-setting"></i> 利用rem+flex布局实现移动端静态页面的构建，使其适配不同手机屏幕；
          </li>
          <li>
            <i class="el-icon-setting"></i> 运用zepto实现页面效果，并对页面DOM进行操作；
          </li>
          <li>
            <i class="el-icon-setting"></i> 页面大量使用精灵图，减少对服务器的请求次数，提高效率；
          </li>
          <li>
            <i class="el-icon-setting"></i> 运用 swiper 实现首页广告无缝轮播效果；
          </li>
          <li>
            <i class="el-icon-setting"></i> 通过ajax实现数据的交互，并配合artTemplate模板引擎完成页面渲染；
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane name="3" label="深圳大地和网络学院(react,antd)">
        <p>
          <strong>项目概况：</strong>深圳大地和电气公司内部培训平台，用以公司内部人员的培训和学习
        </p>
        <p>
          <strong>技术描述：</strong>
        </p>
        <ul>
          <li>
            <i class="el-icon-setting"></i> npx create-react-app 脚手架初始化项目；
          </li>
          <li>
            <i class="el-icon-setting"></i> ant design 配合sass实现页面结构样式；
          </li>
          <li>
            <i class="el-icon-setting"></i> react-router-dom用于路由切换展示不同页面组件；
          </li>
          <li>
            <i class="el-icon-setting"></i> 课程列表页通过使用react-virtualized实现长列表可视区渲染；
          </li>
          <li>
            <i class="el-icon-setting"></i> 使用axios配合请求响应拦截器实现部分功能按登陆状态显示；
          </li>
          <li>
            <i class="el-icon-setting"></i> css modules处理样式冲突问题
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: '0'
    }
  }
}
</script>

<style lang="less" scoped>
#el-tabs {
  .el-tab-pane {
    color: #ccc;
    line-height: 30px;
  }
}
</style>
<style lang="less">
#el-tabs {
  .el-tabs__nav {
    .el-tabs__item.is-active {
      color: #017ce5;
    }
    .el-tabs__item {
      height: 80px;
      color: #000;
      &:hover {
        color: gold;
      }
    }
  }
}
</style>
