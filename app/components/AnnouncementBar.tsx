export default function AnnouncementBar() {
  return (
    <div
      style={{ backgroundColor: "#001d3d" }}
      className="fixed top-0 left-0 w-full h-11 flex items-center justify-center gap-2 px-4 z-50"
    >
      <span
        style={{ color: "rgba(255,255,255,0.56)" }}
        className="text-sm leading-5 tracking-[-0.14px]"
      >
        Novo
      </span>
      <span style={{ color: "rgba(255,255,255,0.24)" }} className="text-sm hidden sm:inline">
        •
      </span>
      <span className="text-white text-sm leading-5 tracking-[-0.14px] hidden sm:inline">
        Cozinha Gourmet disponível — agende um treinamento ou workshop.
      </span>
      <a
        href="#espacos"
        style={{ color: "#60c0ff" }}
        className="text-base md:text-sm leading-5 tracking-[-0.14px] hover:underline"
      >
        Saiba mais →
      </a>
    </div>
  );
}
