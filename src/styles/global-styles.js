import { injectGlobal } from 'styled-components'
import media from './style-utils'

injectGlobal`

@import url('https://fonts.googleapis.com/css?family=Montserrat');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 16px;

  ${media.phone`
    font-size: 14px;
  `}
}

body {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  backface-visibility: hidden;
  margin: 0;
}

`
