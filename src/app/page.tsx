'use client'

import Header from "@/components/Header"
import { GlobalStyle } from "@/styles/GlobalStyle"

export default function Home() {
  return (
    <main>
      <GlobalStyle />
      <Header />
      <h1>Hello World!</h1>      
    </main>
  )
}
