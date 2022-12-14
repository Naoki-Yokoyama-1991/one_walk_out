module.exports = {
  content: [],
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '640px' },
      md: { max: '768px' },
      tb: { max: '960px' },
    },
    extend: {
      width: {
        whoitem: '33rem',
        VisionText: '33rem',
        ServiceImage: '40rem',
        ServiceText: '26rem',
        NewsText: '50rem',
        CareersImage: '63rem',
        CareersText: '25rem',
        CareersRight: '36rem',
        ButtonLink: '13.4rem',
        1.5: '1.5px',
        menu: '36px',
        CompanyTop: '1240px',
        CompanyText: '860px',
        '95%': '95%',
        0.6: '6px',
        exe: '940px',
      },
      height: {
        small: '2px',
        38: '38px',
        whoItem: '600px',
        whoImage: '530px',
        coItem: '570px',
        visionItem: '23rem',
        visionImage: '440px',
        serviceImage: '470px',
        outlineImage: '540px',
        90: '90px',
        1.5: '1.5px',
        830: '830px',
        back: '800px',
        exe: '360px',
        0.6: '6px',
      },
      maxWidth: {
        1080: '67.5rem',
        vw: '100vw',
      },
      margin: {
        ham: '3px',
        nav: '12px',
        420: '420px',
      },
      colors: {
        orange: '#FF5B34',
        red: '#FF5B34',
        orange_pale: '#FDEFEE',
        skin: '#F5F2F0',
        gray_pale: '#F8F8F8',
      },
      backgroundColor: {
        BaseColor: '#222222',
      },
      textColor: {
        BaseColor: '#222222',
      },
      lineHeight: {},
      fontSize: {
        most: '8.5rem',
        moSecond: '6.8rem',
        moSecondTitle: '6rem',
        four: '5rem',
        Third: '4.2rem',
        philosophy: '50px',
        menu: '44px',
        smWho: '40px',
      },
      fontFamily: {
        base: ['Lato', 'Noto Sans JP', 'Helvetica Neue', 'hiragino Sans', 'sans-serif'],
      },
      borderColor: {
        BaseColor: '#222222',
      },
      borderWidth: {
        1.5: '0.1rem',
        1: '1px',
        3: '3px',
      },
      borderRadius: {
        200: '220px',
        180: '180px',
        144: '9rem',
        110: '9rem',
        96: '8rem',
        80: '5rem',
        48: '3rem',
        20: '2rem',
        40: '40px',
      },
      spacing: {
        82: '82px',
      },
      gridTemplateColumns: {
        Top: 'minmax(0,1fr) 5rem',
        Who: 'minmax(0,1fr) 33rem',
        Vision: '33.75rem minmax(0,1fr) ',
        Service: 'minmax(0,1fr) 46rem',
        News: 'minmax(0,1fr) 44rem',
        Contact: 'minmax(0,1fr) 37.5rem',
        Outline: '24% minmax(0,1fr) ',
        Form: 'minmax(0,1fr) 32rem',
      },
      gridTemplateRows: {
        sub: 'minmax(0,1fr) 50%',
      },
      scale: {
        3: '0.3',
        1.2: '1.2',
        1.15: '1.15',
        1.08: '1.05',
      },

      inset: {
        18: '17px',
        26: '26px',
        62: '58px',
        110: '65px',
        60: '80px',
        90: '102px',
        116: '116px',
        smallTitle: '40px',
        coTitle: '50px',
        '95%': '95%',
        '86%': '86%',
        300: '2150px',
        history: '240px',
        historyBack: '420px',
        330: '330px',
        outline: '460px',
        nav: '4px',
        company: '5px',
      },
      rotate: {
        20: '30deg',
      },
      transform: {},
      zIndex: {
        100: '100',
        90: '90',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        circlemove: {
          '0%': { bottom: '-22px', opacity: '0' },
          '60%': { opacity: '1' },
          '80%': { opacity: '0.7' },
          '100%': { bottom: '-62px', opacity: '0' },
        },
        navIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        navOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        leftUnder: {
          '0%': { transform: 'scale(0, 1)' },
          '100%': { transform: 'scale(1, 1)' },
        },
        imageMove: {
          '0%': { opacity: '0', transform: 'translateX(15%)', borderRadius: '0px' },
          '100%': { opacity: '1', transform: 'translateX(0)', borderRadius: '70px' },
        },
        imageGray: {
          '0%': { opacity: '0', transform: 'translateX(-30%)', borderRadius: '0px' },
          '100%': { opacity: '1', transform: 'translateX(0)', borderRadius: '100px' },
        },
        imageSkin: {
          '0%': { opacity: '0', transform: 'translateX(30%)', borderRadius: '0px' },
          '100%': { opacity: '1', transform: 'translateX(0)', borderRadius: '100px' },
        },
        textWhite: {
          '0%': { opacity: '0', transform: 'translateX(-15%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        buttonUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
        buttonDown: {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        textLeftUp: {
          '0%': { left: '0px' },
          '100%': { left: '7px' },
        },
        textLeftDown: {
          '0%': { left: '7px' },
          '100%': { left: '0px' },
        },
        ArrowRight: {
          '0%': { opacity: '0', left: '0px' },
          '100%': { opacity: '1', left: '16px' },
        },
        Back: {
          '0%': { opacity: '0', transform: 'translateX(0)' },
          '100%': { opacity: '1', transform: 'translateX(-100%)' },
        },
        imageTopMove: {
          '0%': { opacity: '0', transform: 'translateX(15%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        imageTopGray: {
          '0%': { transform: 'scale(0, 1)', opacity: '0' },
          '100%': { transform: 'scale(1, 1)', opacity: '1' },
        },
        TopGray: {
          '0%': { opacity: '0', transform: 'translateX(10%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 10s linear 0s 1 normal both',
        circlemove: 'circlemove 2s ease-in-out infinite',
        navIn: 'navIn 0.3s ease-out forwards',
        navOut: 'navOut 0.2s linear forwards',
        leftUnder: 'leftUnder 0.3s ',
        imageMove: 'imageMove ease-out 0.3s 0.3s forwards',
        imageGray: 'imageGray ease-out 0.3s  forwards',
        imageSkin: 'imageGray ease-out 0.3s  forwards',
        textWhite: 'textWhite ease-out 0.3s 0.6s  forwards',
        buttonUp: 'buttonUp linear 0.2s forwards',
        buttonDown: 'buttonDown linear 0.2s forwards',
        textDown: 'textDown linear 0.2s forwards',
        textLeftUp: 'textLeftUp linear 0.2s forwards',
        textLeftDown: 'textLeftDown linear 0.2s forwards',
        ArrowRight: 'ArrowRight ease-out 0.4s forwards',
        Back: 'Back  0.3s ',
        imageTopMove: 'imageTopMove ease-out 0.4s 0.3s forwards',
        imageTopGray: 'imageTopGray ease-out 0.4s  forwards',
        TopGray: 'TopGray ease-out 0.3s  forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
