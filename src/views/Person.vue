<template>
  <div class="bcarousel">
    <el-carousel :interval="5000" arrow="always" height="500px">
      <el-carousel-item>
        <img src="../assets/sunset.jpg" width="100%" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/civic.jpg" width="100%" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/WuTong.jpg" width="100%" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/72.jpg" width="100%" />
      </el-carousel-item>
    </el-carousel>
    <el-divider></el-divider>
    <p>爱摄影，爱登山，爱折腾，爱技术，相信天生我材必有用，吾将上下而求索。</p>
    <p>热爱键盘飞舞代码流动构建出的纷繁页面，不断紧跟新技术仍能使我激动不已。</p>
    <p>每当想要偷懒时，常常能激励我奋进的一段故事：备住荆州数年，尝于表坐起至厕，见髀里肉生，慨然流涕。还坐，表怪问备，备曰："吾常身不离鞍，髀肉皆消。今不复骑，髀里肉生。日月若驰，老将至矣，而功业不建，是以悲耳。"</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
p {
  color: #ccc;
}
</style>
