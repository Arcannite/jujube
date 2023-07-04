export default function Product() {
    return (
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <h1>Hello, Next.js!</h1>
        <a
          href="/"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          back to main
        </a>
        {/* https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#linking-to-dynamic-segments */}
      </div>
    )
  }