import Perfil from "../../Components/Perfil/Perfil"

export default function Header(){
    return(
        <div className=" p-4 flex justify-between border-b-2">
            <div className="">Logo</div>
            <div className="flex justify-around">
                <input type="button" value="Produtos" className="Btn_Header" />
                <input type="button" value="Carrinho" className="Btn_Header" />
                <input type="button" value="Contato" className="Btn_Header" />
                <Perfil/>
            </div>
        </div>
    )
}