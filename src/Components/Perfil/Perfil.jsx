import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function Perfil() {
    const [Logged,setLogged] = useState(true)
    const [DropDown,setDropDown] = useState(false)
    const Name = "Bruno"
    const Logo = Name.split('')
    // const OpenMenu = () => {setDropDown(!DropDown)}
    const OpenMenu = (prev) => {
        setDropDown(!prev)
    }

    

    return(
        <div className="ml-1">  
            <button className="bg-gray-300 rounded-full w-12 h-12 hover:cursor-pointer focus-within:scale-110" onClick={OpenMenu()}> <h1 className=" text-white">{Logo[0]}</h1></button>
            {DropDown && <div className={` absolute bg-gray-50 py-8 px-20 m-0 rounded-lg shadow-lg grid right-0`}>
                <div className="flex justify-end absolute end-1 text-2xl font-sans"><button onClick={OpenMenu()}> <IoCloseOutline /> </button></div>
                    <div className="flex w-96 justify-between mb-9">
                    <button className="rounded-full bg-gray-100 h-28 w-28 text-center text-4xl">{Logo[0]}</button>
                    <button className="rounded-full bg-gray-100 h-28 w-28 text-center text-4xl invisible">New User</button>  
                    <button className="rounded-full bg-gray-100 h-28 w-28 text-center text-4xl">+</button>
                    </div>
                    <div> 
                        <input type="button" value="Ainda não tem conta?" className="cursor-pointer text-center w-full bg-transparent m-0" /></div>

                    </div>
                    }
        </div>
    )
    
}