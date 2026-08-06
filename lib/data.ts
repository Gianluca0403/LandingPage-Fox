/**
 * ============================================================
 * DADOS MOCKADOS — FOX REGULADORA
 * ------------------------------------------------------------
 * Todo o conteúdo deste arquivo é PLACEHOLDER plausível.
 * SUBSTITUA PELO CONTEÚDO REAL DA FOX (textos, anos, nomes,
 * imagens e links) sem precisar mexer nos componentes.
 * ============================================================
 */

/* ----------------------------- NAVEGAÇÃO ----------------------------- */

export type ServiceSlug = 'transporte' | 'affinity' | 'automovel' | 'sos' | 'vida' | 'property'

export const serviceLinks: { label: string; href: string; slug: ServiceSlug }[] = [
  { label: 'Transporte', href: '#transporte', slug: 'transporte' },
  { label: 'Affinity', href: '#affinity', slug: 'affinity' },
  { label: 'Automóvel', href: '#automovel', slug: 'automovel' },
  { label: 'SOS', href: '#sos', slug: 'sos' },
  { label: 'Vida', href: '#vida', slug: 'vida' },
  { label: 'Property', href: '#property', slug: 'property' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Empresas do grupo', href: '#empresas' },
  { label: 'Serviços', href: '#servicos', children: serviceLinks },
  { label: 'Clientes', href: '#clientes' },
]

/* ------------------------------ HERO -------------------------------- */

// SUBSTITUA PELO TEXTO REAL DA FOX
export const heroContent = {
  eyebrow: 'Regulação de sinistros desde 1919',
  title: 'Regulação de sinistros com técnica, agilidade e transparência',
  subtitle:
    'A FOX Reguladora atua em todo o território nacional na regulação e liquidação de sinistros de transporte, automóvel, property, vida, affinity e assistências, entregando laudos precisos e prazos que a sua seguradora pode confiar.',
  primaryCta: { label: 'Fale conosco', href: '#contato' },
  secondaryCta: { label: 'Conheça nossos serviços', href: '#servicos' },
  image: '/images/hero-fox.png', // SUBSTITUA PELA IMAGEM REAL
}

export const heroStats = [
  { value: 80, suffix: '+', label: 'colaboradores internos' },
  { value: 105, suffix: ' anos', label: 'de história no mercado' },
  { value: 27, suffix: '', label: 'estados atendidos' },
  { value: 12, suffix: 'mil+', label: 'sinistros regulados por ano' },
]

/* ---------------------------- TIMELINE ------------------------------ */

export type TimelineItem = {
  year: number
  title: string
  text: string
  image?: string
}

// SUBSTITUA PELO TEXTO REAL DA FOX (anos, marcos e fotos históricas)
export const timelineData: TimelineItem[] = [
  {
    year: 1919,
    title: 'A fundação',
    text: 'Nasce a operação que daria origem à FOX, dedicada à vistoria de cargas no porto de Santos, atendendo às primeiras companhias de seguro do país.',
  },
  {
    year: 1930,
    title: 'Primeiro escritório próprio',
    text: 'Inauguração do primeiro escritório técnico, com equipe fixa de vistoriadores e arquivo próprio de laudos.',
    image: '/images/timeline-1.png',
  },
  {
    year: 1947,
    title: 'Expansão para o transporte rodoviário',
    text: 'Com o crescimento das rodovias brasileiras, a FOX passa a regular sinistros de transporte rodoviário de cargas em todo o Sudeste.',
  },
  {
    year: 1976,
    title: 'Cobertura nacional',
    text: 'Rede de correspondentes e vistoriadores credenciados alcança todas as regiões do Brasil, reduzindo drasticamente o prazo de atendimento.',
    image: '/images/timeline-2.png',
  },
  {
    year: 1998,
    title: 'Novas carteiras',
    text: 'Início das operações nas carteiras de automóvel, property e vida, consolidando a FOX como reguladora multilinha.',
  },
  {
    year: 2012,
    title: 'Tecnologia e rastreabilidade',
    text: 'Implantação de plataforma própria de gestão de sinistros, com laudos digitais, fotos georreferenciadas e acompanhamento on-line pelo cliente.',
    image: '/images/timeline-3.png',
  },
  {
    year: 2019,
    title: 'Centenário e estruturação do grupo',
    text: 'A FOX completa 100 anos e organiza suas atividades em empresas especializadas, incluindo comercialização de salvados e assistência 24h.',
  },
  {
    year: 2024,
    title: 'Inteligência de dados',
    text: 'Uso de analytics e indicadores de performance para antecipar fraudes, reduzir custos indenizatórios e apoiar a subscrição das seguradoras parceiras.',
    image: '/images/timeline-4.png',
  },
]

/* ------------------------- EQUIPE ESPECIALIZADA --------------------- */

export type TeamHighlight = {
  icon: 'users' | 'award' | 'truck' | 'shieldCheck' | 'graduation' | 'package'
  text: string
  highlight: string
}

// SUBSTITUA PELOS DADOS REAIS DA EQUIPE FOX
export const teamHighlights: TeamHighlight[] = [
  { icon: 'users', highlight: '+ de 80', text: 'colaboradores internos dedicados à regulação e ao atendimento.' },
  {
    icon: 'award',
    highlight: '5, 10, 15 e mais de 20 anos',
    text: 'de experiência entre nossos colaboradores, garantindo memória técnica do setor.',
  },
  {
    icon: 'truck',
    highlight: 'Formação exclusiva',
    text: 'profissionais com experiência dedicada a sinistros de transporte de cargas.',
  },
  { icon: 'shieldCheck', highlight: 'Canal de ouvidoria', text: 'sigiloso, independente e atuante em todas as frentes.' },
  {
    icon: 'graduation',
    highlight: 'Treinamento contínuo',
    text: 'departamento de reciclagem e acompanhamento permanente dos vistoriadores.',
  },
  {
    icon: 'package',
    highlight: 'Salvados',
    text: 'comercialização através de estrutura exclusiva, com maximização de recuperação.',
  },
]

/* --------------------------- SÓCIO FUNDADOR ------------------------- */

// SUBSTITUA PELO TEXTO REAL
export const founder = {
  name: 'Paulo Hauptli',
  role: 'Sócio Fundador da FOX Reguladora',
  photo: '/images/founder-paulo.png', // SUBSTITUA PELA FOTO REAL
  bio: [
    'Com mais de quatro décadas dedicadas ao mercado de seguros, Paulo Hauptli iniciou sua trajetória como vistoriador de cargas e construiu, ao longo dos anos, uma das estruturas de regulação de sinistros mais respeitadas do país.',
    'À frente da FOX, consolidou uma cultura técnica baseada em imparcialidade, evidência e relacionamento de longo prazo com seguradoras, corretoras e transportadores.',
  ],
  quote:
    'Regular um sinistro é, antes de tudo, um exercício de responsabilidade: cada laudo representa uma decisão que impacta pessoas e negócios.',
}

export type Credential = { course: string; institution: string; year: string }

// SUBSTITUA PELOS CURSOS E CERTIFICAÇÕES REAIS
export const founderCredentials: Credential[] = [
  { course: '[Nome do Curso] — Técnico em Logística', institution: 'ETEC [Nome da Unidade]', year: '[Ano]' },
  { course: '[Nome do Curso] — Regulação de Sinistros', institution: 'ETEC [Nome da Unidade]', year: '[Ano]' },
  { course: '[Nome do Curso] — Perícia em Sinistros de Transporte', institution: '[Instituição]', year: '[Ano]' },
  { course: '[Nome do Curso] — Gestão de Seguros', institution: 'ENS / FUNENSEG', year: '[Ano]' },
  { course: '[Nome do Curso] — Prevenção e Combate à Fraude', institution: '[Instituição]', year: '[Ano]' },
  { course: '[Nome da Certificação] — Gestão Empresarial', institution: '[Instituição]', year: '[Ano]' },
]

/* ------------------------------ SERVIÇOS ---------------------------- */

export type Service = {
  slug: ServiceSlug
  label: string
  icon: 'truck' | 'users' | 'car' | 'lifeBuoy' | 'heartPulse' | 'building'
  title: string
  description: string
  bullets: string[]
  cta: string
}

// SUBSTITUA PELOS TEXTOS REAIS DE CADA CARTEIRA
export const services: Service[] = [
  {
    slug: 'transporte',
    label: 'Transporte',
    icon: 'truck',
    title: 'Sinistros de transporte de cargas',
    description:
      'Regulação completa de avarias, faltas, roubos e acidentes envolvendo transporte rodoviário, aéreo, marítimo e multimodal, com vistoriadores especializados em cada tipo de carga.',
    bullets: [
      'Atendimento emergencial em rodovia e acompanhamento de transbordo',
      'Investigação de causa, análise documental e apuração de responsabilidades',
      'Gestão e comercialização de salvados com estrutura exclusiva',
      'Laudos digitais com fotos georreferenciadas e prazos monitorados',
    ],
    cta: 'Solicitar regulação',
  },
  {
    slug: 'affinity',
    label: 'Affinity',
    icon: 'users',
    title: 'Carteiras affinity e massificados',
    description:
      'Estrutura desenhada para grandes volumes de sinistros de baixa complexidade, com fluxos automatizados, régua de comunicação com o segurado e alto índice de resolução no primeiro contato.',
    bullets: [
      'Fluxos parametrizados conforme o manual de cada parceiro',
      'Atendimento digital ao segurado do aviso à conclusão',
      'Indicadores de SLA e satisfação acompanhados em tempo real',
      'Escalabilidade para campanhas e picos de demanda',
    ],
    cta: 'Falar com um especialista',
  },
  {
    slug: 'automovel',
    label: 'Automóvel',
    icon: 'car',
    title: 'Sinistros de automóvel e frotas',
    description:
      'Vistoria prévia, regulação de danos parciais e perdas totais, análise de nexo causal e apoio técnico em processos de terceiros, com cobertura nacional e rede própria de reguladores.',
    bullets: [
      'Vistoria prévia e de sinistro com padrão fotográfico auditável',
      'Análise de perda total, leilão e recuperação de salvados',
      'Apuração de fraude e simulação de ocorrência',
      'Regulação de frotas com relatórios consolidados por cliente',
    ],
    cta: 'Solicitar regulação',
  },
  {
    slug: 'sos',
    label: 'SOS',
    icon: 'lifeBuoy',
    title: 'SOS e assistência 24 horas',
    description:
      'Acionamento imediato em ocorrências críticas: contenção de danos, remoção, guarda de carga, escolta e apoio ao segurado, disponível 24 horas por dia, sete dias por semana.',
    bullets: [
      'Central de acionamento 24h com tempo de resposta monitorado',
      'Contenção de danos e preservação de evidências no local',
      'Remoção, armazenagem e guarda de bens sinistrados',
      'Relatório preliminar em até 24 horas do acionamento',
    ],
    cta: 'Acionar o SOS',
  },
  {
    slug: 'vida',
    label: 'Vida',
    icon: 'heartPulse',
    title: 'Sinistros de vida e acidentes pessoais',
    description:
      'Análise técnica e sensível de sinistros de vida, invalidez e acidentes pessoais, com apuração documental criteriosa e comunicação humanizada com beneficiários.',
    bullets: [
      'Verificação documental e apuração de nexo causal',
      'Entrevistas e diligências conduzidas com sigilo absoluto',
      'Pareceres médicos e laudos de invalidez',
      'Atendimento humanizado a beneficiários e famílias',
    ],
    cta: 'Saiba mais',
  },
  {
    slug: 'property',
    label: 'Property',
    icon: 'building',
    title: 'Property, riscos patrimoniais e residencial',
    description:
      'Regulação de sinistros de incêndio, vendaval, alagamento, danos elétricos, quebra de máquinas e lucros cessantes, em riscos residenciais, comerciais e industriais.',
    bullets: [
      'Engenheiros e peritos para riscos industriais complexos',
      'Quantificação de danos materiais e lucros cessantes',
      'Análise de causa e origem com apoio de laboratório',
      'Acompanhamento de reconstrução e reposição de bens',
    ],
    cta: 'Solicitar regulação',
  },
]

/* -------------------------- EMPRESAS DO GRUPO ----------------------- */

export type GroupCompany = {
  name: string
  tag: string
  description: string
  initials: string
}

// SUBSTITUA PELOS NOMES, LOGOS E DESCRIÇÕES REAIS DAS EMPRESAS DO GRUPO
export const groupCompanies: GroupCompany[] = [
  {
    name: 'FOX Reguladora',
    tag: 'Regulação de sinistros',
    initials: 'FX',
    description: 'Núcleo técnico do grupo, responsável pela regulação e liquidação de sinistros em todas as carteiras.',
  },
  {
    name: 'FOX Salvados',
    tag: 'Comercialização',
    initials: 'FS',
    description: 'Estrutura exclusiva de avaliação, leilão e venda de salvados, com foco em recuperação de indenização.',
  },
  {
    name: 'FOX Assistência',
    tag: 'SOS 24h',
    initials: 'FA',
    description: 'Central de atendimento emergencial, remoção, guarda de cargas e apoio ao segurado 24 horas.',
  },
  {
    name: 'FOX Inspeções',
    tag: 'Gerenciamento de risco',
    initials: 'FI',
    description: 'Vistorias prévias, inspeções de risco e auditoria de processos logísticos para subscrição.',
  },
  {
    name: 'FOX Analytics',
    tag: 'Inteligência de dados',
    initials: 'FN',
    description: 'Indicadores, relatórios gerenciais e modelos preditivos de fraude e severidade de sinistros.',
  },
  {
    name: 'FOX Academy',
    tag: 'Treinamento',
    initials: 'FC',
    description: 'Formação, reciclagem e certificação interna de vistoriadores e reguladores do grupo.',
  },
]

/* -------------------------------- CLIENTES -------------------------- */

// SUBSTITUA PELAS LOGOS REAIS DOS CLIENTES (ex: /logos/cliente.svg)
export const clients: { name: string }[] = [
  { name: 'Seguradora Alfa' },
  { name: 'Beta Seguros' },
  { name: 'Grupo Gama' },
  { name: 'Delta Transportes' },
  { name: 'Épsilon Resseguros' },
  { name: 'Zeta Logística' },
  { name: 'Ômega Corretora' },
  { name: 'Sigma Cargo' },
  { name: 'Kappa Seguros' },
  { name: 'Lambda Frotas' },
]

/* -------------------------------- CONTATO --------------------------- */

// SUBSTITUA PELOS DADOS REAIS DE CONTATO
export const contactInfo = {
  address: 'Av. Exemplo, 1.000 — Conj. 120 — Santos/SP — CEP 11000-000',
  phone: '+55 (13) 0000-0000',
  whatsapp: '+55 (13) 90000-0000',
  email: 'contato@foxreguladora.com.br',
  hours: 'Seg a sex, 8h às 18h — SOS 24h todos os dias',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
}
