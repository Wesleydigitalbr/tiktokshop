import { useState, useEffect } from 'react'
import ShinyButton from '@/components/ui/shiny-button'
import ScrollReveal from '@/components/ui/scroll-reveal'
import ProgressiveBlur from '@/components/ui/progressive-blur'

/* ===== ACCORDION COMPONENT ===== */
function AccordionItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <ScrollReveal direction="up" delay={index * 150}>
      <div className={`accordion-item ${open ? 'open' : ''}`}>
        <div
          className="accordion-header"
          onClick={() => setOpen(!open)}
          role="button"
          tabIndex={0}
          aria-expanded={open}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setOpen(!open)
            }
          }}
        >
          <h4>{question}</h4>
          <span className="accordion-icon">+</span>
        </div>
        <div className="accordion-body">
          <p>{answer}</p>
        </div>
      </div>
    </ScrollReveal>
  )
}

/* ===== CALCULADORA COMPONENT ===== */
function Calculadora() {
  const [accounts, setAccounts] = useState(1)
  const [updating, setUpdating] = useState({ ganho: false, tempo: false })

  const data = {
    ganho: ['+de R$3k/mês', '+de R$5k/mês', '+de R$8k/mês', '+de R$12k/mês', '+de R$15k/mês'],
    tempo: ['1h por dia', '2h por dia', '2-4h por dia', '5h por dia', '5h por dia'],
  }

  function change(delta: number) {
    const next = accounts + delta
    if (next < 1 || next > 5) return
    setAccounts(next)
    setUpdating({ ganho: true, tempo: true })
    setTimeout(() => setUpdating({ ganho: false, tempo: false }), 300)
  }

  return (
    <div className="calculadora-section">
      <ScrollReveal direction="up" delay={0}>
        <h2 className="calculadora-title">Quanto você pode ganhar?</h2>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <p className="calculadora-subtitle">Ajuste o número de contas e veja seu potencial</p>
      </ScrollReveal>
      <div className="calculadora-grid">
        {/* Card 1 — Seletor */}
        <ScrollReveal direction="up" delay={0}>
          <div className="glass glass-hover calc-card" style={{ padding: 28 }}>
            <div className="calc-label">Quantas contas você quer operar?</div>
            <div className="calc-seletor">
              <button className="calc-btn" onClick={() => change(-1)} aria-label="Diminuir">−</button>
              <div className="calc-value">{accounts}</div>
              <button className="calc-btn" onClick={() => change(1)} aria-label="Aumentar">+</button>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 2 — Ganho */}
        <ScrollReveal direction="up" delay={150}>
          <div className="glass glass-hover calc-card" style={{ padding: 28 }}>
            <div className="calc-label">Potencial de ganho/mês</div>
            <div className={`stat-number calc-number ${updating.ganho ? 'updating' : ''}`}>
              {data.ganho[accounts - 1]}
            </div>
          </div>
        </ScrollReveal>

        {/* Card 3 — Tempo */}
        <ScrollReveal direction="up" delay={300}>
          <div className="glass glass-hover calc-card" style={{ padding: 28 }}>
            <div className="calc-label">Tempo por dia aplicando o método</div>
            <div className={`stat-number calc-number ${updating.tempo ? 'updating' : ''}`}>
              {data.tempo[accounts - 1]}
            </div>
          </div>
        </ScrollReveal>

        {/* Card 4 — Investimento */}
        <ScrollReveal direction="up" delay={450}>
          <div className="glass glass-hover calc-card" style={{ padding: 28 }}>
            <div className="calc-label">O que você investe hoje</div>
            <div className="stat-number calc-number">R$37</div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

/* ===== MAIN APP ===== */
function App() {
  const faq = [
    { q: 'Preciso aparecer em câmera?', a: 'Não. O método usa IA pra produzir o conteúdo. Você não aparece, não grava voz, não precisa de equipamento.' },
    { q: 'Preciso ter seguidores pra começar?', a: 'Não. O TikTok Shop distribui o conteúdo organicamente. O que determina resultado é o produto e o formato, não os seguidores.' },
    { q: 'Preciso pagar por ferramentas de IA?', a: 'Algumas têm plano gratuito suficiente pra começar. Dentro do método eu mostro exatamente o que uso, o que é pago e o que substitui por gratuito.' },
    { q: 'Funciona pra qualquer tipo de produto?', a: 'Funciona melhor com produtos físicos que já têm demanda comprovada. O método ensina exatamente como identificar esses produtos antes de qualquer postagem.' },
    { q: 'Quando recebo o acesso?', a: 'Imediatamente após a confirmação do pagamento. Você recebe o link por email e acessa na hora.' },
    { q: 'Quanto tempo preciso dedicar por semana?', a: 'Depende da fase. No início, algumas horas por semana pra identificar produtos e gerar o conteúdo. Com o processo rodando, muito menos.' },
  ]

  const problemaCards = [
    { text: 'Tentam criar do zero, passam dias produzindo vídeo que ninguém assiste' },
    { text: 'Escolhem produto no achismo, testam semanas algo sem demanda real' },
    { text: 'Dependem de aparecer, travam porque não querem ficar na câmera todo dia' },
    { text: 'Não sabem o que fazer quando funciona, um vídeo performa e eles ficam paralisados' },
  ]

  const mecanismoCards = [
    { letter: 'C', title: 'Caçar', subtitle: 'Encontre produto com demanda real em minutos', items: ['Como ler os sinais de um produto que já está vendendo', 'O filtro que elimina produto ruim antes de você postar', 'Onde encontrar o conteúdo que já tem tração hoje'] },
    { letter: 'A', title: 'Aplicar', subtitle: 'Deixe a IA produzir o conteúdo por você', items: ['O fluxo exato de instrução pra IA gerar no formato que converte', 'Como adaptar o que já funciona sem depender de criatividade', 'Ferramentas: o que eu uso, o que é pago, o que é gratuito'] },
    { letter: 'C', title: 'Coletar', subtitle: 'Saiba o que funciona e escale', items: ['A métrica simples que mostra onde está o dinheiro', 'Como aumentar comissão sem aumentar volume de trabalho', 'Sistema de postagem: cadência e frequência ideal'] },
  ]

  const entregaveis = [
    { strong: 'Módulo 1 | Caçar:', text: 'Como encontrar produto com demanda real e o filtro que elimina erros antes do primeiro post' },
    { strong: 'Módulo 2 | Aplicar:', text: 'O fluxo completo de instrução pra IA produzir o conteúdo sem você aparecer' },
    { strong: 'Módulo 3 | Coletar:', text: 'Como identificar o que está funcionando e aumentar comissão sem postar mais' },
    { strong: 'Bônus | 50 Hooks prontos:', text: 'Organizados por gatilho: curiosidade, urgência, prova social e comparação' },
    { strong: 'Bônus | Método 2k seguidores:', text: 'Como bater 2k seguidores em 7 dias ou menos no TikTok' },
    { strong: 'Bônus | 5 Instruções de IA:', text: 'As exatas que eu uso toda semana pra produzir conteúdo que converte, com guia de uso' },
  ]

  useEffect(() => {
    const removeKimi = () => {
      document.querySelectorAll('[class*="kimi" i], [id*="kimi" i], [class*="Kimi" i], [id*="Kimi" i]').forEach((el) => {
        if (el.parentNode) el.parentNode.removeChild(el)
      })
    }
    removeKimi()
    const observer = new MutationObserver(removeKimi)
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true })
    }
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        :root {
          --bg-primary: #0a0a0a;
          --bg-glass: rgba(255,255,255, 0.03);
          --border-glass: rgba(255,255,255, 0.1);
          --border-glass-hover: rgba(255,255,255, 0.2);
          --gold-base: #a78b71;
          --gold-light: #c9b8a0;
          --gold-hover: #e8d5b7;
          --text-primary: #ffffff;
          --text-secondary: #a0a0a0;
          --text-muted: #666666;
          --ease-out: cubic-bezier(0.4, 0, 0.2, 1);
        }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Inter', sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        body::before {
          content: "";
          position: fixed;
          top:0; left:0; right:0; bottom:0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }
        .container { max-width: 720px; margin: 0 auto; padding-left: 20px; padding-right: 20px; position: relative; z-index: 1; }
        .glass { background: var(--bg-glass); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid var(--border-glass); border-radius: 24px; }
        .glass-hover { transition: all 0.3s var(--ease-out); }
        .glass-hover:hover { border-color: var(--border-glass-hover); transform: translateY(-2px); }
        .tag { display: inline-block; background: rgba(167,139,113,0.1); border: 1px solid rgba(167,139,113,0.3); border-radius: 100px; padding: 6px 16px; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 500; color: var(--gold-base); text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 24px; }
        .section-title { font-family: 'Playfair Display', serif; font-style: italic; font-size: clamp(28px, 4vw, 40px); font-weight: 700; line-height: 1.2; color: var(--text-primary); margin-bottom: 32px; }
        .section-title .gold { color: var(--gold-base); }

        .topbar { position: fixed; top:0; left:0; width:100%; height: 64px; background: rgba(10,10,10,0.9); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid var(--border-glass); z-index: 1000; display: flex; align-items: center; transition: box-shadow 0.2s ease; }
        .topbar-logo { font-family: 'Playfair Display', serif; font-style: italic; font-weight: 700; font-size: 18px; color: var(--text-primary); text-decoration: none; }
        .topbar-logo span { color: var(--gold-base); }
        .topbar-btn { display: inline-block; background: var(--text-primary); color: #0a0a0a; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; padding: 10px 20px; border-radius: 100px; text-decoration: none; transition: all 0.2s ease; white-space: nowrap; }
        .topbar-btn:hover { background: var(--gold-hover); }

        .hero { position: relative; min-height: auto; padding-top: 85px; padding-bottom: 20px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; overflow: hidden; }
        .hero-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 600px; background: radial-gradient(circle, rgba(167,139,113,0.12) 0%, transparent 70%); pointer-events: none; z-index: 0; }
        .hero h1 { font-family: 'Playfair Display', serif; font-style: italic; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; line-height: 1.15; color: var(--text-primary); margin-bottom: 20px; }
        .hero h1 .gold { color: var(--gold-base); }
        .hero-subtitle { font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 300; line-height: 1.7; color: var(--text-secondary); margin-bottom: 32px; max-width: 480px; margin-left: auto; margin-right: auto; }
        .hero-ctas { display: flex; flex-direction: column; gap: 12px; align-items: center; }
        @media (min-width: 640px) { .hero-ctas { flex-direction: row; justify-content: center; } }
        .hero-cta-text { font-family: 'Inter', sans-serif; font-size: 12px; color: var(--text-muted); margin-top: 16px; letter-spacing: 0.02em; }

        .live-pill { display: inline-flex; align-items: center; gap: 8px; background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-glass); border-radius: 100px; padding: 8px 16px; margin-bottom: 24px; }
        .live-dot { width: 8px; height: 8px; background: #4ade80; border-radius: 50%; animation: livePulse 2s ease-in-out infinite; }
        .live-text { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700; color: #4ade80; text-transform: uppercase; letter-spacing: 0.1em; }
        .live-status { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 400; color: var(--text-secondary); }
        @keyframes livePulse { 0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(74,222,128,0.4); } 50% { opacity: 0.8; box-shadow: 0 0 0 6px rgba(74,222,128,0); } }

        .proof-pills { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 40px; }
        .pill { display: flex; align-items: center; gap: 8px; background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-glass); border-radius: 100px; padding: 10px 18px; }
        .pill-dot { width: 8px; height: 8px; background: var(--gold-base); border-radius: 50%; box-shadow: 0 0 8px rgba(167,139,113,0.5); animation: pulseDot 2s ease-in-out infinite; }
        @keyframes pulseDot { 0%, 100% { box-shadow: 0 0 8px rgba(167,139,113,0.4); } 50% { box-shadow: 0 0 16px rgba(167,139,113,0.7); } }
        .pill span { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500; color: var(--text-primary); letter-spacing: 0.02em; }

        .live-pill { display: inline-flex; align-items: center; gap: 8px; background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-glass); border-radius: 100px; padding: 8px 16px; margin-bottom: 24px; }
        .live-dot { width: 8px; height: 8px; background: #4ade80; border-radius: 50%; animation: livePulse 2s ease-in-out infinite; }
        .live-text { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700; color: #4ade80; text-transform: uppercase; letter-spacing: 0.1em; }
        .live-status { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 400; color: var(--text-secondary); }
        @keyframes livePulse { 0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(74,222,128,0.4); } 50% { opacity: 0.8; box-shadow: 0 0 0 6px rgba(74,222,128,0); } }

        .proof-pills { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 40px; }
        .pill { display: flex; align-items: center; gap: 8px; background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-glass); border-radius: 100px; padding: 10px 18px; }
        .pill-dot { width: 8px; height: 8px; background: var(--gold-base); border-radius: 50%; box-shadow: 0 0 8px rgba(167,139,113,0.5); animation: pulseDot 2s ease-in-out infinite; }
        @keyframes pulseDot { 0%, 100% { box-shadow: 0 0 8px rgba(167,139,113,0.4); } 50% { box-shadow: 0 0 16px rgba(167,139,113,0.7); } }
        .pill span { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500; color: var(--text-primary); letter-spacing: 0.02em; }

        section { position: relative; z-index: 1; }
        .section-problema, .section-mecanismo, .section-bonus, .section-garantia { padding: 60px 0; background: var(--bg-primary); }
        .section-historia { padding: 60px 0; background: #0c0c0c; }
        .section-entregaveis { padding: 60px 0; background: #0c0c0c; }
        .section-faq { padding: 60px 0; background: var(--bg-primary); }

        .cards-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .cards-grid { grid-template-columns: 1fr 1fr; } }

        .quote-block { background: var(--bg-glass); backdrop-filter: blur(10px); border-left: 3px solid var(--gold-base); border-radius: 0 24px 24px 0; padding: 32px 36px; margin-bottom: 40px; }
        .quote-block p { font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 300; line-height: 1.8; color: var(--text-secondary); }
        .quote-block em { font-style: italic; color: var(--text-primary); }

        .stat-number { font-family: 'Playfair Display', serif; font-style: italic; font-size: 28px; font-weight: 700; color: var(--gold-base); }
        .stat-desc { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 400; color: var(--text-secondary); margin-top: 8px; text-transform: uppercase; letter-spacing: 0.08em; }

        .section-resultados { padding: 60px 0; background: #080808; }
        .resultado-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .resultado-grid { grid-template-columns: 1fr 1fr; } }
        .resultado-card { background: rgba(255,255,255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255, 0.08); border-radius: 20px; padding: 28px; transition: all 0.3s var(--ease-out); }
        .resultado-card:hover { border-color: rgba(167,139,113,0.25); transform: translateY(-2px); }
        .resultado-stars { color: #a78b71; font-size: 16px; letter-spacing: 2px; margin-bottom: 14px; }
        .resultado-texto { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 400; font-style: italic; color: #c0c0c0; line-height: 1.7; margin-bottom: 20px; }
        .resultado-autor { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
        .resultado-avatar { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 700; color: white; flex-shrink: 0; }
        .resultado-info { display: flex; flex-direction: column; }
        .resultado-info strong { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; color: var(--text-primary); }
        .resultado-info span { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 400; color: var(--text-muted); }
        .resultado-badge { display: inline-block; width: fit-content; background: rgba(0,255,65,0.08); border: 1px solid rgba(0,255,65,0.3); border-radius: 100px; padding: 6px 14px; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; color: #4ade80; letter-spacing: 0.03em; }

        .card-mecanismo { position: relative; overflow: hidden; background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-glass); border-top: 2px solid var(--gold-base); border-radius: 32px; padding: 40px 36px; margin-bottom: 16px; transition: all 0.3s var(--ease-out); }
        .card-mecanismo:hover { border-color: var(--border-glass-hover); border-top-color: var(--gold-base); transform: translateY(-2px); }
        .card-letter { position: absolute; top: 8px; right: 24px; font-family: 'Playfair Display', serif; font-style: italic; font-size: 120px; font-weight: 700; color: rgba(167,139,113, 0.08); line-height: 1; z-index: 0; pointer-events: none; user-select: none; }
        .card-mecanismo-content { position: relative; z-index: 1; }
        .card-mecanismo h3 { font-family: 'Playfair Display', serif; font-style: italic; font-size: 22px; font-weight: 700; color: var(--text-primary); margin-bottom: 20px; }
        .card-mecanismo h3 .gold { color: var(--gold-base); }
        .card-mecanismo ul { list-style: none; }
        .card-mecanismo li { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 400; color: var(--text-secondary); line-height: 1.7; margin-bottom: 10px; padding-left: 20px; position: relative; }
        .card-mecanismo li::before { content: ""; position: absolute; left: 0; top: 10px; width: 8px; height: 1px; background: var(--gold-base); }

        .checklist { display: flex; flex-direction: column; gap: 12px; }
        .check-item { display: flex; gap: 16px; align-items: flex-start; background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-glass); border-radius: 16px; padding: 20px 24px; transition: all 0.3s var(--ease-out); }
        .check-item:hover { border-color: rgba(167,139,113,0.3); }
        .check-icon { color: var(--gold-base); font-size: 18px; font-weight: 700; flex-shrink: 0; margin-top: 2px; }
        .check-item p { font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 400; color: var(--text-primary); line-height: 1.6; }
        .check-item p strong { color: var(--gold-light); font-weight: 600; }

        .bonus-tag { display: inline-block; background: rgba(167,139,113,0.1); border: 1px solid rgba(167,139,113,0.3); border-radius: 100px; padding: 4px 14px; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 500; color: var(--gold-base); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px; }
        .bonus-value { font-family: 'Playfair Display', serif; font-style: italic; font-size: 16px; font-weight: 700; color: var(--gold-base); margin-bottom: 8px; }
        .card-bonus h3 { font-family: 'Playfair Display', serif; font-style: italic; font-size: 20px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
        .card-bonus p { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 400; color: var(--text-secondary); line-height: 1.6; }

        /* ===== BONUS V2 ===== */
        .bonus-section-title { font-family: 'Playfair Display', serif; font-style: italic; font-size: clamp(32px, 5vw, 48px); font-weight: 700; line-height: 1.1; margin-top: 8px; letter-spacing: -0.01em; }
        .bonus-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .bonus-grid { grid-template-columns: 1fr 1fr; gap: 20px; } }
        .bonus-card-v2 { background: rgba(255,255,255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255, 0.08); border-radius: 24px; padding: 32px 28px; transition: all 0.3s var(--ease-out); position: relative; overflow: hidden; }
        .bonus-card-v2:hover { border-color: rgba(167,139,113,0.25); transform: translateY(-3px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        .bonus-card-destaque { border: 1px solid rgba(167,139,113,0.3); background: linear-gradient(135deg, rgba(167,139,113,0.06) 0%, rgba(255,255,255,0.02) 100%); }
        .bonus-card-destaque:hover { border-color: rgba(167,139,113,0.5); box-shadow: 0 20px 60px rgba(167,139,113,0.15); }
        .bonus-number { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; color: var(--gold-base); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 16px; }
        .bonus-destaque-badge { display: inline-block; background: linear-gradient(135deg, rgba(232,40,30,0.15), rgba(232,40,30,0.05)); border: 1px solid rgba(232,40,30,0.3); border-radius: 100px; padding: 4px 12px; font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 700; color: #ff6b6b; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; }
        .bonus-card-title { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: var(--text-primary); line-height: 1.3; margin-bottom: 10px; }
        .bonus-card-desc { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 400; color: #888888; line-height: 1.6; margin-bottom: 20px; }
        .bonus-card-footer { display: flex; align-items: center; gap: 12px; margin-top: auto; }
        .bonus-card-price-old { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 400; color: var(--text-muted); text-decoration: line-through; }
        .bonus-card-free { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; color: #4ade80; background: rgba(74,222,128,0.08); border: 1px solid rgba(74,222,128,0.25); border-radius: 100px; padding: 4px 12px; text-transform: uppercase; letter-spacing: 0.05em; }
        .bonus-total-box { text-align: center; margin-top: 40px; padding: 32px 24px; background: rgba(255,255,255, 0.02); border: 1px solid rgba(167,139,113,0.15); border-radius: 24px; }
        .bonus-total-label { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; }
        .bonus-total-valor { font-family: 'Playfair Display', serif; font-style: italic; font-size: 42px; font-weight: 700; color: var(--text-muted); text-decoration: line-through; margin-bottom: 8px; }
        .bonus-total-incluso { font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 400; color: var(--text-secondary); }
        .bonus-total-incluso strong { color: var(--gold-base); font-weight: 700; font-size: 18px; }

        .guarantee-card { max-width: 100%; background: rgba(167,139,113, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(167,139,113, 0.3); border-radius: 32px; padding: 48px 40px; text-align: center; box-shadow: 0 0 80px rgba(167,139,113,0.08); }
        .guarantee-icon { font-size: 48px; margin-bottom: 20px; }
        .guarantee-card h3 { font-family: 'Playfair Display', serif; font-style: italic; font-size: 24px; font-weight: 700; color: var(--text-primary); margin-bottom: 12px; }
        .guarantee-card p { font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 300; color: var(--text-secondary); line-height: 1.7; }

        .accordion { display: flex; flex-direction: column; gap: 12px; }
        .accordion-item { background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-glass); border-radius: 24px; overflow: hidden; transition: all 0.3s var(--ease-out); }
        .accordion-item:hover { border-color: var(--border-glass-hover); }
        .accordion-header { display: flex; justify-content: space-between; align-items: center; padding: 24px 28px; cursor: pointer; transition: background 0.2s ease; }
        .accordion-header:hover { background: rgba(255,255,255, 0.02); }
        .accordion-header h4 { font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 500; color: var(--text-primary); padding-right: 16px; }
        .accordion-icon { color: var(--gold-base); font-size: 20px; font-weight: 300; transition: transform 0.3s var(--ease-out); flex-shrink: 0; }
        .accordion-item.open .accordion-icon { transform: rotate(45deg); }
        .accordion-body { max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.35s ease; }
        .accordion-item.open .accordion-body { max-height: 500px; }
        .accordion-body p { padding: 0 28px 24px; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 300; color: var(--text-secondary); line-height: 1.7; }

        .offer-box { background: var(--bg-glass); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-top: 4px solid var(--gold-base); border-radius: 48px; padding: 56px 40px; text-align: center; position: relative; overflow: hidden; }
        .offer-box::before { content: ""; position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 400px; height: 200px; background: radial-gradient(ellipse, rgba(167,139,113,0.15) 0%, transparent 70%); pointer-events: none; }
        .offer-box h2 { font-family: 'Playfair Display', serif; font-style: italic; font-size: 32px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; position: relative; z-index: 1; }
        .offer-subtitle { font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 300; color: var(--text-secondary); margin-bottom: 32px; position: relative; z-index: 1; }
        .offer-price-old { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 400; color: var(--text-muted); text-decoration: line-through; position: relative; z-index: 1; }
        .offer-price-current { font-family: 'Inter', sans-serif; font-size: 72px; font-weight: 800; color: var(--gold-base); margin-top: 4px; margin-bottom: 32px; position: relative; z-index: 1; letter-spacing: -0.03em; line-height: 1; text-shadow: 0 0 60px rgba(167,139,113,0.25); }
        .offer-list { max-width: 400px; margin: 0 auto 32px; text-align: left; position: relative; z-index: 1; }
        .offer-list-item { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
        .offer-list-item span:first-child { color: var(--gold-base); font-size: 16px; font-weight: 700; flex-shrink: 0; }
        .offer-list-item span:last-child { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 400; color: var(--text-primary); }
        .offer-footer-text { font-family: 'Inter', sans-serif; font-size: 12px; color: var(--text-muted); margin-top: 16px; letter-spacing: 0.05em; position: relative; z-index: 1; }

        /* ===== CALCULADORA ===== */
        .calculadora-section { margin-top: 40px; }
        .calculadora-title { font-family: 'Inter', sans-serif; font-size: clamp(24px, 3.5vw, 32px); font-weight: 700; color: var(--text-primary); text-align: center; margin-bottom: 8px; }
        .calculadora-subtitle { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 400; color: var(--text-muted); text-align: center; margin-bottom: 28px; text-transform: uppercase; letter-spacing: 0.1em; }
        .calculadora-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .calculadora-grid { grid-template-columns: 1fr 1fr; } }
        .calc-card { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; min-height: 160px; }
        .calc-label { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 500; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; }
        .calc-seletor { display: flex; align-items: center; gap: 20px; }
        .calc-btn { width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--gold-base); background: transparent; color: var(--gold-base); font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 400; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.25s var(--ease-out); user-select: none; -webkit-tap-highlight-color: transparent; }
        .calc-btn:hover { background: rgba(167,139,113,0.15); box-shadow: 0 0 20px rgba(167,139,113,0.2); }
        .calc-btn:active { transform: scale(0.92); }
        .calc-value { font-family: 'Playfair Display', serif; font-style: italic; font-size: 48px; font-weight: 700; color: var(--gold-base); min-width: 60px; text-align: center; transition: all 0.3s var(--ease-out); }
        .calc-number { font-family: 'Inter', sans-serif; font-size: 26px; font-weight: 700; color: var(--gold-base); transition: opacity 0.3s var(--ease-out); }
        .calc-number.updating { opacity: 0; transform: translateY(-6px); }

        /* ===== FOOTER ===== */
        .footer { background: var(--bg-primary); border-top: 1px solid var(--border-glass); padding: 60px 0 40px; }
        .footer-grid { display: grid; grid-template-columns: 1fr; gap: 40px; text-align: center; }
        .footer-brand { font-family: 'Playfair Display', serif; font-style: italic; font-weight: 700; font-size: 20px; color: var(--text-primary); margin-bottom: 16px; }
        .footer-brand span { color: var(--gold-base); }
        .footer-desc { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 300; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px; }
        .footer-col h5 { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 16px; }
        .footer-col a { display: block; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 400; color: var(--text-muted); text-decoration: none; margin-bottom: 10px; transition: color 0.2s ease; }
        .footer-col a:hover { color: var(--gold-base); }
        .footer-newsletter { position: relative; }
        .footer-newsletter input { width: 100%; background: var(--bg-glass); border: 1px solid var(--border-glass); border-radius: 100px; padding: 12px 48px 12px 20px; font-family: 'Inter', sans-serif; font-size: 13px; color: var(--text-primary); outline: none; }
        .footer-newsletter input::placeholder { color: var(--text-muted); }
        .footer-newsletter button { position: absolute; right: 4px; top: 50%; transform: translateY(-50%); width: 36px; height: 36px; background: var(--gold-base); border: none; border-radius: 50%; color: #0a0a0a; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s ease; }
        .footer-newsletter button:hover { background: var(--gold-hover); }
        .footer-bottom { margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--border-glass); text-align: center; }
        .footer-bottom p { font-family: 'Inter', sans-serif; font-size: 12px; color: var(--text-muted); }
        .footer-disclaimer { font-size: 11px; color: #444; margin-top: 12px; max-width: 560px; margin-left: auto; margin-right: auto; line-height: 1.5; }

        /* ===== MOBILE WORKFLOW ===== */
        .workflow-vertical { display: none; }
        @media (max-width: 639px) {
          .satellite-wrapper { display: none !important; }
          .workflow-vertical { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 300px; margin: 0 auto; gap: 0; }
          .wf-card { width: 100%; background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-glass); border-radius: 20px; overflow: hidden; }
          .wf-card img { width: 100%; height: auto; max-height: 200px; object-fit: contain; background: rgba(0,0,0,0.3); display: block; }
          .wf-caption { padding: 12px; text-align: center; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500; color: var(--text-secondary); letter-spacing: 0.05em; text-transform: uppercase; }
          .wf-connector { display: flex; flex-direction: column; align-items: center; padding: 4px 0; }
          .wf-line { width: 1px; height: 20px; background: linear-gradient(to bottom, rgba(167,139,113,0.2), rgba(167,139,113,0.6)); }
          .wf-node { width: 10px; height: 10px; border-radius: 50%; background: var(--gold-base); box-shadow: 0 0 10px rgba(167,139,113,0.5); animation: pulseDot 2s ease-in-out infinite; }
        }

        /* ===== SATELLITE DESKTOP ===== */
        .satellite-wrapper { position: relative; width: 100%; height: 480px; margin-bottom: 20px; }
        .satellite-card { position: absolute; width: 220px; background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-glass); border-radius: 20px; overflow: hidden; transition: all 0.7s var(--ease-out); }
        .satellite-card:hover { transform: scale(1.05); box-shadow: 0 0 60px rgba(167,139,113,0.3); border-color: rgba(167,139,113,0.3); }
        .satellite-card img { width: 100%; height: 140px; object-fit: cover; filter: grayscale(100%); transition: filter 0.7s var(--ease-out); }
        .satellite-card:hover img { filter: grayscale(0%); }
        .satellite-card-caption { padding: 12px 16px; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500; color: var(--text-secondary); letter-spacing: 0.05em; }
        .satellite-left { top: 10px; left: 0; }
        .satellite-right { top: 10px; right: 0; }
        .satellite-bottom { bottom: 20px; left: 50%; transform: translateX(-50%); }
        .satellite-bottom:hover { transform: translateX(-50%) scale(1.05); }
        .neural-svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
        .node-line { fill: none; stroke-linecap: round; }
        .node-line-primary { stroke: url(#goldGradient); stroke-width: 2; animation: pulseLine 3s ease-in-out infinite; }
        .node-line-secondary { stroke: url(#goldGradient2); stroke-width: 2; stroke-dasharray: 5 15; animation: flowLine 8s linear infinite; opacity: 0.5; }
        @keyframes pulseLine { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; } }
        @keyframes flowLine { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -40; } }
        @media (max-width: 639px) {
          .satellite-left { top: 0; left: 50%; transform: translateX(-50%); }
          .satellite-left:hover { transform: translateX(-50%) scale(1.05); }
          .satellite-right { top: 170px; right: auto; left: 50%; transform: translateX(-50%); }
          .satellite-right:hover { transform: translateX(-50%) scale(1.05); }
          .satellite-bottom { bottom: 0; top: 340px; left: 50%; transform: translateX(-50%); }
          .satellite-bottom:hover { transform: translateX(-50%) scale(1.05); }
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .pill-dot, .live-dot, .wf-node { animation: none; }
        }
      `}</style>

      {/* ===== SVG DEFINITIONS ===== */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#c9b8a0', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#a78b71', stopOpacity: 0.1 }} />
          </linearGradient>
          <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#a78b71', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#c9b8a0', stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
      </svg>


      {/* ===== TOPBAR ===== */}
      <nav className="topbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <a href="#" className="topbar-logo" style={{ border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: '8px', padding: '6px 14px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(4px)', display: 'inline-block' }}>Método <span>CAC</span></a>
          <a
            href="#metodo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#000000',
              color: '#ffffff',
              border: '1px solid #906F26',
              borderRadius: '100px',
              padding: '10px 20px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Conhecer o Método
          </a>
        </div>
      </nav>

      {/* ===== HERO TEXTO ===== */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="up" delay={0}>
            <div style={{ maxWidth: 460, margin: '-10px auto 12px' }}>
              <picture>
                <source
                  srcSet="assets/proof-image-480.webp 480w, assets/proof-image.webp 800w"
                  sizes="(max-width: 639px) 480px, 460px"
                  type="image/webp"
                />
                <img
                  src="assets/proof-image.png"
                  alt="Prova social - Método CAC"
                  loading="lazy"
                  width="460"
                  height="240"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 240,
                    borderRadius: 16,
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </picture>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={150}>
            <h1 style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto', marginBottom: 12, fontSize: 'clamp(1.5rem, 4vw, 2.4rem)' }}>
              E se você não precisasse aparecer, nem gastar, nem ter seguidores pra <span className="gold">vender no TikTok Shop</span> todo dia?
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={300}>
            <p className="hero-subtitle" style={{ maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, fontSize: 14 }}>
              Não é hipótese. É o que acontece quando você usa IA do jeito certo, com produto de demanda comprovada e um processo de 3 etapas que qualquer pessoa consegue replicar. Isso é o Método CAC.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={450}>
            <div className="hero-ctas" style={{ justifyContent: 'center', marginBottom: 4 }}>
              <ShinyButton variant="gold" onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}>QUERO ACESSO AO MÉTODO CAC</ShinyButton>
            </div>
            <p className="hero-cta-text" style={{ marginTop: 8, marginBottom: 0 }}>🔒 Acesso imediato · Garantia de 30 dias · Sem risco</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== HERO VISUAL ===== */}
      <section className="hero" id="hero-visual" style={{ minHeight: 'auto', paddingTop: 20, paddingBottom: 40 }}>
        <div className="hero-glow" />
        <div className="hero-node-container" style={{ position: 'relative', width: '100%', maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
          <ScrollReveal direction="right" delay={300} duration={800}>
            <div className="satellite-wrapper">
              <svg className="neural-svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid meet">
                <path className="node-line node-line-primary" d="M 220 160 Q 450 80 450 210" />
                <path className="node-line node-line-secondary" d="M 220 160 Q 450 80 450 210" />
                <path className="node-line node-line-primary" d="M 680 160 Q 450 80 450 210" />
                <path className="node-line node-line-secondary" d="M 680 160 Q 450 80 450 210" />
                <path className="node-line node-line-primary" d="M 450 380 Q 450 300 450 210" />
                <path className="node-line node-line-secondary" d="M 450 380 Q 450 300 450 210" />
              </svg>
              <div className="satellite-card satellite-left glass glass-hover">
                <picture>
                  <source srcSet="assets/tiktok-shop-page-480.webp 480w, assets/tiktok-shop-page.webp 637w" sizes="(max-width: 639px) 300px, 220px" type="image/webp" />
                  <img src="assets/tiktok-shop-page.png" alt="TikTok Shop" loading="lazy" width="220" height="140" style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} />
                </picture>
                <div className="satellite-card-caption">TikTok Shop</div>
              </div>
              <div className="satellite-card satellite-right glass glass-hover">
                <picture>
                  <source srcSet="assets/satellite-2-480.webp 480w, assets/satellite-2.webp 800w" sizes="(max-width: 639px) 300px, 220px" type="image/webp" />
                  <img src="assets/satellite-2.jpg" alt="IA Generativa" loading="lazy" width="220" height="140" style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} />
                </picture>
                <div className="satellite-card-caption">IA Generativa</div>
              </div>
              <div className="satellite-card satellite-bottom glass glass-hover" style={{ width: 180 }}>
                <picture>
                  <source srcSet="assets/tiktok-shop-ganhos-480.webp 480w, assets/tiktok-shop-ganhos.webp 546w" sizes="(max-width: 639px) 300px, 180px" type="image/webp" />
                  <img src="assets/tiktok-shop-ganhos.png" alt="Comissões" loading="lazy" width="180" height="140" style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} />
                </picture>
                <div className="satellite-card-caption">Comissões</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile workflow */}
          <ScrollReveal direction="right" delay={300} duration={800}>
            <div className="workflow-vertical">
              <div className="wf-card">
                <picture>
                  <source srcSet="assets/tiktok-shop-page-480.webp 480w, assets/tiktok-shop-page.webp 637w" sizes="300px" type="image/webp" />
                  <img src="assets/tiktok-shop-page.png" alt="TikTok Shop" loading="lazy" width="300" height="200" style={{ width: '100%', height: 'auto', maxHeight: 200, objectFit: 'contain', display: 'block' }} />
                </picture>
                <div className="wf-caption">TikTok Shop</div>
              </div>
              <div className="wf-connector"><div className="wf-line" /><div className="wf-node" /><div className="wf-line" /></div>
              <div className="wf-card">
                <picture>
                  <source srcSet="assets/satellite-2-480.webp 480w, assets/satellite-2.webp 800w" sizes="300px" type="image/webp" />
                  <img src="assets/satellite-2.jpg" alt="IA Generativa" loading="lazy" width="300" height="200" style={{ width: '100%', height: 'auto', maxHeight: 200, objectFit: 'contain', display: 'block' }} />
                </picture>
                <div className="wf-caption">IA Generativa</div>
              </div>
              <div className="wf-connector"><div className="wf-line" /><div className="wf-node" /><div className="wf-line" /></div>
              <div className="wf-card">
                <picture>
                  <source srcSet="assets/tiktok-shop-ganhos-480.webp 480w, assets/tiktok-shop-ganhos.webp 546w" sizes="300px" type="image/webp" />
                  <img src="assets/tiktok-shop-ganhos.png" alt="Comissões" loading="lazy" width="300" height="200" style={{ width: '100%', height: 'auto', maxHeight: 200, objectFit: 'contain', display: 'block' }} />
                </picture>
                <div className="wf-caption">Comissões</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROBLEMA ===== */}
      <section className="section-problema" id="problema">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <span className="tag">O Problema</span>
            <h2 className="section-title">Por que a maioria <span className="gold">nunca faz</span> uma venda no TikTok Shop?</h2>
          </ScrollReveal>
          <div className="cards-grid">
            {problemaCards.map((card, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 150}>
                <div className="glass glass-hover" style={{ padding: 28 }}>
                  <div style={{ fontSize: 20, color: 'var(--gold-base)', fontWeight: 700, marginBottom: 12 }}>✕</div>
                  <p style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.6 }}>{card.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HISTORIA ===== */}
      <section className="section-historia">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <span className="tag">A Virada</span>
            <h2 className="section-title">Como eu saí do zero pra <span className="gold">R$5k+/mês</span> como afiliado</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150}>
            <div className="quote-block">
              <p>Eu comecei sem saber nada sobre TikTok Shop. Sem seguidores, sem dinheiro pra investir em câmera, sem querer aparecer.<br /><br />Parei de tentar criar e comecei a estudar o que já tinha demanda real. Encontrei os produtos certos, deixei a IA estruturar o conteúdo e postei.<br /><br /><em>Primeira semana: primeiras vendas. Primeiro mês: R$1.200 de comissão. Hoje: contas rodando com mais de R$5k/mês, sem aparecer uma vez.</em><br /><br />Não foi sorte. Foi método.</p>
            </div>
          </ScrollReveal>
          <Calculadora />
        </div>
      </section>

      {/* ===== RESULTADOS ===== */}
      <section className="section-resultados" id="resultados">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <span className="tag">Resultados Reais</span>
            <h2 className="section-title">Quem <span className="gold">aplicou</span> o método</h2>
          </ScrollReveal>
          <div className="cards-grid resultado-grid">
            <ScrollReveal direction="up" delay={0}>
              <div className="resultado-card">
                <div className="resultado-stars">★★★★★</div>
                <p className="resultado-texto">"Nunca tinha vendido nada online. Na primeira semana já tive minha primeira comissão. O método do Wesley é diferente de tudo que já vi — é simples e funciona."</p>
                <div className="resultado-autor">
                  <div className="resultado-avatar" style={{ background: 'linear-gradient(135deg, #a78b71, #c9b8a0)' }}>M</div>
                  <div className="resultado-info">
                    <strong>Mariana S.</strong>
                    <span>Fortaleza, CE</span>
                  </div>
                </div>
                <div className="resultado-badge">✓ 1ª venda em 7 dias</div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <div className="resultado-card">
                <div className="resultado-stars">★★★★★</div>
                <p className="resultado-texto">"Estava desistindo do TikTok Shop. Depois do CAC entendi o que estava errando. Em 3 semanas já estava fazendo R$800 de comissão sem aparecer nos vídeos."</p>
                <div className="resultado-autor">
                  <div className="resultado-avatar" style={{ background: 'linear-gradient(135deg, #906F26, #c9b8a0)' }}>R</div>
                  <div className="resultado-info">
                    <strong>Rodrigo P.</strong>
                    <span>São Paulo, SP</span>
                  </div>
                </div>
                <div className="resultado-badge">✓ R$800 em 3 semanas</div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300}>
              <div className="resultado-card">
                <div className="resultado-stars">★★★★★</div>
                <p className="resultado-texto">"A parte de caçar produto mudou tudo pra mim. Eu ficava escolhendo produto errado por meses. Agora sei exatamente o que procurar antes de criar qualquer vídeo."</p>
                <div className="resultado-autor">
                  <div className="resultado-avatar" style={{ background: 'linear-gradient(135deg, #906F26, #a78b71)' }}>A</div>
                  <div className="resultado-info">
                    <strong>Alessandra T.</strong>
                    <span>Recife, PE</span>
                  </div>
                </div>
                <div className="resultado-badge">✓ Método C aplicado</div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={450}>
              <div className="resultado-card">
                <div className="resultado-stars">★★★★★</div>
                <p className="resultado-texto">"Trabalho 1h por dia, não apareço em nenhum vídeo e já bato R$1500 por mês de comissão. Parecia impossível antes do CAC. Agora é minha rotina normal."</p>
                <div className="resultado-autor">
                  <div className="resultado-avatar" style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)' }}>F</div>
                  <div className="resultado-info">
                    <strong>Felipe M.</strong>
                    <span>Belém, PA</span>
                  </div>
                </div>
                <div className="resultado-badge">✓ R$1.500/mês sem aparecer</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== MECANISMO ===== */}
      <section className="section-mecanismo" id="metodo">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <span className="tag">O Método</span>
            <h2 className="section-title">Método <span className="gold">CAC</span>. Caçar, Aplicar, Coletar</h2>
          </ScrollReveal>
          {mecanismoCards.map((card, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 150}>
              <div className="card-mecanismo">
                <span className="card-letter">{card.letter}</span>
                <div className="card-mecanismo-content">
                  <h3><span className="gold">{card.title}</span>. {card.subtitle}</h3>
                  <ul>
                    {card.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== ENTREGAVEIS ===== */}
      <section className="section-entregaveis">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <span className="tag">O Que Você Recebe</span>
            <h2 className="section-title">Tudo que está <span className="gold">dentro</span> do Método CAC</h2>
          </ScrollReveal>
          <div className="checklist">
            {entregaveis.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 150}>
                <div className="check-item">
                  <span className="check-icon">✓</span>
                  <p><strong>{item.strong}</strong> {item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BONUS ===== */}
      <section className="section-bonus" id="bonus">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span className="tag">INCLUÍDO NA COMPRA</span>
              <h2 className="bonus-section-title">
                <span style={{ color: '#ffffff' }}>BÔNUS </span>
                <span style={{ color: '#a78b71' }}>EXCLUSIVOS</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="bonus-grid">
            <ScrollReveal direction="up" delay={0}>
              <div className="bonus-card-v2">
                <div className="bonus-number">BÔNUS 01</div>
                <h3 className="bonus-card-title">🎯 50 Hooks prontos que param o scroll</h3>
                <p className="bonus-card-desc">Organizados por tipo de gatilho: curiosidade, urgência, prova social e comparação. Copia, adapta e posta.</p>
                <div className="bonus-card-footer">
                  <span className="bonus-card-price-old">R$47</span>
                  <span className="bonus-card-free">Incluso grátis</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div className="bonus-card-v2">
                <div className="bonus-number">BÔNUS 02</div>
                <h3 className="bonus-card-title">🚀 Método: 2k seguidores em 7 dias</h3>
                <p className="bonus-card-desc">Como bater 2 mil seguidores em 7 dias ou menos no TikTok, mesmo partindo do zero e sem aparência.</p>
                <div className="bonus-card-footer">
                  <span className="bonus-card-price-old">R$47</span>
                  <span className="bonus-card-free">Incluso grátis</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="bonus-card-v2">
                <div className="bonus-number">BÔNUS 03</div>
                <h3 className="bonus-card-title">🤖 Prompts de IA prontas</h3>
                <p className="bonus-card-desc">As instruções exatas que eu uso toda semana pra produzir conteúdo que converte. Com guia de uso e variações por nicho.</p>
                <div className="bonus-card-footer">
                  <span className="bonus-card-price-old">R$37</span>
                  <span className="bonus-card-free">Incluso grátis</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="bonus-card-v2 bonus-card-destaque">
                <div className="bonus-number">BÔNUS 04</div>
                <div className="bonus-destaque-badge">🔥 EXCLUSIVO</div>
                <h3 className="bonus-card-title">⚡ Meus GPTs Exclusivos</h3>
                <p className="bonus-card-desc">GPT que cria roteiros de vídeo, GPT que modela vídeos que convertem, GPT que cria prompts de cenas. Tudo pronto pra usar.</p>
                <div className="bonus-card-footer">
                  <span className="bonus-card-price-old">R$67</span>
                  <span className="bonus-card-free">Incluso grátis</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={400}>
            <div className="bonus-total-box">
              <p className="bonus-total-label">Valor total dos bônus:</p>
              <p className="bonus-total-valor">R$198</p>
              <p className="bonus-total-incluso">Incluso no seu acesso por apenas <strong>R$37</strong></p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== OFERTA + GARANTIA ===== */}
      <section className="section-garantia" id="oferta">
        <div className="container">
          <ScrollReveal direction="up" delay={0} duration={800}>
            <div className="offer-box">
              <h2>Método CAC. Acesso Completo</h2>
              <p className="offer-subtitle">Tudo que você precisa pra estruturar sua operação no TikTok Shop com IA</p>
              <div className="offer-price-old">De R$197</div>
              <div className="offer-price-current">R$37</div>
              <div className="offer-list">
                <div className="offer-list-item"><span>✓</span><span>Módulo 1 | Caçar</span></div>
                <div className="offer-list-item"><span>✓</span><span>Módulo 2 | Aplicar</span></div>
                <div className="offer-list-item"><span>✓</span><span>Módulo 3 | Coletar</span></div>
                <div className="offer-list-item"><span>✓</span><span>Bônus: 50 Hooks prontos</span></div>
                <div className="offer-list-item"><span>✓</span><span>Bônus: Método 2k seguidores em 7 dias</span></div>
                <div className="offer-list-item"><span>✓</span><span>Bônus: Prompts de IA prontas</span></div>
                <div className="offer-list-item"><span>✓</span><span>Bônus: Meus GPTs Exclusivos</span></div>
                <div className="offer-list-item"><span>✓</span><span>Garantia de 30 dias</span></div>
              </div>
              <a href="https://pay.cakto.com.br/3xkxikk_862447" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none' }}>
                <ShinyButton variant="green">Quero o Método CAC por R$37 →</ShinyButton>
              </a>
              <p className="offer-footer-text">Pagamento seguro | Acesso imediato | Garantia de 30 dias</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={350} duration={800}>
            <div className="guarantee-card" style={{ marginTop: 40 }}>
              <div className="guarantee-icon">🛡</div>
              <h3>30 dias de garantia total. Sem burocracia</h3>
              <p>Se você aplicar e não quiser continuar por qualquer motivo nos primeiros 30 dias, devolvo 100% do seu dinheiro. Sem perguntas, sem processo. O risco é todo meu.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section-faq" id="faq">
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <span className="tag">Dúvidas</span>
            <h2 className="section-title">Perguntas <span className="gold">frequentes</span></h2>
          </ScrollReveal>
          <div className="accordion">
            {faq.map((item, i) => (
              <AccordionItem key={i} question={item.q} answer={item.a} index={i} />
            ))}
          </div>

          <ScrollReveal direction="up" delay={200}>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <ShinyButton variant="gold" onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}>QUERO ACESSO AO MÉTODO CAC</ShinyButton>
              <p className="hero-cta-text" style={{ marginTop: 12 }}>🔒 Acesso imediato · Garantia de 30 dias · Sem risco</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
            <ScrollReveal direction="up" delay={0}>
              <div>
                <div className="footer-brand">Método <span>CAC</span></div>
                <p className="footer-desc">TikTok Shop com IA. Método desenvolvido por Wesley Oliveira. Afiliado MEI e operador real.</p>
              </div>
            </ScrollReveal>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Método CAC | TikTok Shop com IA</p>
            <p className="footer-disclaimer">Os resultados apresentados são pessoais e não garantem os mesmos resultados para todos. Resultados dependem de dedicação e aplicação.</p>
          </div>
        </div>
      </footer>


      {/* ===== PROGRESSIVE BLUR ===== */}
      <ProgressiveBlur />
    </>
  )
}

export default App
