import './globals.css'

export const metadata = {
  title: 'YouTube Time Machine',
  description: 'A static YouTube-like experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
