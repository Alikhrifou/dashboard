const withMT = require("@material-tailwind/react/utils/withMT");
;

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors:{
    //   'blackText': '#464255',
    //   'grayBg': '#e2e8f0',
    //   'grayBorder':'#012589'
    // },
    extend: {
      backgroundImage: {
        'main-background': "url('/src/assets/bgImage.png')",
        'card-background': "url('/src/assets/imageSVG/cardBg.svg')",
      }
    },
  },
  plugins: [],
});

