<template>
    <div style="width: 800px;background: red;">
        <myForm
            direction="inline"
            :formdata="formdata"
            v-model="resultData"
        ></myForm>

        <div @click="see">查看值</div>
    </div>
</template>

<script>
  import myForm from "../components/myForm/index"
  import customCom1 from "../components/custom-component1"

  let formdata = {
    input1: {
      label: "输入框1",
      value: "",            // 如果不写，默认为空字符串
      component: {
        type: "number",
      }
    },
    input2: {
      label: "输入框2",
    },
    input3: {
      label: "自定組件",
      value: "1",
      component: {
        name: customCom1,
        layout:"block",       // 说明在inline模式下，自己独占一行
        props: {
          type: "cao"
        }
      }
    },
    input4: {
      label: "输入框4",
    },
    input5: {
      label: "输入框5",
    },
    input6: {
      label: "输入框6",
    },
  };

  export default {
    name: "customForm",
    components: {
      myForm
    },
    data() {
      return {
        formdata: formdata,
        resultData: {}
      }
    },
    methods: {
      see() {
        console.log(this.resultData)
      }
    },
    created() {
      setTimeout(() => {
        this.formdata['input1']['value'] = '222'
        this.formdata['input3']['value'] = '2'
      }, 1000)
    }

  }
</script>

<style scoped>

</style>