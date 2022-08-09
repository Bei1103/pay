<template>
    <div id="index" ref="appRef">
              <div id="root">
                              <h2>人员列表</h2>
                              <input type="text" placeholder="请输入名字" v-model="keyWord">
                              <ul>
                                      <li v-for="(p,index) of filPersons" :key="index" class="aaa">
                                              {{p.name}}-{{p.age}}-{{p.sex}}
                                      </li>
                              </ul>
                      </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'cheshi',
    data() {
      return {
        keyWord: '',
        persons: [
          { id: '001', name: '马冬梅', age: 18, sex: '女' },
          { id: '002', name: '周冬雨', age: 19, sex: '女' },
          { id: '003', name: '周杰伦', age: 21, sex: '男' },
          { id: '004', name: '温兆伦', age: 22, sex: '男' }
        ]
      }
    },
    components: {},
    mounted() {},
    beforeDestroy() {},
    methods: {},
    computed: {
      filPersons() {
        return this.persons.filter((p) => {
          return p.name.indexOf(this.keyWord) !== -1
      }
    )}
  }
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  