//import { useState } from "react";
import Card from "../../Components/Card/Card.jsx";

export default function Section() {
//const [Search,setSearch] = useState([])
    return (
        <div className="flex flex-col grow items-start p-0 gap-12 w-3/4 h-full order-1 ml-11">
            <div className=" w-full flex justify-between">
                <div className="w-2/5"><form action="">
                    <div className="relative">
                        <input type="search" className="w-full p-2 rounded-full outline-none bg-gray-50" onChange={(e) => handleSearch(e)} />
                        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-100"> Buscar</button>
                    </div>
                </form></div>
                <div>
                    <input type="button" value=" New" className="Btn_filtro" />
                    <input type="button" value="Preço Crescente" className="Btn_filtro" />
                    <input type="button" value="Preço Decrescente" className="Btn_filtro" />
                    <input type="button" value="Mais Avaliados" className="Btn_filtro" />
                </div>
            </div>
            <div className="flex flex-row flex-wrap items-center content-start p-0 gap-6 w-96 h-96 grow-0 self-stretch order-1">
                <Card />
            </div>
        </div>
    )
}