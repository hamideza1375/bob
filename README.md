

اول بنویس npx react-native-builder-bob@latest init

yarn add --dev react-native-builder-bob

بعد این خط زیر رو آخر پکیج.جیسان قرار بده

"react-native-builder-bob": {
  "source": "src",
  "output": "lib",
  "targets": [
    "commonjs",
  ]
}

اگه بین اسم یک فایل فاصله باشه بخ خطا میخوری مثل socketIo copy

  شاید مجبوربشی پروداکشن رو از توی بروزرلیست داخل پکیج.جیسان حذف کنی


  این 
  
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },

  تبدیل بشه به

  "browserslist": {},



  {  "react-native-builder-bob": {
    "source": "src",
    "output": "lib",
    "targets": [
      [
        "commonjs",
        {
          "copyFlow": true
        }
      ],
      "module",
      "typescript"
    ],
    "babel": {
      "presets": ["module:metro-react-native-babel-preset"],
      "plugins": [
        ["module-resolver", {
          "root": ["../src"],
          "alias": {
            "react-native": "react-native-web"
          }
        }]
      ]
    }
  }}
