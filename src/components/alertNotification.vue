<template>
  <div :class="['alert', `alert-${type}`]" role="alert">
    <div style="">
      <template v-if="type === 'info'">
        <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.6362 23.3638 2.66666 16 2.66666C8.63622 2.66666 2.66669 8.6362 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333ZM17.3334 10.6667C17.3334 9.93028 16.7364 9.33333 16 9.33333C15.2636 9.33333 14.6667 9.93028 14.6667 10.6667C14.6667 11.403 15.2636 12 16 12C16.7364 12 17.3334 11.403 17.3334 10.6667ZM16 22.6667C16.7364 22.6667 17.3334 22.0697 17.3334 21.3333V14.6667C17.3334 13.9303 16.7364 13.3333 16 13.3333C15.2636 13.3333 14.6667 13.9303 14.6667 14.6667V21.3333C14.6667 22.0697 15.2636 22.6667 16 22.6667Z" fill="#2C75DD"/>
        </svg>
      </template>

      <template v-if="type === 'danger'">
        <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14 27.3333C21.3638 27.3333 27.3334 21.3638 27.3334 14C27.3334 6.63621 21.3638 0.666672 14 0.666672C6.63622 0.666672 0.666687 6.63621 0.666687 14C0.666687 21.3638 6.63622 27.3333 14 27.3333ZM14 7.33334C14.7364 7.33334 15.3334 7.93029 15.3334 8.66667V15.3333C15.3334 16.0697 14.7364 16.6667 14 16.6667C13.2636 16.6667 12.6667 16.0697 12.6667 15.3333V8.66667C12.6667 7.93029 13.2636 7.33334 14 7.33334ZM15.3334 19.3333C15.3334 20.0697 14.7364 20.6667 14 20.6667C13.2636 20.6667 12.6667 20.0697 12.6667 19.3333C12.6667 18.597 13.2636 18 14 18C14.7364 18 15.3334 18.597 15.3334 19.3333Z" fill="#CC3123"/>
        </svg>
      </template>

      <template v-if="type === 'warning'">
        <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2346 1.35036L0.385065 22.0048C-0.379868 23.3381 0.582681 25 2.11985 25H25.8724C27.4113 25 28.3736 23.3347 27.6052 22.0014L15.7022 1.34698C14.9319 0.0103203 13.0023 0.0121994 12.2346 1.35036ZM14 7.66667C14.7364 7.66667 15.3333 8.26363 15.3333 9.00001V15.6667C15.3333 16.4031 14.7364 17 14 17C13.2636 17 12.6667 16.4031 12.6667 15.6667V9.00001C12.6667 8.26363 13.2636 7.66667 14 7.66667ZM15.3333 19.6667C15.3333 20.4031 14.7364 21 14 21C13.2636 21 12.6667 20.4031 12.6667 19.6667C12.6667 18.9303 13.2636 18.3333 14 18.3333C14.7364 18.3333 15.3333 18.9303 15.3333 19.6667Z" fill="#DC5A00"/>
        </svg>
      </template>

      <template v-if="type === 'success'">
        <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666687 14C0.666687 21.3638 6.63622 27.3334 14 27.3334C21.3638 27.3334 27.3334 21.3638 27.3334 14C27.3334 6.63622 21.3638 0.666687 14 0.666687C6.63622 0.666687 0.666687 6.63622 0.666687 14ZM20.1016 10.6402C20.4551 10.2159 20.3978 9.58536 19.9735 9.2318C19.5493 8.87823 18.9187 8.93556 18.5651 9.35984L12.5995 16.5186L9.37379 13.2929C8.98327 12.9024 8.3501 12.9024 7.95958 13.2929C7.56906 13.6834 7.56906 14.3166 7.95958 14.7071L11.9596 18.7071C12.1582 18.9058 12.4313 19.0117 12.712 18.999C12.9927 18.9863 13.255 18.856 13.4349 18.6402L20.1016 10.6402Z" fill="#008700"/>
        </svg>
      </template>
    </div>
    <div class="content">
      <p class="title">
        {{ header }}
      </p>
      <template v-if="contentVariation === 'icon-header-subtext-only' || contentVariation === 'icon-header-subtext-action'">
        <p class="desc">
          {{ subtext }}
        </p>
      </template>
      <template v-if="contentVariation === 'icon-header-subtext-action'">
        <div class="action">
          <Button
            :status="type"
            :type="actionBtnA_type"
            :text="callToActionText"
          ></Button>
          <Button
            :status="type"
            :type="actionBtnB_type"
            :text="callToActionText2"
          ></Button>
        </div>
      </template>
      
    </div>
    <div class="cta">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L13 13M13 1L1 13" stroke="#566271" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
import Button from '../components/button.vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      actionBtnA_type: 'secondary',  /* primary, secondary */
      actionBtnB_type: 'primary',  /* primary, secondary */
    };
  },
  props: {
    type: {
      type: String,
      default: "info",
      validator: (value) => ["danger", "warning", "success", "info"].includes(value),
    },
    contentVariation: {
      type: String,
      default: "icon-header-subtext-action",
    },
    header: {
      type: String,
      required: true,
    },
    subtext: {
      type: String,
      default: "",
    },
    callToActionText: {
      type: String,
      default: "Action",
    },
    callToActionText2: {
      type: String,
      default: "Action2",
    },
    callToActionUrl: {
      type: String,
      default: "#",
    },
    callToActionUrl2: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style scoped>
.alert {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px;
  gap: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Open Sans';
  color: #0C0D0D;
  margin-top: 20px;
}

.alert.alert-info {
  background: #F4FAFF;
  border: 1px solid #2C75DD;
}

.alert.alert-danger {
  background: #FEF5F5;
  border: 1px solid #CC3123;
}

.alert.alert-warning {
  background: #FDF3E1;
  border: 1px solid #DC5A00;
}

.alert.alert-success {
  background: #F8FFF2;
  border: 1px solid #008700;
}

.alert .title {
  font-weight: 600;
}

.alert .content {
  width: 100%;
}

.alert .desc {
  font-weight: 400;
}

.alert .button {
  display: inline-block;
}

</style>
