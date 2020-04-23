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
    inject:['d2Form'],
    watch:{
      inputt(newValue){
        this.$emit("input",newValue)
      },
    },
    methods: {},
    created() {
      console.log(this.d2Form.formData,'那导致了');
      let that = this
      console.log(this)
      Object.defineProperty(this.d2Form.formData,"address",{
        set(value){
          that.inputt=value
          console.log(value,'?')
        }
      })
    }

  }
</script>

<style scoped>
</style>