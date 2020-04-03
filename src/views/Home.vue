<template>
  <div class="home">
    <el-container>
      <el-header>
        <img src="../assets/avatar.png" class="avatar" />
        <h1>
          梁生
          <i class="el-icon-male"></i> | 前端开发工程师
        </h1>
        <p>
          <i class="el-icon-phone"></i>
          <span>18901718621</span>
          <i class="el-icon-message"></i>
          <a href="mailto:leunghq@foxmail.com<">leunghq@foxmail.com</a>
          <i class="el-icon-location-information"></i>
          <span>上海</span>
        </p>
        <ul>
          <li>较强的学习能力、灵活的逻辑思维，对技术充满好奇心，具备英语文档阅读能力；</li>
          <li>性格开朗、工作负责、踏实肯干，具有团队精神；</li>
          <li>喜欢摄影、户外活动，大学期间曾组织并带队5人骑行川藏线；</li>
        </ul>
      </el-header>
      <el-main>
        <div class="nav">
          <router-link to="/">
            <el-tag type="info">专业技能</el-tag>
          </router-link>
          <router-link to="/works">
            <el-tag type="info">工作经历</el-tag>
          </router-link>
          <router-link to="/projects">
            <el-tag type="info">项目经验</el-tag>
          </router-link>
          <router-link to="/education">
            <el-tag type="info">教育背景</el-tag>
          </router-link>
          <router-link to="/person">
            <el-tag type="info">个人概况</el-tag>
          </router-link>
        </div>
        <el-divider></el-divider>
        <router-view></router-view>
        <p class="footer">Powered by Vue & Element</p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
</script>

<style lang="less" scoped>
.home {
  position: relative;
  .el-header {
    color: rgb(51, 13, 21);
    .avatar {
      width: 280px;
      position: absolute;
      top: 80px;
      left: 50%;
      transform: translate(-50%, 0);
      border-radius: 20% 5% 20% 5%;
    }
    h1 {
      margin: 350px 0 10px 0;
      text-align: center;
      font-size: 2em;
      font-weight: 700;
    }
    p {
      text-align: center;
      font-size: 1.1em;
      i {
        margin: 0 5px;
      }
    }
    a {
      text-decoration: none;
      color: #000;
      margin: 0 5px;
      &:hover {
        color: darkolivegreen;
      }
    }
    span {
      margin-right: 10px;
    }
    ul {
      // margin: 0 auto;
      position: relative;
      top: 20px;
      left: 50%;
      transform: translateX(-20%);
      font-size: 1em;
    }
  }
  .el-main {
    padding: 20px;
    position: absolute;
    top: 520px;
    width: 100%;
    .el-divider {
      border: #ccc;
    }
    .nav {
      text-align: center;
      margin: 0 auto;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-around;
      a {
        display: block;
        text-decoration: none;
        color: #000;
        font-weight: 700;
        .el-tag {
          font-size: 1.2em;
          height: 40px;
          line-height: 40px;
          width: 110px;
          color: #ccc;
          background-color: rgba(51, 13, 21, 0.5);
          border: none;
        }
        &:hover {
          .el-tag {
            color: darkolivegreen;
            background-color: rgba(204, 204, 204, 0.3);
          }
        }
      }
    }
    .footer {
      position: fixed;
      top: 3px;
      right: 3px;
      font-size: .9em;
      color: rgba(184, 177, 179, 0.8);
    }
  }
}
</style>
