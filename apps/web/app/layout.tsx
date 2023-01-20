import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <header></header>
      {children}
      <footer></footer>
    </html>
  )
}
