import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

const NFTDropPage = () => {
  // Authentication
  const connectWithMetamask = useMetamask()

  const address = useAddress()

  const disconnet = useDisconnect()

  console.log(address)

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4 ">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="w-44 rounded-xl object-cover lg:w-72"
              src="https://links.papareact.com/8sg"
              alt="que pasa"
            />
          </div>

          <div className="space-y-2 p-5 text-center ">
            <h1 className="text-4xl font-bold text-white">Simio Jhonned01</h1>
            <h2 className="text-xl text-gray-300">
              Colección de simios JHONNED
            </h2>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}
        <header className="flex items-center justify-between pb-1">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              JHONNED
            </span>{' '}
            NFT Marker Place
          </h1>

          <button
            onClick={() => (address ? disconnet() : connectWithMetamask())}
            className="rounded-full bg-rose-400 px-4 py-2 text-xs text-white lg:px-5 lg:text-base"
          >
            {address ? 'Desconectar' : 'Conectar'}
          </button>
        </header>
        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-red-400 ">
            se ha conectado con el monedero {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}

        {/* Content */}
        <div className="my-10 flex flex-1 flex-col  items-center space-y-6 text-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            La JHONNED club codificación de simios | NFT Drop
          </h1>
          <p className="pt-2 text-xl text-green-500">14 / 21 NFT's claimed</p>
        </div>
        {/* Mint button  */}
        <button className="h-16 rounded-full bg-red-600 font-bold text-white ">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage
