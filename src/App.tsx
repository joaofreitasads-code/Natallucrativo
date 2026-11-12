import React, { useState, useEffect } from 'react';
import {
  Flame,
  Zap,
  ChevronRight,
  Lock,
  Star,
  Scissors,
  FileText,
  Briefcase,
  Tag,
  TrendingDown,
  Check,
  X,
  Sparkles,
  ShieldCheck,
  CircleHelp,
  ShoppingBag,
  Printer,
  Heart,
  XCircle,
  ZoomIn,
  Smartphone,
  Search,
  Download,
  CheckCircle2,
} from 'lucide-react';

export default function App() {
  // Live countdown timer initialized to 10 hours 24 mins 25 secs
  const [secondsLeft, setSecondsLeft] = useState(10 * 3600 + 24 * 60 + 25);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Pop-up Plano Completo por 18,90 state & 10min timer
  const [showUpsellModal, setShowUpsellModal] = useState(false);
  const [popupSeconds, setPopupSeconds] = useState(9 * 60 + 59);

  // Dynamic formatted date string
  const [todayFormatted, setTodayFormatted] = useState('SEG, 09/11/2026');

  useEffect(() => {
    // Format date in PT-BR uppercase
    try {
      const now = new Date();
      const weekdays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      const weekday = weekdays[now.getDay()];
      setTodayFormatted(`${weekday}, ${day}/${month}/${year}`);
    } catch {
      setTodayFormatted('SEG, 09/11/2026');
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 10 * 3600 + 24 * 60 + 25));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Timer for upsell popup
  useEffect(() => {
    if (!showUpsellModal) return;
    const timer = setInterval(() => {
      setPopupSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [showUpsellModal]);

  const formatTimer = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const timerString = formatTimer(secondsLeft);

  const scrollToPlans = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Linha 1: 7 modelos únicos
  const galleryImages = [
    '/images/moldes-1.webp',
    '/images/moldes-2.webp',
    '/images/moldes-3.webp',
    '/images/moldes-4.webp',
    '/images/moldes-5.webp',
    '/images/moldes-6.webp',
    '/images/moldes-7.webp',
  ];

  // Linha 2: outros 7 modelos únicos
  const galleryImagesRow2 = [
    '/images/moldes-8.webp',
    '/images/moldes-9.webp',
    '/images/moldes-10.webp',
    '/images/moldes-11-caixa-envelope.webp',
    '/images/moldes-12-caixas-diferenciadas.webp',
    '/images/moldes-13-caixinha-bis.webp',
    '/images/moldes-22-papai-noel.webp',
  ];

  // Linha 3: 7 novos modelos exclusivos do Google Drive
  const galleryImagesRow3 = [
    '/images/moldes-15-card-blister.webp',
    '/images/moldes-16-arvore-natal.webp',
    '/images/moldes-17-caixinha-8x8.webp',
    '/images/moldes-18-casinha-natalina.webp',
    '/images/moldes-19-casinha-p2.webp',
    '/images/moldes-20-casinha-p3.webp',
    '/images/moldes-21-lacos-natal.webp',
  ];

  const testimonials = [
    {
      img: '/images/prova_social.webp',
      text: 'Já fiz meus primeiros kits natalinos. Foram super fáceis de cortar e montar, e meus clientes amaram o resultado.',
    },
    {
      img: '/images/prova_social_2.webp',
      text: 'Recebi meu pedido e já estou apaixonada! Moldes de ótima qualidade, e aqui já começamos a receber encomendas.',
    },
    {
      img: '/images/prova_social_3.webp',
      text: 'Comprei na sexta e já montei meus primeiros kits de Natal. Ficaram maravilhosos e minhas clientes amaram!',
    },
  ];

  const faqs = [
    {
      question: 'Como recebo os arquivos?',
      answer:
        'Logo após a confirmação do pagamento você recebe no seu e-mail o link de acesso a todos os arquivos.',
    },
    {
      question: 'Consigo cortar na tesoura ou preciso de máquina?',
      answer:
        'Os moldes funcionam perfeitamente com tesoura e estilete. Se tiver máquina de corte, também pode usar.',
    },
    {
      question: 'Posso revender os produtos prontos?',
      answer:
        'Sim! Você tem licença para vender as peças físicas impressas e montadas. Só não é permitido revender os arquivos digitais.',
    },
    {
      question: 'Qual o formato e tamanho dos arquivos?',
      answer:
        'PDF e PNG em alta resolução no tamanho A4, prontos para imprimir em casa ou na gráfica.',
    },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground antialiased selection:bg-gold/30 selection:text-pine">
      {/* Top Banner - Oferta só hoje */}
      <aside aria-label="Alerta de oferta" className="sticky top-0 z-50 bg-festive text-primary-foreground shadow-soft">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-2 px-3 py-2 text-xs font-bold sm:gap-3 sm:px-4 sm:py-2.5 sm:text-sm">
          <Flame className="h-4 w-4 text-gold shrink-0 animate-pulse" />
          <span>OFERTA SÓ HOJE</span>
          <span className="text-gold">•</span>
          <span className="text-gold">{todayFormatted}</span>
          <span className="hidden rounded-full bg-background/15 px-2.5 py-0.5 font-mono sm:inline">
            ⏱ {timerString}
          </span>
        </div>
      </aside>

      {/* Hero Section */}
      <section className="mx-auto grid max-w-5xl items-center gap-8 px-4 pb-12 pt-6 md:grid-cols-2 md:gap-10 md:px-5 md:pb-16 md:pt-16">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-accent px-4 py-1.5 text-xs font-bold uppercase text-accent-foreground">
            <Zap className="h-3.5 w-3.5 fill-current text-primary" />
            Acesso imediato em PDF · Coleção Natal 2026
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-[1.08] text-pine sm:mt-6 sm:text-4xl md:text-5xl">
            Transforme Papel em{' '}
            <span className="relative whitespace-nowrap text-primary">
              Renda Extra
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-gold/60"></span>
            </span>{' '}
            Neste Natal com Mais de 600 Moldes Prontos!
          </h1>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Arquivos em PDF e PNG no tamanho A4. Imprima, corte na tesoura ou máquina e comece a faturar neste Natal.
          </p>

          <div className="mt-8 hidden md:block">
            <a
              href="#planos"
              onClick={scrollToPlans}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-5 text-center font-display text-lg font-bold uppercase text-primary-foreground shadow-cta transition hover:brightness-110 animate-pulse-soft"
            >
              Quero meus moldes agora
              <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-5 hidden items-center gap-4 text-sm text-muted-foreground md:flex">
            <span className="flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-pine" /> Pagamento seguro
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-pine" /> Entrega por e-mail
            </span>
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <div
            className="group relative cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setPreviewImage('/images/hero-banner-new.webp')}
            title="Clique para ampliar"
          >
            <img
              src="/images/hero-banner-new.webp"
              alt="Moldes de lembrancinhas natalinas: caixas, porta-doces e tags prontos para imprimir"
              width="760"
              height="507"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto object-contain transition duration-300 group-hover:scale-105 drop-shadow-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover:opacity-100 rounded-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-pine shadow">
                <ZoomIn className="h-4 w-4" /> Ampliar foto
              </span>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-3 flex w-fit items-center gap-2 rounded-2xl bg-card px-4 py-2.5 shadow-soft border border-border/50">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-bold text-pine">+3.200 alunas</span>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <a
            href="#planos"
            onClick={scrollToPlans}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-5 text-center font-display text-lg font-bold uppercase text-primary-foreground shadow-cta transition hover:brightness-110 animate-pulse-soft"
          >
            Quero meus moldes agora
            <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Pagamento único · Acesso imediato por e-mail
          </p>
        </div>
      </section>

      {/* TRÊS LINHAS DE CARROSSEL INFINITO COM MODELOS DO DRIVE (ZERO REPETIÇÃO) */}
      <section className="py-6 sm:py-10 overflow-hidden bg-background">
        <div className="text-center px-4 mb-5 sm:mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Confira alguns modelos</p>
          <h2 className="mt-1 text-2xl font-extrabold text-pine sm:text-3xl md:text-4xl font-display">
            Veja alguns dos moldes do kit
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
            Passe o mouse para pausar e ver os detalhes dos moldes prontos para imprimir
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {/* Linha 1 de Carrossel Infinito (7 modelos únicos - Sentido Esquerda) */}
          <div className="group flex w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max shrink-0 items-stretch gap-3 pr-3 animate-marquee sm:gap-4 sm:pr-4 group-hover:[animation-play-state:paused]">
              {[...galleryImages, ...galleryImages].map((img, idx) => (
                <div
                  key={`carousel-row1-${idx}`}
                  className="group/card relative aspect-[4/5] w-36 shrink-0 overflow-hidden rounded-2xl shadow-soft sm:w-52 sm:rounded-3xl md:w-64 border border-border/50 bg-card transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Molde de Natal modelo ${(idx % galleryImages.length) + 1}`}
                    loading="lazy"
                    decoding="async"
                    width="340"
                    height="425"
                    className="h-full w-full object-cover transition duration-300 group-hover/card:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Linha 2 de Carrossel Infinito (7 modelos únicos - Sentido Direita) */}
          <div className="group flex w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max shrink-0 items-stretch gap-3 pr-3 animate-marquee-reverse sm:gap-4 sm:pr-4 group-hover:[animation-play-state:paused]">
              {[...galleryImagesRow2, ...galleryImagesRow2].map((img, idx) => (
                <div
                  key={`carousel-row2-${idx}`}
                  className="group/card relative aspect-[4/5] w-36 shrink-0 overflow-hidden rounded-2xl shadow-soft sm:w-52 sm:rounded-3xl md:w-64 border border-border/50 bg-card transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Molde de Natal modelo exclusivo ${(idx % galleryImagesRow2.length) + 8}`}
                    loading="lazy"
                    decoding="async"
                    width="340"
                    height="425"
                    className="h-full w-full object-cover transition duration-300 group-hover/card:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Linha 3 de Carrossel Infinito (7 novos modelos do Google Drive - Sentido Esquerda Cadenciado) */}
          <div className="group flex w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max shrink-0 items-stretch gap-3 pr-3 animate-marquee-slow sm:gap-4 sm:pr-4 group-hover:[animation-play-state:paused]">
              {[...galleryImagesRow3, ...galleryImagesRow3].map((img, idx) => (
                <div
                  key={`carousel-row3-${idx}`}
                  className="group/card relative aspect-[4/5] w-36 shrink-0 overflow-hidden rounded-2xl shadow-soft sm:w-52 sm:rounded-3xl md:w-64 border border-border/50 bg-card transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Molde de Natal modelo adicional ${(idx % galleryImagesRow3.length) + 15}`}
                    loading="lazy"
                    decoding="async"
                    width="340"
                    height="425"
                    className="h-full w-full object-cover transition duration-300 group-hover/card:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO DE BÔNUS EXCLUSIVOS */}
      <section className="bg-pine-grad py-12 md:py-20 text-cream relative overflow-hidden border-y border-gold/30 content-auto">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-gold shadow-sm">
              <Sparkles className="h-4 w-4 fill-current" />
              Presentes Exclusivos Para Você
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-cream leading-tight">
              Garantindo Hoje, Você Leva <span className="text-gold">Esses 4 Super Bônus</span> Totalmente Grátis!
            </h2>

            <p className="mt-3 text-sm sm:text-base text-cream/80 max-w-2xl mx-auto leading-relaxed">
              Desenvolvemos materiais complementares práticos para você não ter nenhuma dúvida na montagem, saber exatamente quais materiais usar e vender suas peças com lucro certo neste Natal.
            </p>
          </div>

          {/* Grid dos Bônus (2x2) */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 items-stretch">
            {/* Card Bônus 01 */}
            <div className="flex flex-col rounded-[2.5rem] border-2 border-gold/40 bg-card/95 text-foreground p-6 sm:p-8 shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-gold">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase">
                  <Star className="h-3.5 w-3.5 fill-current text-primary" /> Bônus 01
                </span>
                <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-extrabold text-success uppercase">
                  100% Gratuito Hoje
                </span>
              </div>

              {/* Imagem do Bônus 01 */}
              <div
                className="group/bonus relative mt-5 overflow-hidden rounded-2xl bg-pine/5 p-2 cursor-pointer border border-border/60 transition hover:shadow-md"
                onClick={() => setPreviewImage('/images/bonus-1-montagem.webp')}
                title="Clique para ampliar o Bônus 01"
              >
                <img
                  src="/images/bonus-1-montagem.webp"
                  alt="Bônus 01 - Guia de Montagem Perfeita"
                  width="720"
                  height="788"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[340px] object-contain mx-auto transition duration-300 group-hover/bonus:scale-105 drop-shadow-md"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover/bonus:opacity-100 rounded-2xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-pine shadow-md">
                    <ZoomIn className="h-4 w-4" /> Ampliar bônus
                  </span>
                </div>
              </div>

              <div className="mt-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-pine">
                    Guia de Montagem Perfeita
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Aprenda o passo a passo completo para imprimir, recortar, dobrar e montar suas lembrancinhas de Natal com acabamento profissional impecável — mesmo se você for iniciante!
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Passo a passo detalhado:</strong> imprimir, recortar, dobrar e montar sem erros.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Dicas de papéis e colas:</strong> saiba qual papel usar para peças firmes e resistentes.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Funciona na tesoura ou máquina:</strong> faça tudo manualmente com facilidade.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Vendido separadamente por:</p>
                    <p className="text-sm font-bold text-muted-foreground line-through">R$ 47,00</p>
                  </div>
                  <span className="rounded-xl bg-gold-grad px-3.5 py-1.5 text-sm font-extrabold text-gold-foreground uppercase shadow-sm">
                    Grátis no seu kit
                  </span>
                </div>
              </div>
            </div>

            {/* Card Bônus 02 */}
            <div className="flex flex-col rounded-[2.5rem] border-2 border-gold/40 bg-card/95 text-foreground p-6 sm:p-8 shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-gold">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase">
                  <Star className="h-3.5 w-3.5 fill-current text-primary" /> Bônus 02
                </span>
                <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-extrabold text-success uppercase">
                  100% Gratuito Hoje
                </span>
              </div>

              {/* Imagem do Bônus 02 */}
              <div
                className="group/bonus relative mt-5 overflow-hidden rounded-2xl bg-pine/5 p-2 cursor-pointer border border-border/60 transition hover:shadow-md"
                onClick={() => setPreviewImage('/images/bonus-2-precificacao.webp')}
                title="Clique para ampliar o Bônus 02"
              >
                <img
                  src="/images/bonus-2-precificacao.webp"
                  alt="Bônus 02 - Tabela de Precificação Natalina"
                  width="720"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[340px] object-contain mx-auto transition duration-300 group-hover/bonus:scale-105 drop-shadow-md rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover/bonus:opacity-100 rounded-2xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-pine shadow-md">
                    <ZoomIn className="h-4 w-4" /> Ampliar bônus
                  </span>
                </div>
              </div>

              <div className="mt-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-pine">
                    Tabela de Precificação Natalina
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Planilha prática e automatizada para calcular seus custos exatos (papel, impressão, embalagem) e definir o preço de venda ideal com lucro garantido!
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Cálculo automático de custos:</strong> saiba exatamente quanto custa cada caixinha.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Margem de lucro certa:</strong> defina sua porcentagem de lucro sem medo de cobrar pouco.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Preço sugerido pronto:</strong> veja na hora o valor final ideal para vender e lucrar.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Vendido separadamente por:</p>
                    <p className="text-sm font-bold text-muted-foreground line-through">R$ 37,00</p>
                  </div>
                  <span className="rounded-xl bg-gold-grad px-3.5 py-1.5 text-sm font-extrabold text-gold-foreground uppercase shadow-sm">
                    Grátis no seu kit
                  </span>
                </div>
              </div>
            </div>

            {/* Card Bônus 03 */}
            <div className="flex flex-col rounded-[2.5rem] border-2 border-gold/40 bg-card/95 text-foreground p-6 sm:p-8 shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-gold">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase">
                  <Star className="h-3.5 w-3.5 fill-current text-primary" /> Bônus 03
                </span>
                <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-extrabold text-success uppercase">
                  100% Gratuito Hoje
                </span>
              </div>

              {/* Imagem do Bônus 03 */}
              <div
                className="group/bonus relative mt-5 overflow-hidden rounded-2xl bg-pine/5 p-2 cursor-pointer border border-border/60 transition hover:shadow-md"
                onClick={() => setPreviewImage('/images/bonus-3-materiais.webp')}
                title="Clique para ampliar o Bônus 03"
              >
                <img
                  src="/images/bonus-3-materiais.webp"
                  alt="Bônus 03 - Guia de Papéis e Materiais"
                  width="720"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[340px] object-contain mx-auto transition duration-300 group-hover/bonus:scale-105 drop-shadow-md rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover/bonus:opacity-100 rounded-2xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-pine shadow-md">
                    <ZoomIn className="h-4 w-4" /> Ampliar bônus
                  </span>
                </div>
              </div>

              <div className="mt-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-pine">
                    Guia de Papéis e Materiais
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Descubra quais papéis, gramaturas, colas e ferramentas utilizar para ter um acabamento profissional impecável, sem desperdiçar material!
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Tipos de papéis recomendados:</strong> fotográfico matte, offset e kraft com exemplos práticos.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Gramaturas ideais:</strong> nunca mais erre na firmeza e sustentação das caixas.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Colas e ferramentas essenciais:</strong> dicas de colagem rápida sem enrugar ou manchar o papel.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Vendido separadamente por:</p>
                    <p className="text-sm font-bold text-muted-foreground line-through">R$ 27,00</p>
                  </div>
                  <span className="rounded-xl bg-gold-grad px-3.5 py-1.5 text-sm font-extrabold text-gold-foreground uppercase shadow-sm">
                    Grátis no seu kit
                  </span>
                </div>
              </div>
            </div>

            {/* Card Bônus 04 */}
            <div className="flex flex-col rounded-[2.5rem] border-2 border-gold/40 bg-card/95 text-foreground p-6 sm:p-8 shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-gold">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase">
                  <Star className="h-3.5 w-3.5 fill-current text-primary" /> Bônus 04
                </span>
                <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-extrabold text-success uppercase">
                  100% Gratuito Hoje
                </span>
              </div>

              {/* Imagem do Bônus 04 */}
              <div
                className="group/bonus relative mt-5 overflow-hidden rounded-2xl bg-pine/5 p-2 cursor-pointer border border-border/60 transition hover:shadow-md"
                onClick={() => setPreviewImage('/images/bonus-4-vendas.webp')}
                title="Clique para ampliar o Bônus 04"
              >
                <img
                  src="/images/bonus-4-vendas.webp"
                  alt="Bônus 04 - Mini Guia para Vender no Natal"
                  width="720"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[340px] object-contain mx-auto transition duration-300 group-hover/bonus:scale-105 drop-shadow-md rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover/bonus:opacity-100 rounded-2xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-pine shadow-md">
                    <ZoomIn className="h-4 w-4" /> Ampliar bônus
                  </span>
                </div>
              </div>

              <div className="mt-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-pine">
                    Mini Guia para Vender no Natal
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Estratégias simples e práticas para divulgar, atrair clientes e conquistar encomendas de lembrancinhas natalinas em tempo recorde!
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Divulgação no WhatsApp:</strong> mensagens e roteiros prontos para disparar e fechar vendas.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Dicas para Instagram &amp; Grupos:</strong> como tirar fotos atraentes e divulgar em grupos locais.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span><strong>Ideias de promoções:</strong> crie combos irresistíveis que aumentam o valor de cada pedido.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Vendido separadamente por:</p>
                    <p className="text-sm font-bold text-muted-foreground line-through">R$ 47,00</p>
                  </div>
                  <span className="rounded-xl bg-gold-grad px-3.5 py-1.5 text-sm font-extrabold text-gold-foreground uppercase shadow-sm">
                    Grátis no seu kit
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Banner Resumo de Valor + CTA */}
          <div className="mt-12 rounded-3xl border border-gold/40 bg-black/25 p-6 text-center backdrop-blur-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">Economia exclusiva de Natal</p>
            <p className="mt-1 text-lg sm:text-2xl font-extrabold text-cream">
              Mais de <span className="text-gold">R$ 158,00 em bônus</span> entregues no seu e-mail por <span className="underline decoration-gold">R$ 0,00</span>
            </p>
            <p className="mt-2 text-xs sm:text-sm text-cream/75 max-w-xl mx-auto">
              Garanta seu acesso antes que essa condição especial seja encerrada.
            </p>
            <div className="mt-6 max-w-md mx-auto">
              <a
                href="#planos"
                onClick={scrollToPlans}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gold-grad px-6 py-4 text-center font-display text-base sm:text-lg font-extrabold uppercase text-gold-foreground shadow-gold transition hover:brightness-105 animate-pulse-soft"
              >
                Garantir moldes + 4 bônus grátis
                <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* "O que você recebe" Section com Aplicativo Exclusivo */}
      <section className="bg-gradient-to-b from-secondary/40 via-card to-secondary/60 py-12 md:py-20 border-y border-border/40 relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-700 shadow-sm">
              <Smartphone className="h-4 w-4 text-emerald-600 animate-pulse" />
              Aplicativo Exclusivo Incluso
            </span>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">O que você recebe</p>
            <h2 className="mt-1 text-3xl font-extrabold text-pine md:text-5xl font-display leading-tight">
              Tudo do seu kit digital dentro de um <span className="text-primary underline decoration-gold/60 decoration-wavy">Aplicativo Exclusivo</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Você não vai receber links perdidos de drive ou pastas bagunçadas. Tenha acesso à nossa <strong className="text-pine font-bold">plataforma com visual de aplicativo</strong> organizada por categorias, com busca instantânea e download com 1 clique pelo celular ou computador.
            </p>
          </div>

          {/* Destaque do Mockup do Aplicativo */}
          <div className="mt-8 md:mt-12">
            <div className="relative rounded-3xl p-2 sm:p-3 bg-gradient-to-br from-gold/30 via-pine/10 to-primary/20 shadow-2xl border border-gold/40">
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border/40 group">
                <div className="relative aspect-[16/9] w-full bg-muted/40 cursor-pointer overflow-hidden"
                     onClick={() => setPreviewImage('/images/app-acervo-digital.webp')}>
                  <img
                    src="/images/app-acervo-digital.webp"
                    alt="Aplicativo Exclusivo Acervo Natalino Digital - Catálogo e Download de Moldes"
                    loading="lazy"
                    decoding="async"
                    width={960}
                    height={540}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Overlay interativo com aviso para ampliar */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pine/80 via-transparent to-transparent opacity-90 transition sm:opacity-0 sm:group-hover:opacity-90 flex items-end p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2 text-white">
                      <div>
                        <p className="text-sm sm:text-base font-bold flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-gold" />
                          Plataforma Acervo Natalino Digital
                        </p>
                        <p className="text-xs text-white/80">Busca rápida, vitrine com fotos reais e botão direto de baixar</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-white/20 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-white border border-white/30">
                        <Search className="h-3.5 w-3.5" /> Clique para ampliar tela
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefícios exclusivos do aplicativo */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="flex items-center gap-2.5 rounded-2xl bg-card p-3.5 border border-border/50 shadow-soft">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Search className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-pine">Busca Inteligente</p>
                  <p className="text-[11px] text-muted-foreground leading-tight">Ache o molde em segundos</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-2xl bg-card p-3.5 border border-border/50 shadow-soft">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Download className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-pine">1 Clique p/ Baixar</p>
                  <p className="text-[11px] text-muted-foreground leading-tight">Arquivos diretos sem travar</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-2xl bg-card p-3.5 border border-border/50 shadow-soft">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold/20 text-gold-dark">
                  <Smartphone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-pine">Celular ou PC</p>
                  <p className="text-[11px] text-muted-foreground leading-tight">Acesse de onde quiser</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-2xl bg-card p-3.5 border border-border/50 shadow-soft">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-pine">Atualizações Grátis</p>
                  <p className="text-[11px] text-muted-foreground leading-tight">Novos moldes direto no app</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards com as categorias de moldes */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-3xl bg-card p-5 shadow-soft transition hover:-translate-y-1 border border-border/40">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent text-3xl">
                🎁
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-pine">Caixas &amp; Embalagens</h3>
                  <span className="rounded-full bg-pine/10 px-2.5 py-0.5 text-xs font-bold text-pine">
                    Econômico
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Caixas milk, pirâmides, sacolinhas e caixas presenteáveis prontas para cortar.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl bg-card p-5 shadow-soft transition hover:-translate-y-1 border border-border/40">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent text-3xl">
                🍬
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-pine">Porta-Doces</h3>
                  <span className="rounded-full bg-pine/10 px-2.5 py-0.5 text-xs font-bold text-pine">
                    Mais vendido
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Porta-bombom, porta-moeda, suportes para brigadeiro e mimos de alta procura.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl bg-card p-5 shadow-soft transition hover:-translate-y-1 border border-border/40">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent text-3xl">
                🏫
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-pine">Nicho Escolar</h3>
                  <span className="rounded-full bg-pine/10 px-2.5 py-0.5 text-xs font-bold text-pine">
                    Produção rápida
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Porta-lápis, cards de Natal, tags para alunos e lembrancinhas para fazer em lote.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl bg-card p-5 shadow-soft transition hover:-translate-y-1 border border-border/40">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent text-3xl">
                🎄
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-pine">Área Exclusiva VIP</h3>
                  <span className="rounded-full bg-gold/20 text-gold-dark px-2.5 py-0.5 text-xs font-bold">
                    Super Completo
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Todos os moldes premium, stands natalinos, bônus especiais e novos lançamentos.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 rounded-3xl bg-card p-5 text-sm font-bold shadow-soft md:grid-cols-4 border border-border/40">
            <span className="flex items-center justify-center gap-2 text-pine">
              <Scissors className="h-4 w-4 text-pine" /> Corte na tesoura ou plotter
            </span>
            <span className="flex items-center justify-center gap-2 text-pine">
              <FileText className="h-4 w-4 text-pine" /> Formato A4 pronto p/ imprimir
            </span>
            <span className="flex items-center justify-center gap-2 text-pine">
              <Smartphone className="h-4 w-4 text-emerald-600" /> Acesso direto no App
            </span>
            <span className="flex items-center justify-center gap-2 text-pine">
              <Briefcase className="h-4 w-4 text-pine" /> Licença comercial inclusa
            </span>
          </div>
        </div>
      </section>

      {/* Prova Social Section - Logo Acima das Ofertas */}
      <section className="py-10 md:py-16 bg-background">
        <div className="text-center px-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Prova social</p>
          <h2 className="mt-2 text-3xl font-extrabold text-pine md:text-4xl">Clientes que já estão faturando</h2>
          <p className="mt-3 text-muted-foreground">Conversas reais no WhatsApp com quem já está vendendo.</p>
        </div>

        <div className="group mt-6 flex w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] md:mt-10">
          <div className="flex w-max shrink-0 items-stretch gap-3 pr-3 animate-marquee-slow sm:gap-4 sm:pr-4 group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
              <figure
                key={idx}
                className="w-[230px] shrink-0 rounded-3xl bg-card p-3 shadow-soft sm:w-[280px] md:w-[320px] border border-border/40"
              >
                <div
                  className="group/img relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-pine/5"
                  onClick={() => setPreviewImage(item.img)}
                  title="Clique para ver o print em tamanho real"
                >
                  <img
                    src={item.img}
                    alt="Conversa real de cliente no WhatsApp elogiando os moldes"
                    width="400"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="w-full transition duration-300 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover/img:opacity-100">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-pine shadow">
                      <ZoomIn className="h-3.5 w-3.5" /> Ver print
                    </span>
                  </div>
                </div>
                <figcaption className="px-2 pb-1 pt-3">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-foreground/90 leading-snug">“{item.text}”</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Planos Section */}
      <section id="planos" className="scroll-mt-14 bg-secondary/60 py-10 md:py-16 border-y border-border/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-5">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Escolha sua oferta</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl md:text-5xl text-pine">
              Invista pouco.
              <br />
              Comece a vender hoje.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Oferta expira em <b className="font-mono text-primary font-bold">{timerString}</b>
            </p>
          </div>

          <div className="mt-8 grid items-start gap-6 sm:gap-8 md:mt-12 md:grid-cols-2">
            {/* Plano Básico */}
            <div className="rounded-[2rem] border border-border bg-card p-5 shadow-soft sm:p-7 transition hover:shadow-md">
              <h3 className="text-center text-2xl font-extrabold text-pine">Plano Básico</h3>
              <p className="mt-4 rounded-2xl bg-secondary py-3 text-center font-display font-bold uppercase text-pine text-sm sm:text-base">
                +100 moldes e arquivos natalinos
              </p>
              <p className="mt-3 text-center text-sm text-muted-foreground">
                Ideal para começar rápido com os moldes mais vendidos.
              </p>

              <div className="mt-5 text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold bg-primary text-primary-foreground">
                  <Tag className="h-3.5 w-3.5" /> 62% de desconto
                </span>
                <p className="mt-3 text-sm opacity-70">
                  de <s className="text-xl font-bold">R$ 29,00</s>
                </p>
                <p className="text-xs font-bold uppercase text-primary">Só hoje por apenas</p>
                <p className="font-display font-extrabold leading-none mt-1">
                  <span className="text-2xl opacity-60">R$ </span>
                  <span className="text-6xl text-pine">10,90</span>
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold bg-primary/10 text-primary">
                  <TrendingDown className="h-4 w-4" /> Você economiza R$ 18,10
                </span>
                <p className="mt-2 text-xs font-bold uppercase opacity-60">Pagamento único</p>
              </div>

              <ul className="mt-6 space-y-3">
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-success" />
                  <span>Mais de 100 moldes natalinos</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-success" />
                  <span>Moldes de caixinhas para presentes e lembrancinhas</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-success" />
                  <span>Arquivos prontos para imprimir (PDF e PNG A4)</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-success" />
                  <span>Acesso imediato ao material</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base opacity-75">
                  <X className="h-5 w-5 shrink-0 text-muted-foreground/60" />
                  <span className="text-muted-foreground line-through">Sem os 4 Super Bônus Exclusivos</span>
                </li>
              </ul>

              <button
                type="button"
                onClick={() => setShowUpsellModal(true)}
                className="mt-8 block w-full rounded-full bg-pine py-4 text-center text-base font-bold text-pine-foreground shadow-none transition hover:brightness-110 active:scale-98 cursor-pointer"
              >
                Escolher Plano Básico (Sem Bônus) · R$ 10,90
              </button>
            </div>

            {/* Plano VIP */}
            <div
              id="plano-vip"
              className="relative rounded-[2rem] border-2 border-gold bg-red-grad p-5 text-cream shadow-gold sm:p-7 md:-mt-4"
            >
              <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold-grad px-4 py-1.5 text-xs font-bold uppercase text-gold-foreground shadow-soft">
                <Star className="h-3.5 w-3.5 fill-current" /> Mais escolhido
              </span>

              <h3 className="text-center text-2xl font-extrabold text-cream">Plano VIP</h3>
              <p className="mt-4 rounded-2xl border border-gold/40 bg-gold/15 py-3 text-center font-display text-lg font-bold uppercase text-gold">
                +600 moldes + 4 Bônus Exclusivos
              </p>

              {/* Imagem da Oferta VIP R$ 29,90 - Sem plano de fundo */}
              <div
                className="group/vip-img relative mt-4 cursor-pointer"
                onClick={() => setPreviewImage('/images/vip-pack-offer.webp')}
                title="Clique para ampliar o mockup do Pack VIP"
              >
                <img
                  src="/images/vip-pack-offer.webp"
                  alt="Pack VIP Moldes de Natal - Oferta R$ 29,90"
                  width="760"
                  height="507"
                  className="w-full h-auto object-contain transition duration-300 group-hover/vip-img:scale-105 drop-shadow-md"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover/vip-img:opacity-100">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-pine shadow-md">
                    <ZoomIn className="h-3.5 w-3.5" /> Ampliar imagem
                  </span>
                </div>
              </div>

              <p className="mt-3 text-center text-sm opacity-90 text-cream">
                Tudo do Básico + adesivos, cartões, área exclusiva de stands e todos os 4 super bônus!
              </p>

              <div className="mt-5 text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold bg-gold text-gold-foreground">
                  <Tag className="h-3.5 w-3.5" /> 70% de desconto
                </span>
                <p className="mt-3 text-sm opacity-80 text-cream">
                  de <s className="text-xl font-bold">R$ 99,00</s>
                </p>
                <p className="text-xs font-bold uppercase text-gold">Só hoje por apenas</p>
                <p className="font-display font-extrabold leading-none mt-1">
                  <span className="text-2xl text-gold">R$ </span>
                  <span className="text-6xl text-white font-extrabold">29,90</span>
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold bg-white text-red-700 shadow-sm">
                  <TrendingDown className="h-4 w-4" /> Você economiza R$ 69,10
                </span>
                <p className="mt-2 text-xs font-bold uppercase opacity-75 text-cream">Pagamento único</p>
              </div>

              <ul className="mt-6 space-y-3">
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span>Mais de 600 moldes natalinos</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span>Tudo do Plano Básico incluso</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span>Moldes de caixinhas para presentes</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span>Adesivos e cartões natalinos</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span>Área Exclusiva com stands e displays VIP</span>
                </li>

                {/* 4 Super Bônus listados um abaixo do outro com emoji de presente */}
                <li className="flex gap-3 text-sm sm:text-base">
                  <span className="text-base select-none shrink-0 leading-tight">🎁</span>
                  <span><strong>Bônus 1:</strong> Guia de Montagem Perfeita (Passo a passo)</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <span className="text-base select-none shrink-0 leading-tight">🎁</span>
                  <span><strong>Bônus 2:</strong> Tabela de Precificação Natalina (Automatizada)</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <span className="text-base select-none shrink-0 leading-tight">🎁</span>
                  <span><strong>Bônus 3:</strong> Guia de Papéis, Gramaturas e Materiais</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <span className="text-base select-none shrink-0 leading-tight">🎁</span>
                  <span><strong>Bônus 4:</strong> Mini Guia para Vender Muito no Natal</span>
                </li>

                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span>Arquivos prontos para imprimir (PDF e PNG A4)</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span>Acesso imediato no e-mail + Licença comercial</span>
                </li>
              </ul>

              <a
                href="https://appdigitalhub.com.br/c/006495B4"
                className="mt-8 block rounded-full bg-gold-grad py-5 text-center font-display text-lg font-extrabold uppercase text-gold-foreground shadow-gold transition hover:brightness-105 animate-pulse-soft"
              >
                Quero o Plano Completo · R$ 29,90
              </a>
              <p className="mt-3 text-center text-xs opacity-80 text-cream">Só R$ 19 a mais por 6x mais moldes</p>
            </div>
          </div>

          {/* Tabela de Comparação dos Planos */}
          <div className="mt-12 rounded-[2.5rem] border-2 border-gold/40 bg-card p-4 sm:p-8 shadow-soft md:mt-16">
            <div className="text-center mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-pine">
                <Sparkles className="h-3.5 w-3.5 text-gold fill-current" /> Comparação Detalhada
              </span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-pine">
                Qual o plano ideal para você?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Compare lado a lado todos os recursos incluídos em cada plano
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-border/70 text-xs sm:text-sm">
                    <th className="py-4 px-3 sm:px-4 font-bold text-pine uppercase tracking-wider w-[42%]">
                      Benefícios inclusos
                    </th>
                    <th className="py-4 px-3 sm:px-4 text-center font-bold text-pine w-[29%]">
                      <span className="block text-base sm:text-lg">Básico</span>
                      <span className="font-mono text-xs text-muted-foreground font-normal">R$ 10,90</span>
                    </th>
                    <th className="py-4 px-3 sm:px-4 text-center font-extrabold text-white bg-red-700 rounded-t-2xl shadow-sm w-[29%] border-x-2 border-t-2 border-gold">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-gold bg-black/30 px-2 py-0.5 rounded-full mb-1">
                        <Star className="h-3 w-3 fill-current" /> Mais Escolhido
                      </span>
                      <span className="block text-base sm:text-lg">VIP Completo</span>
                      <span className="font-mono text-xs text-gold font-bold">R$ 29,90</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm divide-y divide-border/40">
                  <tr className="hover:bg-muted/40 transition">
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-pine">Quantidade total de moldes</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center text-muted-foreground font-medium">+100 moldes</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center font-bold text-red-700 bg-red-50/50 border-x-2 border-gold/40">
                      +600 moldes (6x mais!)
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/40 transition">
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-pine">Formatos em alta resolução (PDF e PNG A4)</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-success mx-auto" />
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center bg-red-50/50 border-x-2 border-gold/40">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-red-700 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/40 transition">
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-pine">Caixas para presentes e lembrancinhas</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center text-muted-foreground">Modelos básicos</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center font-semibold text-pine bg-red-50/50 border-x-2 border-gold/40">
                      Coleção Completa (+50 modelos)
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/40 transition">
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-pine">Porta-doces, bombons e mimos natalinos</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center text-muted-foreground">Essenciais</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center font-semibold text-pine bg-red-50/50 border-x-2 border-gold/40">
                      Todos os modelos
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/40 transition">
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-pine">Adesivos e tags decorativas de Natal</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center text-muted-foreground/60">
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground/40 mx-auto" />
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center bg-red-50/50 border-x-2 border-gold/40">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-red-700 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/40 transition">
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-pine">Cartões e envelopes temáticos prontos</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center text-muted-foreground/60">
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground/40 mx-auto" />
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center bg-red-50/50 border-x-2 border-gold/40">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-red-700 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/40 transition">
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-pine">Área VIP com stands e displays exclusivos</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center text-muted-foreground/60">
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground/40 mx-auto" />
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center bg-red-50/50 border-x-2 border-gold/40">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-red-700 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/40 transition">
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-pine">Os 4 Super Bônus Exclusivos (R$ 158 em presentes)</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center text-muted-foreground/60">
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground/50 mx-auto" />
                      <span className="text-[11px] text-muted-foreground/60 block mt-0.5">Não incluso</span>
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center bg-red-50/50 border-x-2 border-gold/40">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-red-700 mx-auto" />
                      <span className="text-[11px] font-bold text-red-700 block mt-0.5">Inclusos Grátis</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/40 transition">
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-pine">Licença comercial para vender as peças físicas</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center font-medium text-success">Vitalícia</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center font-bold text-red-700 bg-red-50/50 border-x-2 border-gold/40">Vitalícia</td>
                  </tr>
                  <tr className="hover:bg-muted/40 transition">
                    <td className="py-3.5 px-3 sm:px-4 font-semibold text-pine">Garantia incondicional total</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center font-medium text-pine">14 dias</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center font-bold text-red-700 bg-red-50/50 border-x-2 border-b-2 border-gold/40 rounded-b-2xl">
                      14 dias
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 14 Dias de Garantia Section */}
      <section className="px-4 py-10 md:px-5 md:py-16 content-auto">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2rem] border-2 border-dashed border-pine/30 bg-card p-6 text-center shadow-soft sm:p-8 md:flex-row md:text-left">
          <div
            className="shrink-0 cursor-pointer transition hover:scale-105"
            onClick={() => setPreviewImage('/images/garantia-14-dias.webp')}
            title="Clique para ampliar o selo de garantia"
          >
            <img
              src="/images/garantia-14-dias.webp"
              alt="Garantia incondicional de 14 dias"
              width="240"
              height="240"
              loading="lazy"
              decoding="async"
              className="h-28 w-28 sm:h-32 sm:w-32 object-contain drop-shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-pine">14 dias de garantia incondicional</h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Teste sem riscos por 14 dias. Se por qualquer motivo você não ficar 100% satisfeita com os moldes, devolvemos todo o seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-pine-grad py-10 text-pine-foreground md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-5">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Dúvidas comuns</p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl text-cream">Perguntas frequentes</h2>
          </div>

          <div className="mt-6 space-y-3 md:mt-10">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-pine-foreground/15 bg-white/5 transition duration-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full cursor-pointer items-center gap-3 p-5 text-left font-bold"
                  >
                    <CircleHelp className="h-5 w-5 shrink-0 text-gold" />
                    <span className="flex-1 text-cream">{faq.question}</span>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform duration-200 text-gold ${
                        isOpen ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-pine-foreground/10 px-5 pb-5 pt-3 pl-12 text-sm opacity-90 text-cream leading-relaxed animate-in fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <a
              href="#planos"
              onClick={scrollToPlans}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-5 text-center font-display text-lg font-bold uppercase text-primary-foreground shadow-cta transition hover:brightness-110 animate-pulse-soft"
            >
              Garantir meus moldes
              <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mx-auto mt-16 max-w-3xl border-t border-pine-foreground/15 px-5 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 font-display font-bold text-cream">
            <ShoppingBag className="h-5 w-5 text-gold" /> Natal Lucrativo
          </p>
          <div className="mt-3 flex justify-center gap-4 text-xs opacity-75 text-cream">
            <span className="flex items-center gap-1.5">
              <Printer className="h-3.5 w-3.5" /> Imprima em casa
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5" /> Feito com carinho
            </span>
          </div>
          <p className="mt-4 text-xs opacity-60 text-cream">
            © 2026 Todos os direitos reservados. Arquivos digitais para uso comercial de peças físicas.
          </p>
        </footer>
      </section>

      {/* Image Lightbox Modal */}
      {previewImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-2xl overflow-hidden rounded-2xl bg-card p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/90 transition"
              aria-label="Fechar"
            >
              <XCircle className="h-6 w-6" />
            </button>
            <img
              src={previewImage}
              alt="Visualização ampliada"
              loading="lazy"
              decoding="async"
              className="max-h-[85vh] w-auto rounded-xl object-contain mx-auto"
            />
          </div>
        </div>
      )}

      {/* Pop-up Plano Completo por R$ 18,90 */}
      {showUpsellModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md overflow-y-auto animate-in fade-in"
          onClick={() => setShowUpsellModal(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-[2rem] border-2 border-gold bg-pine-grad p-6 text-cream shadow-2xl sm:p-8 animate-in zoom-in-95 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              onClick={() => setShowUpsellModal(false)}
              className="absolute right-4 top-4 rounded-full bg-black/40 p-2 text-cream/80 hover:bg-black/70 hover:text-white transition cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Selo de Topo */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-grad px-4 py-1.5 text-xs font-extrabold uppercase text-gold-foreground shadow-soft">
                <Flame className="h-4 w-4 animate-pulse fill-current" /> OFERTA ESPECIAL RELÂMPAGO
              </span>
            </div>

            {/* Título & Proposta */}
            <h3 className="mt-4 text-center font-display text-2xl sm:text-3xl font-extrabold text-cream leading-tight">
              Espere! Leve o <span className="text-gold">Plano Completo</span> (+600 Moldes) por apenas
            </h3>

            {/* Preço de R$ 18,90 */}
            <div className="mt-3 text-center">
              <p className="text-xs uppercase font-bold text-gold">
                De <s className="opacity-70 text-sm">R$ 99,00</s> por apenas:
              </p>
              <p className="font-display font-extrabold leading-none mt-1">
                <span className="text-2xl text-gold">R$ </span>
                <span className="text-5xl sm:text-6xl text-cream">18,90</span>
              </p>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-card px-3 py-1 text-xs font-bold text-pine">
                <TrendingDown className="h-3.5 w-3.5" /> 81% de desconto exclusivo
              </span>
            </div>

            {/* Cronômetro */}
            <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-black/30 py-2 px-3 text-xs sm:text-sm font-semibold text-gold border border-gold/20">
              <span>⏱ Esta condição expira em:</span>
              <span className="font-mono font-bold text-cream">
                {String(Math.floor(popupSeconds / 60)).padStart(2, '0')}:
                {String(popupSeconds % 60).padStart(2, '0')}
              </span>
            </div>

            {/* Lista de Vantagens */}
            <div className="mt-4 space-y-2 rounded-2xl border border-gold/40 bg-black/20 p-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                <span><strong>Todos os +600 moldes</strong> prontos para imprimir (PDF/PNG A4)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                <span>Caixas, porta-doces, sacolas, nicho escolar e cartões</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                <span>Área Exclusiva VIP com stands natalinos exclusivos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                <span>Acesso imediato no e-mail + Licença comercial inclusa</span>
              </div>
            </div>

            {/* Botão de Ação Principal */}
            <a
              href="https://appdigitalhub.com.br/c/9B3097D2"
              className="mt-5 block w-full rounded-full bg-gold-grad py-4 text-center font-display text-base sm:text-lg font-extrabold uppercase text-gold-foreground shadow-gold transition hover:brightness-105 active:scale-98 animate-pulse-soft"
            >
              SIM! QUERO O PLANO COMPLETO POR R$ 18,90
            </a>

            {/* Link Secundário (Continuar no Básico por R$ 10,90) */}
            <div className="mt-3 text-center">
              <a
                href="https://appdigitalhub.com.br/c/A326A052"
                className="text-xs opacity-75 underline hover:opacity-100 text-cream transition"
              >
                Não, quero apenas o Plano Básico por R$ 10,90 &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
