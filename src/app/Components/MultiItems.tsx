import Image from "next/image";

export default function MultiItems() {
  const products = [
    { id: 1, name: "Tavern modular sofa_3", price: 25000, img: "/Trenton-modular-sofa_3-1.png" },
    { id: 2, name: "Grecia dining table", price: 250000, img: "/Granite-dining-table-chairs-1.png" },
    { id: 3, name: "Outdoor bar table and stool", price: 260000, img: "/Outdoor-bar-table-stool-1.png" },
    { id: 4, name: "Plain console with back mirror", price: 26000, img: "/Plain-console-teak-mirror- 1.png" },
    { id: 5, name: "Green coffee table", price: 15000, img: "/Green-coffee-table.png" },
    { id: 6, name: "Karl coffee table", price: 225000, img: "/Karl-coffee-table.png" },
    { id: 7, name: "Round coffee table", price: 251000, img: "/Round-coffee table_color-1.png" },
    { id: 8, name: "Reclaimed teak coffee", price: 25200, img: "/Reclaimed-teak-coffee-table-1.png" },
    { id: 9, name: "Plain console", price: 258800, img: "/Plain-console_1.png" },
    { id: 10, name: "Reclaimed teak sideboard", price: 200000, img: "/Reclaimed-teak-Sideboard-1.png" },
    { id: 11, name: "Sir chairs", price: 200000, img: "/Sir-Chairs-1.png" },
    { id: 12, name: "Black chair oval table", price: 100000, img: "/Bella-chair-and-table-1.png" },
    { id: 13, name: "Double square side table", price: 258800, img: "/Granite-square-side-table-1.png" },
    { id: 14, name: "Asgard sofa", price: 260000, img: "/Asgaard-sofa-1.png" },
    { id: 15, name: "Magic sofa three seater", price: 116000, img: "/Magic-sofa-three-seater-1.png" },
    { id: 16, name: "Outdoor sofa set", price: 244000, img: "/Outdoor-sofa-set-1.png" },
  ];

  return (
    <div className="p-4 bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">Furniture Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="relative h-48 w-full mb-4">
              <Image
                src={product.img}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 font-bold">Rs. {product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600">
          1
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
          2
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
          3
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
          Next
        </button>
      </div>
    </div>
  );
}
