<template>
  <h1>Example of Button and Alert Notification</h1>
  <div style="max-width: 720px;">
    <div class="buttonSample">
      <Button
        v-for="button in buttons"
        :state="button.state"
        :status="button.status"
        :type="button.type"
        :variation="button.variation"
        :icon="button.iconSVG"
        :text="button.text"
        :btnPaddingX="button.btnPaddingX"
        :btnPaddingY="button.btnPaddingY"
        @update:state="updateButtonState"
      />
    </div>
    
    <AlertNotification
      v-for="alert in alerts"
      :type="alert.type"
      :contentVariation="alert.variation"
      :header="alert.header"
      :subtext="alert.subtext"
      :callToActionText="alert.callToActionText"
      :callToActionText2="alert.callToActionText2"
      :callToActionUrl="alert.callToActionUrl"
      :callToActionUrl2="alert.callToActionUrl2"
    />
  </div>
</template>

<script>
import Button from '../components/button.vue';
import AlertNotification from '../components/alertNotification.vue';

export default {
  components: {
    Button,
    AlertNotification,
  },
  data() {
    return {
      buttons: [
        {
          /**
           * Button Usage
           *
           * state options > default, hover, clicked, disabled
           * status options > info, danger, warning, success
           * type options > primary, secondary
           * variation options > left-icon-text, right-icon-text, text-only, icon-only
           */
          state: 'default',
          status: 'info',
          type: 'primary',
          variation: 'left-icon-text',
          text: 'Primary',
          iconSVG: `<svg width="24" height="24" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5 8.5H20.5M20.5 8.5L13.5 15.5M20.5 8.5L13.5 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>`,
          btnPaddingX: '12px',
          btnPaddingY: '8px'
        },
        {
          state: 'default',
          status: 'info',
          type: 'primary',
          variation: 'right-icon-text',
          text: 'Primary',
          iconSVG: `<svg width="24" height="24" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5 8.5H20.5M20.5 8.5L13.5 15.5M20.5 8.5L13.5 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>`,
          btnPaddingX: '12px',
          btnPaddingY: '8px'
        },
        {
          state: 'default',
          status: 'info',
          type: 'primary',
          variation: 'text-only',
          text: 'Primary',
          iconSVG: `<svg width="24" height="24" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5 8.5H20.5M20.5 8.5L13.5 15.5M20.5 8.5L13.5 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>`,
          btnPaddingX: '12px',
          btnPaddingY: '8px'
        },
        {
          state: 'default',
          status: 'info',
          type: 'primary',
          variation: 'icon-only',
          text: 'Primary',
          iconSVG: `<svg width="24" height="24" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5 8.5H20.5M20.5 8.5L13.5 15.5M20.5 8.5L13.5 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>`,
          btnPaddingX: '12px',
          btnPaddingY: '8px'
        }
      ],
      alerts: [
        /**
         * Alert Usage
         *
         * type options > info, danger, warning, success
         * variation options > icon-header-only, icon-header-subtext-only, icon-header-subtext-action
         * header
         * subtext
         * callToActionText
         * callToActionUrl
         */
        {
          type: 'info',
          variation: 'icon-header-only',
          header: "Info",
          subtext: "Your action was completed successfully.",
          callToActionText: "Action",
          callToActionText2: "Action2",
          callToActionUrl: "#",
          callToActionUrl2: "#"
        },
        {
          type: 'danger',
          variation: 'icon-header-subtext-only',
          header: "Error",
          subtext: "Your action was completed successfully.",
          callToActionText: "Action",
          callToActionText2: "Action2",
          callToActionUrl: "#",
          callToActionUrl2: "#"
        },
        {
          type: 'warning',
          variation: 'icon-header-subtext-action',
          header: "Warning",
          subtext: "Your action was completed successfully.",
          callToActionText: "Action",
          callToActionText2: "Action2",
          callToActionUrl: "#",
          callToActionUrl2: "#"
        },
        {
          type: 'success',
          variation: 'icon-header-subtext-action',
          header: "Success",
          subtext: "Your action was completed successfully.",
          callToActionText: "Action",
          callToActionText2: "Action2",
          callToActionUrl: "#",
          callToActionUrl2: "#"
        }
      ],
    };
  },
  methods: {
    updateButtonState(state) {
      this.buttonState = state;
    },
  },
};
</script>