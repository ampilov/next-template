import type { NextPage } from 'next'
import Head from 'next/head'
import tw from 'twin.macro'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 tw='font-bold text-6xl'>Hello World</h1>
    </div>
  )
}

export default Home
