<template>
    <div :class="direction==='inline'?'inline':'block'">
        <template v-for="(item,name) in formdata">
            <!--input組件-->
            <div class="form-item" :class="item.component &&item.component.layout === 'block'?'form-item-row-fill':''"
                 v-if="(!item.type && !item.component)
            || (item.component && (item.component.name==='input' || !item.component.name))
            || item.type === 'input'">
                <span class="form-label">{{item.label}}</span>
                <div class="form-inner">
                    <input v-bind="item.component?item.component:{}" v-model="changeData[name]">
                </div>
            </div>

            <!--自定組件-->
            <div class="form-item" :class="item.component &&item.component.layout === 'block'?'form-item-row-fill':''"
                 v-if="item.component && typeof item.component.name === 'object'">
                <span class="form-label">{{item.label}}</span>
                <div class="form-inner">
                    <renderCustom
                        v-model="changeData[name]"
                        :component-name="item.component.name"
                        :props="Object.assign({},item.component.props)"
                    ></renderCustom>
                </div>

            </div>

        </template>

    </div>
</template>

<script>
  import renderCustom from "./render/render-custom"

  export default {
    name: "myForm",
    components: {
      renderCustom
    },
    provide() {
      return {
        'myForm': this
      }
    },
    props: {
      formdata: {       // 需要渲染的数据列表
        type: Object,
        required: true,
        default: function () {
          return {}
        }
      },
      value: {          // 双向绑定使用
        type: Object,
        required: true,
        default: function () {
          return {}
        }
      },
      direction: {       // 排列方式
        type: String,
        default: "inline"
      },
    },
    data() {
      return {
        changeData: {}
      }
    },

    watch: {
      // 主要监听外部异步加载改变数据，同步更新到changeData中
      formdata: {
        handler(newValue) {
          console.log(newValue)
          this.formToChange(newValue)
        },
        deep: true
      }
    },
    methods: {
      formToChange(form = {}) {
        let tempForm = {}
        Object.keys(form).forEach(item => {
          tempForm[item] = form[item].value?form[item].value:""
        })
        this.$emit("input", tempForm)
        this.changeData = tempForm
      }
    },
    created() {
      this.formToChange(this.formData)
    }

  }
</script>

<style scoped lang="less">
    @labelWidth:80px;
    @itemDistance:10px;
    @itemHeight:40px;

    .inline {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-auto-flow: row;

        .form-item {
            width:100%;
            height:@itemHeight;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .form-label {
                width: @labelWidth;
                margin-right: @itemDistance;
                text-align: right;
                display: inline-block;
            }

            .form-inner{
                width:calc(100% - @labelWidth - @itemDistance);
                display: inline-block;
            }
        }

        /*当出现一个元素独占一行的情况*/
        .form-item-row-fill{
            grid-column-start: 1;
            grid-column-end: 3;
        }

    }

    .block {
        .form-item {
            width:100%;
            height: @itemHeight;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .form-label {
                width: @labelWidth;
                margin-right: @itemDistance;
                text-align: right;
                display: inline-block;
            }

            .form-inner{
                width:calc(100% - @labelWidth - @itemDistance);
                display: inline-block;
            }

        }
    }

</style>