'use client'

import { useState } from 'react'
import { DomainCheck } from '@/services/apis/WHOIS'
import { cn } from '@/services/utils/className'

const DomainChecker = () => {
  const [domainToCheck, setDomainToCheck] = useState('')
  const [domainCheckResult, setDomainCheckResult] = useState([])
  const [borderClass, setBorderClass] = useState('border-purple-600')
  const [resultCard, setResultCard] = useState('')
  const [resultCardText, setresultCardText] = useState('')

  const handleDomainCheck = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (domainToCheck.trim() !== '') {
      const result = await DomainCheck(domainToCheck)
      setDomainCheckResult(result)
      setBorderClass(
        Object.keys(result).length ? 'border-red-600' : 'border-green-600',
      )
      setResultCard(
        Object.keys(result).length ? 'bg-red-600 block' : 'bg-green-600 block',
      )
      setresultCardText(
        Object.keys(result).length
          ? 'Esse domínio já possui dono'
          : 'Domínio disponível',
      )
    } else {
      alert('O campo de domínio não pode estar vazio.')
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
        <form className=" max-w-4xl">
          <div className="flex flex-col items-center gap-y-5 rounded-xl border-2 border-purple-600 bg-[#1B1C2C] p-6">
            <div className="flex w-full flex-col items-center gap-y-3">
              <h3 className="text-center text-xl font-semibold">
                Insira domínio que deseja verificar
              </h3>
              <input
                className={cn(
                  `h-10 w-full rounded-lg border-2 px-3 text-white ${borderClass} bg-[#232434]`,
                )}
                value={domainToCheck}
                onChange={(e) => setDomainToCheck(e.target.value)}
              />

              <div
                className={cn(
                  `hidden w-fit rounded-xl p-3 text-center text-base font-semibold text-white ${resultCard}`,
                )}
              >
                {resultCardText}
              </div>
            </div>
            <button
              type="submit"
              className="w-fit rounded-xl bg-[#E800CF] p-3 font-semibold"
              onClick={handleDomainCheck}
            >
              Verificar Domínio
            </button>
          </div>
        </form>
        <div className="mt-6 grid grid-cols-3 grid-rows-3 gap-4 rounded-xl border-2 border-purple-600 bg-[#1B1C2C] p-6">
          <div>
            <strong>Nome do domínio: </strong>
            {domainCheckResult.domain_name}
          </div>
          <div>
            <strong>Nome do registrante: </strong>
            {domainCheckResult.registrant_name}
          </div>
          <div>
            <strong>ID do registrante: </strong>
            {domainCheckResult.registrant_id}
          </div>
          <div className="row-start-2">
            <strong>País: </strong>
            {domainCheckResult.country}
          </div>
          <div className="row-start-2">
            <strong>Data de criação: </strong>
            {domainCheckResult.creation_date}
          </div>
          <div className="row-start-2">
            <strong>Data de expiração: </strong>
            {domainCheckResult.expiration_date}
          </div>
          <div className="row-start-3">
            <strong>Pessoa: </strong>
            {domainCheckResult.person}
          </div>
          <div className="row-start-3">
            <strong>Contato: </strong>
            {domainCheckResult.email}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DomainChecker
