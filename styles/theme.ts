import { createTheme } from '@nextui-org/react';

const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: '$green200',
        primaryLightHover: '$green300',
        primaryLightActive: '$green400',
        primaryLightContrast: '$green600',
        primary: '#012E40',
        primaryBorder: '$green500',
        primaryBorderHover: '$green600',
        primarySolidHover: '$green700',
        primarySolidContrast: '$white',
        primaryShadow: '$green500',
        // error:'#D91438',
        // success: '#038C73',
        // warning: '#D9AD2B',
        gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
        link: '#5E1DAD',
  
        // you can also create your own color
        backgroundButton: 'red'
  
        // ...  more colors
      },
      space: {},
      fonts: {
        sans: "'Nunito SemiBold'",
      }
    }
  })
  export {theme}