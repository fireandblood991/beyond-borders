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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-purple"
        >
          <ArrowDown size={40} strokeWidth={2.5} />
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
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 border-2 border-brand-purple/30 translate-x-4 translate-y-4" />
              <img 
                src="https://i.pinimg.com/736x/cb/84/58/cb8458c46b1c00985d38952d85ec160c.jpg" 
                alt="STOP START Sign" 
                className="w-full h-full object-cover grayscale contrast-125"
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

      {/* ARTISTS & ORGANIZERS SECTION */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-brand-cream/10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Creators & Architects">Artisti e Organizzatori</SectionTitle>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Dahlia LeBlanc-Wright", role: "MUSICIAN & PRESENTER", image: "https://i.postimg.cc/gkhRWt97/b53979d23283dc39481b90331bc5dc14.jpg" },
              { name: "Riley Campbell", role: "BALLET DANCER", image: "https://i.pinimg.com/736x/a8/0a/a9/a80aa92a6ff0f9983512509d2171b3c8.jpg" },
              { name: "Neil Flanagan", role: "ACTOR & PERFORMER", image: "https://i.pinimg.com/1200x/4a/09/78/4a0978995979110a3143040022eb36b3.jpg" },
              { name: "Bodhi Norwood", role: "MUSICIAN", image: "https://i.pinimg.com/1200x/4d/83/d0/4d83d0cafb1253701298b0f1f323855b.jpg" },
              { name: "Sloane Dunne", role: "ACTRESS & PERFORMER", image: "https://i.pinimg.com/736x/0a/d7/2f/0ad72f966d003701dd207193cd404abe.jpg" },
              { name: "Diego Delgado", role: "JOURNALIST & MODERATOR", image: "https://i.pinimg.com/736x/ae/67/b5/ae67b5f19382831eb036d17261233b2a.jpg" },
              { name: "Deion Kendrick", role: "ORGANIZER & MODERATOR", image: "https://i.pinimg.com/736x/dc/b4/03/dcb403e16a0d7abee6846d6904e50565.jpg" }
            ].map((student, index) => (
              <motion.div 
                key={student.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square mb-4 overflow-hidden">
                  <div className="absolute inset-0 border border-brand-purple/20 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                  <img 
                    src={student.image || `https://picsum.photos/seed/${student.name.replace(/\s/g, '')}/400/400`} 
                    alt={student.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-display text-lg text-brand-purple uppercase mb-1 leading-tight">{student.name}</h4>
                <p className="font-heading text-brand-cream/40 uppercase tracking-widest text-[10px]">{student.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL GUESTS SECTION */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Special Guests">Ospiti Speciali</SectionTitle>
          
          <div className="space-y-24">
            {/* Musical Guest */}
            <div className="grid grid-cols-1 md:grid-cols-[0.6fr_1.4fr] gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] overflow-hidden group"
              >
                <div className="absolute inset-0 border-2 border-brand-purple/30 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                <img 
                  src="https://i.pinimg.com/736x/48/6f/e8/486fe80ac48bede2bc12b2cf0717090f.jpg" 
                  alt="Marie Claire LeBlanc" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-brand-purple font-heading text-sm uppercase tracking-[0.3em] mb-4 block">Musical Performance</span>
                <h3 className="font-display text-4xl text-white uppercase mb-4">Marie Claire LeBlanc</h3>
                <p className="font-heading text-brand-cream/60 uppercase tracking-widest text-xs mb-6">Singer and Performer • New Orleans</p>
                <p className="text-brand-cream/80 leading-relaxed text-lg">
                  Originaria di New Orleans, Marie Claire LeBlanc è una cantautrice jazz e blues nota per il timbro caldo e profondo della sua voce e per la forte presenza scenica. Discendente di una famiglia creola della Louisiana, la sua musica affonda le radici nelle tradizioni culturali del Sud degli Stati Uniti, intrecciando spiritualità, memoria e identità.
                  <br /><br />
                  Artista affermata e interprete sensibile delle tensioni e delle bellezze del proprio tempo, porterà a Beyond Borders una performance capace di trasformare il palco in uno spazio di racconto, emozione e connessione.
                </p>
              </motion.div>
            </div>

            {/* Political Debate Panel */}
            <div className="pt-24 border-t border-brand-cream/10">
              <div className="text-center mb-16">
                <span className="text-brand-purple font-heading text-sm uppercase tracking-[0.3em] mb-4 block">The Final Night Event</span>
                <h3 className="font-display text-5xl text-white uppercase mb-6">Il Panel Politico</h3>
                <p className="text-brand-cream/60 max-w-2xl mx-auto italic">
                  Un panel esclusivo moderato da tre giovani talenti della comunità, dove i candidati risponderanno alle domande sul futuro di Greenwood Bay.
                </p>
              </div>

              <div className="mb-16">
                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                  {[
                    { name: "Dahlia LeBlanc-Wright", role: "MUSICIAN & PRESENTER", image: "https://i.postimg.cc/gkhRWt97/b53979d23283dc39481b90331bc5dc14.jpg" },
                    { name: "Diego Delgado", role: "JOURNALIST & MODERATOR", image: "https://i.pinimg.com/736x/ae/67/b5/ae67b5f19382831eb036d17261233b2a.jpg" },
                    { name: "Deion Kendrick", role: "ORGANIZER & MODERATOR", image: "https://i.pinimg.com/736x/dc/b4/03/dcb403e16a0d7abee6846d6904e50565.jpg" }
                  ].map((moderator, index) => (
                    <motion.div 
                      key={moderator.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden border border-brand-purple/30 group-hover:border-brand-purple transition-colors duration-500">
                        <img 
                          src={moderator.image || `https://picsum.photos/seed/${moderator.name.replace(/\s/g, '')}/100/100`} 
                          alt={moderator.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h5 className="font-display text-lg text-white uppercase leading-tight">{moderator.name}</h5>
                        <p className="font-heading text-brand-purple uppercase tracking-widest text-[9px]">{moderator.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Gabrielle */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] mb-8 overflow-hidden">
                    <div className="absolute inset-0 border-2 border-brand-purple/30 translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                    <img 
                      src="https://i.postimg.cc/hG1HhRwH/CCH-Pounder.jpg" 
                      alt="Gabrielle Davis" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-brand-purple px-3 py-1 text-[10px] font-heading uppercase tracking-widest text-white">Democrat Candidate</div>
                  </div>
                  <h4 className="font-display text-3xl text-brand-purple uppercase mb-2">Gabrielle Davis</h4>
                  <p className="font-heading text-brand-cream/60 uppercase tracking-widest text-xs mb-4">Underwood Academy Principal • Greenwood Bay</p>
                  <p className="text-brand-cream/80 leading-relaxed text-sm">
                    Nata e cresciuta a Greenwood Bay, Gabrielle Davis guida la Underwood Academy dal 2018, portando avanti una visione educativa fondata su responsabilità, crescita e seconde possibilità. Oggi si presenta come candidata democratica alla carica di sindaca, proponendo una visione della città orientata all’educazione e alla responsabilità civica.
                  </p>
                </motion.div>

                {/* Colton */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] mb-8 overflow-hidden">
                    <div className="absolute inset-0 border-2 border-brand-purple/30 translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                    <img 
                      src="https://i.pinimg.com/1200x/7d/da/63/7dda6338e055e911d6f3c12448df0194.jpg" 
                      alt="Colton Ward" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-red-900 px-3 py-1 text-[10px] font-heading uppercase tracking-widest text-white">Republican Candidate</div>
                  </div>
                  <h4 className="font-display text-3xl text-brand-purple uppercase mb-2">Colton Ward</h4>
                  <p className="font-heading text-brand-cream/60 uppercase tracking-widest text-xs mb-4">Major in office • Greenwood Bay</p>
                  <p className="text-brand-cream/80 leading-relaxed text-sm">
                    Originario di Greenwood Bay, Colton Ward è sindaco della città dal 2022. Sostenitore di una visione politica conservatrice e fortemente patriottica, si ripropone per un nuovo mandato con il sostegno dell’elettorato repubblicano, puntando sulla sua esperienza e carisma pubblico.
                  </p>
                </motion.div>
              </div>
            </div>
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
        </div>
      </footer>
    </div>
  );
}
