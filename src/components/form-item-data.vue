<template>
    <div>
        <el-input v-model="inputt"></el-input>
    </div>
</template>

<script>
  export default {
    name: "form-item-data",
    props:{
      value:{
        type:String,
        default:""
      }
    },
    data() {
      return {
        inputt:this.value
      }
    },
    watch:{
      inputt(newValue){
        this.bus.$emit("sendValue",newValue)
        this.$emit("input",newValue)
      }
    },
    methods: {},
    created() {
      console.log(this.$refs.niubi);
    }

  }
</script>

<style scoped>
</style>