<template> <h1></h1></template>

<script>
export default {
  name: "FormInput",
  props: {
    id: String,
    name: String,
    errorText: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  .hide {
    display: none;
  }
}
</style>
