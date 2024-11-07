"use client"
import { useState } from 'react';
import Header from "@/components/header";
import { TipoCliente } from "@/types";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [cliente, setCliente] = useState<TipoCliente[]>([])
  const [showMessageErro, setShowErro] = useState(false);
  const [showMessageCorreto, setShowCorreto] = useState(false);

  const chamadaApi = async () => {
    const response = await fetch(`http://127.0.0.1:5000/usuarios/${email}`)
    const lista = await response.json()
    console.log(cliente);
    setCliente(lista)
    console.log(lista);
    console.log(lista[5])
    if (lista[5] == senha){
      console.log("O Ricardo é safado")
      setShowErro(false);
      setShowCorreto(true);
    }else{
      console.log("O Ricardo não é safado")
      setShowCorreto(false);
      setShowErro(true);
    }
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    chamadaApi()
    console.log(email, senha)
  };

  return (
      <>
        <Header titulo={ "Login" } />
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <form onSubmit={handleSubmit}>
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
              <div className="mb-6 text-left">
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
              {showMessageErro && <p className={"text-red-500 mb-2"}>Senha incorreta</p>}
              {showMessageCorreto && <p className={"text-blue-400 mb-2"}>Senha correta</p>}
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
            </form>
            <p className={"mt-3"}>Não tem conta? Clique aqui para se <Link href="/cadastro" className={"underline text-indigo-600 "}>cadastrar</Link></p>
          </div>
        </div>
      </>
  );
}
