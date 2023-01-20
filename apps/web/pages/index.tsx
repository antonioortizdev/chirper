import { useState } from 'react'
import { ChirpForm, Timeline } from 'ui'
import { Chirp } from 'ui/interfaces/Chirp'
import { v4 as generateUuid } from 'uuid'

export default function Web() {
  const [chirps, setChirps] = useState<Chirp[]>([])

  return (
    <main>
      <ChirpForm
        submitted={async ({ username, message }) => {
          setChirps([...chirps, { id: generateUuid(), username, message }])
        }}
      />
      <Timeline chirps={chirps} />
    </main>
  )
}
