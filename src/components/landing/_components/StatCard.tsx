import { LucideIcon } from 'lucide-react'

interface StatCardProps {
    Icon: LucideIcon;
    title: string;
    subtitle: string;
    color?: string;
}

export default function StatCard({ Icon, title, subtitle, color = 'blue' }: StatCardProps) {
    return (
        <div className="bg-white/60 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 group">
            <div className={`p-2.5 bg-${color}-500/10 ${color}-500/10 text-${color}-600 rounded-lg group-hover:bg-${color}-500/20 transition-colors`}>
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <div className="text-2xl font-bold text-foreground">{title}</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{subtitle}</div>
            </div>
        </div>
    )
}
