<template>
  <div>
    <input type="text" class="input" @focus="onFocus()" />
    <div v-if="focused" class="text">Text after focus</div>
  </div>
</template>

<script>
export default {
  name: "FocusInput",
  data() {
    return {
      focused: false,
    };
  },
  methods: {
    onFocus() {
      this.focused = true;
    },
  },
};
</script>
