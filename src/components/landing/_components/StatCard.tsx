import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface StatCardProps {
    Icon: LucideIcon;
    title: string;
    subtitle: string;
    color?: string;
}

export default function StatCard({ Icon, title, subtitle, color = 'blue' }: StatCardProps) {
    return (
        <Card className="bg-white/60 backdrop-blur-md border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 group">
            <CardContent className="p-4 flex items-center gap-4">
                <div className={`p-2.5 bg-${color}-500/10 text-${color}-600 rounded-lg group-hover:bg-${color}-500/20 transition-colors`}>
                    <Icon className="w-6 h-6" />
                </div>
                <CardHeader className="p-0"> {/* Remove default padding */}
                    <CardTitle className="text-2xl font-bold text-foreground">{title}</CardTitle>
                    <CardDescription className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{subtitle}</CardDescription>
                </CardHeader>
            </CardContent>
        </Card>
    )
}
