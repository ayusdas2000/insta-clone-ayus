import type { NextPage } from 'next'
import Head from 'next/head'
import Modal from '../components/Modal'
import Header from '../components/Header'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0 Youtube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <Modal/>
      <Header/>
      <Feed/>      
    </div>
  )
}

export default Home