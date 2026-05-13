import Image from "next/image"
import { LayoutDashboard, Users, ChartNoAxesColumn, Folder, CalendarDays, Settings, LogOut} from "lucide-react"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Folder, label: "Docs" },
  { icon: ChartNoAxesColumn, label: "Analytics" },
  { icon: Users, label: "Members" },
  { icon: CalendarDays, label: "Calendar" },
]

const Sidebar = () => {
  return (
    <aside className="h-full w-16 bg-sidebar flex flex-col items-center justify-between py-6 gap-6 rounded-3xl shadow-md">

        <div className="flex flex-col gap-6">
            {navItems.map((item) => (
                <button key={item.label}
                 className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group cursor-pointer">
                    <item.icon size={28} />
                </button>
            ))}
        </div>

        <div className="flex flex-col gap-4 items-center">
            <button className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <Settings size={28}/>
            </button>

            <button className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <LogOut size={28} />
            </button>

            <div className="mt-3">
                <Image src="/user.jpg" alt="user" width={36} height={36} className="rounded-full cursor-pointer"/>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar