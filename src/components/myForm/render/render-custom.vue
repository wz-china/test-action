
<script>
  export default {
    name: "renderCustom",
    props: {
      componentName:{
        required:true
      },
      value:{
        required:true
      },
      props:{
        type:Object
      }
    },
    render(h) {
      let self = this
        return h(this.componentName,{
          props:{
            value: self.value,
            ...self.props
          },
          on: {
            input: function (event) {
              self.$emit('input', event)
            }
          }
        })
    }
  }
</script>

<style scoped>
</style>