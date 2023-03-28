import Card from '@/components/card'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext } from 'react'
import { Toaster } from 'react-hot-toast'


type CardItem={
  product:any,
  quantity:number
  size:string
}

export const CardContext=createContext<CardItem[]>([])

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <Card/>
    <Toaster/>
  </>
}
