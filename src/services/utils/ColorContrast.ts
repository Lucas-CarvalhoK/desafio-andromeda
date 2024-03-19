import { RgbaColor } from 'react-colorful'

export function setContrastColor(color: RgbaColor) {
  const yiq = (color.r * 299 + color.g * 587 + color.b * 114) / 1000

  let contrastColor

  if (yiq >= 128) {
    contrastColor = '#000'
  } else {
    contrastColor = '#fff'
  }

  return contrastColor
}
