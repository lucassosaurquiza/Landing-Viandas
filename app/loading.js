export default function Loading() {
  return <div className="flex justify-center items-center h-screen relative">
    <div className="w-32 h-32 border-8 border-orange-700 rounded-full animate-ping">
      <div className="w-32 h-32 border-8 border-orange-700 rounded-full animate-ping"></div>
    </div>
    <div className="w-32 h-32 border-8 border-orange-400 rounded-full animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 p-3 border bg-orange-400 rounded-lg">
      <img className="h-12" src="/nuevo-logo.png" alt="" />
    </div>
  </div>
}