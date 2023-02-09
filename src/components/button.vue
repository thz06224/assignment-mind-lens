<template>
  <button
    :class="[
      'button',
      `button--${type}`,
      `button--${variation}`,
      `button--${state}`,
      `button--${status}`
    ]"
    :style="{
      'padding':`${btnPaddingY} ${btnPaddingX}`,
    }"
    :disabled="state=='disabled'?true:false"
    @click="clickHandler"
  >
    <template v-if="variation === 'left-icon-text'">
      <span v-html="icon"></span>
      <span
        class="text"
      >
        {{ text }}
      </span>
    </template>

    <template v-if="variation === 'right-icon-text'">
      <span
        class="text"
      >
        {{ text }}
      </span>
      <span v-html="icon"></span>
    </template>

    <template v-if="variation === 'text-only'">
      <span
        class="text"
      >
        {{ text }}
      </span>
    </template>

    <template v-if="variation === 'icon-only'">
      <span v-html="icon"></span>
    </template>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    variation: {
      type: String,
      default: 'text-only',
    },
    state: {
      type: String,
      default: 'default',
    },
    status: {
      type: String,
      default: 'info',
    },
    text: {
      type: String,
      default: 'Button',
    },
    btnPaddingX: {
      type: String,
      default: '24px',
    },
    btnPaddingY: {
      type: String,
      default: '8px',
    },
    icon: {
      type: String,
      default: `<svg width="24" height="24" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 8.5H20.5M20.5 8.5L13.5 15.5M20.5 8.5L13.5 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
    }
  },
};
</script>

<style>
  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 8px;
    gap: 4px;
    margin: 16px 16px 0px 0;
  }

  .button:first-child {
    margin-left: 0px;
  }

  .button .text {
    font-size: 16px;
    font-weight: 600;
    font-family: 'Open Sans';
  }

  .button span svg {
    vertical-align: middle;
  }

  .button--primary {
    background-color: #F7BA50;
    color: #0C0D0D;
  }

  .button--primary.button--default {
    background-color: #F7BA50;
    color: #0C0D0D;
  }

  .button--primary.button--hover {
    background-color: #F5AB2B;
    color: #0C0D0D;
    cursor: pointer;
  }

  .button--primary.button--clicked {
    background-color: #F7BA50;
    color: #0C0D0D;
    cursor: pointer;
  }

  .button--primary.button--disabled {
    background-color: #f7ba508a;
    color: #0C0D0D;
    cursor: not-allowed;
  }

  button.button--secondary span svg path {
    stroke: #0C0D0D;
  }

  .button--primary:hover {
    background-color: #F5AB2B;
    color: #0C0D0D;
    cursor: pointer;
  }

  .button--primary:focus {
    background-color: #F7BA50;
    box-shadow: 0 0 10px #0000002b;
    cursor: pointer;
  }

  .button--primary:disabled {
    background-color: #f7ba508a;
    color: #0C0D0D;
    cursor: not-allowed;
  }

  .button--secondary {
    background-color: #fff;
    color: #C75100;
    border: 1px solid #C75100;
  }

  .button.button--secondary span svg path {
    stroke: #C75100;
  }

  .button--secondary:hover {
    box-shadow: 0 0 10px #0000002b;
    cursor: pointer;
  }

  .button--secondary:disabled {
    cursor: not-allowed;
  }

  /* button status */
  .button--primary.button--info {
    background-color: #F5AB2B;
  }

  .button--primary.button--info:hover {
    background-color: #F5AB2B;
  }

  .button--primary.button--info:disabled {
    background-color: #f7ba508a;
  }

  .button--primary.button--danger {
    background-color: #CC3123;
    color: #fff;
  }

  .button--primary.button--danger:hover {
    background-color: #ab2c20;
  }

  .button--primary.button--danger:disabled {
    background-color: #CC31238a;
  }

  .button--primary.button--warning {
    background-color: #C75100;
    color: #fff;
  }

  .button--primary.button--warning:hover {
    background-color: #b14800;
  }

  .button--primary.button--warning:disabled {
    background-color: #C751008a;
  }

  .button--primary.button--success {
    background-color: #008700;
    color: #fff;
  }

  .button--primary.button--success:hover {
    background-color: #006c00;
  }

  .button--primary.button--success:disabled {
    background-color: #0087008a;
  }

  .button--secondary.button--info {
    color: #F5AB2B;
    border: 1px solid #F5AB2B;
  }

  .button--secondary.button--info:hover {
    border: 1px solid #F5AB2B;
  }

  .button--secondary.button--info:disabled {
    border: 1px solid #F5AB2B;
  }

  .button--secondary.button--danger {
    color: #CC3123;
    border: 1px solid #CC3123;
  }

  .button--secondary.button--warning {
    color: #C75100;
    border: 1px solid #C75100;
  }

  .button--secondary.button--success {
    color: #008700;
    border: 1px solid #008700;
  }
</style>
