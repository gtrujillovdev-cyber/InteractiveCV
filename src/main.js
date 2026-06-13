import { Chart, registerables } from 'chart.js';
import './style.css';

Chart.register(...registerables);

// --- DATOS DE LOS PERFILES ---
const profiles = {
    ios: {
        title: "iOS Developer Junior | Swift · SwiftUI · XCUITest",
        summary: "Desarrollador iOS Junior con sólido dominio de Swift y SwiftUI. Especializado en aplicaciones móviles con arquitecturas limpias (MVVM), testing automatizado (XCUITest) y CI/CD con GitHub Actions. Combino disciplina operativa (Nº 1 militar) con visión de calidad de software para entregar apps robustas y escalables.",
        softSkills: [
            "✓ Resolución de bugs bajo presión",
            "✓ Código limpio y arquitecturas sólidas",
            "✓ Autodidacta y orientado a resultados",
            "✓ Colaboración en equipo ágil (Scrum)"
        ],
        techStack: [
            {
                title: "Swift / SwiftUI",
                desc: "Swift 5+, SwiftUI, UIKit, Combine, SwiftData, MVVM/MVC."
            },
            {
                title: "Testing iOS",
                desc: "XCUITest, XCTest, SnapshotTesting, TDD/BDD, Instruments."
            },
            {
                title: "CI/CD Mobile",
                desc: "GitHub Actions, Fastlane, TestFlight, App Store Connect."
            },
            {
                title: "Desarrollo",
                desc: "Swift, Python, Bash, C/C++, SQL, Java."
            }
        ],
        projects: [
            {
                title: "FinWealth — Gestión Patrimonial iOS (QA Focused)",
                desc: "App de finanzas personales con <b>+80% cobertura de tests automatizados</b>. Arquitectura MVVM, persistencia con SwiftData y pipeline CI/CD completo vía GitHub Actions.",
                badges: ["SWIFT", "SWIFTUI", "XCUITEST", "SWIFTDATA"],
                percentage: 85
            },
            {
                title: "BtcBriefing Agent — Automatización con Python & Docker",
                desc: "Agente autónomo con pipeline de CI/CD para despliegue en entornos Linux. Demuestra dominio de automatización, scripting y DevOps aplicado al ciclo de desarrollo.",
                badges: ["PYTHON", "DOCKER", "CI/CD", "LINUX"],
                percentage: 90
            }
        ],
        experience: [
            {
                title: "Formación en Desarrollo iOS & QA Automation",
                company: "DATACONTROL TECNOLOGÍAS DE LA INFORMACIÓN",
                period: "2025 – Actualidad",
                desc: "Desarrollo de aplicaciones iOS con Swift y SwiftUI, arquitectura MVVM y gestión de datos con SwiftData. Implementación de suites de tests automatizados con XCUITest y XCTest (cobertura +80%). Pipeline CI/CD con GitHub Actions para distribución automática vía TestFlight."
            },
            {
                title: "Responsable Técnico de Infraestructuras y Activos",
                company: "MINISTERIO DE DEFENSA — TERCIO 4º, LA LEGIÓN",
                period: "2020 – 2025",
                desc: "<b>Nº 1 del escalafón militar en formación.</b> Liderazgo y ejecución operativa en entornos de alta presión. Gestión de infraestructura tecnológica (+200 activos), redes y soporte técnico hardware/software. Resolución de incidencias críticas garantizando disponibilidad 24/7 de los sistemas."
            }
        ],
        education: [
            {
                title: "Téc. Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
                institution: "CESUR — Sevilla",
                period: "2024 – 2026",
                desc: "Programación orientada a objetos, arquitecturas de software, BBDD relacionales y desarrollo multiplataforma."
            }
        ],
        certifications: [
            "🏆 iOS/Swift & QA Bootcamp",
            "🎗️ AWS Cloud Practitioner (Roadmap 2026)",
            "🇬🇧 B2 First Certificate — British Council"
        ],
        radar: {
            labels: ['iOS/Swift', 'SwiftUI/UIKit', 'XCUITest/Testing', 'CI/CD Mobile', 'Clean Arch', 'Liderazgo'],
            data: [95, 90, 85, 80, 88, 92]
        },
        pdf: "/GTV_CV_iOS_ES2026.pdf"
    },
    sys: {
        title: "Systems & Software Quality Engineer | Especialista en Infraestructura",
        summary: "Especialista en Sistemas Linux, QA Automation e Infraestructuras Críticas. Galardonado como Nº 1 de promoción militar, aporto una disciplina absoluta y capacidad analítica para gestionar entornos de misión crítica. Mi enfoque une la robustez de la administración de sistemas con la excelencia del aseguramiento de calidad del software (SDET), experto en automatización (Bash/Python) y desarrollo de soluciones escalables.",
        softSkills: [
            "✓ Resolución de problemas bajo presión",
            "✓ Disciplina operativa y rigor técnico",
            "✓ Gestión integral de infraestructuras",
            "✓ Mentoría y liderazgo de equipos"
        ],
        techStack: [
            {
                title: "Linux Specialist",
                desc: "Admin avanzada, configuración en producción, monitoreo y soporte Help Desk."
            },
            {
                title: "Redes & Virtualización",
                desc: "Gestión de redes, VMware, Docker, servidor Apache, OCS Inventory."
            },
            {
                title: "Software Quality (QA)",
                desc: "XCUITest, XCTest, API Testing (Postman), TDD/BDD, Jira."
            },
            {
                title: "CI/CD & Desarrollo",
                desc: "GitHub Actions, Jenkins, Python, Bash, C/C++, Java, SQL."
            }
        ],
        projects: [
            {
                title: "BtcBriefing Agent — IA e Infraestructura",
                desc: "Pipeline de <b>CI/CD</b> para el despliegue automático de agentes en entornos Linux. Demuestra capacidades de administración de sistemas y scripting automatizado.",
                badges: ["PYTHON", "DOCKER", "LINUX", "AUTOMATION"],
                percentage: 95
            },
            {
                title: "FinWealth — Gestión Patrimonial (QA Focused)",
                desc: "App robusta con <b>+80% de cobertura de tests</b>. Enfoque profundo en calidad técnica, seguridad de infraestructura y automatización de pruebas.",
                badges: ["iOS", "SWIFT", "XCUITEST", "CALIDAD"],
                percentage: 85
            }
        ],
        experience: [
            {
                title: "Formación en Desarrollo de Software & QA Automation",
                company: "DATACONTROL TECNOLOGÍAS DE LA INFORMACIÓN",
                period: "2025 – Actualidad",
                desc: "Automatización integral de pruebas y procesos mediante Python scripts. Validación técnica de infraestructuras críticas y aseguramiento de calidad IT. Implementación de protocolos de CI/CD para mejora de la estabilidad del software."
            },
            {
                title: "Responsable Técnico de Infraestructuras y Activos",
                company: "MINISTERIO DE DEFENSA — TERCIO 4º, LA LEGIÓN",
                period: "2020 – 2025",
                desc: "<b>Nº 1 del escalafón militar en formación.</b> Liderazgo y ejecución operativa. Gestión integral de la infraestructura tecnológica (+200 activos) y redes. Implementación de protocolos de mantenimiento preventivo y QA militar. Resolución de incidencias críticas hardware/software bajo condiciones extremas."
            },
            {
                title: "Gerente de Unidad de Negocio",
                company: "MERCAVAT 2014 SL",
                period: "2014 – 2019",
                desc: "Gestión operativa de procesos y análisis de KPIs para optimización de recursos y maximización de la eficiencia."
            }
        ],
        education: [
            {
                title: "Téc. Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
                institution: "CESUR — Sevilla",
                period: "2024 – 2026",
                desc: "Especializado en arquitectura de sistemas, administración y gestión de redes, bases de datos relacionales y calidad del software."
            }
        ],
        certifications: [
            "🎗️ AWS Cloud Practitioner (Roadmap 2026)",
            "🏆 VMware & Docker Virtualization Course",
            "🇬🇧 B2 First Certificate — British Council"
        ],
        radar: {
            labels: ['Sistemas Linux', 'Virtualización', 'QA Automation', 'CI/CD Pipelines', 'Desarrollo/Scripting', 'Rigor Técnico'],
            data: [95, 88, 90, 85, 92, 95]
        },
        pdf: "/GTV_CV_Sys_ES2026.pdf"
    },
    ai: {
        title: "AI Engineer & Agentic Developer | LLMs · RAG · Python",
        summary: "Especialista en Ingeniería de Inteligencia Artificial y Desarrollo Agéntico. Con experiencia en la integración de modelos de lenguaje (LLMs), diseño de pipelines RAG avanzados y orquestación de agentes autónomos. Mi enfoque combina la rigurosidad del desarrollo de software (QA/SDET) con la innovación en IA aplicada para construir soluciones automatizadas y cognitivas de alto rendimiento.",
        softSkills: [
            "✓ Resolución de problemas bajo presión",
            "✓ Arquitectura de agentes cognitivos",
            "✓ Autodidacta y orientado a resultados",
            "✓ Colaboración en equipo ágil (Scrum)"
        ],
        techStack: [
            {
                title: "Inteligencia Artificial",
                desc: "LLMs (OpenAI, Gemini, Claude), CoreML, NaturalLanguage."
            },
            {
                title: "Agentes y RAG",
                desc: "LangChain, CrewAI, RAG, Chunking Semántico, Vector DBs (Chroma, Pinecone)."
            },
            {
                title: "Desarrollo IA",
                desc: "Python, FastAPI, Hugging Face, PyTorch."
            },
            {
                title: "DevOps & QA para IA",
                desc: "Docker, Google Cloud Run, LangSmith (monitoreo), pytest."
            }
        ],
        projects: [
            {
                title: "RehApp — IA Local & Adaptive Plan",
                desc: "Integración de procesamiento de informes médicos mediante <b>NLP local (NaturalLanguage)</b> y <b>CoreML</b> para generación adaptativa de planes de recuperación física.",
                badges: ["COREML", "NATURAL_LANGUAGE", "SWIFTDATA", "IOS"],
                percentage: 92
            },
            {
                title: "BtcBriefing Agent — IA e Infraestructura",
                desc: "Agente autónomo integrado con APIs de predicción y pipelines CI/CD automatizados para el despliegue rápido de servicios financieros.",
                badges: ["PYTHON", "DOCKER", "CI/CD", "AGENTIC"],
                percentage: 95
            }
        ],
        experience: [
            {
                title: "Formación en Desarrollo de Software, QA & IA",
                company: "DATACONTROL TECNOLOGÍAS DE LA INFORMACIÓN",
                period: "2025 – Actualidad",
                desc: "Desarrollo y optimización de flujos basados en agentes autónomos e integración de modelos predictivos locales y en la nube. Automatización de pruebas unitarias y funcionales."
            },
            {
                title: "Responsable Técnico de Infraestructuras y Activos",
                company: "MINISTERIO DE DEFENSA — TERCIO 4º, LA LEGIÓN",
                period: "2020 – 2025",
                desc: "<b>Nº 1 del escalafón militar en formación.</b> Liderazgo operativo. Gestión y mantenimiento de activos de TI, asegurando el despliegue de sistemas seguros bajo condiciones críticas."
            }
        ],
        education: [
            {
                title: "Téc. Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
                institution: "CESUR — Sevilla",
                period: "2024 – 2026",
                desc: "Especializado en arquitectura de sistemas, bases de datos y algoritmos de optimización."
            }
        ],
        certifications: [
            "🎗️ AWS Cloud Practitioner (Roadmap 2026)",
            "🏆 Deep Learning & Generative AI Bootcamp",
            "🇬🇧 B2 First Certificate — British Council"
        ],
        radar: {
            labels: ['LLMs/RAG', 'Agentic Workflows', 'Python/FastAPI', 'CoreML/Local IA', 'QA & Evals', 'Liderazgo'],
            data: [90, 92, 95, 85, 88, 92]
        },
        pdf: "/GTV_CV_IA_ES2026.pdf"
    }
};

let currentProfile = "ios";
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
                        <h4 class="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-2">${project.title}</h4>
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
