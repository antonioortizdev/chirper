import React from 'react'
import AtUsername from '../atoms/AtUsername'
import { Chirp } from '../interfaces/Chirp'

interface Props {
  chirp: Chirp
}

export function ChirpItem({ chirp }: Props) {
  const { username, message } = chirp
  return (
    <li className="chirp-item">
      <AtUsername username={username} />
      <p>{message}</p>
    </li>
  )
}
