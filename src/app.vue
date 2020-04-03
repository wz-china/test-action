<template>
    <div>
        <transition-group name="list" tag="ul">
            <li class="list-item"
                draggable
                @dragstart="dropStart"
                @drop="dropEnd"
                @dragover='dragOver'
                :key="item"
                :curItem="index"
                v-for="(item,index) in list">{{item}}
            </li>
        </transition-group>
    </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
        list: [],
        from:null
      }
    },
    created(){
      for(let i =0;i<120;i++){
        this.list.push(i)
      }
      this.list.sort(function (a,b) {
        return Math.random() > 0.5? -1:1
      })
    },
    methods: {
      dragOver(e){
        e.preventDefault()
        console.log(11)
      },
      dropEnd(e) {
//        let cur = e.srcElement.attributes.getNamedItem("curItem").value
//        let value = this.list[this.from]
//        this.list.splice(this.from,1)
//        this.list.splice(cur,0,value)
        this.list.sort(function (a,b) {
          return Math.random() > 0.5? -1:1
        })
      },
      dropStart(e) {
        this.from = e.srcElement.attributes.getNamedItem("curItem").value
      },

    }
  }

</script>

<style scoped>
    ul{
        width:400px;
        height:300px;
    }
    .list-item {
        width:30px;
        height:30px;
        line-height: 30px;
        text-align: center;
        float: left;
        list-style: none;
        border: 1px solid #ccc;
        margin: 5px;
        box-sizing: border-box;
    }
    .list-move {
        transition: transform 1s;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>

