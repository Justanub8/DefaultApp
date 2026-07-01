import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  vi: {
    translation: {
      common: {
        company_name: 'NGỌC TUẤN - NAGAOKA',
      },
      login: {
        user_name: 'Tên đăng nhập',
        password: 'Mật khẩu',
      },
    },
  },
  en: {
    translation: {
      common: {
        company_name: 'NGOC TUAN - NAGAOKA',
      },
      login: {
        user_name: 'Username',
        password: 'Password',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
