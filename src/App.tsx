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

  // Exit intent popup trigger
  useEffect(() => {
    let triggered = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !triggered) {
        triggered = true;
        setShowUpsellModal(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
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

  const galleryImages = [
    '/images/moldes-1.webp',
    '/images/moldes-2.webp',
    '/images/moldes-3.webp',
    '/images/moldes-4.webp',
    '/images/moldes-5.webp',
    '/images/moldes-6.webp',
    '/images/moldes-7.webp',
    '/images/moldes-8.webp',
    '/images/moldes-9.webp',
    '/images/moldes-10.webp',
  ];

  const galleryImagesRow2 = [
    '/images/moldes-6.webp',
    '/images/moldes-7.webp',
    '/images/moldes-8.webp',
    '/images/moldes-9.webp',
    '/images/moldes-10.webp',
    '/images/moldes-1.webp',
    '/images/moldes-2.webp',
    '/images/moldes-3.webp',
    '/images/moldes-4.webp',
    '/images/moldes-5.webp',
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

      {/* DUAS LINHAS DE CARROSSEL INFINITO LOGO APÓS A SESSÃO DO HERO */}
      <section className="py-6 sm:py-10 overflow-hidden bg-background">
        <div className="text-center px-4 mb-5 sm:mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Confira alguns modelos</p>
          <h2 className="mt-1 text-2xl font-extrabold text-pine sm:text-3xl md:text-4xl">
            Veja alguns dos moldes do kit
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
            Passe o mouse para pausar · Clique em qualquer molde para ampliar
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {/* Linha 1 de Carrossel Infinito (Sentido Esquerda) */}
          <div className="group flex w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max shrink-0 items-stretch gap-3 pr-3 animate-marquee sm:gap-4 sm:pr-4 group-hover:[animation-play-state:paused]">
              {[...galleryImages, ...galleryImages].map((img, idx) => (
                <div
                  key={`carousel-row1-${idx}`}
                  onClick={() => setPreviewImage(img)}
                  className="group/card relative aspect-[4/5] w-36 shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-soft sm:w-52 sm:rounded-3xl md:w-64 border border-border/50 bg-card transition hover:-translate-y-1 hover:shadow-lg"
                  title="Clique para ampliar"
                >
                  <img
                    src={img}
                    alt={`Molde de Natal modelo ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    width="340"
                    height="425"
                    className="h-full w-full object-cover transition duration-300 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover/card:opacity-100">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-pine shadow">
                      <ZoomIn className="h-3.5 w-3.5" /> Ampliar
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Linha 2 de Carrossel Infinito (Sentido Direita / Inverso) */}
          <div className="group flex w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max shrink-0 items-stretch gap-3 pr-3 animate-marquee-reverse sm:gap-4 sm:pr-4 group-hover:[animation-play-state:paused]">
              {[...galleryImagesRow2, ...galleryImagesRow2].map((img, idx) => (
                <div
                  key={`carousel-row2-${idx}`}
                  onClick={() => setPreviewImage(img)}
                  className="group/card relative aspect-[4/5] w-36 shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-soft sm:w-52 sm:rounded-3xl md:w-64 border border-border/50 bg-card transition hover:-translate-y-1 hover:shadow-lg"
                  title="Clique para ampliar"
                >
                  <img
                    src={img}
                    alt={`Molde de Natal modelo exclusivo ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    width="340"
                    height="425"
                    className="h-full w-full object-cover transition duration-300 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover/card:opacity-100">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-pine shadow">
                      <ZoomIn className="h-3.5 w-3.5" /> Ampliar
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* "O que você recebe" Section */}
      <section className="bg-secondary/60 py-10 md:py-16 border-y border-border/40">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">O que você recebe</p>
            <h2 className="mt-2 text-3xl font-extrabold text-pine md:text-4xl">Tudo do seu kit digital</h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:mt-10">
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
                <p className="mt-1 text-sm text-muted-foreground">Caixas milk, pirâmides e sacolinhas.</p>
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
                    Mais vende
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Porta-bombom, porta-moeda e mimos.</p>
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
                    Rápido
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Porta-lápis, cards e lembrancinhas em lote.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl bg-card p-5 shadow-soft transition hover:-translate-y-1 border border-border/40">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent text-3xl">
                🎄
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-pine">Área Exclusiva VIP</h3>
                  <span className="rounded-full bg-pine/10 px-2.5 py-0.5 text-xs font-bold text-pine">
                    Exclusivo
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Moldes e stands que só quem é VIP recebe.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 rounded-3xl bg-card p-5 text-sm font-bold shadow-soft md:grid-cols-4 border border-border/40">
            <span className="flex items-center justify-center gap-2 text-pine">
              <Scissors className="h-4 w-4 text-pine" /> Corte fácil
            </span>
            <span className="flex items-center justify-center gap-2 text-pine">
              <FileText className="h-4 w-4 text-pine" /> Formato A4
            </span>
            <span className="flex items-center justify-center gap-2 text-pine">
              <Zap className="h-4 w-4 text-pine" /> Acesso imediato
            </span>
            <span className="flex items-center justify-center gap-2 text-pine">
              <Briefcase className="h-4 w-4 text-pine" /> Licença comercial
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
                  <span>Arquivos prontos para imprimir</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-success" />
                  <span>Acesso imediato ao material</span>
                </li>
              </ul>

              <button
                type="button"
                onClick={() => setShowUpsellModal(true)}
                className="mt-8 block w-full rounded-full bg-pine py-4 text-center text-base font-bold text-pine-foreground shadow-none transition hover:brightness-110 active:scale-98 cursor-pointer"
              >
                Escolher Plano Básico · R$ 10,90
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
                +600 moldes e arquivos natalinos
              </p>

              {/* Imagem da Oferta VIP R$ 29,90 */}
              <div
                className="group/vip-img relative mt-4 overflow-hidden rounded-2xl border border-gold/50 shadow-soft cursor-pointer bg-black/20"
                onClick={() => setPreviewImage('/images/vip-pack-offer.webp')}
                title="Clique para ampliar o mockup do Pack VIP"
              >
                <img
                  src="/images/vip-pack-offer.webp"
                  alt="Pack VIP Moldes de Natal - Oferta R$ 29,90"
                  width="760"
                  height="507"
                  className="w-full h-auto object-cover transition duration-300 group-hover/vip-img:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover/vip-img:opacity-100">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-pine shadow">
                    <ZoomIn className="h-3.5 w-3.5" /> Ampliar imagem
                  </span>
                </div>
              </div>

              <p className="mt-3 text-center text-sm opacity-90 text-cream">
                Tudo do Básico + adesivos, cartões natalinos e área exclusiva de moldes e stands.
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
                  <span>Tudo do Plano Básico</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span>Moldes de caixinhas para presentes</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span>Adesivos natalinos</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span>Cartões natalinos</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span>Arquivos prontos para imprimir</span>
                </li>
                <li className="flex gap-3 text-sm sm:text-base">
                  <Check className="h-5 w-5 shrink-0 text-gold" />
                  <span>Acesso imediato ao material</span>
                </li>
              </ul>

              <a
                href="https://pay.cakto.com.br/37rh2uu_1214451?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term="
                className="mt-8 block rounded-full bg-gold-grad py-5 text-center font-display text-lg font-extrabold uppercase text-gold-foreground shadow-gold transition hover:brightness-105 animate-pulse-soft"
              >
                Quero o Plano Completo · R$ 29,90
              </a>
              <p className="mt-3 text-center text-xs opacity-80 text-cream">Só R$ 19 a mais por 6x mais moldes</p>
            </div>
          </div>

          {/* Imagem de Comparação dos Planos */}
          <div
            className="group/comp relative mt-10 overflow-hidden rounded-[2rem] border-2 border-gold/40 bg-card shadow-soft md:mt-14 cursor-pointer transition hover:shadow-lg"
            onClick={() => setPreviewImage('/images/comparacao-tabela.webp')}
            title="Clique para ampliar a comparação dos planos"
          >
            <img
              src="/images/comparacao-tabela.webp"
              alt="Comparação rápida dos planos"
              width="800"
              height="533"
              className="w-full h-auto object-cover transition duration-300 group-hover/comp:scale-[1.01]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover/comp:opacity-100">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-pine shadow-md">
                <ZoomIn className="h-4 w-4" /> Ampliar comparação
              </span>
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
              href="https://pay.cakto.com.br/37rh2uu_1214451?utm_source=organic&cupom=COMPLETO18"
              className="mt-5 block w-full rounded-full bg-gold-grad py-4 text-center font-display text-base sm:text-lg font-extrabold uppercase text-gold-foreground shadow-gold transition hover:brightness-105 active:scale-98 animate-pulse-soft"
            >
              SIM! QUERO O PLANO COMPLETO POR R$ 18,90
            </a>

            {/* Link Secundário (Continuar no Básico por R$ 10,90) */}
            <div className="mt-3 text-center">
              <a
                href="https://pay.cakto.com.br/c8ns2h9_1214900?utm_source=organic"
                className="text-xs opacity-75 underline hover:opacity-100 text-cream transition"
              >
                Não, quero apenas o Plano Básico por R$ 10,90 &rarr;
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Botão Flutuante de Oferta Especial */}
      <button
        onClick={() => setShowUpsellModal(true)}
        className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-2 rounded-full bg-gold-grad px-4 py-2.5 text-xs font-extrabold uppercase text-gold-foreground shadow-gold transition hover:scale-105 animate-pulse-soft cursor-pointer"
        title="Abrir oferta especial do Plano Completo por R$ 18,90"
      >
        <Sparkles className="h-4 w-4 fill-current" />
        <span>Plano Completo por R$ 18,90</span>
      </button>
    </div>
  );
}
