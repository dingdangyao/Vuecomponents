export const mixins = {
  data() {
    return {
      tips: "I Is Components mixin!"
    };
  },
  methods: {
    setPx(value) {
      if (!value) return "";
      value = value + "";
      if (value.indexOf("%") === -1) {
        value = value + "px";
      }
      return value;
    }
  }
};
