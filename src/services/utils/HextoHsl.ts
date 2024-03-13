interface HSL {
  h: number
  s: number
  l: number
}

export function hexToHSL(H: string): {
  hsl: string
  h: number
  s: number
  l: number
} {
  // Convert hex to RGB first
  let r = 0
  let g = 0
  let b = 0
  if (H.length === 4) {
    r = parseInt('0x' + H[1] + H[1])
    g = parseInt('0x' + H[2] + H[2])
    b = parseInt('0x' + H[3] + H[3])
  } else if (H.length === 7) {
    r = parseInt('0x' + H[1] + H[2])
    g = parseInt('0x' + H[3] + H[4])
    b = parseInt('0x' + H[5] + H[6])
  }
  // Then to HSL
  let h = 0
  let s = 0
  let l = 0

  const cmin = Math.min(r, g, b)
  const cmax = Math.max(r, g, b)
  const delta = cmax - cmin

  if (delta === 0) h = 0
  else if (cmax === r) h = ((g - b) / delta) % 6
  else if (cmax === g) h = (b - r) / delta + 2
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)

  if (h < 0) h += 360

  l = (cmax + cmin) / 2
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  const hslString = 'hsl(' + h + ',' + s + '%,' + l + '%)'
  return { hsl: hslString, h, s, l }
}
