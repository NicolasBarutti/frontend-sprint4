import Image from "next/image";
import logo_linkedin from "/public/image/linkedin.png"
import logo_git from "/public/image/github.png"
import logo_face from "/public/image/facebook.png"

export default function Footer() {
    return (
        <footer className="flex flex-col">
            <section className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400">
                <div className="text-center text-white font-roboto text-base">
                    <p>Participantes:</p>
                    <p>Raphael Kim</p>
                    <p>Nicolas Barutti</p>
                    <p>Lucas Rainha</p>
                </div>
                
                <p className="text-white font-roboto text-base">Dúvidas Frequentes</p>
                
                <div className="flex justify-center">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" >
                        <Image src={logo_linkedin} alt="Linkedin" className="max-w-20"/>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <Image src={logo_git} alt="GitHub" className="max-w-20"/>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <Image src={logo_face} alt="Facebook" className="max-w-20"/>
                    </a>
                </div>
            </section>
            <div className="flex items-center justify-center bg-purple-800 py-2">
                <p className="text-white font-roboto text-base">Direitos reservados a FIAP e Porto Seguro</p>
            </div>
        </footer>
    );
}
