'use client'
import { useState } from 'react'
import { cn } from '@/services/utils/className'
import { HSLToHex } from '@/services/utils/HsltoHex'
import ColorBox from '@/components/atoms/ColorBox'
// import { formatHex } from 'https://cdn.skypack.dev/culori@2.0.0'

const PaletteGenerator = () => {
  const [palettes, setPalettes] = useState({})

  const adjustHue = (val: number) => {
    if (val < 0) val += Math.ceil(-val / 360) * 360

    return val % 360
  }

  function createScientificPalettes(baseColor) {
    const targetHueSteps = {
      analogous: [0, 30, 60],
      triadic: [0, 120, 240],
      tetradic: [0, 90, 180, 270],
      complementary: [0, 180],
      splitComplementary: [0, 150, 210],
    }

    const palettes = {}

    for (const type of Object.keys(targetHueSteps)) {
      palettes[type] = targetHueSteps[type].map((step) => ({
        l: baseColor.l,
        c: baseColor.c,
        h: adjustHue(baseColor.h + step),
        mode: 'lch',
        // Hsl: ${`(adjustHue(baseColor.h + step), baseColor.c, baseColor.l)`},
        Hex: HSLToHex(adjustHue(baseColor.h + step), baseColor.c, baseColor.l),
      }))
    }
    console.log(palettes)
    return palettes
  }

  function randomHsl() {
    const l = Math.floor(Math.random() * 100)
    const c = Math.floor(Math.random() * 100)
    const h = Math.floor(Math.random() * 360)

    return {
      l,
      c,
      h,
      mode: 'lch',
    }
  }

  return (
    <section className="w-[100vw] bg-[#232434]">
      <div className="flex h-[100vh] w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-y-2 rounded-xl border-2 border-purple-600 bg-[#1B1C2C] p-6">
          <h1 className="text-center text-3xl font-semibold">
            Andrômeda Palette Generator
          </h1>
          <div className="my-3 h-1 w-full bg-purple-600" />

          <button
            className="w-fit rounded-xl bg-[#E800CF] p-3 font-semibold"
            onClick={() => setPalettes(createScientificPalettes(randomHsl()))}
          >
            Gerar Paleta aleatória
          </button>
          <div className="flex w-full flex-col items-center gap-y-3">
            <span className="font-semibold">Tente com uma cor específica</span>
            <input
              placeholder="Insira um hexadecial"
              className={cn(
                `h-10 w-full rounded-lg border-2 border-purple-600 bg-[#232434] px-3 text-white`,
              )}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="grid grid-cols-2 grid-rows-3 gap-5 gap-x-2 rounded-xl border-2 border-purple-600 bg-[#1B1C2C] p-6">
            {Object.keys(palettes).map((paletteName) => (
              <div
                key={paletteName}
                className="flex flex-col items-center gap-y-2 border-2 border-[#FFFFFF50] p-2"
              >
                <span>{paletteName}</span>
                <div className="flex gap-x-3">
                  {palettes[paletteName].map((color, index) => (
                    <ColorBox
                      key={index}
                      background={color.Hex}
                      HexString={color.Hex}
                    />
                  ))}
                </div>
              </div>
            ))}
            <div className="flex flex-col items-center gap-y-2 border-2 border-[#FFFFFF50] p-2">
              <span>Customizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaletteGenerator