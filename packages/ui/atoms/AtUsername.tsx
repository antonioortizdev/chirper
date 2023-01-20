import React from 'react'

interface Props {
  username: string
}

function AtUsername({ username }: Props) {
  return <span>{`@${username}`}</span>
}

export default AtUsername
