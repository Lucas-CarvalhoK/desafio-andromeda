'use client'

import { useState } from 'react'
import { DomainCheck } from '@/services/apis/WHOIS'
import { cn } from '@/services/utils/className'

const DomainChecker = () => {
  const [domainToCheck, setDomainToCheck] = useState('')

  const handleDomainCheck = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (domainToCheck.trim() !== '') {
      DomainCheck(domainToCheck)
    } else {
      console.error('O campo de domínio não pode estar vazio.')
    }
  }

  return (
    <section className="w-[100vw] bg-[#232434]">
      <div className="flex h-[100vh] w-full flex-col items-center justify-center">
        <div>
          <h1 className="text-center text-3xl font-semibold">
            Andrômeda WHOIS
          </h1>
          <div className="my-3 h-1 w-full bg-purple-600" />
        </div>
        <form className="w-1/2 max-w-4xl">
          <div className="flex flex-col items-center gap-y-10 rounded-xl border-2 border-purple-600 bg-[#1B1C2C] p-6">
            <div className="flex w-full flex-col gap-y-3">
              <h3 className="text-center text-xl font-semibold">
                Insira aqui o domínio que deseja verificar
              </h3>
              <input
                className={cn(
                  `h-10 w-full rounded-lg border border-purple-600 text-black ${
                    DomainCheck.length === 0
                      ? 'border-2 border-green-400'
                      : 'border-2 border-red-600'
                  }`,
                )}
                value={domainToCheck}
                onChange={(e) => setDomainToCheck(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-fit rounded-xl bg-red-600 p-3 font-semibold"
              onClick={handleDomainCheck}
            >
              Verificar Domínio
            </button>
          </div>
        </form>
        <div className="rounded-xl border-2 border-purple-600 bg-[#1B1C2C] p-6"></div>
      </div>
    </section>
  )
}

export default DomainChecker
