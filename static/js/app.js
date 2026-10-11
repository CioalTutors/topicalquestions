// Cioal Tutors IGCSE Test Builder - Static Serverless Frontend (GitHub Pages Edition)
// Supports Physics (0625), Chemistry (0620) & Mathematics (0580) completely client-side

const SUBJECT_CONFIG = {
    Physics: {
        code: "0625",
        badge: "IGCSE Physics 0625",
        docTitle: "Cioal Tutor Topical Questions • IGCSE Physics (0625)",
        subtitle: "Cambridge 2026–2028 Syllabus Question Bank & Test Builder",
        examLabel: "Cambridge IGCSE™ Physics (0625)",
        defaultTestTitle: "Weekly Physics Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. refraction, density, s24)...",
        storageKey: "cioal_test_paper",
        syllabusUrl: "data/syllabus.json",
        questionsUrl: "data/questions.json",
        jsBundleUrl: "data/physics_db.js",
        catDir: "Categorized_Questions",
        papers: [
            { value: "1", label: "Paper 1 (MCQ Core)", tier: "Core" },
            { value: "2", label: "Paper 2 (MCQ Extended)", tier: "Extended" },
            { value: "3", label: "Paper 3 (Theory Core)", tier: "Core" },
            { value: "4", label: "Paper 4 (Theory Extended)", tier: "Extended" },
            { value: "5", label: "Paper 5 (Practical Test)", tier: "Both" },
            { value: "6", label: "Paper 6 (Alt to Practical)", tier: "Both" }
        ]
    },
    Chemistry: {
        code: "0620",
        badge: "IGCSE Chemistry 0620",
        docTitle: "Cioal Tutor Topical Questions • IGCSE Chemistry (0620)",
        subtitle: "Cambridge 2026–2028 Syllabus Question Bank & Test Builder",
        examLabel: "Cambridge IGCSE™ Chemistry (0620)",
        defaultTestTitle: "Weekly Chemistry Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. electrolysis, titration, alkene, s26)...",
        storageKey: "cioal_test_paper_chemistry",
        syllabusUrl: "data/chemistry_syllabus.json",
        questionsUrl: "data/chemistry_questions.json",
        jsBundleUrl: "data/chemistry_db.js",
        catDir: "Categorized_Questions_Chemistry",
        papers: [
            { value: "1", label: "Paper 1 (MCQ Core)", tier: "Core" },
            { value: "2", label: "Paper 2 (MCQ Extended)", tier: "Extended" },
            { value: "3", label: "Paper 3 (Theory Core)", tier: "Core" },
            { value: "4", label: "Paper 4 (Theory Extended)", tier: "Extended" },
            { value: "5", label: "Paper 5 (Practical Test)", tier: "Both" },
            { value: "6", label: "Paper 6 (Alt to Practical)", tier: "Both" }
        ]
    },
    Math: {
        code: "0580",
        badge: "IGCSE Math 0580",
        docTitle: "Cioal Tutor Topical Questions • IGCSE Mathematics (0580)",
        subtitle: "Cambridge 2025–2027 Syllabus Question Bank & Test Builder",
        examLabel: "Cambridge IGCSE™ Mathematics (0580)",
        defaultTestTitle: "Weekly Mathematics Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. trigonometry, circle, bearings, s26)...",
        storageKey: "cioal_test_paper_math",
        syllabusUrl: "data/math_syllabus.json",
        questionsUrl: "data/math_questions.json",
        jsBundleUrl: "data/math_db.js",
        catDir: "Categorized_Questions_Math",
        papers: [
            { value: "1", label: "Paper 1 (Core • Non-Calc / Short)", tier: "Core" },
            { value: "2", label: "Paper 2 (Extended • Non-Calc / Short)", tier: "Extended" },
            { value: "3", label: "Paper 3 (Core • Calculator / Long)", tier: "Core" },
            { value: "4", label: "Paper 4 (Extended • Calculator / Long)", tier: "Extended" }
        ]
    }
};

// In-memory cache of loaded JSON databases per subject
const SUBJECT_DB_CACHE = {};

let appState = {
    subject: "Physics",
    syllabus: [],
    selectedYears: [],
    selectedMonths: [],
    selectedTiers: [],
    selectedPaperTypes: [],
    selectedChapters: [],
    selectedSubtopics: [],
    searchQuery: "",
    showMarkScheme: false,
    currentPage: 1,
    perPage: 15,
    totalPages: 1,
    totalMatching: 0,
    testPaperQuestions: [] // Array of question objects
};

let splashState = {
    board: "Cambridge",
    level: "IGCSE / O Level"
};

let currentQuestionsData = [];
let isTimeManuallyEdited = false;

// Auto-calculate time allowed: total marks * 1.125
function calculateAutoTime(totalMarks) {
    if (!totalMarks || totalMarks <= 0) return "0 minutes";
    const minutes = Math.max(1, Math.round(totalMarks * 1.125));
    return `${minutes} minutes`;
}

// Helper to load a JS bundle script dynamically (works over file:// as well as http/https)
function loadScriptBundle(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error(`Failed to load script bundle: ${src}`));
        document.head.appendChild(s);
    });
}

// Load and cache static JSON database for a subject
async function ensureSubjectDatabaseLoaded(subject) {
    const subjKey = SUBJECT_CONFIG[subject] ? subject : "Physics";
    if (SUBJECT_DB_CACHE[subjKey]) {
        return SUBJECT_DB_CACHE[subjKey];
    }

    const cfg = SUBJECT_CONFIG[subjKey];
    let syllabusData = null;
    let questionsData = null;

    if (window.CIOAL_STATIC_DB && window.CIOAL_STATIC_DB[subjKey]) {
        syllabusData = window.CIOAL_STATIC_DB[subjKey].syllabus;
        questionsData = window.CIOAL_STATIC_DB[subjKey].questions;
    } else if (window.location.protocol === "file:") {
        await loadScriptBundle(cfg.jsBundleUrl);
        if (window.CIOAL_STATIC_DB && window.CIOAL_STATIC_DB[subjKey]) {
            syllabusData = window.CIOAL_STATIC_DB[subjKey].syllabus;
            questionsData = window.CIOAL_STATIC_DB[subjKey].questions;
        }
    } else {
        try {
            [syllabusData, questionsData] = await Promise.all([
                fetch(cfg.syllabusUrl).then(r => {
                    if (!r.ok) throw new Error(`Failed to load ${cfg.syllabusUrl}`);
                    return r.json();
                }),
                fetch(cfg.questionsUrl).then(r => {
                    if (!r.ok) throw new Error(`Failed to load ${cfg.questionsUrl}`);
                    return r.json();
                })
            ]);
        } catch (fetchErr) {
            await loadScriptBundle(cfg.jsBundleUrl);
            if (window.CIOAL_STATIC_DB && window.CIOAL_STATIC_DB[subjKey]) {
                syllabusData = window.CIOAL_STATIC_DB[subjKey].syllabus;
                questionsData = window.CIOAL_STATIC_DB[subjKey].questions;
            } else {
                throw fetchErr;
            }
        }
    }

    const syllabus = Array.isArray(syllabusData)
        ? syllabusData
        : (syllabusData && syllabusData.chapters ? syllabusData.chapters : []);
    const subMetaMap = {};
    syllabus.forEach(ch => {
        (ch.subtopics || []).forEach(sub => {
            subMetaMap[String(sub.id)] = {
                chapter_id: ch.id,
                chapter_name: ch.name,
                subtopic_id: sub.id,
                subtopic_name: sub.name
            };
        });
    });

    const questionsById = {};
    questionsData.forEach(q => {
        q.paper_type = String(q.paper_type ?? q.paper_num ?? "");
        // Ensure static relative image URLs are set
        if (!q.image_url || q.image_url.startsWith("/") || q.image_url.endsWith("/")) {
            const relImg = (q.image_rel_path || q.image_path || "").replace(/\\/g, "/");
            q.image_url = relImg ? encodeURI(`${cfg.catDir}/${relImg}`) : "";
        }
        if (!q.is_mc && (!q.ms_image_url || q.ms_image_url.startsWith("/") || q.ms_image_url.endsWith("/"))) {
            const relMs = (q.ms_image_rel_path || q.ms_image_path || "").replace(/\\/g, "/");
            q.ms_image_url = relMs ? encodeURI(`${cfg.catDir}/${relMs}`) : null;
        }
        questionsById[q.id] = q;
    });

    const dbEntry = {
        syllabus,
        questions: questionsData,
        questionsById,
        subMetaMap
    };
    SUBJECT_DB_CACHE[subjKey] = dbEntry;
    return dbEntry;
}

// Client-side search & multi-subtopic/multi-chapter filtering matching app.py
function searchQuestionsStatic(db, payload) {
    const years = (payload.years || []).map(y => parseInt(y));
    const months = payload.months || [];
    const tiers = payload.tiers || [];
    const paperTypes = (payload.paper_types || []).map(p => String(p));
    const chapters = (payload.chapters || []).map(c => parseInt(c));
    const subtopics = (payload.subtopics || []).map(s => String(s));
    const searchQuery = (payload.search_query || "").trim().toLowerCase();

    const subtopicSet = new Set(subtopics);
    const chapterSet = new Set(chapters);

    const results = [];
    for (let i = 0; i < db.questions.length; i++) {
        const q = db.questions[i];

        if (years.length > 0 && !years.includes(parseInt(q.year))) continue;
        if (months.length > 0 && !months.includes(q.month)) continue;
        if (tiers.length > 0 && !tiers.includes(q.tier)) continue;
        const qPaperType = String(q.paper_type ?? q.paper_num ?? "");
        if (paperTypes.length > 0 && !paperTypes.includes(qPaperType)) continue;

        let matchedSub = null;
        if (subtopicSet.size > 0) {
            const qSubs = (q.all_subtopic_ids && q.all_subtopic_ids.length > 0)
                ? q.all_subtopic_ids.map(String)
                : [String(q.subtopic_id)];
            const matchingSubs = qSubs.filter(s => subtopicSet.has(s));
            if (matchingSubs.length === 0) continue;
            matchedSub = matchingSubs.includes(String(q.subtopic_id))
                ? String(q.subtopic_id)
                : matchingSubs[0];
        } else if (chapterSet.size > 0) {
            const qChs = (q.all_chapter_ids && q.all_chapter_ids.length > 0)
                ? q.all_chapter_ids.map(Number)
                : [Number(q.chapter_id)];
            const matchingChs = qChs.filter(c => chapterSet.has(c));
            if (matchingChs.length === 0) continue;
            if (!matchingChs.includes(Number(q.chapter_id))) {
                const qSubs = (q.all_subtopic_ids || []).map(String);
                for (const sId of qSubs) {
                    const meta = db.subMetaMap[sId];
                    if (meta && chapterSet.has(Number(meta.chapter_id))) {
                        matchedSub = sId;
                        break;
                    }
                }
            }
        }

        if (searchQuery) {
            const hay = `${q.summary || q.text_preview || ""} ${q.subtopic_name || ""} ${q.chapter_name || ""} ${q.id || ""} ${q.paper_file || q.paper_id || ""}`.toLowerCase();
            if (!hay.includes(searchQuery)) continue;
        }

        let qOut = q;
        if (matchedSub && matchedSub !== String(q.subtopic_id) && db.subMetaMap[matchedSub]) {
            const meta = db.subMetaMap[matchedSub];
            qOut = Object.assign({}, q, {
                chapter_id: meta.chapter_id,
                chapter_name: meta.chapter_name,
                subtopic_id: meta.subtopic_id,
                subtopic_name: meta.subtopic_name
            });
        }
        results.push(qOut);
    }

    const total = results.length;
    if (payload.get_all) {
        return {
            status: "success",
            total,
            page: 1,
            per_page: total,
            total_pages: 1,
            questions: results
        };
    }

    const page = payload.page || 1;
    const perPage = payload.per_page || 15;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return {
        status: "success",
        total,
        page,
        per_page: perPage,
        total_pages: Math.max(1, Math.ceil(total / perPage)),
        questions: results.slice(start, end)
    };
}

function updateSplashSubjectTags() {
    const physTag = document.getElementById("physicsStatusTag");
    const chemTag = document.getElementById("chemistryStatusTag");
    const mathTag = document.getElementById("mathStatusTag");
    const isCaieIgcse = (splashState.board === "Cambridge" && splashState.level === "IGCSE / O Level");

    if (physTag) {
        physTag.textContent = isCaieIgcse ? "0625 • Ready ▶" : "Coming Soon";
        physTag.className = isCaieIgcse ? "splash-subject-tag tag-ready" : "splash-subject-tag tag-soon";
    }
    if (chemTag) {
        chemTag.textContent = isCaieIgcse ? "0620 • Ready ▶" : "Coming Soon";
        chemTag.className = isCaieIgcse ? "splash-subject-tag tag-ready" : "splash-subject-tag tag-soon";
    }
    if (mathTag) {
        mathTag.textContent = isCaieIgcse ? "0580 • Ready ▶" : "Coming Soon";
        mathTag.className = isCaieIgcse ? "splash-subject-tag tag-ready" : "splash-subject-tag tag-soon";
    }
}

function renderPaperComponentCheckboxes(subject) {
    const cfg = SUBJECT_CONFIG[subject] || SUBJECT_CONFIG.Physics;
    const container = document.getElementById("paperComponentsGroup");
    if (!container) return;

    const coreChecked = document.querySelector('.tier-checkbox[value="Core"]')?.checked ?? true;
    const extChecked = document.querySelector('.tier-checkbox[value="Extended"]')?.checked ?? true;

    container.innerHTML = cfg.papers.map(p => {
        const isChecked = p.tier === "Core" ? coreChecked : (p.tier === "Extended" ? extChecked : (coreChecked || extChecked));
        return `
            <label class="custom-checkbox">
                <input type="checkbox" class="paper-type-checkbox" value="${p.value}" ${isChecked ? "checked" : ""}>
                <span>${p.label}</span>
            </label>
        `;
    }).join("");

    container.querySelectorAll(".paper-type-checkbox").forEach(cb => {
        cb.addEventListener("change", handleFilterChange);
    });
}

async function loadSavedTestPaperForSubject(subject) {
    const cfg = SUBJECT_CONFIG[subject] || SUBJECT_CONFIG.Physics;
    appState.testPaperQuestions = [];
    const savedTest = localStorage.getItem(cfg.storageKey);
    if (savedTest) {
        try {
            const parsed = JSON.parse(savedTest);
            const db = await ensureSubjectDatabaseLoaded(subject);
            const synced = [];
            parsed.forEach(item => {
                if (item && item.id && db.questionsById[item.id]) {
                    synced.push(db.questionsById[item.id]);
                } else if (item && item.image_url && !item.image_url.startsWith("/api/")) {
                    synced.push(item);
                }
            });
            appState.testPaperQuestions = synced;
            saveTestToLocalStorage();
            updateTestTray();
        } catch (e) {
            updateTestTray();
        }
    } else {
        updateTestTray();
    }
}

async function switchSubject(subject) {
    const cfg = SUBJECT_CONFIG[subject] || SUBJECT_CONFIG.Physics;
    appState.subject = subject;
    localStorage.setItem("cioal_active_subject", subject);

    document.title = cfg.docTitle;
    const badgeEl = document.getElementById("headerSubjectBadge");
    if (badgeEl) badgeEl.textContent = cfg.badge;

    const subEl = document.getElementById("headerSubtitle");
    if (subEl) subEl.textContent = cfg.subtitle;

    const searchInput = document.getElementById("searchQuery");
    if (searchInput) {
        searchInput.placeholder = cfg.searchPlaceholder;
        searchInput.value = "";
        appState.searchQuery = "";
    }

    const titleInput = document.getElementById("customTestTitle");
    const defaultTitles = Object.values(SUBJECT_CONFIG).map(c => c.defaultTestTitle);
    if (titleInput && defaultTitles.includes(titleInput.value)) {
        titleInput.value = cfg.defaultTestTitle;
    }

    renderPaperComponentCheckboxes(subject);
    await loadSyllabusAndFilters();
    await loadSavedTestPaperForSubject(subject);

    appState.selectedChapters = [];
    appState.selectedSubtopics = [];
    appState.selectedYears = Array.from(document.querySelectorAll(".year-checkbox:checked")).map(cb => parseInt(cb.value));
    appState.selectedMonths = Array.from(document.querySelectorAll(".month-checkbox:checked")).map(cb => cb.value);
    appState.selectedTiers = Array.from(document.querySelectorAll(".tier-checkbox:checked")).map(cb => cb.value);
    appState.selectedPaperTypes = Array.from(document.querySelectorAll(".paper-type-checkbox:checked")).map(cb => cb.value);
    appState.currentPage = 1;

    await fetchQuestions();
}

function setupSplashScreenListeners() {
    const splashScreen = document.getElementById("splashScreen");
    const comingSoonScreen = document.getElementById("comingSoonScreen");
    const comingSoonBadge = document.getElementById("comingSoonBadge");
    const comingSoonMessage = document.getElementById("comingSoonMessage");

    // Board buttons
    document.querySelectorAll("#splashBoardGroup .splash-option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("#splashBoardGroup .splash-option-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            splashState.board = btn.dataset.board;
            updateSplashSubjectTags();
        });
    });

    // Level buttons
    document.querySelectorAll("#splashLevelGroup .splash-option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("#splashLevelGroup .splash-option-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            splashState.level = btn.dataset.level;
            updateSplashSubjectTags();
        });
    });

    // Subject cards
    document.querySelectorAll("#splashSubjectGroup .splash-subject-card").forEach(card => {
        card.addEventListener("click", async () => {
            const subject = card.dataset.subject;
            if (splashState.board === "Cambridge" && splashState.level === "IGCSE / O Level" && (subject === "Physics" || subject === "Chemistry" || subject === "Math")) {
                splashScreen.classList.add("hidden");
                comingSoonScreen.classList.add("hidden");
                await switchSubject(subject);
            } else {
                comingSoonBadge.textContent = `${splashState.board} • ${splashState.level} • ${subject}`;
                comingSoonMessage.textContent = `Topical past paper questions and mark schemes for ${splashState.board} ${splashState.level} ${subject} are currently being prepared and will be available soon!`;
                splashScreen.classList.add("hidden");
                comingSoonScreen.classList.remove("hidden");
            }
        });
    });

    // Coming soon screen buttons
    const backBtn = document.getElementById("backToSplashBtn");
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            comingSoonScreen.classList.add("hidden");
            splashScreen.classList.remove("hidden");
        });
    }

    const launchSubjectFromSoon = async (subj) => {
        splashState.board = "Cambridge";
        splashState.level = "IGCSE / O Level";
        document.querySelectorAll("#splashBoardGroup .splash-option-btn").forEach(b => {
            b.classList.toggle("active", b.dataset.board === "Cambridge");
        });
        document.querySelectorAll("#splashLevelGroup .splash-option-btn").forEach(b => {
            b.classList.toggle("active", b.dataset.level === "IGCSE / O Level");
        });
        updateSplashSubjectTags();
        comingSoonScreen.classList.add("hidden");
        splashScreen.classList.add("hidden");
        await switchSubject(subj);
    };

    const launchPhysicsBtn = document.getElementById("launchPhysicsNowBtn");
    if (launchPhysicsBtn) {
        launchPhysicsBtn.addEventListener("click", () => launchSubjectFromSoon("Physics"));
    }

    const launchChemistryBtn = document.getElementById("launchChemistryNowBtn");
    if (launchChemistryBtn) {
        launchChemistryBtn.addEventListener("click", () => launchSubjectFromSoon("Chemistry"));
    }

    const launchMathBtn = document.getElementById("launchMathNowBtn");
    if (launchMathBtn) {
        launchMathBtn.addEventListener("click", () => launchSubjectFromSoon("Math"));
    }

    // Re-open splash screen from header
    const openSplashBtn = document.getElementById("openSplashBtn");
    if (openSplashBtn) {
        openSplashBtn.addEventListener("click", () => {
            comingSoonScreen.classList.add("hidden");
            splashScreen.classList.remove("hidden");
        });
    }
    const headerBrandHome = document.getElementById("headerBrandHome");
    if (headerBrandHome) {
        headerBrandHome.addEventListener("click", () => {
            comingSoonScreen.classList.add("hidden");
            splashScreen.classList.remove("hidden");
        });
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    setupSplashScreenListeners();
    setupEventListeners();
    const initialSubject = localStorage.getItem("cioal_active_subject") || "Physics";
    await switchSubject(initialSubject);
});

async function loadSyllabusAndFilters() {
    try {
        const db = await ensureSubjectDatabaseLoaded(appState.subject);
        appState.syllabus = db.syllabus;
        renderSyllabusCheckboxes(db.syllabus);
        const totalEl = document.getElementById("totalQuestionsIndexed");
        if (totalEl) {
            totalEl.textContent = db.questions.length.toLocaleString();
        }
    } catch (err) {
        console.error("Error loading syllabus/filters:", err);
    }
}

function renderSyllabusCheckboxes(syllabus) {
    const container = document.getElementById("syllabusChaptersList");
    container.innerHTML = "";

    syllabus.forEach(ch => {
        const item = document.createElement("div");
        item.className = "chapter-accordion-item";

        const header = document.createElement("div");
        header.className = "chapter-accordion-header";
        header.innerHTML = `
            <div class="chapter-header-left">
                <input type="checkbox" class="chapter-checkbox" data-chapter="${ch.id}" id="ch_${ch.id}">
                <label for="ch_${ch.id}" style="cursor:pointer;">${ch.name}</label>
            </div>
            <span class="chapter-toggle-icon" style="font-size:0.75rem; color:#64748b;">▼</span>
        `;

        const body = document.createElement("div");
        body.className = "chapter-accordion-body";
        body.style.display = "flex"; // default open

        ch.subtopics.forEach(sub => {
            const subLabel = document.createElement("label");
            subLabel.className = "custom-checkbox";
            subLabel.innerHTML = `
                <input type="checkbox" class="subtopic-checkbox" data-chapter="${ch.id}" data-subtopic="${sub.id}" id="sub_${sub.id}">
                <span>${sub.name}</span>
            `;
            body.appendChild(subLabel);
        });

        // Toggle accordion body
        header.querySelector(".chapter-toggle-icon").addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = body.style.display !== "none";
            body.style.display = isOpen ? "none" : "flex";
            header.querySelector(".chapter-toggle-icon").textContent = isOpen ? "▶" : "▼";
        });

        // Chapter checkbox toggle child subtopics
        const chBox = header.querySelector(".chapter-checkbox");
        chBox.addEventListener("change", () => {
            const checked = chBox.checked;
            body.querySelectorAll(".subtopic-checkbox").forEach(sb => {
                sb.checked = checked;
            });
            handleFilterChange();
        });

        // Subtopic checkbox update
        body.querySelectorAll(".subtopic-checkbox").forEach(sb => {
            sb.addEventListener("change", () => {
                const anyChecked = Array.from(body.querySelectorAll(".subtopic-checkbox")).some(s => s.checked);
                chBox.checked = anyChecked;
                handleFilterChange();
            });
        });

        item.appendChild(header);
        item.appendChild(body);
        container.appendChild(item);
    });
}

function setupEventListeners() {
    // Show Mark Scheme checkbox above Curriculum Tier
    const showMsCb = document.getElementById("showMarkSchemeCheckbox");
    if (showMsCb) {
        showMsCb.addEventListener("change", () => {
            appState.showMarkScheme = showMsCb.checked;
            document.querySelectorAll(".question-ms-panel").forEach(panel => {
                panel.style.display = appState.showMarkScheme ? "block" : "none";
            });
        });
    }

    // Year checkboxes
    document.querySelectorAll(".year-checkbox").forEach(cb => {
        cb.addEventListener("change", handleFilterChange);
    });

    // Month checkboxes
    document.querySelectorAll(".month-checkbox").forEach(cb => {
        cb.addEventListener("change", handleFilterChange);
    });

    // Tier checkboxes: automatically check/uncheck relevant Paper Components
    document.querySelectorAll(".tier-checkbox").forEach(cb => {
        cb.addEventListener("change", () => {
            const coreChecked = document.querySelector('.tier-checkbox[value="Core"]')?.checked || false;
            const extChecked = document.querySelector('.tier-checkbox[value="Extended"]')?.checked || false;

            document.querySelectorAll(".paper-type-checkbox").forEach(pcb => {
                if (pcb.value === "1" || pcb.value === "3") {
                    pcb.checked = coreChecked;
                } else if (pcb.value === "2" || pcb.value === "4") {
                    pcb.checked = extChecked;
                } else if (pcb.value === "5" || pcb.value === "6") {
                    pcb.checked = (coreChecked || extChecked);
                }
            });

            handleFilterChange();
        });
    });

    // Paper type checkboxes
    document.querySelectorAll(".paper-type-checkbox").forEach(cb => {
        cb.addEventListener("change", handleFilterChange);
    });

    // Search query input
    const searchInput = document.getElementById("searchQuery");
    let debounceTimer;
    searchInput.addEventListener("input", () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            appState.searchQuery = searchInput.value;
            appState.currentPage = 1;
            fetchQuestions();
        }, 200);
    });

    // Select all / clear buttons
    document.getElementById("selectAllYears").addEventListener("click", () => {
        document.querySelectorAll(".year-checkbox").forEach(cb => cb.checked = true);
        handleFilterChange();
    });
    document.getElementById("clearYears").addEventListener("click", () => {
        document.querySelectorAll(".year-checkbox").forEach(cb => cb.checked = false);
        handleFilterChange();
    });

    document.getElementById("selectAllMonths").addEventListener("click", () => {
        document.querySelectorAll(".month-checkbox").forEach(cb => cb.checked = true);
        handleFilterChange();
    });
    document.getElementById("clearMonths").addEventListener("click", () => {
        document.querySelectorAll(".month-checkbox").forEach(cb => cb.checked = false);
        handleFilterChange();
    });

    document.getElementById("selectAllChapters").addEventListener("click", () => {
        document.querySelectorAll(".chapter-checkbox, .subtopic-checkbox").forEach(cb => cb.checked = true);
        handleFilterChange();
    });
    document.getElementById("clearChapters").addEventListener("click", () => {
        document.querySelectorAll(".chapter-checkbox, .subtopic-checkbox").forEach(cb => cb.checked = false);
        handleFilterChange();
    });

    // Add All to Test Button
    const addAllBtn = document.getElementById("addAllFilteredBtn");
    if (addAllBtn) {
        addAllBtn.addEventListener("click", handleAddAllFiltered);
    }

    // Modal controls
    document.getElementById("openTestTrayBtn").addEventListener("click", openTestModal);
    document.getElementById("closeModalBtn").addEventListener("click", closeTestModal);
    document.getElementById("previewPaperBtn").addEventListener("click", showPrintPreview);
    document.getElementById("viewMarkSchemeBtn").addEventListener("click", showMarkSchemePreview);
    document.getElementById("backToTestBuilderBtn").addEventListener("click", showTestBuilderList);
    document.getElementById("openNewTabPrintBtn").addEventListener("click", openFullPagePrintTab);
    document.getElementById("printPaperBtn").addEventListener("click", handleDirectPrint);
    const timeInputEl = document.getElementById("customTimeAllowed");
    if (timeInputEl) {
        timeInputEl.addEventListener("input", () => {
            isTimeManuallyEdited = true;
        });
    }

    document.getElementById("clearAllTestQuestionsBtn").addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all questions from the test paper?")) {
            appState.testPaperQuestions = [];
            isTimeManuallyEdited = false;
            saveTestToLocalStorage();
            updateTestTray();
            updateAddAllButtonState();
            renderTestModalList();
            renderQuestionsList(currentQuestionsData);
        }
    });
}

function handleFilterChange() {
    appState.selectedYears = Array.from(document.querySelectorAll(".year-checkbox:checked")).map(cb => parseInt(cb.value));
    appState.selectedMonths = Array.from(document.querySelectorAll(".month-checkbox:checked")).map(cb => cb.value);
    appState.selectedTiers = Array.from(document.querySelectorAll(".tier-checkbox:checked")).map(cb => cb.value);
    appState.selectedPaperTypes = Array.from(document.querySelectorAll(".paper-type-checkbox:checked")).map(cb => cb.value);

    // Chapters and subtopics
    appState.selectedChapters = Array.from(document.querySelectorAll(".chapter-checkbox:checked")).map(cb => parseInt(cb.dataset.chapter));
    appState.selectedSubtopics = Array.from(document.querySelectorAll(".subtopic-checkbox:checked")).map(cb => cb.dataset.subtopic);

    appState.currentPage = 1;
    fetchQuestions();
}

async function fetchQuestions() {
    const listContainer = document.getElementById("questionsList");

    try {
        const db = await ensureSubjectDatabaseLoaded(appState.subject);
        const payload = {
            subject: appState.subject,
            years: appState.selectedYears,
            months: appState.selectedMonths,
            tiers: appState.selectedTiers,
            paper_types: appState.selectedPaperTypes,
            chapters: appState.selectedChapters,
            subtopics: appState.selectedSubtopics,
            search_query: appState.searchQuery,
            page: appState.currentPage,
            per_page: appState.perPage
        };

        const data = searchQuestionsStatic(db, payload);

        if (data.status === "success") {
            appState.totalMatching = data.total;
            appState.totalPages = data.total_pages;
            currentQuestionsData = data.questions;

            document.getElementById("matchingCount").textContent = `${data.total.toLocaleString()} Questions Found`;
            updateAddAllButtonState();
            renderQuestionsList(data.questions);
            renderPagination();
        }
    } catch (err) {
        listContainer.innerHTML = `<div style="text-align:center; padding:3rem; color:#ef4444;">Error loading questions: ${err.message}</div>`;
    }
}

function updateAddAllButtonState() {
    const btn = document.getElementById("addAllFilteredBtn");
    if (!btn) return;

    const total = appState.totalMatching;
    if (total === 0) {
        btn.disabled = true;
        btn.innerHTML = `+ Add All to Test (0)`;
        btn.className = "btn btn-sm btn-outline";
        return;
    }

    const allAdded = currentQuestionsData.length > 0 && currentQuestionsData.every(q => appState.testPaperQuestions.some(t => t.id === q.id));
    if (allAdded) {
        btn.disabled = false;
        btn.innerHTML = `✓ All (${total}) Added`;
        btn.className = "btn btn-sm btn-outline";
    } else {
        btn.disabled = false;
        btn.innerHTML = `+ Add All (${total}) to Test`;
        btn.className = "btn btn-sm btn-accent";
    }
}

async function handleAddAllFiltered() {
    const btn = document.getElementById("addAllFilteredBtn");
    btn.disabled = true;
    btn.innerHTML = "⏳ Adding...";

    try {
        let toAdd = [];
        if (appState.totalMatching <= currentQuestionsData.length) {
            toAdd = currentQuestionsData;
        } else {
            const db = await ensureSubjectDatabaseLoaded(appState.subject);
            const payload = {
                subject: appState.subject,
                years: appState.selectedYears,
                months: appState.selectedMonths,
                tiers: appState.selectedTiers,
                paper_types: appState.selectedPaperTypes,
                chapters: appState.selectedChapters,
                subtopics: appState.selectedSubtopics,
                search_query: appState.searchQuery,
                get_all: true
            };
            const data = searchQuestionsStatic(db, payload);
            if (data.status === "success") {
                toAdd = data.questions;
            }
        }

        let newlyAdded = 0;
        toAdd.forEach(q => {
            if (!appState.testPaperQuestions.some(t => t.id === q.id)) {
                appState.testPaperQuestions.push(q);
                newlyAdded++;
            }
        });

        saveTestToLocalStorage();
        updateTestTray();
        updateAddAllButtonState();
        renderQuestionsList(currentQuestionsData);
        showToast(`✓ Added ${newlyAdded} questions to Test Paper! Total: ${appState.testPaperQuestions.length}`);
    } catch (err) {
        alert("Error adding questions: " + err.message);
    } finally {
        btn.disabled = false;
        updateAddAllButtonState();
    }
}

function renderQuestionsList(questions) {
    const listContainer = document.getElementById("questionsList");
    if (!questions || questions.length === 0) {
        listContainer.innerHTML = `
            <div style="text-align:center; padding:4rem; background:#fff; border-radius:12px; border:1px solid #e2e8f0;">
                <p style="font-size:1.1rem; font-weight:700; color:#0f172a; margin-bottom:0.5rem;">No questions match your filter selection</p>
                <p style="font-size:0.85rem; color:#64748b;">Try adjusting your selected years, month sessions, or syllabus chapters.</p>
            </div>
        `;
        return;
    }

    listContainer.innerHTML = "";

    questions.forEach(q => {
        const isInTest = appState.testPaperQuestions.some(t => t.id === q.id);

        const card = document.createElement("div");
        card.className = `question-card ${isInTest ? "in-test" : ""}`;
        card.id = `card_${q.id}`;

        const paperInfo = `${q.year} ${q.month} • Paper ${q.component}`;
        const marksLabel = q.marks > 0 ? `[${q.marks} Mark${q.marks > 1 ? "s" : ""}]` : "";

        let msContentHtml = "";
        if (q.is_mc) {
            const ans = q.ms_answer || "A";
            msContentHtml = `
                <div class="question-ms-panel" style="display: ${appState.showMarkScheme ? "block" : "none"};">
                    <div class="ms-panel-header">
                        <span class="ms-panel-title">✅ Official Mark Scheme (${paperInfo} • Q${q.q_num})</span>
                    </div>
                    <div class="ms-mcq-badge">
                        <span>Correct Answer:</span>
                        <span class="ms-mcq-letter" style="${ans.length > 2 ? "width:auto; padding:0 0.6rem; font-size:0.85rem;" : ""}">${ans}</span>
                        <span style="font-size:0.8rem; color:#64748b; font-weight:600;">[1 Mark]</span>
                    </div>
                </div>
            `;
        } else if (q.ms_image_url) {
            msContentHtml = `
                <div class="question-ms-panel" style="display: ${appState.showMarkScheme ? "block" : "none"};">
                    <div class="ms-panel-header">
                        <span class="ms-panel-title">✅ Official Mark Scheme (${paperInfo} • Q${q.q_num})</span>
                        <span style="font-size:0.78rem; font-weight:700; color:#166534;">[Total: ${q.marks} Mark${q.marks > 1 ? "s" : ""}]</span>
                    </div>
                    <div class="ms-theory-img-wrap">
                        <img src="${q.ms_image_url}" alt="Mark Scheme Q${q.q_num}" class="ms-theory-img" loading="lazy">
                    </div>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="question-header">
                <div class="question-meta">
                    <span class="meta-pill pill-chapter">${q.chapter_name.split(":")[0]}</span>
                    <span class="meta-pill pill-source">${paperInfo} • Q${q.q_num}</span>
                    <span class="meta-pill pill-tier">${q.tier}</span>
                    ${marksLabel ? `<span class="meta-pill pill-marks">${marksLabel}</span>` : ""}
                </div>
                <button class="btn btn-sm ${isInTest ? "btn-outline" : "btn-accent"} toggle-add-btn" data-qid="${q.id}">
                    ${isInTest ? "✓ In Test Paper" : "+ Add to Test"}
                </button>
            </div>
            <div class="question-content">
                <img src="${q.image_url}" alt="Question ${q.q_num}" class="question-img" loading="lazy">
            </div>
            ${msContentHtml}
            <div class="question-footer">
                <span class="question-subtopic">📌 <strong>${q.subtopic_name}</strong></span>
                <span style="font-size:0.75rem; color:#64748b;">ID: ${q.id}</span>
            </div>
        `;

        card.querySelector(".toggle-add-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleQuestionInTest(q);
        });

        listContainer.appendChild(card);
    });
}

function toggleQuestionInTest(question) {
    const idx = appState.testPaperQuestions.findIndex(t => t.id === question.id);
    if (idx === -1) {
        appState.testPaperQuestions.push(question);
    } else {
        appState.testPaperQuestions.splice(idx, 1);
    }

    saveTestToLocalStorage();
    updateTestTray();
    updateAddAllButtonState();

    // Update UI card
    const card = document.getElementById(`card_${question.id}`);
    if (card) {
        const isInTest = appState.testPaperQuestions.some(t => t.id === question.id);
        card.className = `question-card ${isInTest ? "in-test" : ""}`;
        const btn = card.querySelector(".toggle-add-btn");
        btn.className = `btn btn-sm ${isInTest ? "btn-outline" : "btn-accent"} toggle-add-btn`;
        btn.textContent = isInTest ? "✓ In Test Paper" : "+ Add to Test";
    }
}

function updateTestTray() {
    const count = appState.testPaperQuestions.length;
    const tray = document.getElementById("testTray");
    const countSpan = document.getElementById("testTrayCountNumber");
    const countTopSpan = document.getElementById("testTrayCountTop");
    const marksSpan = document.getElementById("testTrayTotalMarks");

    if (countTopSpan) {
        countTopSpan.textContent = count;
    }

    if (count > 0) {
        tray.style.display = "flex";
        countSpan.textContent = count;
        const totalMarks = appState.testPaperQuestions.reduce((sum, q) => sum + (q.marks || 1), 0);
        const autoTime = calculateAutoTime(totalMarks);
        marksSpan.textContent = `${totalMarks} Mark${totalMarks !== 1 ? "s" : ""} (${autoTime})`;
    } else {
        tray.style.display = "none";
    }
}

function saveTestToLocalStorage() {
    const cfg = SUBJECT_CONFIG[appState.subject] || SUBJECT_CONFIG.Physics;
    localStorage.setItem(cfg.storageKey, JSON.stringify(appState.testPaperQuestions));
}

function renderPagination() {
    const container = document.getElementById("paginationControls");
    container.innerHTML = "";

    if (appState.totalPages <= 1) return;

    const prevBtn = document.createElement("button");
    prevBtn.className = "page-btn";
    prevBtn.textContent = "◀ Previous";
    prevBtn.disabled = appState.currentPage === 1;
    prevBtn.addEventListener("click", () => {
        if (appState.currentPage > 1) {
            appState.currentPage--;
            fetchQuestions();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
    container.appendChild(prevBtn);

    let startPage = Math.max(1, appState.currentPage - 3);
    let endPage = Math.min(appState.totalPages, startPage + 6);
    if (endPage - startPage < 6) {
        startPage = Math.max(1, endPage - 6);
    }

    for (let p = startPage; p <= endPage; p++) {
        const btn = document.createElement("button");
        btn.className = `page-btn ${p === appState.currentPage ? "active" : ""}`;
        btn.textContent = p;
        btn.addEventListener("click", () => {
            appState.currentPage = p;
            fetchQuestions();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        container.appendChild(btn);
    }

    const nextBtn = document.createElement("button");
    nextBtn.className = "page-btn";
    nextBtn.textContent = "Next ▶";
    nextBtn.disabled = appState.currentPage === appState.totalPages;
    nextBtn.addEventListener("click", () => {
        if (appState.currentPage < appState.totalPages) {
            appState.currentPage++;
            fetchQuestions();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
    container.appendChild(nextBtn);
}

// Modal Functions
function openTestModal() {
    document.getElementById("testModal").classList.add("active");
    showTestBuilderList();
}

function closeTestModal() {
    document.getElementById("testModal").classList.remove("active");
}

function showTestBuilderList() {
    document.getElementById("testBuilderView").style.display = "block";
    document.getElementById("testPaperPreviewView").style.display = "none";
    document.getElementById("markSchemePreviewView").style.display = "none";
    document.getElementById("modalFooterActionsBuilder").style.display = "flex";
    document.getElementById("modalFooterActionsPreview").style.display = "none";
    renderTestModalList();
}

function renderTestModalList() {
    const list = document.getElementById("testQuestionsSortableList");
    list.innerHTML = "";

    if (appState.testPaperQuestions.length === 0) {
        list.innerHTML = `<p style="text-align:center; padding:2rem; color:#64748b;">No questions added yet. Use "+ Add to Test" on any question to add it here.</p>`;
        return;
    }

    appState.testPaperQuestions.forEach((q, idx) => {
        const item = document.createElement("div");
        item.className = "sortable-item";
        item.innerHTML = `
            <div class="sortable-left">
                <span class="sortable-num">${idx + 1}.</span>
                <div class="sortable-info">
                    <span class="sortable-title">${q.chapter_name} • ${q.year} ${q.month} P${q.component} Q${q.q_num}</span>
                    <span class="sortable-sub">📌 ${q.subtopic_name} • ${q.marks} Mark${q.marks > 1 ? "s" : ""}</span>
                </div>
            </div>
            <div class="sortable-actions">
                <button class="btn btn-outline btn-sm move-up-btn" ${idx === 0 ? "disabled" : ""}>▲</button>
                <button class="btn btn-outline btn-sm move-down-btn" ${idx === appState.testPaperQuestions.length - 1 ? "disabled" : ""}>▼</button>
                <button class="btn btn-outline btn-sm remove-q-btn" style="color:#ef4444;">✕</button>
            </div>
        `;

        item.querySelector(".move-up-btn").addEventListener("click", () => {
            if (idx > 0) {
                const temp = appState.testPaperQuestions[idx];
                appState.testPaperQuestions[idx] = appState.testPaperQuestions[idx - 1];
                appState.testPaperQuestions[idx - 1] = temp;
                saveTestToLocalStorage();
                renderTestModalList();
            }
        });

        item.querySelector(".move-down-btn").addEventListener("click", () => {
            if (idx < appState.testPaperQuestions.length - 1) {
                const temp = appState.testPaperQuestions[idx];
                appState.testPaperQuestions[idx] = appState.testPaperQuestions[idx + 1];
                appState.testPaperQuestions[idx + 1] = temp;
                saveTestToLocalStorage();
                renderTestModalList();
            }
        });

        item.querySelector(".remove-q-btn").addEventListener("click", () => {
            appState.testPaperQuestions.splice(idx, 1);
            saveTestToLocalStorage();
            updateTestTray();
            updateAddAllButtonState();
            renderTestModalList();
            renderQuestionsList(currentQuestionsData);
        });

        list.appendChild(item);
    });

    const totalMarks = appState.testPaperQuestions.reduce((sum, q) => sum + (q.marks || 1), 0);
    const autoTime = calculateAutoTime(totalMarks);
    const timeInput = document.getElementById("customTimeAllowed");
    if (timeInput && (!isTimeManuallyEdited || !timeInput.value.trim())) {
        timeInput.value = autoTime;
    }
    document.getElementById("modalTestSummaryStats").textContent =
        `${appState.testPaperQuestions.length} Questions | Total Marks: ${totalMarks} | Time Allowed: ${autoTime}`;
}

function showPrintPreview() {
    document.getElementById("testBuilderView").style.display = "none";
    document.getElementById("testPaperPreviewView").style.display = "block";
    document.getElementById("markSchemePreviewView").style.display = "none";
    document.getElementById("modalFooterActionsBuilder").style.display = "none";
    document.getElementById("modalFooterActionsPreview").style.display = "flex";

    renderExamPaperView();
}

// Generate the Exam Paper HTML matching the clean test builder cards, with Mark Scheme at the end
function buildExamPaperHtml() {
    const cfg = SUBJECT_CONFIG[appState.subject] || SUBJECT_CONFIG.Physics;
    const title = document.getElementById("customTestTitle").value || cfg.defaultTestTitle;
    const totalMarks = appState.testPaperQuestions.reduce((sum, q) => sum + (q.marks || 1), 0);
    const autoTime = calculateAutoTime(totalMarks);
    const timeInput = document.getElementById("customTimeAllowed");
    const timeAllowed = (isTimeManuallyEdited && timeInput && timeInput.value.trim())
        ? timeInput.value.trim()
        : autoTime;
    const studentInstructions = document.getElementById("customInstructions").value ||
        "Answer all questions in the spaces provided. Show all working. Calculators may be used.";

    let questionsHtml = "";
    let markSchemesHtml = "";

    appState.testPaperQuestions.forEach((q, idx) => {
        const urls = [q.image_url];
        const isMultiSeg = false;

        questionsHtml += `
            <div class="exam-question-item single-seg">
                <div class="exam-q-first-block">
                    <div class="exam-q-header">
                        <span class="exam-q-num-badge">Question ${idx + 1}</span>
                        <span class="exam-q-marks">[Total: ${q.marks} Mark${q.marks > 1 ? "s" : ""}]</span>
                    </div>
                    <div class="exam-q-seg-wrap">
                        <img src="${urls[0]}" alt="Question ${idx + 1}" class="exam-q-img" loading="eager">
                    </div>
                </div>
            </div>
        `;

        // Build Mark Scheme item for the end of the paper
        if (q.is_mc) {
            const ans = q.ms_answer || "A";
            markSchemesHtml += `
                <div class="exam-ms-mcq-row">
                    <div style="display:flex; align-items:center; gap:0.75rem;">
                        <span class="exam-q-num-badge">Question ${idx + 1}</span>
                        <span style="font-size:0.88rem; font-weight:700; color:#0f172a;">
                            Answer: <strong style="color:#14532d; font-size:0.95rem; background:#ecfccb; padding:0.1rem 0.55rem; border-radius:4px; border:1px solid #84cc16;">${ans}</strong>
                        </span>
                    </div>
                    <span class="exam-q-marks">[1 Mark]</span>
                </div>
            `;
        } else if (q.ms_image_url) {
            markSchemesHtml += `
                <div class="exam-question-item single-seg">
                    <div class="exam-q-first-block">
                        <div class="exam-q-header">
                            <span class="exam-q-num-badge">Question ${idx + 1} — Mark Scheme</span>
                            <span class="exam-q-marks">[Total: ${q.marks} Mark${q.marks > 1 ? "s" : ""}]</span>
                        </div>
                        <div class="exam-q-seg-wrap">
                            <img src="${q.ms_image_url}" alt="Mark Scheme Question ${idx + 1}" class="exam-q-img" loading="eager">
                        </div>
                    </div>
                </div>
            `;
        }
    });

    return `
        <div class="exam-paper">
            <div class="exam-header">
                <div class="exam-logo-row">
                    <div style="display:flex; align-items:center; gap:0.85rem;">
                        <img src="static/cioaltutors.jpg" alt="Cioal Tutors Logo">
                        <div class="exam-title-block">
                            <h2>Cioal Tutors</h2>
                            <p>${cfg.examLabel}</p>
                        </div>
                    </div>
                    <div style="text-align:right;">
                        <p style="font-weight:700; font-size:1.15rem; color:#0f172a;">${title}</p>
                        <p style="font-size:0.85rem; color:#64748b;">Time Allowed: <strong>${timeAllowed}</strong></p>
                        <p style="font-size:0.85rem; color:#166534; font-weight:700; margin-top:0.2rem;">Total Marks: ${totalMarks}</p>
                    </div>
                </div>
                <div class="candidate-box">
                    <div>Candidate Name: _____________________________________________</div>
                    <div>Date: ____________________</div>
                </div>
                <div class="exam-instructions">
                    <strong>INSTRUCTIONS:</strong> ${studentInstructions}
                </div>
            </div>
            <div class="exam-body">
                ${questionsHtml}
            </div>
            <div class="exam-mark-scheme-section">
                <div class="exam-ms-banner">
                    <div style="display:flex; align-items:center; gap:0.75rem;">
                        <img src="static/cioaltutors.jpg" alt="Logo" style="width:34px; height:34px; border-radius:6px; border:1px solid #cbd5e1;">
                        <div>
                            <h3 style="font-size:1.05rem; font-weight:800; color:#0f172a; margin:0;">MARK SCHEME & ANSWER KEY</h3>
                            <p style="font-size:0.78rem; color:#64748b; font-weight:600; margin:0;">${title} • ${cfg.examLabel}</p>
                        </div>
                    </div>
                    <div style="text-align:right;">
                        <span style="font-size:0.85rem; font-weight:800; color:#166534;">Total Marks: ${totalMarks}</span>
                    </div>
                </div>
                ${markSchemesHtml}
            </div>
        </div>
    `;
}

function renderExamPaperView() {
    const fullHtml = buildExamPaperHtml();
    document.getElementById("examPaperPrintArea").innerHTML = fullHtml;
    document.getElementById("printPaperRoot").innerHTML = fullHtml;
}

function handleDirectPrint() {
    renderExamPaperView();
    window.print();
}

function openFullPagePrintTab() {
    renderExamPaperView();
    const paperHtml = buildExamPaperHtml();
    const cfg = SUBJECT_CONFIG[appState.subject] || SUBJECT_CONFIG.Physics;
    const title = document.getElementById("customTestTitle").value || cfg.defaultTestTitle;
    const baseHref = window.location.href.split("?")[0].split("#")[0];
    const printWin = window.open("", "_blank");
    if (!printWin) {
        alert("Please allow popups to open the full-page test paper tab.");
        return;
    }

    printWin.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <base href="${baseHref}">
            <title>${title} - Cioal Tutors</title>
            <link rel="stylesheet" href="static/css/style.css?v=7">
            <style>
                body {
                    background: #f8faf5;
                    padding: 2rem 1rem;
                }
                .floating-print-controls {
                    position: sticky;
                    top: 1rem;
                    max-width: 860px;
                    margin: 0 auto 1.5rem auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #ffffff;
                    padding: 0.75rem 1.25rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07);
                    z-index: 1000;
                }
                @media print {
                    @page {
                        size: A4 portrait;
                        margin: 4mm 6mm !important;
                    }
                    html, body {
                        background: #ffffff !important;
                        padding: 0 !important;
                        margin: 0 !important;
                        height: auto !important;
                        min-height: 0 !important;
                    }
                    body > *:not(.exam-paper) {
                        display: none !important;
                    }
                    .floating-print-controls {
                        display: none !important;
                        height: 0 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .exam-paper {
                        display: block !important;
                        padding: 0 !important;
                        margin: 0 auto !important;
                        max-width: 100% !important;
                        box-sizing: border-box !important;
                    }
                }
            </style>
        </head>
        <body>
            <div class="floating-print-controls">
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    <img src="static/cioaltutors.jpg" style="width:32px; height:32px; border-radius:6px;">
                    <div>
                        <span style="font-weight:700; font-size:0.9rem; display:block;">Cioal Tutors • Test Paper & Mark Scheme Preview</span>
                        <span style="font-size:0.75rem; color:#64748b;">💡 Tip: For 100% clean pages, ensure "Headers and footers" is unchecked in browser print window</span>
                    </div>
                </div>
                <div style="display:flex; gap:0.5rem;">
                    <button onclick="window.close()" class="btn btn-sm btn-outline">Close Tab</button>
                    <button onclick="window.print()" class="btn btn-sm btn-accent" style="font-weight:700;">🖨️ Print / Save as PDF</button>
                </div>
            </div>
            ${paperHtml}
        </body>
        </html>
    `);
    printWin.document.close();
}

function showMarkSchemePreview() {
    document.getElementById("testBuilderView").style.display = "none";
    document.getElementById("testPaperPreviewView").style.display = "none";
    document.getElementById("markSchemePreviewView").style.display = "block";
    document.getElementById("modalFooterActionsBuilder").style.display = "none";
    document.getElementById("modalFooterActionsPreview").style.display = "flex";

    const container = document.getElementById("markSchemeArea");
    let rowsHtml = "";
    let detailedMsHtml = "";

    appState.testPaperQuestions.forEach((q, idx) => {
        rowsHtml += `
            <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:0.65rem; font-weight:700;">Q${idx + 1}</td>
                <td style="padding:0.65rem;">${q.chapter_name}</td>
                <td style="padding:0.65rem;">${q.subtopic_name}</td>
                <td style="padding:0.65rem;"><strong>${q.year} ${q.month}</strong> Paper ${q.component} (Q${q.q_num})</td>
                <td style="padding:0.65rem; font-weight:700;">${q.is_mc ? `Answer: ${q.ms_answer || "A"} (1m)` : `${q.marks}m`}</td>
            </tr>
        `;

        if (q.is_mc) {
            detailedMsHtml += `
                <div class="exam-ms-mcq-row" style="margin-bottom:0.6rem;">
                    <div style="display:flex; align-items:center; gap:0.75rem;">
                        <span class="exam-q-num-badge">Question ${idx + 1}</span>
                        <span style="font-size:0.9rem; font-weight:700;">Answer: <strong style="color:#14532d; background:#ecfccb; padding:0.1rem 0.55rem; border-radius:4px; border:1px solid #84cc16;">${q.ms_answer || "A"}</strong></span>
                    </div>
                    <span class="exam-q-marks">[1 Mark]</span>
                </div>
            `;
        } else if (q.ms_image_url) {
            detailedMsHtml += `
                <div class="exam-question-item single-seg" style="margin-bottom:1rem;">
                    <div class="exam-q-header">
                        <span class="exam-q-num-badge">Question ${idx + 1} — Mark Scheme (${q.year} ${q.month} P${q.component} Q${q.q_num})</span>
                        <span class="exam-q-marks">[Total: ${q.marks} Mark${q.marks > 1 ? "s" : ""}]</span>
                    </div>
                    <div class="exam-q-seg-wrap">
                        <img src="${q.ms_image_url}" alt="Mark Scheme Q${idx + 1}" class="exam-q-img" loading="lazy">
                    </div>
                </div>
            `;
        }
    });

    container.innerHTML = `
        <div style="background:#fff; padding:1.5rem; border-radius:8px;">
            <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1.5rem;">
                <img src="static/cioaltutors.jpg" alt="Logo" style="width:38px; height:38px; border-radius:6px;">
                <div>
                    <h3 style="font-size:1.1rem; font-weight:700;">Official Mark Scheme & Source Reference</h3>
                    <p style="font-size:0.82rem; color:#64748b;">Note: The Mark Scheme is also automatically included at the end of your printed test paper.</p>
                </div>
            </div>
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; text-align:left; margin-bottom:1.75rem;">
                <thead>
                    <tr style="background:#f8faf5; border-bottom:2px solid #84cc16;">
                        <th style="padding:0.65rem;">Test Q#</th>
                        <th style="padding:0.65rem;">Chapter</th>
                        <th style="padding:0.65rem;">Subtopic</th>
                        <th style="padding:0.65rem;">Source Paper Reference</th>
                        <th style="padding:0.65rem;">Marks / Key</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
            </table>
            <div>
                <h4 style="font-size:0.95rem; font-weight:800; color:#14532d; margin-bottom:0.75rem;">Detailed Mark Schemes</h4>
                ${detailedMsHtml}
            </div>
        </div>
    `;
}

function showToast(message) {
    let toast = document.getElementById("cioalToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "cioalToast";
        toast.style.cssText = `
            position: fixed;
            top: 1.5rem;
            right: 1.5rem;
            background: #166534;
            color: #ffffff;
            padding: 0.75rem 1.25rem;
            border-radius: 8px;
            font-size: 0.88rem;
            font-weight: 600;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            z-index: 1000;
            transition: opacity 0.3s, transform 0.3s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        `;
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-10px)";
    }, 2800);
}
