import TButton from './components/TButton.vue';
import IconSupport from './components/icons/IconSupport.vue';
import SectionTitle from "@/components/SectionTitle.vue";

// Import thêm các component khác nếu muốn đăng ký global

export default {
  install(app) {
    app.component('TButton', TButton);
    app.component('IconSupport', IconSupport);
    // Đăng ký thêm các component khác ở đây nếu cần
    app.component('SectionTitle', SectionTitle);
  }
}
