import axios from 'axios'

export async function DomainCheck(domainToCheck) {
  const options = {
    method: 'GET',
    url: 'https://whois-by-api-ninjas.p.rapidapi.com/v1/whois',
    params: {
      domain: domainToCheck,
    },
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'whois-by-api-ninjas.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
