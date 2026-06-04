const posts = [
  {
    category: "Produtividade",
    date: "5 Mai 2026",
    title: "Como montar uma rotina de deep work em um coworking",
    excerpt:
      "Trabalhar em ambiente compartilhado pode ser um desafio para quem precisa de foco total. Confira as técnicas que nossos membros usam para maximizar a concentração.",
  },
  {
    category: "Comunidade",
    date: "28 Abr 2026",
    title: "5 parcerias que nasceram no TWK Nexus em 2025",
    excerpt:
      "Do encontro casual no café à sociedade formal: conheça as histórias de empreendedores que se conectaram nas nossas dependências e criaram algo novo juntos.",
  },
  {
    category: "Negócios",
    date: "15 Abr 2026",
    title: "Por que grandes empresas estão adotando o modelo de coworking",
    excerpt:
      "Flexibilidade, custo e acesso a talentos. Entenda por que empresas como a sua estão trocando escritórios próprios por soluções mais inteligentes de workspace.",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="px-6 py-16 md:py-20 lg:py-[88px]"
      style={{ backgroundColor: "rgb(255, 255, 255)" }}
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div className="flex flex-col gap-4">
            <span
              className="text-xs font-medium uppercase tracking-[0.48px]"
              style={{ color: "rgba(16, 16, 15, 0.88)" }}
            >
              Blog
            </span>
            <h2
              className="font-medium tracking-[-0.38px]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 3.5vw, 38px)",
                lineHeight: "1.2",
                color: "rgb(28, 26, 23)",
              }}
            >
              Insights para quem
              <br />
              constrói o futuro
            </h2>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity duration-200 hover:opacity-70"
            style={{ color: "rgb(28, 26, 23)", textDecoration: "none" }}
          >
            Ver todos os artigos →
          </a>
        </div>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
        >
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col gap-3 cursor-pointer group"
            >
              <div
                className="w-full rounded-xl"
                style={{
                  aspectRatio: "16/9",
                  backgroundImage:
                    "linear-gradient(135deg, rgb(13, 148, 136), rgb(14, 165, 233))",
                  opacity: 0.85,
                }}
              />
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-medium uppercase tracking-[0.48px]"
                  style={{ color: "rgba(16, 16, 15, 0.88)" }}
                >
                  {post.category}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "rgba(28, 26, 23, 0.56)" }}
                >
                  · {post.date}
                </span>
              </div>
              <h3
                className="font-medium tracking-[-0.18px] group-hover:opacity-80 transition-opacity duration-150"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "rgb(28, 26, 23)",
                }}
              >
                {post.title}
              </h3>
              <p
                className="text-sm leading-5"
                style={{ color: "rgba(28, 26, 23, 0.72)" }}
              >
                {post.excerpt}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-medium mt-1"
                style={{ color: "rgb(28, 26, 23)" }}
              >
                Ler artigo →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
