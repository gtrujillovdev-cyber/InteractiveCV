import { Chart, registerables } from 'chart.js';
import './style.css';

Chart.register(...registerables);

// --- DATOS DE LOS PERFILES (100% alineados con repositorios reales y CV 2027) ---
const realExperience = [
    {
        title: "Programador Full Stack | Prácticas de empresa",
        company: "DataControl Tecnologías de la Información",
        period: "Marzo – Junio 2026",
        desc: "Prácticas curriculares de Desarrollo de Aplicaciones Multiplataforma (DAM), participando en desarrollo Full Stack, automatización y mantenimiento de software."
    },
    {
        title: "Soldado | Funciones de responsable técnico",
        company: "Tercio Alejandro Farnesio 4º de La Legión, Ejército de Tierra",
        period: "2020 – 2025",
        desc: "Desempeño de funciones de responsable técnico, gestión integral de infraestructuras, mentoría y liderazgo de equipos. Disciplina operativa y resolución de problemas bajo presión."
    },
    {
        title: "Gerente y dependiente",
        company: "MERCAVAT 2014 SL",
        period: "2014 – 2019",
        desc: "Funciones de gerencia operativa, coordinación y atención directa al público."
    }
];

const realEducation = [
    {
        title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
        institution: "CESUR — Sevilla",
        period: "2024 – Junio 2026",
        desc: "Formación en desarrollo de aplicaciones multiplataforma, bases de datos y calidad de software. Proyecto fin de ciclo para iOS: FinWealth."
    },
    {
        title: "Bachillerato",
        institution: "Colegio Sagrado Corazón (Esclavas) — Sevilla",
        period: "Completado",
        desc: "Formación preuniversitaria completa."
    }
];

const realCertifications = [
    "🇬🇧 B2 First Certificate — British Council (Acreditado)",
    "⚙️ GitHub Actions CI/CD & Docker Workflows en Producción",
    "📱 Desarrollo Nativo iOS (Swift · SwiftUI · SwiftData · XCTest)"
];

const realSoftSkills = [
    "✓ Resolución de problemas bajo presión",
    "✓ Disciplina operativa y rigor técnico",
    "✓ Gestión integral de infraestructuras",
    "✓ Mentoría y liderazgo de equipos"
];

const profiles = {
    ai: {
        title: "Desarrollador Python & Automatización IA | FastAPI · Playwright · Gemini",
        summary: "Técnico Superior en DAM enfocado en backend Python, automatización de flujos con Playwright e integración de APIs de LLMs (Gemini). Diseño pipelines robustos con persistencia atómica, bots de control en Telegram y suites de pruebas en Pytest.",
        softSkills: realSoftSkills,
        techStack: [
            {
                title: "Backend & APIs Python",
                desc: "Python, FastAPI, Flask, Uvicorn, Pydantic, WebSockets, SQLite, Redis."
            },
            {
                title: "IA & Automatización",
                desc: "Google Gemini API (google-genai), Playwright, python-telegram-bot, BeautifulSoup4, curl_cffi."
            },
            {
                title: "Multimedia & Datos",
                desc: "FFmpeg, Pandas, NumPy, PyArrow, Pillow, pypdf."
            },
            {
                title: "Testing & CI/CD",
                desc: "Pytest, GitHub Actions, Docker, Git."
            }
        ],
        projects: [
            {
                title: "JobSeeker — Motor ATS & Automatización",
                url: "https://github.com/gtrujillovdev-cyber/JobSeeker",
                desc: "Análisis ATS de ofertas IT y automatización de flujos de candidatura con <b>Python, Playwright, Gemini y Telegram</b> con revisión humana.",
                badges: ["PYTHON", "PLAYWRIGHT", "GEMINI", "PYTEST"],
                percentage: 95
            },
            {
                title: "GTAVIHub — Pipeline Multimedia 24/7",
                url: "https://github.com/gtrujillovdev-cyber/GTAVIHub",
                desc: "Pipeline automatizado de ingesta, TTS, renderizado por hardware con <b>FFmpeg</b>, Gemini y distribución controlada por Telegram.",
                badges: ["PYTHON", "FFMPEG", "GEMINI", "TELEGRAM"],
                percentage: 92
            },
            {
                title: "GaBookAutoDownloader — Failover Multi-Mirror",
                url: "https://github.com/gtrujillovdev-cyber/GaBookAutoDownloader",
                desc: "Servicio modular en Python con interfaz Telegram, rotación de mirrors (failover), caché <b>Redis</b> y persistencia JSON atómica.",
                badges: ["PYTHON", "DOCKER", "REDIS", "TELEGRAM"],
                percentage: 90
            },
            {
                title: "BtcBriefing — Automatización & APIs",
                url: "https://github.com/gtrujillovdev-cyber/BtcBriefing_iOS_ShortCut",
                desc: "Servicio en <b>FastAPI, Pandas y Matplotlib</b> desplegado con Docker y GitHub Actions para briefings integrados con Atajos de iOS.",
                badges: ["FASTAPI", "PANDAS", "DOCKER", "CI/CD"],
                percentage: 88
            }
        ],
        experience: realExperience,
        education: realEducation,
        certifications: realCertifications,
        radar: {
            labels: ['Python/FastAPI', 'Playwright', 'Gemini APIs', 'Docker/CI', 'Pytest/QA', 'Sistemas'],
            data: [95, 92, 90, 86, 88, 90]
        },
        pdf: "/GTVCV_2027_ATS.pdf"
    },
    sys: {
        title: "Sistemas Linux, Redes & DevOps Junior | Docker · FastAPI · Bash",
        summary: "Especialista en sistemas Unix/Linux, redes locales y automatización de servicios en contenedores Docker. Combino disciplina operativa (5 años en el Ejército de Tierra como responsable técnico) con observabilidad, scripting en Python/Bash y pipelines CI/CD.",
        softSkills: realSoftSkills,
        techStack: [
            {
                title: "Sistemas & Redes",
                desc: "Linux CLI, redes TCP/IP, Zeroconf, ADB, WebSockets, soporte Help Desk."
            },
            {
                title: "Contenedores & CI/CD",
                desc: "Docker, Docker Compose, GitHub Actions, despliegue automatizado."
            },
            {
                title: "Telemetría & Scripting",
                desc: "Python, Bash, psutil, FastAPI, manejo de señales POSIX (SIGTERM/SIGINT)."
            },
            {
                title: "Calidad & Control",
                desc: "Pytest, logs estructurados JSONL, Git."
            }
        ],
        projects: [
            {
                title: "DevOps (system-monitor-cli) — Telemetría POSIX",
                url: "https://github.com/gtrujillovdev-cyber/DevOps",
                desc: "Monitor de sistemas Unix/Linux con <b>FastAPI y Docker Compose</b>, recolección con psutil, logs JSONL y parada limpia vía SIGTERM/SIGINT.",
                badges: ["LINUX", "DOCKER", "FASTAPI", "PSUTIL"],
                percentage: 94
            },
            {
                title: "Tv-streamer — Streaming Local & Google Cast",
                url: "https://github.com/gtrujillovdev-cyber/tv-streamer",
                desc: "Servidor multimedia local en Python con autodescubrimiento <b>Zeroconf / Google Cast</b> en red LAN y contenedor Docker.",
                badges: ["PYTHON", "DOCKER", "NETWORKING", "ZEROCONF"],
                percentage: 90
            },
            {
                title: "mando-tv — Control Multi-TV en LAN",
                url: "https://github.com/gtrujillovdev-cyber/mando-tv",
                desc: "Integración de televisores webOS y Android TV mediante API REST, <b>WebSocket y ADB</b> en Raspberry Pi con control desde Siri y Atajos.",
                badges: ["WEBSOCKET", "ADB", "RASPBERRY PI", "PYTHON"],
                percentage: 90
            },
            {
                title: "InteractiveCV — Web & CI/CD",
                url: "https://github.com/gtrujillovdev-cyber/InteractiveCV",
                desc: "Portafolio técnico construido con <b>Vite, Tailwind CSS v4 y Chart.js</b> con build y despliegue automático en GitHub Actions.",
                badges: ["VITE", "TAILWIND", "CHART.JS", "GITHUB ACTIONS"],
                percentage: 88
            }
        ],
        experience: realExperience,
        education: realEducation,
        certifications: realCertifications,
        radar: {
            labels: ['Linux CLI', 'Docker/Compose', 'Redes/Sockets', 'FastAPI/Python', 'CI/CD', 'Rigor Técnico'],
            data: [94, 90, 90, 92, 86, 95]
        },
        pdf: "/GTVCV_2027_ATS.pdf"
    },
    ios: {
        title: "Desarrollador Multiplataforma DAM & QA | Swift · SwiftUI · XCTest",
        summary: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) con foco en desarrollo nativo Apple (Swift, SwiftUI, SwiftData), automatización de pruebas (XCTest, XCUITest, Pytest, Playwright) y frontend moderno con Vite y Tailwind CSS.",
        softSkills: realSoftSkills,
        techStack: [
            {
                title: "Ecosistema Apple (iOS/macOS)",
                desc: "Swift, SwiftUI, SwiftData, integración con Siri y Atajos (Shortcuts)."
            },
            {
                title: "Testing & QA",
                desc: "XCTest, XCUITest, Pytest, Playwright."
            },
            {
                title: "Multiplataforma & Web",
                desc: "Java, JavaScript, Vite, Tailwind CSS, Chart.js, SQL."
            },
            {
                title: "Automatización & Git",
                desc: "Python, FastAPI, GitHub Actions (CI/CD), Git."
            }
        ],
        projects: [
            {
                title: "FinWealth — Gestión Patrimonial iOS",
                desc: "Aplicación iOS de gestión patrimonial desarrollada con <b>Swift y SwiftData</b>, respaldada con pruebas unitarias y UI en <b>XCTest y XCUITest</b>.",
                badges: ["SWIFT", "SWIFTDATA", "XCTEST", "XCUITEST"],
                percentage: 90
            },
            {
                title: "mando-tv — Control iOS/Siri para Smart TVs",
                url: "https://github.com/gtrujillovdev-cyber/mando-tv",
                desc: "Servidor Python con PWA móvil y accesos directos nativos desde <b>Siri y Atajos de iOS</b> vía WebSocket y ADB.",
                badges: ["SIRI", "ATAJOS iOS", "WEBSOCKET", "PYTHON"],
                percentage: 90
            },
            {
                title: "InteractiveCV — Frontend Vite + Tailwind v4",
                url: "https://github.com/gtrujillovdev-cyber/InteractiveCV",
                desc: "CV web interactivo con filtrado dinámico de perfiles técnicos, gráficos con Chart.js y pipeline CI en <b>GitHub Actions</b>.",
                badges: ["VITE", "TAILWIND", "JAVASCRIPT", "CI/CD"],
                percentage: 88
            },
            {
                title: "JobSeeker — QA & Playwright Automation",
                url: "https://github.com/gtrujillovdev-cyber/JobSeeker",
                desc: "Plataforma de automatización en navegador con <b>Playwright</b>, análisis ATS y batería de tests unitarios en <b>Pytest</b>.",
                badges: ["PLAYWRIGHT", "PYTEST", "PYTHON", "ATS"],
                percentage: 94
            }
        ],
        experience: realExperience,
        education: realEducation,
        certifications: realCertifications,
        radar: {
            labels: ['Swift/SwiftUI', 'XCTest/XCUITest', 'Playwright/Pytest', 'Web (Vite/JS)', 'Java/SQL', 'CI/CD'],
            data: [88, 86, 92, 86, 85, 88]
        },
        pdf: "/GTVCV_2027_ATS.pdf"
    }
};

let currentProfile = "ai";
let radarChart = null;

// --- ELEMENTOS DEL DOM ---
const profileTitle = document.getElementById("profileTitle");
const profileSummary = document.getElementById("profileSummary");
const softSkillsList = document.getElementById("softSkills");
const techStackGrid = document.getElementById("techStackGrid");
const projectsContainer = document.getElementById("projectsContainer");
const timelineContainer = document.getElementById("timelineContainer");
const educationContainer = document.getElementById("educationContainer");
const certificationsList = document.getElementById("certificationsList");
const downloadCV = document.getElementById("downloadCV");

const btnProfileIOS = document.getElementById("btnProfileIOS");
const btnProfileSys = document.getElementById("btnProfileSys");
const btnProfileAI = document.getElementById("btnProfileAI");

const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

// --- GESTIÓN DE TEMA CLARO / OSCURO ---
const isDarkMode = () => document.documentElement.classList.contains('dark');

const getRadarColors = () => isDarkMode() ?
    { bg: 'rgba(129, 140, 248, 0.15)', border: '#818cf8', grid: '#334155', text: '#94a3b8' } :
    { bg: 'rgba(79, 70, 229, 0.1)', border: '#4f46e5', grid: '#e2e8f0', text: '#64748b' };

function updateThemeUI() {
    const dark = isDarkMode();
    themeLabel.innerText = dark ? 'DARK' : 'LIGHT';
    renderRadarChart();
}

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    updateThemeUI();
});

// --- RENDERIZADO DEL GRÁFICO DE RADAR ---
function renderRadarChart() {
    const colors = getRadarColors();
    const ctx = document.getElementById('skillsRadar');
    
    if (!ctx) return;
    
    if (radarChart) {
        radarChart.destroy();
    }
    
    const pData = profiles[currentProfile].radar;
    
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: pData.labels,
            datasets: [{
                label: 'NIVEL TÉCNICO',
                data: pData.data,
                backgroundColor: colors.bg,
                borderColor: colors.border,
                borderWidth: 2,
                pointRadius: 4,
                pointBackgroundColor: colors.border,
                pointBorderColor: isDarkMode() ? '#0f172a' : '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    grid: { color: colors.grid },
                    angleLines: { color: colors.grid },
                    pointLabels: {
                        color: colors.text,
                        font: { size: 9, family: "'JetBrains Mono', monospace", weight: '500' }
                    },
                    ticks: { display: false },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#0F172A',
                    titleFont: { size: 12 },
                    bodyFont: { size: 12 }
                }
            }
        }
    });
}

// --- ACTUALIZACIÓN DE CONTENIDO CON TRANSICIÓN ---
function applyProfileContent() {
    const data = profiles[currentProfile];
    
    // 1. Añadir clase de fade-out
    const elementsToAnimate = [
        profileTitle, profileSummary, softSkillsList,
        techStackGrid, projectsContainer, timelineContainer,
        educationContainer, certificationsList
    ];
    
    elementsToAnimate.forEach(el => {
        el.classList.add("fade-out");
        el.classList.remove("fade-in");
    });
    
    // 2. Esperar a que la animación termine, actualizar HTML y hacer fade-in
    setTimeout(() => {
        // Título, resumen y PDF de descarga
        profileTitle.innerText = data.title;
        profileSummary.innerText = data.summary;
        if (downloadCV) {
            downloadCV.href = data.pdf;
        }
        
        // Habilidades blandas
        softSkillsList.innerHTML = data.softSkills
            .map(skill => `<li class="flex items-center gap-2">${skill}</li>`)
            .join("");
            
        // Tech Stack
        techStackGrid.innerHTML = data.techStack
            .map(tech => `
                <div>
                    <span class="text-[10px] font-bold text-indigo-500 font-mono tracking-tighter uppercase">// ${tech.title}</span>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">${tech.desc}</p>
                </div>
            `).join("");
            
        // Proyectos
        projectsContainer.innerHTML = data.projects
            .map(project => `
                <div class="group flex flex-col justify-between">
                    <div>
                        <div class="flex items-start justify-between gap-2 mb-2">
                            <h4 class="font-bold text-sm text-indigo-600 dark:text-indigo-400">${project.title}</h4>
                            ${project.url ? `<a href="${project.url}" target="_blank" class="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-600 hover:text-white transition">Repo ↗</a>` : ""}
                        </div>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            ${project.desc}
                        </p>
                    </div>
                    <div>
                        <div class="flex flex-wrap gap-1 mb-4">
                            ${project.badges.map(b => `<span class="font-mono text-[9px] px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-500">${b}</span>`).join("")}
                        </div>
                        <div class="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div class="h-full bg-indigo-500 transition-all duration-1000" style="width: ${project.percentage}%"></div>
                        </div>
                    </div>
                </div>
            `).join("");
            
        // Experiencia laboral (Línea de tiempo)
        timelineContainer.innerHTML = data.experience
            .map((exp, index) => `
                <div class="relative pl-8">
                    <!-- Dot indicador -->
                    <div class="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-indigo-600 bg-white dark:bg-slate-950 z-10"></div>
                    <div class="flex flex-col sm:flex-row justify-between items-baseline gap-2 mb-2">
                        <h4 class="font-bold text-sm uppercase text-slate-800 dark:text-slate-200">${exp.title}</h4>
                        <span class="text-[10px] font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded uppercase font-semibold">
                            ${exp.period}
                        </span>
                    </div>
                    <div class="text-[10px] font-bold text-indigo-500 font-mono mb-2 uppercase">${exp.company}</div>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                        ${exp.desc}
                    </p>
                </div>
            `).join("");
            
        // Educación
        educationContainer.innerHTML = data.education
            .map(edu => `
                <div>
                    <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase">${edu.title}</h4>
                    <p class="text-[10px] text-slate-500 font-mono mt-0.5">${edu.institution} | ${edu.period}</p>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 italic leading-relaxed">
                        ${edu.desc}
                    </p>
                </div>
            `).join("");
            
        // Certificaciones
        certificationsList.innerHTML = data.certifications
            .map(cert => `<li class="flex items-center gap-2 text-slate-700 dark:text-slate-300">${cert}</li>`)
            .join("");
            
        // Renderizar Radar
        renderRadarChart();
        
        // Ejecutar fade-in
        elementsToAnimate.forEach(el => {
            el.classList.remove("fade-out");
            el.classList.add("fade-in");
        });
    }, 250);
}

// --- SELECTORES DE PERFIL EN BOTONES ---
function switchProfile(profile) {
    if (currentProfile === profile) return;
    
    currentProfile = profile;
    
    // Lista de todos los botones de perfiles
    const profileButtons = [
        { id: "ios", element: btnProfileIOS },
        { id: "sys", element: btnProfileSys },
        { id: "ai", element: btnProfileAI }
    ];
    
    profileButtons.forEach(btn => {
        if (btn.id === profile) {
            btn.element.className = "px-3 py-1 rounded-full text-[10px] md:text-xs font-bold font-mono transition-all duration-300 cursor-pointer bg-indigo-600 text-white shadow";
        } else {
            btn.element.className = "px-3 py-1 rounded-full text-[10px] md:text-xs font-bold font-mono transition-all duration-300 cursor-pointer text-slate-400 hover:text-slate-200 dark:hover:text-white";
        }
    });
    
    applyProfileContent();
}

btnProfileIOS.addEventListener("click", () => switchProfile("ios"));
btnProfileSys.addEventListener("click", () => switchProfile("sys"));
btnProfileAI.addEventListener("click", () => switchProfile("ai"));

// --- INICIALIZACIÓN ---
window.addEventListener('DOMContentLoaded', () => {
    updateThemeUI();
    applyProfileContent();
});
