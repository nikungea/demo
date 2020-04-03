<template>
  <div class="edu">
    <ul>
      <li>长春理工大学</li>
      <li>新能源材料与器件</li>
      <li>本科</li>
      <li>英语六级</li>
      <li>曾获全国大学生英语竞赛三等奖</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .edu {
    color: #ccc;
    ul {
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-content: space-between;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
      li {
        width: 380px;
        height: 50px;
        line-height: 50px;
        font-size: 1.2em;
        &:nth-child(2n) {
          padding-left: 100px;
        }
      }
    }
  }
</style>
