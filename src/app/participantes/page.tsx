import Header from "@/components/header";


type ParticipantesProps = {
  img: string;
  nome: string;
  rm: string;
}

export default function Participantes() {
  const pessoas: ParticipantesProps[] = [
    { img: "/image/kim.jpeg", nome: 'Raphael Kim', rm: '557914' },
    { img: "/image/lucas.jpeg", nome: 'Nicolas Brutti', rm: '554944' },
    { img: "/image/nicolas.jpeg", nome: 'Lucas Rainha', rm: '558471' },
  ]

  return (
      <>
        <Header titulo={ "Participantes" }/>
        <div className="flex-grow">
          <div className="flex justify-around items-center flex-wrap mt-5 ">
            {pessoas.map((pessoa, index) => (
              <div key={index}>
                <img className="w-60 h-auto rounded-md" src={pessoa.img} />
                <p>{pessoa.nome}</p>
                <p>{pessoa.rm}</p>
              </div>
            ))}
          </div>
        </div>
      </>
  )
}
