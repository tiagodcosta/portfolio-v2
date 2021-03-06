import { css } from 'styled-components'

const sizes = {
  bigMonitor: 2560, 
  laptop: 1000,
  phone: 740,
}

const media = Object.keys(sizes).reduce((accumulator, label) => {
const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    } `
  return accumulator
}, {})

export default media