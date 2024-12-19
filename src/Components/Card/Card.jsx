

export default function Card() {
    return (
        <div className=" bg-white rounded-xl shadow-md items-center border-2 justify-center w-80 hover:shadow-md hover:border-7 hover:border-blue-600 transition duration-500 hover:scale-105 cursor-pointer select-none ">
            <div>
                <h1 className=" mt-4 p-4">Nome do produto</h1>
            </div>
            <div className="px-4 py-6"><img src="../assets/pexels-alexandr-meadow-1505505-29715958.jpg" alt="IMG do Produto" /></div>
            <div className="p-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi pariatur unde sunt,</p>
            </div>
            <h1 className="text-center mb-2">preço</h1>
        </div>
    )

}