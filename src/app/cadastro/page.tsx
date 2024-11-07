"use client";

import Header from "@/components/header";
import { useState } from "react";

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [showMessageErro, setShowErro] = useState(false);
    const [showMessageCorreto, setShowCorreto] = useState(false);
    const [resultado, setResultado] = useState(''); // Inicializado como string vazia

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, cpf, telefone, email, senha }), // Enviando todos os dados como objeto
            });

            if (response.ok) {
                const data = await response.json();
                setResultado(data.message); // Supondo que a resposta contém uma mensagem
                setShowCorreto(true);
                setShowErro(false);
            } else {
                setResultado('Erro ao enviar os dados.');
                setShowCorreto(false);
                setShowErro(true);
            }
        } catch (error: unknown) { // Aqui estamos usando unknown para capturar o erro
            // Tratamento do erro
            if (error instanceof Error) {
                console.error('Erro ao enviar os dados:', error.message); // Captura a mensagem de erro
                setResultado('Erro: ' + error.message); // Usa a mensagem do erro
            } else {
                console.error('Erro inesperado:', error); // Para outros tipos de erro
                setResultado('Erro ao enviar os dados.'); // Mensagem padrão
            }
            setShowCorreto(false);
            setShowErro(true);
        }
    };

    return (
        <>
            <Header titulo={"Cadastro"} />
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
                    <h1 className="text-2xl font-bold mb-6">Cadastro</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 text-left">
                            <label htmlFor="nome" className="block text-gray-700 mb-2">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Coloque seu Nome aqui"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="mb-4 text-left">
                            <label htmlFor="cpf" className="block text-gray-700 mb-2">CPF:</label>
                            <input
                                type="text"
                                id="cpf"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                placeholder="Coloque seu CPF aqui"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="mb-4 text-left">
                            <label htmlFor="telefone" className="block text-gray-700 mb-2">Telefone:</label>
                            <input
                                type="text" // Mantido como texto para lidar com DDD e zeros iniciais
                                id="telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                placeholder="Coloque seu Telefone aqui"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="mb-4 text-left">
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Coloque seu Email aqui"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="mb-4 text-left">
                            <label htmlFor="senha" className="block text-gray-700 mb-2">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Coloque sua Senha aqui"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {showMessageErro && <p className="text-red-500 mb-2">{resultado}</p>}
                        {showMessageCorreto && <p className="text-blue-400 mb-2">{resultado}</p>}

                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                        >
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
