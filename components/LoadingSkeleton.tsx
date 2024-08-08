import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[800px]" />
        <Skeleton className="h-4 w-[750px]" />
        <Skeleton className="h-4 w-[700px]" />
      </div>
    </div>
  );
}
