import React from 'react'
import useUser from '../../hooks/useData'

const ENDPOINT = "https://6407a83c8ee73db92e2eea2f.mockapi.io/api/v1/Noticias"
const Noticias = () => {
  const { data, error, isLoading } = useUser()
  console.log( data)
  return (
    <div>
      Noticias 
      {data && data?.map(item => (
        <li>dd</li>
      ))}
    </div>
  )
}

export default Noticias
