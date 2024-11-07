"use client";

import { useState } from 'react';
import Header from "@/components/header";

export default function CadastroVeiculo() {
    const [formData, setFormData] = useState({
        marca: '',
        modelo: '',
        ano: '',
        placa: '',
    });

    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.marca || !formData.modelo || !formData.ano || !formData.placa) {
            setErro('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        try {
            // Simulação de envio
            console.log('Dados enviados:', formData);
            setSucesso(true);
            setErro('');

            // Limpar formulário
            setFormData({
                marca: '',
                modelo: '',
                ano: '',
                placa: '',
            });
        } catch (e) {
            console.error(e);
            setErro('Erro ao cadastrar veículo. Tente novamente.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
        <Header titulo={"Cadastrar Carro"} />
        <div className="flex-grow bg-gray-50 py-8 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md">
                {/* Header */}
                <div className="border-b border-gray-200 p-6">
                    <div className="flex items-center gap-3">
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                        <h1 className="text-xl font-semibold text-gray-900">
                            Cadastro de Veículo
                        </h1>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Marca */}
                        <div>
                            <label
                                htmlFor="marca"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Marca*
                            </label>
                            <input
                                type="text"
                                id="marca"
                                name="marca"
                                value={formData.marca}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Ex: Toyota"
                            />
                        </div>

                        {/* Modelo */}
                        <div>
                            <label
                                htmlFor="modelo"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Modelo*
                            </label>
                            <input
                                type="text"
                                id="modelo"
                                name="modelo"
                                value={formData.modelo}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Ex: Corolla"
                            />
                        </div>

                        {/* Ano */}
                        <div>
                            <label
                                htmlFor="ano"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Ano*
                            </label>
                            <input
                                type="number"
                                id="ano"
                                name="ano"
                                value={formData.ano}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Ex: 2024"
                            />
                        </div>

                        {/* Placa */}
                        <div>
                            <label
                                htmlFor="placa"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Placa*
                            </label>
                            <input
                                type="text"
                                id="placa"
                                name="placa"
                                value={formData.placa}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Ex: ABC1234"
                            />
                        </div>


                        {/* Mensagens de erro e sucesso */}
                        {erro && (
                            <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
                                {erro}
                            </div>
                        )}

                        {sucesso && (
                            <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md">
                                Veículo cadastrado com sucesso!
                            </div>
                        )}
                    </div>
                    {/* Botões */}
                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={() => {
                                setFormData({
                                    marca: '',
                                    modelo: '',
                                    ano: '',
                                    placa: '',
                                });
                                setErro('');
                                setSucesso(false);
                            }}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Limpar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Cadastrar Veículo
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}