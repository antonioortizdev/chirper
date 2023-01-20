import { Chirp } from '../interfaces/Chirp'
import { ChirpList } from './ChirpList'

interface Props {
  chirps: Chirp[]
}

export function Timeline({ chirps }: Props) {
  return (
    <section className="timeline">
      <ChirpList chirps={chirps} />
    </section>
  )
}
