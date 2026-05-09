const companies = [
  "Nubank", "Stone", "iFood", "99", "Creditas", "Hotmart",
  "Gympass", "Pagar.me", "CloudWalk", "Neon", "Quinto Andar", "Loft",
];

export default function LogoMarquee() {
  return (
    <section style={{ padding: "40px 0", backgroundColor: "rgb(250, 250, 250)" }}>
      <p
        className="text-center text-xs font-medium uppercase tracking-[0.48px] mb-6"
        style={{ color: "rgba(28, 26, 23, 0.56)" }}
      >
        Profissionais de empresas como
      </p>

      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(250,250,250) 38.17%, rgba(250,250,250,0) 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(270deg, rgb(250,250,250) 38.17%, rgba(255,255,255,0) 100%)",
          }}
        />

        <div className="flex animate-marquee-slow" style={{ width: "max-content" }}>
          {[...companies, ...companies].map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8"
              style={{ minWidth: "140px" }}
            >
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{ color: "rgba(28, 26, 23, 0.45)" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
