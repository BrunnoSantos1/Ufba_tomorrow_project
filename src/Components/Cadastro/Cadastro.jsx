//import { useState } from "react";

export default function Cadastro() {
    
    //const [Name,setName] = useState('');
    //const[Senha,setSenha] = useState('');
    //const [Email,setEmail] = useState('');
    
    return(
        <div className=" w-2/6 bg-white rounded-xl shadow-md">
        <form className="grid justify-center items-center" action="Cadastrar">

            <h1 className="select-none text-center p-3 font-bold text-4xl text-gray-300">Cadastro</h1>
            <input type="text" name="" placeholder="Nome" className="inputCadastro"/>
            <input type="email" name="" placeholder="Email" className="inputCadastro"/>
            <input type="password" name="" placeholder="Senha" className="inputCadastro"/>
            <input type="password" name="" placeholder="Confirme sua senha!" className="inputCadastro"/>
            <p><input type="checkbox" name="" className="accent-transparent " required/> Aceito os termos de <a href="#" className="text-gray-500">Privacidade</a> e <a href="#" className="text-gray-500">Serviços</a></p>
            <input type="submit" value="Cadastrar" className=" cursor-pointer bg-transparent ring-2 ring-gray-500 text-gray-500 mt-4 mb-6 w-64 p-2 rounded-lg hover:bg-gray-500 hover:text-white transition duration-200 focus:scale-90"/>
            <input type="button" value="Já possiu conta?" className=" t w-64 outline-none border-none p-6 cursor-pointer" />
        </form>
        </div>
    )
}