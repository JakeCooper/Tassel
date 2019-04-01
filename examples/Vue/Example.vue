<template>
  <div :class="styles.container">
    <div :class="styles.text">Hello, my name is {{styles.text}}</div>
  </div>
</template>

<script>
import styles from "./Example.styles.js";
export default {
  name: "Example",
  data() {
    return {
      styles: styles
    };
  }
};
</script>