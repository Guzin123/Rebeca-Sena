import React, { useState } from 'react';
import { 
  ShieldCheck, 
  User, 
  Sparkles, 
  Heart, 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  X,
  ChevronRight,
  Instagram
} from 'lucide-react';
import { EXPERT_INFO, IMAGES, GALLERY_IMAGES, FEATURES, STEPS } from './constants';
import { ImageData } from './types';

// --- Reusable Components ---

const WhatsAppButton = ({ 
  text = "Agendar Primeira Consulta Gratuita", 
  className = "",
  variant = "primary"
}: { 
  text?: string, 
  className?: string,
  variant?: "primary" | "secondary" | "outline"
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg w-full md:w-auto uppercase tracking-wide";
  
  const variants = {
    primary: "bg-green-600 hover:bg-green-700 text-white shadow-green-200/50",
    secondary: "bg-gold-500 hover:bg-gold-600 text-white shadow-gold-200/50",
    outline: "border-2 border-green-600 text-green-700 hover:bg-green-50"
  };

  return (
    <a 
      href={EXPERT_INFO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={24} className="animate-pulse" />
      {text}
    </a>
  );
};

const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-12 px-4">
    <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <div className={`w-24 h-1 mx-auto rounded-full ${light ? 'bg-gold-400' : 'bg-gold-500'}`}></div>
    )}
  </div>
);

// --- Main Sections ---

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden bg-gray-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-gray-200/50 to-transparent -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Text Content Column */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block bg-gold-100 text-gold-600 px-4 py-1 rounded-full text-sm font-bold tracking-wider mb-6">
              ESPECIALISTA EM LENTES EM RESINA
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Eu sou <span className="text-gold-600">Rebeca Sena</span>, sua dentista em Salvador.
            </h1>

            {/* Mobile Image - Visible ONLY on Mobile */}
            <div className="md:hidden w-full flex justify-center mb-8">
              <div className="relative w-full max-w-[350px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={IMAGES.hero} 
                  alt="Dra. Rebeca Sena" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Transforme seu sorriso com a naturalidade e a segurança que você merece. Tecnologia de ponta e olhar artístico para resultados incríveis.
            </p>
            
            <div className="flex flex-col gap-3">
              <WhatsAppButton variant="primary" />
              <p className="text-sm text-gray-500 flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </div>

          {/* Desktop Image Column - Visible ONLY on Desktop */}
          <div className="hidden md:flex w-full md:w-1/2 justify-center">
            <div className="relative w-full max-w-[500px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={IMAGES.hero} 
                alt="Dra. Rebeca Sena" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-5/12">
             <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-400 rounded-xl"></div>
              <img 
                src={IMAGES.about} 
                alt="Dra. Rebeca Sena atendendo" 
                className="w-full h-auto rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-7/12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Quem sou eu?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Olá! Muito prazer. Eu dedico minha carreira a devolver a autoestima dos meus pacientes através de sorrisos harmônicos e naturais.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Minha abordagem foge do tradicional frio e clínico. Aqui, você encontra um atendimento humanizado, onde eu escuto seus desejos e planejo cada detalhe do seu novo sorriso.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Especialista em Lentes em Resina",
                "Atendimento exclusivo e personalizado",
                "Foco total em estética e função",
                "Tecnologia e materiais de alta performance"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="text-gold-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="inline-block">
               <a href={EXPERT_INFO.whatsappLink} className="text-gold-600 font-bold border-b-2 border-gold-400 hover:text-gold-700 transition-colors">
                 Conhecer meu trabalho &rarr;
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResultsGallery = () => {
  const [selectedImg, setSelectedImg] = useState<ImageData | null>(null);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Resultados Reais" subtitle="true" light={true} />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <div 
              key={index} 
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg bg-gray-800"
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white border border-white px-4 py-2 rounded-full text-sm">Ver ampliar</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          * Resultados individuais podem variar. As imagens são de pacientes reais tratados por mim.
        </p>

        {/* Lightbox */}
        {selectedImg && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImg(null)}>
            <button className="absolute top-6 right-6 text-white hover:text-gold-400 p-2">
              <X size={32} />
            </button>
            <img 
              src={selectedImg.src} 
              alt={selectedImg.alt} 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        )}
      </div>
    </section>
  );
};

const Trust = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Por que confiar no meu trabalho?" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = { ShieldCheck, User, Sparkles, Heart }[feature.icon as any] || Sparkles;
            
            return (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center mb-6 text-gold-600">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const MiddleCTA = () => {
  return (
    <section className="py-24 bg-gold-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-6 text-center relative z-10 text-white">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
          Ainda com dúvidas se é para você?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Não deixe para depois o sorriso que você pode ter agora. Converse comigo pelo WhatsApp e tire todas as suas dúvidas pessoalmente.
        </p>
        <div className="flex justify-center">
          <WhatsAppButton 
            text="Falar com a Dra. Rebeca Agora" 
            className="bg-white text-gold-600 hover:bg-gray-100 border-none shadow-xl"
            variant="primary" // Overridden by className
          />
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Como funciona a primeira consulta" />
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gray-200 -z-0"></div>

            {STEPS.map((step, idx) => (
              <div key={idx} className="flex-1 relative z-10">
                <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-gold-400 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-green-50 p-6 rounded-xl border border-green-100 inline-block w-full">
            <p className="text-green-800 font-semibold flex items-center justify-center gap-2">
              <ShieldCheck size={20} />
              Lembrando: A primeira conversa é 100% gratuita e sem compromisso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
          Seu novo sorriso começa com um <span className="text-green-600 underline decoration-gold-400">olá</span>.
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Estou esperando por você no consultório. Vamos planejar juntos a sua transformação?
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <WhatsAppButton className="w-full md:w-auto px-12 py-5 text-xl" />
          <span className="text-xs text-gray-400 uppercase tracking-widest mt-2">
            Vagas limitadas para este mês
          </span>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold-400 mb-2">{EXPERT_INFO.name}</h3>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              {EXPERT_INFO.role}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-start gap-3 text-gray-400 text-sm max-w-xs">
              <MapPin size={18} className="mt-1 flex-shrink-0 text-gold-500" />
              <span>{EXPERT_INFO.location}</span>
            </div>
            
            <a 
              href={EXPERT_INFO.instagramLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gold-400 transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm font-medium">Siga no Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-600">
          <p>{EXPERT_INFO.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

// --- App Component ---

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Hero />
      <About />
      <ResultsGallery />
      <Trust />
      <MiddleCTA />
      <Process />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;