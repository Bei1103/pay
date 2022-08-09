<template>
  <div class="hello">
    <van-col span="8">订金金额：</van-col>
    <van-field
      readonly
      clickable
      :value="value"
      @touchstart.native.stop="show = true"
    />
    <van-number-keyboard
  :show="show"
  theme="custom"
  extra-key="."
  close-button-text="完成"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
    <van-button type="info">确认支付</van-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      show: false,
      value: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
