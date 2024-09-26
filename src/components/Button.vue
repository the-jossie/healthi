<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonStyle() {
      return [
        this.buttonBaseStyle,
        this.buttonSizesStyle[this.width],
        this.buttonVariantsStyle[this.variant]
      ].join(' ')
    },
    buttonBaseStyle() {
      return `
        font-medium
        px-20
        py-3
        rounded-md
        transform
        transition-all
        active:scale-90
        text-center
        flex
        items-center
        justify-center
      `
    },
    buttonSizesStyle() {
      return {
        auto: 'w-auto',
        fixed: 'w-48',
        full: 'w-full'
      }
    },
    buttonVariantsStyle() {
      return {
        primary:
          'bg-primary hover:opacity-90 text-white disabled:bg-opacity-40 disabled:text-white disabled:cursor-not-allowed',
        warning: 'bg-yellow hover:opacity-90 text-white disabled:bg-opacity-40 disabled:text-white',
        secondary:
          'bg-white outline outline-[1.5px] outline-primary text-primary disabled:bg-grey-300 disabled:outline-grey-700 disabled:text-grey-700 disabled:cursor-not-allowed',
        tertiary: 'bg-red text-white',
        danger:
          'bg-red text-white cursor-pointer disabled:bg-opacity-10 disabled:text-white-50 disabled:cursor-not-allowed',
        outline:
          'bg-white outline outline-[1.5px] outline-primary text-primary disabled:outline-grey-700 disabled:text-grey-700 disabled:cursor-not-allowed'
      }
    }
  }
}
</script>

<template>
  <button :class="buttonStyle" :disabled="isLoading || disabled" v-bind="$attrs">
    <slot>{{ text }}</slot>
  </button>
</template>
