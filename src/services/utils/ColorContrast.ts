export function ContrastTextColor(hexColor: string) {
  // Remove o '#' se estiver presente
  hexColor = hexColor.replace('#', '')

  // Converte o hexadecimal para RGB
  const r = parseInt(hexColor.substr(0, 2), 16)
  const g = parseInt(hexColor.substr(2, 2), 16)
  const b = parseInt(hexColor.substr(4, 2), 16)

  // Calcula a luminosidade usando a fórmula de luminosidade relativa
  // https://www.w3.org/TR/WCAG20/#relativeluminancedef
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

  // Retorna 'black' se a luminosidade for maior que 128, senão retorna 'white'
  return luminance > 128 ? '#333333' : '#FFFFFF'
}
