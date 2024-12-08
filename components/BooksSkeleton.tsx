import { Skeleton } from "./ui/skeleton"
export function BooksSkeleton() {
    return (
        <div className="flex flex-col gap-[20px]">
            <Skeleton className="w-[800px] h-[300px]"/>
            <Skeleton className="w-[800px] h-[300px]"/>
        </div>
    )
}