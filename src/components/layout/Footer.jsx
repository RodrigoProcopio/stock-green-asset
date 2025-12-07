import logoStock from "../../assets/logo-stock.webp";

export function Footer() {
  return (
    <footer className="border-t border-[#d6d6d6] bg-white py-10 text-[#333846]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:justify-between md:px-6">

        {/* Lado esquerdo: logo + slogan */}
        <div className="flex items-center gap-3">
          <img
            src={logoStock}
            alt="Stock Green Asset"
            className="h-8 md:h-9 w-auto opacity-90"
          />

          <p className="max-w-md text-[0.75rem] text-[#333846]/70 leading-snug">
            Shaping the Future and Transforming the World Around You.
          </p>
        </div>

        {/* Lado direito: copyright */}
        <div
          className="
            text-[0.75rem] text-[#333846]/60
            md:mt-[0.3rem]
          "
        >
          © {new Date().getFullYear()} Stock Green Asset. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
