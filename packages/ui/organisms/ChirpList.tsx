import React from 'react'
import { Chirp } from '../interfaces/Chirp'
import { ChirpItem } from '../molecules/ChirpItem'

interface Props {
  chirps: Chirp[]
}

export function ChirpList({ chirps }: Props) {
  return (
    <ul className="chirp-list">
      {chirps.map((chirp, key) => (
        <ChirpItem chirp={chirp} key={key} />
      ))}
    </ul>
  )
}
