 
<template>
  <div>
    <van-field
      readonly
      label="￥"
      clickable
      :value="value1"
      @touchstart.native.stop="show = true"
    />
    <van-number-keyboard
      theme="custom"
      :show="show"
      :title="'￥' + value1"
      :hide-on-click-outside="false"
      :maxlength="maxlength"
      extra-key="."
      @input="handleInput"
      @delete="handleDelete"
      @close="handleClose"
      close-button-text="确定"
      @blur="show = false"
    ></van-number-keyboard>
  </div>
</template>
<script>
import { Field, NumberKeyboard } from "vant";
export default {
  name: "MoneyKeyboard",
  props: {
      value: [],
      // eslint-disable-next-line vue/require-prop-type-constructor
      maxlength: 2
  },
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
    value1(val) {
      if (/^0[1-9]/.test(val)) {
        this.value1 = val.substring(1);
      }
    },
  },
  components: {
    [Field.name]: Field,
    [NumberKeyboard.name]: NumberKeyboard,
  },
  mounted() {},

  methods: {
    handleInput(key) {
      this.value1 = this.value1 + "";
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
      } else if (/\.\d{2}$/.test(this.value1)) {
        return;
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