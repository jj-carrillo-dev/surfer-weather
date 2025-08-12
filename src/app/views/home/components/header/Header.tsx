import WaveIcon from "@/components/icons/WaveIcon"

export function Header() {
  return (
  <div className="text-center"> 
    <div className="flex justify-center animate-bounce"> 
      <WaveIcon className="w-12 h-12 text-blue-600" /> 
    </div>
    <h1 className="mt-4 text-4xl font-extrabold text-blue-900 tracking-tight">
      Surfer Weather
    </h1>
    <p className="mt-2 text-blue-700">Germany</p>
  </div>
  )
}