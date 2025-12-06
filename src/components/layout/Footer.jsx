export function Footer() {
  return (
    <footer className="border-t border-[#d6d6d6] bg-white py-10 text-[#333846]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">

        {/* LEFT */}
        <div className="space-y-2">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[#1c2846]">
            Stock Green Asset
          </p>
          <p className="max-w-md text-[0.75rem] text-[#333846]/70">
            Shaping the Future and Transforming the World Around You.
          </p>
        </div>

        {/* RIGHT */}
        <div className="text-[0.75rem] text-[#333846]/60">
          © {new Date().getFullYear()} Stock Green Asset. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
