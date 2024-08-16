import ButtonHome from "../components/ButtonHome"


export default function Home() {
  return (
    <div className="container flex justify-center">
      <div className="flex flex-col space-y-5">
        <h1 className="mt-5 font-bold text-xl text-black text-center">ORT Tools</h1>
        <ButtonHome
        href="/recargas" 
        src="/card.png"
        name="Recargas"
        />
        <ButtonHome
        href="/validaciones" 
        src="/bus.svg"
        name="Validaciones"
        />

      </div>
    </div>
  )
}
