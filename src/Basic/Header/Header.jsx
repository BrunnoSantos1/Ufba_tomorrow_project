export default function Header(){
    return(
        <div className="p-6 flex justify-between border-b-2">
            <div className="">Logo</div>
            <div className="flex justify-around">
                <input type="button" value="Produtos" className="Btn_Header" />
                <input type="button" value="Calcule seu CEP" className="Btn_Header" />
                <input type="button" value="Contato" className="Btn_Header" />
            </div>
        </div>
    )
}