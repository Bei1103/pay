<template>
  <div>
    <van-field
      readonly
      label="订金金额："
      clickable
      :value="value1"
      @touchstart.native.stop="show = true"
    />
    <van-number-keyboard
      theme="custom"
      extra-key="."
      :show="show"
      :hide-on-click-outside="false"
      @delete="handleDelete"
      @close="handleClose"
      close-button-text="确定"
      @input="handleInput"
      @blur="show = false"
      :maxlength="5"
    />
        <van-button type="info">确认支付</van-button>
        <router-link to="code">aaa</router-link>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pay",
  data() {
    return {
      show: false,
      value1: "",
    };
  },
  watch: {
    value: function (v) {
      this.value1 = v + "";
    },
  },
  mounted() {},

  methods: {
    handleInput(key) {
      this.value1 = this.value1 + "";
      //如果点击.就输出0.
      if (this.value1 === "" && key === ".") {
        this.value1 = "0";
      } else if (this.value1.indexOf(".") !== -1 && key === ".") {
        return;
      } else if (
        this.value1.indexOf("0") !== -1 &&
        this.value1.length === 1 &&
        key === 0
      ) {
        return;
      } 
     //小数点后两位限制 
      else if (/\.\d{2}$/.test(this.value1)) {
        return;
      }
      //限制输入字符长度
       if(this.value1.length>5){
      return
      }
      this.value1 += key;
    },
    handleDelete() {
      this.value1 = this.value1 + "";
      if (!this.value1) {
        return;
      }
      this.value1 = this.value1.substring(0, this.value1.length - 1);
    },
    handleClose() {
      this.value1 = Number(this.value1);
      this.$emit("input", this.value1);
    },
  },
};
</script>
<style lang="less" scoped>
</style>