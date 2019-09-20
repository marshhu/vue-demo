<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="@/assets/logo.png"
    >
    <el-row>
      <el-upload
        ref="upload"
        class="upload-demo"
        :action="uploadUrl"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        list-type="picture-card"
        :name="uploadName"
        :file-list="fileList"
        :http-request="uploadSectionFile"
        multiple
      >
        <i class="el-icon-plus" />
      </el-upload>
    </el-row>
  </div>
</template>

<script>
import request from '@/util/request'
export default {
  name: 'Upload',
  data() {
    return {
      uploadUrl: 'http://localhost:8080/api/uploadSingle', // 上传URL
      uploadName: 'file', // 图片或视频名称
      fileList: []
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    uploadSectionFile: function (params) {
      var file = params.file
      console.log(file)
      // var fileUrl = this.$refs.upload.uploadFiles[0].url
      console.log(this.$refs.upload.uploadFiles)
      var formData = new FormData()
      formData.append(this.uploadName, file)
      request.post(this.uploadUrl, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((resp) => {
          console.log(resp)
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
    }
  }
}
</script>

<style lang="sass">

</style>
