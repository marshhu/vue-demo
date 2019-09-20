<template>
  <div class="demo">
    <h1>{{ title }}</h1>
    <ul>
      <li>
        <el-button @click="testApi">
          请求api
        </el-button>
      </li>
      <li>
        <el-button
          type="primary"
          @click="jump"
        >
          上传图片
        </el-button>
      </li>
      <li>
        <el-button type="success">
          成功按钮
        </el-button>
      </li>
      <li>
        <el-button type="info">
          信息按钮
        </el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ping } from '@/api/test'
export default {
  name: 'Demo',
  data() {
    return {
      title: 'Vue Demo'
    }
  },
  methods: {
    testApi() {
      ping().then((resp) => {
        if (resp.code === 200) {
          this.$message({
            showClose: true,
            message: resp.msg,
            type: 'success'
          })
        } else {
          this.$message.error(resp.msg)
        }
      }).catch((error) => {
        console.error(error)
      })
    },
    jump() {
      this.$router.push({ path: '/upload' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
