import { useEffect, useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Briefcase, 
  Newspaper, 
  ChevronRight,
  CheckCircle2,
  Menu,
  X,
  Loader2,
  Globe,
  Bell,
  Star,
  Users
} from 'lucide-react';

export default function App() {
  const [device, setDevice] = useState<'android' | 'ios' | 'other'>('other');
  const [activeTab, setActiveTab] = useState<'cambio' | 'vagas' | 'noticias'>('cambio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'starting' | 'completed'>('idle');

  const handleDownload = (e: MouseEvent, url: string) => {
    setDownloadStatus('starting');
    setTimeout(() => {
      setDownloadStatus('completed');
      setTimeout(() => setDownloadStatus('idle'), 3000);
    }, 2000);
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android')) {
      setDevice('android');
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
      setDevice('ios');
    }
  }, []);

  const exchangeRates = [
    { currency: "EUR", symbol: "€", oficial: "1.115 Kz", rua: "1.500 Kz", trend: "up" },
    { currency: "USD", symbol: "$", oficial: "938 Kz", rua: "1.250 Kz", trend: "stable" }
  ];

  const jobs = [
    { title: "Program Analyst", company: "UNDP", location: "Luanda", type: "Full-time" },
    { title: "Estágio Design Gráfico", company: "WEDO BRAND", location: "Remoto", type: "Estágio" },
    { title: "Trade Finance Consultant", company: "Standard Bank", location: "Luanda", type: "Sénior" }
  ];

  const news = [
    { title: "PGR nomeia novos subprocuradores para reforçar justiça", time: "Há 2h", category: "POLÍTICA" },
    { title: "Novas regras para emissão de BI entram em vigor", time: "Há 4h", category: "NACIONAL" },
    { title: "Angola reforça parcerias económicas no fórum de negócios", time: "Há 6h", category: "ECONOMIA" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-black text-orange-500 tracking-[0.2em] uppercase mb-0.5">Su-Golden</span>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tighter text-slate-900">ANGO</span>
                <span className="text-xl font-black tracking-tighter text-orange-500">LIFE</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
            <a href="#features" className="hover:text-orange-500 transition-colors">Funcionalidades</a>
            <a href="#cambio" className="hover:text-orange-500 transition-colors">Câmbio</a>
            <a href="#vagas" className="hover:text-orange-500 transition-colors">Vagas</a>
            <a href="/angolife.apk" download className="px-5 py-2.5 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all flex items-center gap-2">
               Baixar APK
            </a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6 text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
                <a href="#features" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-500 transition-colors">Funcionalidades</a>
                <a href="#cambio" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-500 transition-colors">Câmbio</a>
                <a href="#vagas" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-500 transition-colors">Vagas</a>
                <a href="/angolife.apk" download onClick={() => setIsMenuOpen(false)} className="py-4 bg-orange-500 text-white rounded-2xl font-black text-center shadow-lg shadow-orange-500/20">
                  Baixar APK Agora
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="features" className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[11px] font-black uppercase tracking-widest mb-8"
          >
            <Users size={14} />
            AO VIVO • 247 pessoas online agora
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-black leading-[1.05] mb-8 tracking-tight max-w-4xl">
            Lidere a economia nacional com <span className="text-orange-500">inteligência de mercado</span> em Angola.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl font-medium leading-relaxed">
            Liderança, transparência e oportunidades exclusivas. A sua fonte definitiva para economia, negócios e empregos de alto padrão.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <a 
              href="/angolife.apk" 
              download="angolife.apk"
              onClick={(e) => handleDownload(e, "/angolife.apk")}
              className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-orange-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all"
            >
              {downloadStatus === 'starting' ? <Loader2 className="animate-spin" /> : <Download size={20} />}
              {downloadStatus === 'starting' ? 'Preparando...' : downloadStatus === 'completed' ? 'Baixado' : 'Baixar App Oficial'}
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <ShieldCheck size={16} className="text-green-500" />
            Verificado pelo Play Protect • Livre de ameaças
          </div>
        </div>
      </section>

      {/* Live Data Section */}
      <section id="cambio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Câmbio Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-black tracking-tight">Câmbio ao Minuto</h2>
                  <p className="text-slate-500 text-sm font-medium">Taxas oficiais e mercado informal</p>
                </div>
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-orange-500" size={20} />
                </div>
              </div>

              <div className="space-y-4">
                {exchangeRates.map((rate, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-between group hover:border-orange-200 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl font-black shadow-sm">
                        {rate.symbol}
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-400 uppercase tracking-widest">{rate.currency}/AOA</div>
                        <div className="text-2xl font-black text-slate-900">{rate.rua}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Oficial</div>
                      <div className="text-sm font-black text-slate-600">{rate.oficial}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Persuasion */}
            <div className="pt-8">
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter">
                Fica a par do mercado <span className="text-orange-500">antes de toda a gente.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                O AngoLife conecta você às melhores ofertas de marcas e lojas em Angola. Tenha acesso a descontos exclusivos e acompanhe a taxa de câmbio em tempo real para comprar ou vender divisas com segurança.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: <Briefcase size={18} />, text: "Conectando talentos às maiores empresas de Angola." },
                  { icon: <Star size={18} />, text: "Ofertas e promoções exclusivas por tempo limitado." },
                  { icon: <Globe size={18} />, text: "Informação económica de alto padrão e transparência." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                    <div className="text-orange-500">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Jobs & News Grid */}
      <section id="vagas" className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Jobs List */}
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-black uppercase tracking-widest">Vagas de Elite</h3>
                <a href="#download" className="text-orange-500 text-xs font-black uppercase tracking-widest">Ver Todas</a>
              </div>
              {jobs.map((job, i) => (
                <a key={i} href="#download" className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex justify-between items-center group cursor-pointer hover:border-orange-500 transition-all">
                  <div>
                    <h4 className="font-black text-lg group-hover:text-orange-500 transition-colors uppercase tracking-tight">{job.title}</h4>
                    <p className="text-slate-500 font-bold text-sm">{job.company} • {job.location}</p>
                  </div>
                  <ChevronRight className="text-slate-300 group-hover:text-orange-500 transition-colors" />
                </a>
              ))}
            </div>

            {/* News List */}
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-black uppercase tracking-widest">Notícias Secretas</h3>
                <Bell size={20} className="text-orange-500" />
              </div>
              {news.map((n, i) => (
                <a key={i} href="#download" className="block bg-white p-6 rounded-3xl shadow-sm border border-slate-200 group cursor-pointer hover:border-orange-500 transition-all">
                  <div className="text-[10px] font-black text-orange-500 tracking-[0.2em] mb-2">{n.category}</div>
                  <h4 className="font-bold text-slate-800 text-base mb-3 leading-snug">{n.title}</h4>
                  <div className="text-xs text-slate-400 font-bold">{n.time}</div>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20" />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
            Tenha tudo isso no <span className="text-orange-500">seu bolso.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 font-medium">
            Junte-se a milhares de angolanos que utilizam o AngoLife para liderar o mercado. Baixe agora a versão oficial estável.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a 
              href="/angolife.apk" 
              download="angolife.apk"
              className="px-12 py-6 bg-orange-500 text-white rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              Baixar APK Agora
            </a>
            <div className="flex items-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
              <span>Versão 1.0</span>
              <span className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
              <span>1.0 MB</span>
              <span className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
              <span>Android 7.0+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black tracking-tighter text-slate-900">ANGO</span>
            <span className="text-lg font-black tracking-tighter text-orange-500">LIFE</span>
          </div>
          
          <div className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
            © 2026 AngoLife Su-Golden. Todos os direitos reservados.
          </div>

          <div className="flex gap-8 text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-orange-500 transition-colors">Privacidade</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-orange-500 transition-colors">Termos</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-orange-500 transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
