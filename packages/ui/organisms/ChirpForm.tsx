import React, { useState } from 'react'
import { SubmitButton } from '../atoms/SubmitButton'

interface SubmitChirpDTO {
  username: string
  message: string
}

interface Props {
  submitted: (data: SubmitChirpDTO) => Promise<void>
}

export function ChirpForm({ submitted }: Props) {
  const [loading, setLoading] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)
    await submitted({ username, message })
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e: any) => setUsername(e.target.value)}
          required
        />
      </label>
      <textarea
        name="message"
        id="message"
        value={message}
        onChange={(e: any) => setMessage(e.target.value)}
        required
      ></textarea>
      <SubmitButton text="Chirp!" disabled={loading} />
    </form>
  )
}
