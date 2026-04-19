import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion'

interface StatCardProps {
    Icon: LucideIcon;
    title: string;
    subtitle: string;
    color?: 'blue' | 'green' | 'purple' | 'primary' | string;
    isExpanded?: boolean;
    onMouseEnter?: () => void;
}

export default function StatCard({ Icon, title, subtitle, color = 'blue', isExpanded = true, onMouseEnter }: StatCardProps) {
    const colorClasses: Record<string, string> = {
        blue: "bg-blue-500/10 text-blue-600 group-hover:bg-blue-500/20",
        green: "bg-green-500/10 text-green-600 group-hover:bg-green-500/20",
        purple: "bg-purple-500/10 text-purple-600 group-hover:bg-purple-500/20",
        primary: "bg-primary/10 text-primary group-hover:bg-primary/20",
    };

    const activeColorClass = colorClasses[color] || "bg-primary/10 text-primary group-hover:bg-primary/20";

    return (
        <Card 
            onMouseEnter={onMouseEnter}
            className={`bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 group overflow-hidden relative rounded-lg cursor-pointer w-full sm:w-fit`}
        >
            <CardContent className="p-2 flex items-center gap-4 relative z-10 w-full h-full">
                <div className={`p-3 shrink-0 rounded-lg transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 ${activeColorClass}`}>
                    <Icon className="w-6 h-6" />
                </div>
                
                {/* Mobile: Always Expanded */}
                <div className="flex-1 sm:hidden">
                    <CardHeader className="p-0 space-y-0.5 min-w-[120px]">
                        <CardTitle className="text-xl font-bold text-foreground tracking-tight whitespace-nowrap">{title}</CardTitle>
                        <CardDescription className="text-xs font-bold text-muted-foreground uppercase tracking whitespace-nowrap">{subtitle}</CardDescription>
                    </CardHeader>
                </div>

                {/* Desktop: Interactive Accordion */}
                <AnimatePresence initial={false}>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden flex-1 hidden sm:block"
                        >
                            <CardHeader className="p-0 space-y-0.5 min-w-[120px]">
                                <CardTitle className="text-xl font-bold text-foreground tracking-tight whitespace-nowrap">{title}</CardTitle>
                                <CardDescription className="text-xs font-bold text-muted-foreground uppercase tracking whitespace-nowrap">{subtitle}</CardDescription>
                            </CardHeader>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    )
}


