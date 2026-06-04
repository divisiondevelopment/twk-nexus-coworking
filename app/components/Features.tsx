import { Wifi, CalendarCheck, Coffee, Target, ShieldCheck, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Wifi,
    title: "Internet 1Gbps dedicada",
    description:
      "Fibra óptica exclusiva para cada espaço. Sem oscilações, sem compartilhamento. Sua conexão sempre na velocidade máxima.",
  },
  {
    icon: CalendarCheck,
    title: "Salas de reunião equipadas",
    description:
      "15 salas com TV 4K, quadro branco, ar-condicionado e sistemas de videoconferência integrados. Reserva em segundos pelo app.",
  },
  {
    icon: Coffee,
    title: "Café, copa e recepção",
    description:
      "Café especial, chás, água filtrada e copa completa inclusos no plano. Recepção presencial para receber visitas e correspondências.",
  },
  {
    icon: Target,
    title: "Comunidade e eventos",
    description:
      "Mais de 20 eventos por mês: workshops, happy hours, mentorias e demos. Conecte-se com quem está construindo empresas ao seu lado.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança 24/7",
    description:
      "Acesso por biometria, câmeras em todos os andares, controle de acesso individual e suporte 24 horas para emergências.",
  },
  {
    icon: MapPin,
    title: "Endereço fiscal e comercial",
    description:
      "Utilize nosso endereço premium no centro de Esteio para CNPJ, correspondências e recebimento de encomendas.",
  },
];

export default function Features() {
  return (
    <section
      id="espacos"
      className="px-6 py-16 md:py-20 lg:py-[120px]"
      style={{ backgroundColor: "rgb(247, 243, 235)" }}
    >
      <div className="max-w-[1300px] mx-auto">

        <Reveal>
          <div className="flex flex-col gap-5 mb-16 max-w-2xl">
            <span
              className="text-xs font-medium uppercase tracking-[0.48px]"
              style={{ color: "rgba(16, 16, 15, 0.88)" }}
            >
              Infraestrutura
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
              Tudo no lugar.
              <br />
              Você só precisa aparecer.
            </h2>
            <p
              className="text-base leading-7"
              style={{ color: "rgba(28, 26, 23, 0.72)" }}
            >
              Cuidamos de toda a estrutura para você focar no que importa. Internet, café, sala de reunião — sem preocupação.
            </p>
          </div>
        </Reveal>

        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 70}>
                <div
                  className="rounded-xl p-7 flex flex-col gap-4 transition-shadow duration-200 hover:shadow-md h-full"
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    border: "1px solid rgb(241, 241, 241)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: "rgb(250, 250, 250)",
                      border: "1px solid rgb(244, 244, 245)",
                    }}
                  >
                    <Icon size={18} style={{ color: "rgb(28, 26, 23)" }} strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p
                      className="text-sm font-bold"
                      style={{ color: "rgb(28, 26, 23)" }}
                    >
                      {f.title}
                    </p>
                    <p
                      className="text-sm leading-6"
                      style={{ color: "rgba(28, 26, 23, 0.72)" }}
                    >
                      {f.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
