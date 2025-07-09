import { Loader2 } from "lucide-react"

export default function AgentDirectoryLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
        <p className="text-gray-600">Loading agent directory...</p>
      </div>
    </div>
  )
}
