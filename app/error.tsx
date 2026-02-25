"use client";

export default function Error() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0F172A] text-slate-100">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Something went wrong</h2>
        <p className="mt-2 text-slate-300">Please refresh the page or try again later.</p>
      </div>
    </div>
  );
}
