import { NextResponse } from "next/server";
interface Cliente {
    id: number;
    title: string;
}

export async function GET() {

    const response = await fetch('https://api.example.com/data');
    const login: Cliente[] = await response.json();

    return NextResponse.json(login);



}