<template>
    <div>
        <select style="display:inline-block;width: 500px;" @change="changeEvent" v-model="inputt">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <span>
            {{type}}
        </span>
    </div>
</template>

<script>
  export default {
    name: "",
    props:{
      value:{
        type:String,
        default:""
      },
      type:{
        type:String
      }
    },
    inject:['myForm'],
    data() {
      return {
        inputt:this.value
      }
    },
    watch:{
      value(newValue){
        this.inputt = newValue
      },
      'myForm.changeData.input2'(newValue){
          console.log(newValue)
      }
    },
    methods: {
      changeEvent(){
        this.$emit('input',this.inputt)
      }
    }

  }
</script>

<style scoped>
</style>