function Hero() {
  return (
    <div>

      <div className="relative px-6 lg:px-8 mx-auto bg-cover bg-center min-h-screen bg-[url('../../public/media/running-dog-alt2.webp')]">
        <div className="mx-auto max-w-xl pt-40 text-center font-serif">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-white">
            Data to enrich your online business
          </h1>
        </div>
        <div className="mx-auto max-w-2xl pb-40">
          <div className="text-center">
            <p className="mt-6 text-lg leading-8 text-gray-700 bg-white">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/products"
                className="rounded-md bg-indigo-600 px-7 py-3 text-md md:px-10 md:py-4 md:text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Shopping
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-slate-200 mx-auto py-20 mx-auto text-center font-bold font-sans text-lg md:text-2xl">
        <p> Explore </p>
        <div className="snap-x">
            <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />

            <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />

            <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />

            <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />

            <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />

            <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
          </div>
      </div>

    </div>
  )
}

export default function Home() {
  return <Hero/>;
}