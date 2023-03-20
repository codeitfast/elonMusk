import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Database from '../components/database.tsx'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <div className="items-center justify-center block w-fit mx-auto text-center my-auto flex h-screen justify-center items-center">
      <div className="my-auto">
      <img id="elon" src="../elon.png" className="mx-auto"/>
    <h1 className="text-4xl text-center">Elon Musk:</h1>
    <h2 className="text-xl text-center">yes or no?</h2>
      <button className="w-fit p-4 rounded-md bg-lime-500 mx-2">Yes <FaThumbsUp /></button>
      <button className="w-fit p-4 rounded-md bg-red-600 mx-2x">No <FaThumbsDown /></button>
        <Database />
    </div>
    </div>
  )
}

export default Home
