export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/95 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-xs text-white/60 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="space-y-2">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-white/60">
            Stock Green Asset
          </p>
          <p className="max-w-md text-[0.7rem] text-white/50">
            Shaping the Future and Transforming the World Around You.
          </p>
        </div>

        <div className="text-[0.8rem] text-white/40">
          © {new Date().getFullYear()} Stock Green Asset. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
