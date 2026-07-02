function SkeletonBox({ className }) {
  return (
    <div className={`rounded-3xl bg-slate-200/80 animate-pulse ${className}`} />
  );
}

export function PageSkeletonHeader() {
  return (
    <div className="space-y-4">
      <div className="h-4 w-40 rounded-full bg-slate-200/80 animate-pulse" />
      <div className="h-10 w-3/4 rounded-full bg-slate-200/80 animate-pulse" />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="space-y-3 rounded-3xl border border-slate-200/70 bg-white p-4 shadow-sm">
      <div className="h-40 rounded-[28px] bg-slate-200/80 animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 w-3/4 rounded-full bg-slate-200/80 animate-pulse" />
        <div className="h-3 rounded-full bg-slate-200/80 animate-pulse" />
        <div className="h-3 w-5/6 rounded-full bg-slate-200/80 animate-pulse" />
      </div>
    </div>
  );
}

export function SkeletonRow() {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-slate-200/70 bg-white p-4 shadow-sm">
      <div className="h-24 w-24 rounded-2xl bg-slate-200/80 animate-pulse" />
      <div className="flex-1 space-y-3">
        <div className="h-4 w-1/3 rounded-full bg-slate-200/80 animate-pulse" />
        <div className="h-3 rounded-full bg-slate-200/80 animate-pulse" />
        <div className="h-3 w-2/3 rounded-full bg-slate-200/80 animate-pulse" />
      </div>
      <div className="h-6 w-20 rounded-full bg-slate-200/80 animate-pulse" />
    </div>
  );
}

export function SkeletonTile({ className = "" }) {
  return <SkeletonBox className={`h-32 ${className}`} />;
}
