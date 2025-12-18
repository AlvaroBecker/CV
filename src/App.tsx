import { useState } from "react"
import { 
  Envelope, 
  Phone, 
  MapPin, 
  LinkedinLogo, 
  GithubLogo,
  Briefcase,
  GraduationCap,
  Certificate,
  Code,
  Database,
  Cloud,
  Brain,
  Terminal,
  Wrench,
  DownloadSimple,
  Sun,
  Moon,
  Translate
} from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const translations = {
  es: {
    badge: "&lt;/&gt; Systems Engineer",
    intro: "Ingeniero en Informática con experiencia en",
    backend: "desarrollo backend",
    dataProcessing: "procesamiento de datos",
    automation: "automatización",
    passion: "Apasionado por la inteligencia artificial y ciencia de datos.",
    technicalProfile: "Perfil Técnico",
    languages: "Lenguajes",
    databases: "Bases de Datos",
    frameworks: "Frameworks & Librerías",
    cloud: "Cloud & DevOps",
    tools: "Herramientas",
    aiMl: "IA & Machine Learning",
    scripting: "Scripting",
    competencies: "Competencias",
    workExperience: "Experiencia Laboral",
    education: "Educación",
    certifications: "Certificaciones",
    contact: "Contacto",
    degree: "Ingeniero en Informática",
    degreeSpecialization: "Desarrollo y Gestión de Proyectos Informáticos",
    institution: "Instituto Profesional Duoc UC - Santiago, Chile",
    downloadCV: "Descargar CV",
    switchTheme: "Cambiar tema",
    switchLanguage: "Cambiar idioma",
    skillLevels: {
      advanced: "Avanzado",
      intermediateHigh: "Intermedio Alto",
      intermediate: "Intermedio"
    }
  },
  en: {
    badge: "&lt;/&gt; Systems Engineer",
    intro: "Computer Engineer with experience in",
    backend: "backend development",
    dataProcessing: "data processing",
    automation: "automation",
    passion: "Passionate about artificial intelligence and data science.",
    technicalProfile: "Technical Profile",
    languages: "Languages",
    databases: "Databases",
    frameworks: "Frameworks & Libraries",
    cloud: "Cloud & DevOps",
    tools: "Tools",
    aiMl: "AI & Machine Learning",
    scripting: "Scripting",
    competencies: "Competencies",
    workExperience: "Work Experience",
    education: "Education",
    certifications: "Certifications",
    contact: "Contact",
    degree: "Computer Engineer",
    degreeSpecialization: "Development and IT Project Management",
    institution: "Duoc UC Professional Institute - Santiago, Chile",
    downloadCV: "Download CV",
    switchTheme: "Switch theme",
    switchLanguage: "Switch language",
    skillLevels: {
      advanced: "Advanced",
      intermediateHigh: "Upper Intermediate",
      intermediate: "Intermediate"
    }
  }
}

const workHistoryData = {
  es: [
    {
      date: "Oct 2024 - Presente",
      title: "System Engineer, Delivery Network",
      company: "Indra Minsait",
      location: "Santiago",
      description: [
        "Desarrollo y mantenimiento de aplicaciones GIS para IGEA y MTG (Metrogas)",
        "MTG: Desarrollo de feature de seguimiento en vivo de móviles para órdenes de servicio usando tecnologías GIS y TOMTOM",
        "MTG: Creación de dashboards con ArcGIS Web Features y herramientas ArcGIS, incluyendo scripting en Python, Arcade y SQL para capas y vistas",
        "MTG: Automatización de limpieza de logs con Microsoft SQL Server Manager y tareas automatizadas con Python",
        "IGEA: Desarrollo de chatbot usando Qdrant, Python FastAPI, Uvicorn y React para frontend",
        "IGEA: Automatización de limpieza de logs con scripts Bash en servidores Linux on-premise",
        "Stack MTG: Python, JavaScript, .NET Framework, HTML, Microsoft SQL Server, ArcGIS, TOMTOM",
        "Stack IGEA: Java, PostgreSQL, JDBC 8, Python, React, Qdrant"
      ]
    },
    {
      date: "Oct 2023 - Ago 2024",
      title: "System Engineer",
      company: "Indra Minsait",
      location: "Santiago, CEN",
      description: [
        "Mantenimiento y soporte técnico de aplicaciones: Operación Real, Medidas WEB, IFC 2/3, Infotécnica Web y Contable",
        "Gestión de tickets correctivos (nivel 2-4) y evolutivos, implementando mejoras continuas",
        "Migración de infraestructura on-premise de servidores Linux con documentación de manuales de entrega",
        "Desarrollo de scripts Python para soluciones paliativas y extracción de datos PostgreSQL",
        "Stack: JavaScript, Python, TypeScript, CoffeeScript, PHP, Angular, Node.js, Django, MongoDB, MySQL, PostgreSQL",
        "Participación en proyectos de inteligencia artificial para mejorar UX de aplicativos"
      ]
    },
    {
      date: "Abr 2023 - Jun 2023",
      title: "ATLAS Higgs Boson ML Challenge",
      company: "Coding Dojo",
      location: "Santiago",
      description: [
        "Proyecto final de curso intensivo de ciencia de datos",
        "Análisis del ATLAS Higgs Boson Dataset del CERN Open Data Portal",
        "Implementación de modelo de clasificación en Python para identificar eventos de descomposición del bosón de Higgs",
        "Manejo de desafíos de big data: variabilidad de escalas y desequilibrio de clases"
      ]
    },
    {
      date: "Ago 2022 - Sep 2023",
      title: "Data Engineer Internship",
      company: "CMPC",
      location: "Santiago",
      description: [
        "Gestión y optimización de bases de datos PostgreSQL",
        "Liderazgo de iniciativas para estructuración eficiente de datos",
        "Documentación técnica y planificación de nuevas prácticas de seguridad",
        "Automatización de gestión de contraseñas y replicación dinámica de entornos con Python"
      ]
    },
    {
      date: "Jul 2022 - Nov 2022",
      title: "Desktop Process S.A. - Proyecto de Titulación",
      company: "Duoc UC",
      location: "Santiago",
      description: [
        "Diseño y desarrollo de software de administración para holding empresarial",
        "Implementación de sistema CRUD para gestión de usuarios",
        "Herramienta de análisis y reporte de contrataciones de filiales",
        "Stack: Java con Maven para desarrollo robusto y escalable"
      ]
    }
  ],
  en: [
    {
      date: "Oct 2024 - Present",
      title: "System Engineer, Delivery Network",
      company: "Indra Minsait",
      location: "Santiago",
      description: [
        "Development and maintenance of GIS applications for IGEA and MTG (Metrogas)",
        "MTG: Development of live mobile tracking feature for service orders using GIS and TOMTOM technologies",
        "MTG: Creation of dashboards with ArcGIS Web Features and ArcGIS tools, including Python, Arcade, and SQL scripting for layers and views",
        "MTG: Log cleanup automation with Microsoft SQL Server Manager and automated Python tasks",
        "IGEA: Chatbot development using Qdrant, Python FastAPI, Uvicorn, and React for frontend",
        "IGEA: Log cleanup automation with Bash scripts on on-premise Linux servers",
        "MTG Stack: Python, JavaScript, .NET Framework, HTML, Microsoft SQL Server, ArcGIS, TOMTOM",
        "IGEA Stack: Java, PostgreSQL, JDBC 8, Python, React, Qdrant"
      ]
    },
    {
      date: "Oct 2023 - Aug 2024",
      title: "System Engineer",
      company: "Indra Minsait",
      location: "Santiago, CEN",
      description: [
        "Maintenance and technical support for applications: Real Operation, WEB Measures, IFC 2/3, Infotécnica Web, and Accounting",
        "Management of corrective tickets (level 2-4) and evolutionary changes, implementing continuous improvements",
        "Migration of on-premise Linux server infrastructure with delivery manual documentation",
        "Python script development for palliative solutions and PostgreSQL data extraction",
        "Stack: JavaScript, Python, TypeScript, CoffeeScript, PHP, Angular, Node.js, Django, MongoDB, MySQL, PostgreSQL",
        "Participation in AI projects to improve application UX"
      ]
    },
    {
      date: "Apr 2023 - Jun 2023",
      title: "ATLAS Higgs Boson ML Challenge",
      company: "Coding Dojo",
      location: "Santiago",
      description: [
        "Final project for intensive data science course",
        "Analysis of ATLAS Higgs Boson Dataset from CERN Open Data Portal",
        "Implementation of classification model in Python to identify Higgs boson decay events",
        "Handling big data challenges: scale variability and class imbalance"
      ]
    },
    {
      date: "Aug 2022 - Sep 2023",
      title: "Data Engineer Internship",
      company: "CMPC",
      location: "Santiago",
      description: [
        "PostgreSQL database management and optimization",
        "Leadership of initiatives for efficient data structuring",
        "Technical documentation and planning of new security practices",
        "Password management automation and dynamic environment replication with Python"
      ]
    },
    {
      date: "Jul 2022 - Nov 2022",
      title: "Desktop Process S.A. - Graduation Project",
      company: "Duoc UC",
      location: "Santiago",
      description: [
        "Design and development of administration software for business holding",
        "Implementation of CRUD system for user management",
        "Analysis and reporting tool for subsidiary hiring",
        "Stack: Java with Maven for robust and scalable development"
      ]
    }
  ]
}

const certificationsData = {
  es: [
    { year: "2025", name: "Oracle Cloud Infrastructure AI Foundations", issuer: "Oracle" },
    { year: "2025", name: "Deep Learning con Python y Keras - Redes Neuronales", issuer: "Udemy" },
    { year: "2025", name: "Máster en NLP con Python", issuer: "Udemy" },
    { year: "2023", name: "Certificado en Ciencia de Datos", issuer: "Coding Dojo" },
    { year: "2023", name: "Certificado de Inglés C1", issuer: "" },
    { year: "2022", name: "Google Cloud Professional Architect", issuer: "Udemy" },
    { year: "2022", name: "Certificado de Python", issuer: "Udemy" },
  ],
  en: [
    { year: "2025", name: "Oracle Cloud Infrastructure AI Foundations", issuer: "Oracle" },
    { year: "2025", name: "Deep Learning with Python and Keras - Neural Networks", issuer: "Udemy" },
    { year: "2025", name: "NLP Master with Python", issuer: "Udemy" },
    { year: "2023", name: "Data Science Certificate", issuer: "Coding Dojo" },
    { year: "2023", name: "C1 English Certificate", issuer: "" },
    { year: "2022", name: "Google Cloud Professional Architect", issuer: "Udemy" },
    { year: "2022", name: "Python Certificate", issuer: "Udemy" },
  ]
}

const competencyLabels = {
  es: [
    { name: "Data Analysis", level: 75 },
    { name: "Machine Learning", level: 75 },
    { name: "Data Science", level: 75 },
    { name: "Desarrollo de Software", level: 85 },
    { name: "Cloud Computing", level: 45 },
    { name: "Ingeniería de Prompt", level: 80 },
    { name: "Trabajo en Equipo", level: 70 },
    { name: "Resolución de Problemas", level: 75 },
    { name: "GitHub Copilot", level: 65 },
    { name: "ChatGPT", level: 65 },
    { name: "Midjourney", level: 65 },
    { name: "GitHub Spark", level: 65 },
    { name: "Gemini", level: 65 },
  ],
  en: [
    { name: "Data Analysis", level: 75 },
    { name: "Machine Learning", level: 75 },
    { name: "Data Science", level: 75 },
    { name: "Software Development", level: 85 },
    { name: "Cloud Computing", level: 45 },
    { name: "Prompt Engineering", level: 80 },
    { name: "Teamwork", level: 70 },
    { name: "Problem Solving", level: 75 },
    { name: "GitHub Copilot", level: 65 },
    { name: "ChatGPT", level: 65 },
    { name: "Midjourney", level: 65 },
    { name: "GitHub Spark", level: 65 },
    { name: "Gemini", level: 65 },
  ]
}

function SkillBar({ name, level, lang, isDark = true }: { name: string; level: number; lang: "es" | "en"; isDark?: boolean }) {
  const t = translations[lang]
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className={`text-sm font-medium ${isDark ? 'text-foreground' : 'text-[oklch(0.25_0.02_260)]'}`}>{name}</span>
        <span className={`text-xs font-mono ${isDark ? 'text-muted-foreground' : 'text-[oklch(0.45_0.02_260)]'}`}>
          {level >= 80 ? t.skillLevels.advanced : level >= 50 ? t.skillLevels.intermediateHigh : t.skillLevels.intermediate}
        </span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-secondary' : 'bg-[oklch(0.92_0.01_260)]'}`}>
        <motion.div
          className={`h-full rounded-full ${isDark ? 'bg-gradient-to-r from-primary via-accent to-primary' : 'bg-gradient-to-r from-[oklch(0.45_0.18_260)] via-[oklch(0.42_0.12_170)] to-[oklch(0.45_0.18_260)]'}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ 
  title, 
  icon: Icon, 
  skills,
  isDark = true
}: { 
  title: string; 
  icon: React.ElementType; 
  skills: string[];
  isDark?: boolean;
}) {
  return (
    <motion.div variants={fadeInUp} className="space-y-3">
      <div className={`flex items-center gap-2 ${isDark ? 'text-accent' : 'text-[oklch(0.42_0.12_170)]'}`}>
        <Icon size={20} weight="duotone" />
        <h4 className="font-semibold text-sm uppercase tracking-wider">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge 
            key={skill} 
            variant="secondary" 
            className={`font-mono text-xs transition-colors cursor-default ${isDark ? 'bg-secondary/50 hover:bg-primary/20 hover:text-primary' : 'bg-[oklch(0.92_0.01_260)] text-[oklch(0.35_0.02_260)] hover:bg-[oklch(0.45_0.18_260)]/15 hover:text-[oklch(0.45_0.18_260)]'}`}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}

function TimelineItem({ 
  date, 
  title, 
  company, 
  location,
  description,
  isDark = true
}: { 
  date: string; 
  title: string; 
  company: string; 
  location: string;
  description: string[];
  isDark?: boolean;
}) {
  return (
    <motion.div variants={fadeInUp} className="relative pl-8 pb-8 last:pb-0">
      <div className={`absolute left-0 top-1 w-3 h-3 rounded-full border-2 ${isDark ? 'bg-gradient-to-br from-primary to-accent border-background' : 'bg-gradient-to-br from-[oklch(0.45_0.18_260)] to-[oklch(0.42_0.12_170)] border-[oklch(0.97_0.005_260)]'}`} />
      <div className={`absolute left-[5px] top-4 bottom-0 w-0.5 last:hidden ${isDark ? 'bg-gradient-to-b from-primary/50 to-transparent' : 'bg-gradient-to-b from-[oklch(0.45_0.18_260)]/30 to-transparent'}`} />
      
      <Card className={`transition-colors ${isDark ? 'bg-card/50 border-border/50 hover:border-primary/30' : 'bg-white border-[oklch(0.88_0.01_260)] hover:border-[oklch(0.45_0.18_260)]/40'}`}>
        <CardContent className="p-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h4 className={`font-semibold text-lg ${isDark ? '' : 'text-black'}`}>{title}</h4>
              <p className={isDark ? 'text-accent font-medium' : 'text-[oklch(0.42_0.12_170)] font-medium'}>{company}</p>
              <p className={`text-sm ${isDark ? 'text-muted-foreground' : 'text-[oklch(0.45_0.02_260)]'}`}>{location}</p>
            </div>
            <Badge variant="outline" className={`font-mono text-xs w-fit shrink-0 ${isDark ? 'border-primary/30 text-primary' : 'border-[oklch(0.45_0.18_260)]/30 text-[oklch(0.45_0.18_260)]'}`}>
              {date}
            </Badge>
          </div>
          <ul className={`space-y-2 text-sm ${isDark ? 'text-muted-foreground' : 'text-[oklch(0.45_0.02_260)]'}`}>
            {description.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className={isDark ? 'text-primary shrink-0' : 'text-[oklch(0.45_0.18_260)] shrink-0'}>▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function App() {
  const [lang, setLang] = useState<"es" | "en">("es")
  const [isDark, setIsDark] = useState(true)

  const t = translations[lang]
  const workHistory = workHistoryData[lang]
  const certifications = certificationsData[lang]
  const competencyLevels = competencyLabels[lang]

  const technicalSkills = {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "CoffeeScript", "PHP", "HTML", ".NET Framework", "Arcade"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Microsoft SQL Server"],
    frameworks: ["Angular", "React", "Node.js", "Django", "TensorFlow", "scikit-learn", "Pandas", "FastAPI", "Uvicorn"],
    cloud: ["Google Cloud Platform", "AWS", "Oracle Cloud"],
    tools: ["Git", "GitHub", "JIRA", "VS Code", "Jupyter Notebook", "Linux", "ArcGIS", "Esri", "TOMTOM", "Qdrant"],
    ai: ["Deep Learning", "Machine Learning", "Data Mining", "NLP", "Redes Neuronales", "Prompt Engineering"],
    scripting: ["Batch Script (.bat)", "Shell Script (.sh)", "Bash"]
  }

  const handleDownloadCV = () => {
    window.print()
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const toggleLanguage = () => {
    setLang(lang === "es" ? "en" : "es")
  }

  const lightBg = 'bg-[oklch(0.97_0.005_260)]'
  const lightText = 'text-[oklch(0.25_0.02_260)]'
  const lightMuted = 'text-[oklch(0.45_0.02_260)]'
  const lightPrimary = 'text-[oklch(0.45_0.18_260)]'
  const lightAccent = 'text-[oklch(0.42_0.12_170)]'
  const lightCard = 'bg-white'
  const lightBorder = 'border-[oklch(0.88_0.01_260)]'

  return (
    <TooltipProvider>
      <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${isDark ? 'bg-background text-foreground' : `${lightBg} ${lightText}`}`}>
        <div className={`fixed inset-0 pointer-events-none overflow-hidden ${isDark ? '' : 'opacity-20'}`}>
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent animate-pulse-glow" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent/10 via-transparent to-transparent animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>

        <motion.div 
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 print:hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={toggleLanguage}
                size="icon"
                className={`w-12 h-12 rounded-full shadow-lg transition-all hover:scale-110 ${isDark ? 'bg-secondary/80 hover:bg-secondary border border-border/50' : `${lightCard} hover:bg-[oklch(0.95_0.005_260)] ${lightBorder} shadow-[oklch(0.88_0.01_260)]/50`}`}
              >
                <Translate size={22} weight="duotone" className={isDark ? 'text-accent' : lightAccent} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{lang === "es" ? "English" : "Español"}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={toggleTheme}
                size="icon"
                className={`w-12 h-12 rounded-full shadow-lg transition-all hover:scale-110 ${isDark ? 'bg-secondary/80 hover:bg-secondary border border-border/50' : `${lightCard} hover:bg-[oklch(0.95_0.005_260)] ${lightBorder} shadow-[oklch(0.88_0.01_260)]/50`}`}
              >
                {isDark ? (
                  <Sun size={22} weight="duotone" className="text-yellow-400" />
                ) : (
                  <Moon size={22} weight="duotone" className={lightPrimary} />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{t.switchTheme}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleDownloadCV}
                size="icon"
                className={`w-14 h-14 rounded-full shadow-lg transition-all hover:scale-110 ${isDark ? 'bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-primary/25' : 'bg-gradient-to-br from-[oklch(0.45_0.18_260)] to-[oklch(0.42_0.12_170)] hover:from-[oklch(0.40_0.18_260)] hover:to-[oklch(0.38_0.12_170)] shadow-[oklch(0.45_0.18_260)]/30'}`}
              >
                <DownloadSimple size={26} weight="bold" className="text-white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{t.downloadCV}</p>
            </TooltipContent>
          </Tooltip>
        </motion.div>

        <div className="relative">
          <header className="py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <motion.div 
                    className="inline-block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Badge className={`font-mono text-xs ${isDark ? 'bg-primary/20 text-primary border-primary/30' : 'bg-[oklch(0.45_0.18_260)]/10 text-[oklch(0.45_0.18_260)] border-[oklch(0.45_0.18_260)]/25'}`}>
                      &lt;/&gt; Systems Engineer
                    </Badge>
                  </motion.div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                    <span className={isDark ? 'bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text' : lightText}>
                      Álvaro Becker
                    </span>
                    <br />
                    <span className={isDark ? 'bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient' : 'bg-gradient-to-r from-[oklch(0.45_0.18_260)] via-[oklch(0.42_0.12_170)] to-[oklch(0.45_0.18_260)] bg-clip-text text-transparent animate-gradient'}>
                      Ruiz
                    </span>
                  </h1>
                  
                  <p className={`text-lg sm:text-xl max-w-2xl leading-relaxed ${isDark ? 'text-muted-foreground' : lightMuted}`}>
                    {t.intro}{" "}
                    <span className={isDark ? 'text-accent' : lightAccent}>{t.backend}</span>,{" "}
                    <span className={isDark ? 'text-primary' : lightPrimary}>{t.dataProcessing}</span> {lang === "es" ? "y" : "and"}{" "}
                    <span className={isDark ? 'text-accent' : lightAccent}>{t.automation}</span>. 
                    {t.passion}
                  </p>
                </div>

                <motion.div 
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a 
                    href="mailto:alvarobeckerruiz@gmail.com"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-sm group ${isDark ? 'bg-secondary/50 border-border hover:border-primary/50 hover:bg-primary/10' : `${lightCard} ${lightBorder} hover:border-[oklch(0.45_0.18_260)]/40 hover:bg-[oklch(0.45_0.18_260)]/5`}`}
                  >
                    <Envelope size={16} weight="duotone" className={isDark ? 'text-primary' : lightPrimary} />
                    <span className={`group-hover:text-foreground transition-colors ${isDark ? 'text-muted-foreground' : lightMuted}`}>alvarobeckerruiz@gmail.com</span>
                  </a>
                  <a 
                    href="tel:+56963576927"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-sm group ${isDark ? 'bg-secondary/50 border-border hover:border-primary/50 hover:bg-primary/10' : `${lightCard} ${lightBorder} hover:border-[oklch(0.45_0.18_260)]/40 hover:bg-[oklch(0.45_0.18_260)]/5`}`}
                  >
                    <Phone size={16} weight="duotone" className={isDark ? 'text-primary' : lightPrimary} />
                    <span className={`group-hover:text-foreground transition-colors ${isDark ? 'text-muted-foreground' : lightMuted}`}>+56 9 6357 6927</span>
                  </a>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm ${isDark ? 'bg-secondary/50 border-border' : `${lightCard} ${lightBorder}`}`}>
                    <MapPin size={16} weight="duotone" className={isDark ? 'text-accent' : lightAccent} />
                    <span className={isDark ? 'text-muted-foreground' : lightMuted}>Santiago, Chile</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a 
                    href="https://www.linkedin.com/in/aibecker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border transition-all hover:scale-110 ${isDark ? 'bg-secondary/50 border-border hover:border-primary hover:bg-primary/10' : `${lightCard} ${lightBorder} hover:border-[oklch(0.45_0.18_260)] hover:bg-[oklch(0.45_0.18_260)]/8`}`}
                  >
                    <LinkedinLogo size={24} weight="duotone" className={isDark ? 'text-primary' : lightPrimary} />
                  </a>
                  <a 
                    href="https://github.com/AlvaroBecker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border transition-all hover:scale-110 ${isDark ? 'bg-secondary/50 border-border hover:border-accent hover:bg-accent/10' : `${lightCard} ${lightBorder} hover:border-[oklch(0.42_0.12_170)] hover:bg-[oklch(0.42_0.12_170)]/8`}`}
                  >
                    <GithubLogo size={24} weight="duotone" className={isDark ? 'text-accent' : lightAccent} />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </header>

          <Separator className={`max-w-4xl mx-auto ${isDark ? 'bg-gradient-to-r from-transparent via-border to-transparent' : 'bg-gradient-to-r from-transparent via-[oklch(0.88_0.01_260)] to-transparent'}`} />

          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-3">
                  <Code size={28} weight="duotone" className={isDark ? 'text-primary' : lightPrimary} />
                  <h2 className="text-2xl sm:text-3xl font-bold">{t.technicalProfile}</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                  <SkillCategory title={t.languages} icon={Code} skills={technicalSkills.languages} isDark={isDark} />
                  <SkillCategory title={t.databases} icon={Database} skills={technicalSkills.databases} isDark={isDark} />
                  <SkillCategory title={t.frameworks} icon={Wrench} skills={technicalSkills.frameworks} isDark={isDark} />
                  <SkillCategory title={t.cloud} icon={Cloud} skills={technicalSkills.cloud} isDark={isDark} />
                  <SkillCategory title={t.tools} icon={Terminal} skills={technicalSkills.tools} isDark={isDark} />
                  <SkillCategory title={t.aiMl} icon={Brain} skills={technicalSkills.ai} isDark={isDark} />
                </div>

                <motion.div variants={fadeInUp}>
                  <SkillCategory title={t.scripting} icon={Terminal} skills={technicalSkills.scripting} isDark={isDark} />
                </motion.div>
              </motion.div>
            </div>
          </section>

          <Separator className={`max-w-4xl mx-auto ${isDark ? 'bg-gradient-to-r from-transparent via-border to-transparent' : 'bg-gradient-to-r from-transparent via-[oklch(0.88_0.01_260)] to-transparent'}`} />

          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-3">
                  <Brain size={28} weight="duotone" className={isDark ? 'text-accent' : lightAccent} />
                  <h2 className="text-2xl sm:text-3xl font-bold">{t.competencies}</h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {competencyLevels.map((skill) => (
                    <motion.div key={skill.name} variants={fadeInUp}>
                      <SkillBar name={skill.name} level={skill.level} lang={lang} isDark={isDark} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <Separator className={`max-w-4xl mx-auto ${isDark ? 'bg-gradient-to-r from-transparent via-border to-transparent' : 'bg-gradient-to-r from-transparent via-[oklch(0.88_0.01_260)] to-transparent'}`} />

          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-3">
                  <Briefcase size={28} weight="duotone" className={isDark ? 'text-primary' : lightPrimary} />
                  <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? '' : 'text-black'}`}>{t.workExperience}</h2>
                </motion.div>

                <div>
                  {workHistory.map((job, idx) => (
                    <TimelineItem key={idx} {...job} isDark={isDark} />
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <Separator className={`max-w-4xl mx-auto ${isDark ? 'bg-gradient-to-r from-transparent via-border to-transparent' : 'bg-gradient-to-r from-transparent via-[oklch(0.88_0.01_260)] to-transparent'}`} />

          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-3">
                  <GraduationCap size={28} weight="duotone" className={isDark ? 'text-accent' : lightAccent} />
                  <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? '' : 'text-black'}`}>{t.education}</h2>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className={`transition-colors ${isDark ? 'bg-card/50 border-border/50 hover:border-accent/30' : `${lightCard} ${lightBorder} hover:border-[oklch(0.42_0.12_170)]/40`}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h4 className={`font-semibold text-lg ${isDark ? '' : 'text-black'}`}>
                            {t.degree}
                          </h4>
                          <p className={isDark ? 'text-accent font-medium' : `${lightAccent} font-medium`}>
                            {t.degreeSpecialization}
                          </p>
                          <p className={isDark ? 'text-muted-foreground' : lightMuted}>
                            {t.institution}
                          </p>
                        </div>
                        <Badge variant="outline" className={`font-mono text-xs w-fit shrink-0 ${isDark ? 'border-accent/30 text-accent' : 'border-[oklch(0.42_0.12_170)]/30 text-[oklch(0.42_0.12_170)]'}`}>
                          Mar 2019 - Nov 2022
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <Separator className={`max-w-4xl mx-auto ${isDark ? 'bg-gradient-to-r from-transparent via-border to-transparent' : 'bg-gradient-to-r from-transparent via-[oklch(0.88_0.01_260)] to-transparent'}`} />

          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-3">
                  <Certificate size={28} weight="duotone" className={isDark ? 'text-primary' : lightPrimary} />
                  <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? '' : 'text-black'}`}>{t.certifications}</h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {certifications.map((cert, idx) => (
                    <motion.div key={idx} variants={fadeInUp}>
                      <Card className={`transition-all group h-full ${isDark ? 'bg-card/30 border-border/50 hover:border-primary/30' : `${lightCard} ${lightBorder} hover:border-[oklch(0.45_0.18_260)]/40`}`}>
                        <CardContent className="p-4 flex items-start gap-4">
                          <div className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold text-sm transition-colors ${isDark ? 'bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:from-primary/30 group-hover:to-accent/30' : 'bg-gradient-to-br from-[oklch(0.45_0.18_260)]/10 to-[oklch(0.42_0.12_170)]/10 text-[oklch(0.45_0.18_260)] group-hover:from-[oklch(0.45_0.18_260)]/15 group-hover:to-[oklch(0.42_0.12_170)]/15'}`}>
                            {cert.year}
                          </div>
                          <div className="min-w-0">
                            <h4 className={`font-medium leading-tight line-clamp-2 ${isDark ? '' : 'text-black'}`}>
                              {cert.name}
                            </h4>
                            {cert.issuer && (
                              <p className={`text-sm mt-1 ${isDark ? 'text-muted-foreground' : lightMuted}`}>{cert.issuer}</p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <footer className={`py-12 border-t ${isDark ? 'border-border/50' : 'border-[oklch(0.88_0.01_260)]'}`}>
            <div className="max-w-4xl mx-auto px-6">
              <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 text-sm ${isDark ? 'text-muted-foreground' : lightMuted}`}>
                <p className="font-mono">© 2025 Álvaro Becker Ruiz</p>
                <div className="flex items-center gap-4">
                  <a 
                    href="mailto:alvarobeckerruiz@gmail.com"
                    className={`transition-colors ${isDark ? 'hover:text-primary' : 'hover:text-[oklch(0.45_0.18_260)]'}`}
                  >
                    {t.contact}
                  </a>
                  <a 
                    href="https://github.com/AlvaroBecker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${isDark ? 'hover:text-accent' : 'hover:text-[oklch(0.42_0.12_170)]'}`}
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aibecker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${isDark ? 'hover:text-primary' : 'hover:text-[oklch(0.45_0.18_260)]'}`}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </TooltipProvider>
  )
}

export default App
