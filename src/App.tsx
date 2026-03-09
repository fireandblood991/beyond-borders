import React from "react";
import { motion } from "motion/react";
import { MapPin, Calendar, Palette, Mic2, Users, MessageSquare, ArrowDown } from "lucide-react";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="font-display text-5xl md:text-7xl text-brand-purple uppercase leading-none mb-2"
    >
      {children}
    </motion.h2>
    {subtitle && <p className="font-heading text-brand-cream/60 uppercase tracking-widest text-sm">{subtitle}</p>}
    <div className="h-px w-full bg-brand-cream/20 mt-6" />
  </div>
);

const ContentBlock = ({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 block-border bg-white/5 hover:bg-white/10 transition-colors group"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-brand-purple text-brand-cream rounded-sm group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="font-heading font-bold text-2xl uppercase tracking-tight">{title}</h3>
    </div>
    <div className="text-brand-cream/80 leading-relaxed space-y-4">
      {children}
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="gritty-bg min-h-screen overflow-x-hidden">
      {/* PAGE 1: HERO & MISSION */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-brand-purple blur-[120px] rounded-full opacity-40" />
        </div>

        <div className="relative z-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-brand-red" />
              <span className="text-brand-red font-heading font-bold tracking-widest uppercase text-sm">Artistic Revolution</span>
            </div>
            
            <h1 className="font-display text-[12vw] md:text-[10vw] leading-[0.85] text-brand-cream uppercase mb-8">
              Beyond<br />
              <span className="text-brand-purple">Borders</span>
            </h1>

            <p className="font-heading text-2xl md:text-4xl max-w-2xl text-brand-cream/90 mb-12 leading-tight">
              Where creativity breaks walls and builds bridges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="flex items-center gap-4">
                <Calendar className="text-brand-purple" size={32} />
                <div>
                  <p className="font-heading font-bold text-xl uppercase">16 • 17 • 18 Marzo</p>
                  <p className="text-brand-cream/50 text-sm uppercase tracking-wider">Festival 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-brand-purple" size={32} />
                <div>
                  <p className="font-heading font-bold text-xl uppercase">Colonial Garden</p>
                  <p className="text-brand-cream/50 text-sm uppercase tracking-wider">Main Venue</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-cream/30"
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* MISSION BLOCK */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="The Core Objective">Cosa si prefigge il progetto</SectionTitle>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-xl text-brand-cream/80 font-light leading-relaxed">
              <p>
                Beyond Borders non è solo un festival, è un atto di resistenza creativa. In un mondo sempre più frammentato da confini fisici e ideologici, l'arte diventa l'unico linguaggio universale capace di scavalcare le barriere.
              </p>
              <p>
                Il nostro obiettivo è trasformare lo spazio pubblico in un forum di discussione politica attraverso la bellezza e la provocazione. Vogliamo che ogni installazione, ogni performance e ogni nota musicale sia un mattone rimosso dai muri che ci dividono.
              </p>
              <div className="pt-6">
                <button className="bg-brand-purple text-brand-cream px-8 py-4 font-heading font-bold uppercase tracking-widest hover:bg-brand-red transition-colors">
                  Leggi il Manifesto
                </button>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 border-2 border-brand-purple/30 translate-x-4 translate-y-4" />
              <img 
                src="https://picsum.photos/seed/political-art/800/800" 
                alt="Political Art" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 bg-brand-purple p-6 -translate-x-4 translate-y-4">
                <p className="font-display text-4xl uppercase">Art is Power</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 2: THE SPACES */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Festival Layout">Gli Spazi del Festival</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContentBlock title="Exhibition Hall" icon={Palette}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="list-disc list-inside text-brand-purple font-heading font-bold text-sm uppercase tracking-tighter">
                <li>Installazioni Immersive</li>
                <li>Galleria d'Arte Contemporanea</li>
                <li>Digital Art Showcase</li>
              </ul>
            </ContentBlock>

            <ContentBlock title="Live Stage" icon={Mic2}>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className="list-disc list-inside text-brand-purple font-heading font-bold text-sm uppercase tracking-tighter">
                <li>Concerti Internazionali</li>
                <li>Performance di Spoken Word</li>
                <li>Teatro Sperimentale</li>
              </ul>
            </ContentBlock>

            <ContentBlock title="Workshop Area" icon={Users}>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <ul className="list-disc list-inside text-brand-purple font-heading font-bold text-sm uppercase tracking-tighter">
                <li>Laboratori di Serigrafia</li>
                <li>Masterclass di Street Art</li>
                <li>Creative Coding</li>
              </ul>
            </ContentBlock>

            <ContentBlock title="Political Forum" icon={MessageSquare}>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
              <ul className="list-disc list-inside text-brand-purple font-heading font-bold text-sm uppercase tracking-tighter">
                <li>Dibattiti Aperti</li>
                <li>Incontri con Attivisti</li>
                <li>Proiezioni di Documentari</li>
              </ul>
            </ContentBlock>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-brand-cream/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display text-3xl uppercase">
            Beyond <span className="text-brand-purple">Borders</span>
          </div>
          
          <div className="flex gap-6 text-brand-purple font-heading font-bold uppercase text-sm tracking-widest">
            <span>#BeyondBorders</span>
            <span>#ArtUnites</span>
            <span>#CreativeResistance</span>
          </div>

          <div className="text-brand-cream/40 text-xs uppercase tracking-widest">
            © 2026 Artistic Revolution Committee
          </div>
        </div>
      </footer>
    </div>
  );
}
