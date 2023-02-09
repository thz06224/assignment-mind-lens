import button from "./components/button.vue"
import alertNotification from "./components/alertNotification.vue"

export default {
    install: (app, options) => {
        app.component("button", button);
        app.component("alertNotification", alertNotification);
    }
}