

export default function ButtonHome(params:{href: string; src: string; name: string}) {
  return (
    <a href={params.href}>
      <div className="bg-ortindig-800 hover:cursor-pointer hover:scale-105 flex justify-between rounded-md shadow-2xl h-[120px] items-center p-4 space-x-10">
        <img src={params.src} className="h-[60px] w-[60px]" alt="img" />
        <p className="text-white font-black text-lg">{params.name}</p>
      </div>
    </a>
  )
}
