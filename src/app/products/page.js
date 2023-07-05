const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    price: '$48',
    imageSrc: './media/placeholder1.webp',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    price: '$35',
    imageSrc: './media/placeholder2.webp',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    price: '$89',
    imageSrc: './media/placeholder3.webp',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    price: '$35',
    imageSrc: './media/placeholder4.webp',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Page() {
  return (
    <div className="mx-auto max-w-sm xl:max-w-4xl px-10 py-10">
      <div className="text-center text-2xl pb-6">Products</div>
      <p className="pb-6"> Explore from our premium products.</p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={`products/placeholder${product.id}`} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-4 xl:aspect-w-3">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
          </a>
        ))}
      </div>
    </div>
  )
}