import { Truck, Phone, MapPin } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Truck className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold">Truck Transport</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-secondary" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-secondary" />
            <span>New York, USA</span>
          </div>
        </div>
      </div>
    </nav>
  )
}