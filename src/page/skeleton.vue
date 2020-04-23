<template>
    <div>
        <d2-crud
            ref="d2Crud"
            :columns="columns"
            :data="data"
            :rowHandle="rowHandle"
            :edit-template="editTemplate"
            @form-data-change="handleDataChange"
            @row-edit="handleRowEdit"
            @dialog-cancel="handleDialogCancel"/>

    </div>
</template>

<script>
  import formItemData from "../components/form-item-data"
  import formItemData2 from "../components/form-item-data2"
  import formItemData3 from "../components/form-item-data3"

  export default {
    name: "skeleton",
    components:{
      formItemData3
    },
    data() {
      return {
        columns: [
          {
            title: '日期',
            key: 'date',
            width: '180'
          },
          {
            title: '姓名',
            key: 'name',
            width: '180'
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '检查状态（点击可修改）',
            key: 'check',
          }
        ],
        data: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            check: 'niubi'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            check: 'niubi'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            check: 'niubi'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            check: 'niubi'
          }
        ],
        rowHandle: {
          columnHeader: '编辑表格',
          edit: {
            icon: 'el-icon-edit',
            text: '点我编辑自定义表单组件',
            size: 'small'
          }
        },
        editTemplate: {
          date: {
            title: '日期',
            value: '',
          },
          address: {
            title: '地址',
            value: '',
            component:{
              render:function(h,value){
                let that = this
                console.log(that,value);
                return h(formItemData3,{
                  props:{
                    value:value,
                  },
                  on:{
                    input:function(e){
                      that.$emit("input",e)
                    }
                  }
                })
              }
            }
          },
          name: {
            title: '姓名',
            value: '',
            component:{
              name:formItemData2,
            }
          },
          check: {
            title: '检查状态（点击进行修改）',
            value: '',
            component: {
              type: "textarea"
            }
          }
        },
        formOptions: {
          labelWidth: '80px',
          labelPosition: 'left',
          saveLoading: false
        }
      }
    },
    methods: {
      handleDataChange({key,value}) {
        console.log(this);

        console.log(key,value)
      },
      handleRowEdit({index, row}, done) {
        console.log(index)
        console.log(row)
        done()
      },
      handleDialogCancel(done) {
        this.$message({
          message: '取消编辑',
          type: 'warning'
        })
        done()
      }
    },
    created() {
    }

  }
</script>

<style scoped>
</style>