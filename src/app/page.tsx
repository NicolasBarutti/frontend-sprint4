import Image from "next/image";
import carro from "/public/image/carro.png";
import Header from "@/components/header";
export default function Home() {


  return (
      <>
        <Header titulo={ "Início" } />
        <main className="flex flex-col flex-grow justify-center items-center">
          <div className="flex justify-center items-center text-center gap-32">
            <div className="flex flex-col max-w-[390px]">
              <h3 className="text-2xl font-bold mb-4">Conheça um pouco sobre nós</h3>
              <p className="text-base mb-6">
                Este site tem como objetivo automatizar por completo o reparo e manutenção dos veículos dos clientes da Porto Seguro,
                por meio de um chat que pode: encontrar o problema do automóvel, criar um orçamento e localizar a oficina mais próxima de você!
              </p>
              <a href="#test" className="text-blue-600 underline font-semibold">Teste Já</a>
            </div>
            <Image src={carro} alt="Carro" className="w-[30em]" />
          </div>
        </main>
      </>
  );
}
 