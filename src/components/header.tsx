import Image from "next/image";
import Link from "next/link";
import logo_porto from "/public/image/porto-seguro-logo.png";

export default function Header({ titulo} : { titulo: string }) {

    return (
        <header className="bg-gradient-to-r from-blue-700 to-blue-400 flex items-center justify-between p-6 w-full h-[16vh]">
            <div className="flex items-center space-x-10 max-w-[30vw]">
                <Image src={logo_porto} alt="Logo" className="w-[12vh]" />
                <h1 className="text-beige text-2xl font-bold font-roboto text-center">Auto Repair Solutions</h1>
            </div>
            <div className="text-white font-roboto font-bold text-3xl max-w-[30vw]">
                <h3>{ titulo }</h3>
            </div>
            <div className="flex space-x-6 items-center text-white text-lg mr-24 mt-8">
                <Link href="/">Home</Link>
                <Link href="/login">Login</Link>
                <Link href="/servico">Serviços</Link>
                <Link href="/carro">Cadastrar Carro</Link>
                <Link href="/participantes">Participantes</Link>
            </div>
        </header>
    );
}
