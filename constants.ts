import { ImageData, FeatureData, StepData } from './types';

export const EXPERT_INFO = {
  name: "Dra. Rebeca Sena",
  role: "Dentista Especialista em Lentes em Resina",
  location: "Torre Londres - Av. Tancredo Neves, 2539 - sala 1014, Salvador - BA",
  whatsappLink: "https://api.whatsapp.com/send/?phone=5571981728763&text=Ol%C3%A1%2C+Dra.+Rebeca%21+Vim+pelo+site+e+gostaria+de+agendar+minha+primeira+consulta+gratuita.&type=phone_number&app_absent=0",
  instagramLink: "https://www.instagram.com/dra.rebecsena/",
  copyright: "© 2024 Dra. Rebeca Sena. Todos os direitos reservados."
};

export const IMAGES = {
  hero: "https://i.imgur.com/yb8YXo5.png",
  about: "https://i.imgur.com/1V21Q2p.png", 
  // Using the secondary hero image for the About section
};

export const GALLERY_IMAGES: ImageData[] = [
  { src: "https://i.imgur.com/PfTiB9T.png", alt: "Resultado Lentes em Resina" },
  { src: "https://i.imgur.com/gzbZZRV.png", alt: "Transformação do Sorriso" },
  { src: "https://i.imgur.com/bZomBMp.png", alt: "Estética Dental Premium" },
  { src: "https://i.imgur.com/eH9z7o1.png", alt: "Detalhes Naturais" },
  { src: "https://i.imgur.com/vo0Pe5O.png", alt: "Harmonização do Sorriso" },
  { src: "https://i.imgur.com/Nn2siIm.png", alt: "Sorriso Renovado" },
  { src: "https://i.imgur.com/ihLSGRh.png", alt: "Acabamento Perfeito" },
  { src: "https://i.imgur.com/CmzICnL.png", alt: "Antes e Depois" },
  { src: "https://i.imgur.com/CXSZGtx.png", alt: "Correção Estética" },
  { src: "https://i.imgur.com/NBFyUCz.png", alt: "Finalização do Tratamento" },
];

export const FEATURES: FeatureData[] = [
  {
    title: "Avaliação Honesta",
    description: "Sem tratamentos desnecessários. Eu prezo pela transparência total com sua saúde bucal.",
    icon: "ShieldCheck"
  },
  {
    title: "Atendimento Comigo",
    description: "Você será atendido diretamente por mim, do início ao fim do seu tratamento.",
    icon: "User"
  },
  {
    title: "Estética Natural",
    description: "Especialista em lentes de resina que parecem dentes reais, sem aquele aspecto artificial.",
    icon: "Sparkles"
  },
  {
    title: "Conforto Total",
    description: "Ambiente preparado para você se sentir seguro e acolhido durante todo o processo.",
    icon: "Heart"
  }
];

export const STEPS: StepData[] = [
  {
    number: "01",
    title: "Toque no Botão",
    description: "Clique em qualquer botão desta página para abrir meu WhatsApp pessoal."
  },
  {
    number: "02",
    title: "Agendamento Rápido",
    description: "Minha equipe vai encontrar o melhor horário para você vir ao consultório."
  },
  {
    number: "03",
    title: "Avaliação Gratuita",
    description: "Venha nos visitar, tomar um café e descobrir como podemos transformar seu sorriso sem compromisso."
  }
];