export default function RootLayout({ children, header, footer }) {
  return (
    <html>
      <head />
      <body>{header}{children}{footer}</body>
    </html>
  )
}
