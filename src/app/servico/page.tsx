import Header from "@/components/header";

export default function Servico() {
    return (
        <>
            <Header titulo={ "Serviços" } />
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col items-center justify-center flex-grow m-2">
                    <div className="text-2xl mb-5 text-gray-800 flex justify-center">
                        Olá, em que poso te ajudar?
                    </div>
                    <div className="w-[500px] h-[150px] border-2 border-black p-4 flex items-center justify-center bg-white m-2">
                        <input
                            type="file"
                            className="w-full h-10 p-2 border border-gray-300 rounded box-border"
                            placeholder="Mande uma foto do seu problema"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
