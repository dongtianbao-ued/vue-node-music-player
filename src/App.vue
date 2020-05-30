<template>
  <div id="app">
    <div class="music-container">
      <div class="top-container">
        <div class="logo-container"></div>
      </div>
      <div class="main-container">
        <div class="left-container">
          <div :class="['music-item',{'active':activeNumber===index}]"
               v-for="(item,index) in musicList"
               :key="index">{{item.name}}（{{item.singer}}）</div>
        </div>
        <div class="right-container">
          <audio src="activeMusic" class="el-audio">
          </audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 首页
 */

export default {
  name: 'App',
  data () {
    return {
      musicList: [],
      activeNumber: 0
    }
  },
  created () {
    this.getMusicList()
  },
  computed: {
    activeMusic () {
      return this.musicList[this.activeNumber] ? this.musicList[this.activeNumber].src : ''
    }
  },
  methods: {
    async getMusicList () {
      const response = await this.Axios.post('/api/getMusicList')
      if (response) {
        this.musicList = response.data
      }
    }
  }
}
</script>

<style lang="less" scoped>
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    height:100%;
    font-size:12px;
    .music-container{
      width:900px;
      height:600px;
      box-shadow:0 1px 3px rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      .top-container{
        height: 50px;
        background: #C62F2F;
        color:#ffffff;
        padding:0 20px;
        line-height: 50px;
        .logo-container{
          width:160px;
          height:50px;
          background: url('./assets/topbar.png') no-repeat 0 -8px;
        }
      }
      .main-container{
        flex: 1;
        display: flex;
        .left-container{
          width:200px;
          border-right:1px solid #dcdfe6;
          .music-item{
            height: 40px;
            line-height: 40px;
            padding: 0 10px;
            color:#606266;
            cursor: pointer;
            border-bottom:1px solid #dcdfe6;
            &:hover{
              background: #ecf5ff;
            }
            &.active{
              background: #ecf5ff;
              color:#409eff
            }
          }
        }
        .right-container{
          flex: 1;
          .el-audio{
            width:100%;
            height:100%;
          }
        }
      }
    }
  }
</style>
