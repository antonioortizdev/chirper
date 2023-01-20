interface Props {
  text: string
  disabled: boolean
}

export function SubmitButton({ text, disabled }: Props) {
  return (
    <button type="submit" disabled={disabled}>
      {text}
    </button>
  )
}
