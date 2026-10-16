// Cioal Tutors IGCSE & GCSE Test Builder - Static Serverless Frontend (GitHub Pages Edition)
// Supports Cambridge IGCSE (0625, 0620, 0610, 0580) & Edexcel GCSE 9–1 (1PH0, 1CH0, 1BI0, 1MA1) completely client-side

const SUBJECT_CONFIG = {
    Physics: {
        board: "Cambridge",
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
        tiers: ["Core", "Extended"],
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
        board: "Cambridge",
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
        tiers: ["Core", "Extended"],
        papers: [
            { value: "1", label: "Paper 1 (MCQ Core)", tier: "Core" },
            { value: "2", label: "Paper 2 (MCQ Extended)", tier: "Extended" },
            { value: "3", label: "Paper 3 (Theory Core)", tier: "Core" },
            { value: "4", label: "Paper 4 (Theory Extended)", tier: "Extended" },
            { value: "5", label: "Paper 5 (Practical Test)", tier: "Both" },
            { value: "6", label: "Paper 6 (Alt to Practical)", tier: "Both" }
        ]
    },
    Biology: {
        board: "Cambridge",
        code: "0610",
        badge: "IGCSE Biology 0610",
        docTitle: "Cioal Tutor Topical Questions • IGCSE Biology (0610)",
        subtitle: "Cambridge 2026–2028 Syllabus Question Bank & Test Builder",
        examLabel: "Cambridge IGCSE™ Biology (0610)",
        defaultTestTitle: "Weekly Biology Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. osmosis, enzyme, photosynthesis, s26)...",
        storageKey: "cioal_test_paper_biology",
        syllabusUrl: "data/biology_syllabus.json",
        questionsUrl: "data/biology_questions.json",
        jsBundleUrl: "data/biology_db.js",
        catDir: "Categorized_Questions_Biology",
        tiers: ["Core", "Extended"],
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
        board: "Cambridge",
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
        tiers: ["Core", "Extended"],
        papers: [
            { value: "1", label: "Paper 1 (Core • Non-Calc / Short)", tier: "Core" },
            { value: "2", label: "Paper 2 (Extended • Non-Calc / Short)", tier: "Extended" },
            { value: "3", label: "Paper 3 (Core • Calculator / Long)", tier: "Core" },
            { value: "4", label: "Paper 4 (Extended • Calculator / Long)", tier: "Extended" }
        ]
    },
    Edexcel_Physics: {
        board: "Edexcel",
        code: "1PH0",
        badge: "Edexcel GCSE Physics 1PH0",
        docTitle: "Cioal Tutor Topical Questions • Edexcel GCSE Physics (1PH0)",
        subtitle: "Pearson Edexcel GCSE (9–1) Physics Specification Question Bank & Test Builder",
        examLabel: "Pearson Edexcel GCSE (9–1) Physics (1PH0)",
        defaultTestTitle: "Weekly Edexcel Physics Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. velocity, radioactivity, circuit, 1PH0)...",
        storageKey: "cioal_test_paper_edexcel_physics",
        syllabusUrl: "data/edexcel_physics_syllabus.json",
        questionsUrl: "data/edexcel_physics_questions.json",
        jsBundleUrl: "data/edexcel_physics_db.js",
        catDir: "Categorized_Questions_Edexcel_Physics",
        tiers: ["Foundation", "Higher"],
        papers: [
            { value: "1F", label: "Paper 1F (Foundation)", tier: "Foundation" },
            { value: "1H", label: "Paper 1H (Higher)", tier: "Higher" },
            { value: "2F", label: "Paper 2F (Foundation)", tier: "Foundation" },
            { value: "2H", label: "Paper 2H (Higher)", tier: "Higher" }
        ]
    },
    Edexcel_Chemistry: {
        board: "Edexcel",
        code: "1CH0",
        badge: "Edexcel GCSE Chemistry 1CH0",
        docTitle: "Cioal Tutor Topical Questions • Edexcel GCSE Chemistry (1CH0)",
        subtitle: "Pearson Edexcel GCSE (9–1) Chemistry Specification Question Bank & Test Builder",
        examLabel: "Pearson Edexcel GCSE (9–1) Chemistry (1CH0)",
        defaultTestTitle: "Weekly Edexcel Chemistry Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. electrolysis, titration, alkene, 1CH0)...",
        storageKey: "cioal_test_paper_edexcel_chemistry",
        syllabusUrl: "data/edexcel_chemistry_syllabus.json",
        questionsUrl: "data/edexcel_chemistry_questions.json",
        jsBundleUrl: "data/edexcel_chemistry_db.js",
        catDir: "Categorized_Questions_Edexcel_Chemistry",
        tiers: ["Foundation", "Higher"],
        papers: [
            { value: "1F", label: "Paper 1F (Foundation)", tier: "Foundation" },
            { value: "1H", label: "Paper 1H (Higher)", tier: "Higher" },
            { value: "2F", label: "Paper 2F (Foundation)", tier: "Foundation" },
            { value: "2H", label: "Paper 2H (Higher)", tier: "Higher" }
        ]
    },
    Edexcel_Biology: {
        board: "Edexcel",
        code: "1BI0",
        badge: "Edexcel GCSE Biology 1BI0",
        docTitle: "Cioal Tutor Topical Questions • Edexcel GCSE Biology (1BI0)",
        subtitle: "Pearson Edexcel GCSE (9–1) Biology Specification Question Bank & Test Builder",
        examLabel: "Pearson Edexcel GCSE (9–1) Biology (1BI0)",
        defaultTestTitle: "Weekly Edexcel Biology Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. osmosis, enzyme, mitosis, 1BI0)...",
        storageKey: "cioal_test_paper_edexcel_biology",
        syllabusUrl: "data/edexcel_biology_syllabus.json",
        questionsUrl: "data/edexcel_biology_questions.json",
        jsBundleUrl: "data/edexcel_biology_db.js",
        catDir: "Categorized_Questions_Edexcel_Biology",
        tiers: ["Foundation", "Higher"],
        papers: [
            { value: "1F", label: "Paper 1F (Foundation)", tier: "Foundation" },
            { value: "1H", label: "Paper 1H (Higher)", tier: "Higher" },
            { value: "2F", label: "Paper 2F (Foundation)", tier: "Foundation" },
            { value: "2H", label: "Paper 2H (Higher)", tier: "Higher" }
        ]
    },
    Edexcel_Math: {
        board: "Edexcel",
        code: "1MA1",
        badge: "Edexcel GCSE Maths 1MA1",
        docTitle: "Cioal Tutor Topical Questions • Edexcel GCSE Mathematics (1MA1)",
        subtitle: "Pearson Edexcel GCSE (9–1) Mathematics Specification Question Bank & Test Builder",
        examLabel: "Pearson Edexcel GCSE (9–1) Mathematics (1MA1)",
        defaultTestTitle: "Weekly Edexcel Mathematics Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. trigonometry, vector, probability, 1MA1)...",
        storageKey: "cioal_test_paper_edexcel_math",
        syllabusUrl: "data/edexcel_math_syllabus.json",
        questionsUrl: "data/edexcel_math_questions.json",
        jsBundleUrl: "data/edexcel_math_db.js",
        catDir: "Categorized_Questions_Edexcel_Math",
        tiers: ["Foundation", "Higher"],
        papers: [
            { value: "1F", label: "Paper 1F (Foundation • Non-Calc)", tier: "Foundation" },
            { value: "1H", label: "Paper 1H (Higher • Non-Calc)", tier: "Higher" },
            { value: "2F", label: "Paper 2F (Foundation • Calculator)", tier: "Foundation" },
            { value: "2H", label: "Paper 2H (Higher • Calculator)", tier: "Higher" },
            { value: "3F", label: "Paper 3F (Foundation • Calculator)", tier: "Foundation" },
            { value: "3H", label: "Paper 3H (Higher • Calculator)", tier: "Higher" }
        ]
    },
    CAIE_Alevel_Physics: {
        board: "Cambridge",
        level: "A Level",
        code: "9702",
        badge: "CAIE A Level Physics 9702",
        docTitle: "Cioal Tutor Topical Questions • A Level Physics (9702)",
        subtitle: "Cambridge International AS & A Level Physics (9702) Question Bank & Test Builder",
        examLabel: "Cambridge International AS & A Level Physics (9702)",
        defaultTestTitle: "Weekly A Level Physics Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. kinematics, superposition, 9702)...",
        storageKey: "cioal_test_paper_caie_alevel_physics",
        syllabusUrl: "data/caie_alevel_physics_syllabus.json",
        questionsUrl: "data/caie_alevel_physics_questions.json",
        jsBundleUrl: "data/caie_alevel_physics_db.js",
        catDir: "Categorized_Questions_CAIE_Alevel_Physics",
        tiers: ["AS Level", "A Level"],
        papers: [
            { value: "1", label: "Paper 1 (Multiple Choice)", tier: "AS Level" },
            { value: "2", label: "Paper 2 (AS Level Structured)", tier: "AS Level" },
            { value: "3", label: "Paper 3 (Advanced Practical)", tier: "AS Level" },
            { value: "4", label: "Paper 4 (A Level Structured)", tier: "A Level" },
            { value: "5", label: "Paper 5 (Planning & Evaluation)", tier: "A Level" }
        ]
    },
    CAIE_Alevel_Chemistry: {
        board: "Cambridge",
        level: "A Level",
        code: "9701",
        badge: "CAIE A Level Chemistry 9701",
        docTitle: "Cioal Tutor Topical Questions • A Level Chemistry (9701)",
        subtitle: "Cambridge International AS & A Level Chemistry (9701) Question Bank & Test Builder",
        examLabel: "Cambridge International AS & A Level Chemistry (9701)",
        defaultTestTitle: "Weekly A Level Chemistry Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. stoichiometry, equilibria, organic, 9701)...",
        storageKey: "cioal_test_paper_caie_alevel_chemistry",
        syllabusUrl: "data/caie_alevel_chemistry_syllabus.json",
        questionsUrl: "data/caie_alevel_chemistry_questions.json",
        jsBundleUrl: "data/caie_alevel_chemistry_db.js",
        catDir: "Categorized_Questions_CAIE_Alevel_Chemistry",
        tiers: ["AS Level", "A Level"],
        papers: [
            { value: "1", label: "Paper 1 (Multiple Choice)", tier: "AS Level" },
            { value: "2", label: "Paper 2 (AS Level Structured)", tier: "AS Level" },
            { value: "3", label: "Paper 3 (Advanced Practical)", tier: "AS Level" },
            { value: "4", label: "Paper 4 (A Level Structured)", tier: "A Level" },
            { value: "5", label: "Paper 5 (Planning & Evaluation)", tier: "A Level" }
        ]
    },
    CAIE_Alevel_Biology: {
        board: "Cambridge",
        level: "A Level",
        code: "9700",
        badge: "CAIE A Level Biology 9700",
        docTitle: "Cioal Tutor Topical Questions • A Level Biology (9700)",
        subtitle: "Cambridge International AS & A Level Biology (9700) Question Bank & Test Builder",
        examLabel: "Cambridge International AS & A Level Biology (9700)",
        defaultTestTitle: "Weekly A Level Biology Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. cell structure, enzymes, immunity, 9700)...",
        storageKey: "cioal_test_paper_caie_alevel_biology",
        syllabusUrl: "data/caie_alevel_biology_syllabus.json",
        questionsUrl: "data/caie_alevel_biology_questions.json",
        jsBundleUrl: "data/caie_alevel_biology_db.js",
        catDir: "Categorized_Questions_CAIE_Alevel_Biology",
        tiers: ["AS Level", "A Level"],
        papers: [
            { value: "1", label: "Paper 1 (Multiple Choice)", tier: "AS Level" },
            { value: "2", label: "Paper 2 (AS Level Structured)", tier: "AS Level" },
            { value: "3", label: "Paper 3 (Advanced Practical)", tier: "AS Level" },
            { value: "4", label: "Paper 4 (A Level Structured)", tier: "A Level" },
            { value: "5", label: "Paper 5 (Planning & Evaluation)", tier: "A Level" }
        ]
    },
    CAIE_Alevel_Math: {
        board: "Cambridge",
        level: "A Level",
        code: "9709",
        badge: "CAIE A Level Math 9709",
        docTitle: "Cioal Tutor Topical Questions • A Level Mathematics (9709)",
        subtitle: "Cambridge International AS & A Level Mathematics (9709) Question Bank & Test Builder",
        examLabel: "Cambridge International AS & A Level Mathematics (9709)",
        defaultTestTitle: "Weekly A Level Mathematics Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. quadratics, trigonometry, calculus, 9709)...",
        storageKey: "cioal_test_paper_caie_alevel_math",
        syllabusUrl: "data/caie_alevel_math_syllabus.json",
        questionsUrl: "data/caie_alevel_math_questions.json",
        jsBundleUrl: "data/caie_alevel_math_db.js",
        catDir: "Categorized_Questions_CAIE_Alevel_Math",
        tiers: ["AS Level", "A Level"],
        papers: [
            { value: "1", label: "Paper 1 (Pure Mathematics 1)", tier: "AS Level" },
            { value: "2", label: "Paper 2 (Pure Mathematics 2)", tier: "AS Level" },
            { value: "3", label: "Paper 3 (Pure Mathematics 3)", tier: "A Level" },
            { value: "4", label: "Paper 4 (Mechanics)", tier: "AS Level" },
            { value: "5", label: "Paper 5 (Probability & Statistics 1)", tier: "AS Level" },
            { value: "6", label: "Paper 6 (Probability & Statistics 2)", tier: "A Level" }
        ]
    },
    Edexcel_Alevel_Physics: {
        board: "Edexcel",
        level: "A Level",
        code: "9PH0",
        badge: "Edexcel A Level Physics 9PH0",
        docTitle: "Cioal Tutor Topical Questions • Edexcel A Level Physics (9PH0)",
        subtitle: "Pearson Edexcel AS & A Level Physics Specification Question Bank & Test Builder",
        examLabel: "Pearson Edexcel AS & A Level Physics (9PH0)",
        defaultTestTitle: "Weekly Edexcel A Level Physics Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. mechanics, waves, nuclear, 9PH0)...",
        storageKey: "cioal_test_paper_edexcel_alevel_physics",
        syllabusUrl: "data/edexcel_alevel_physics_syllabus.json",
        questionsUrl: "data/edexcel_alevel_physics_questions.json",
        jsBundleUrl: "data/edexcel_alevel_physics_db.js",
        catDir: "Categorized_Questions_Edexcel_Alevel_Physics",
        tiers: ["AS Level", "A Level"],
        papers: [
            { value: "1", label: "Paper 1 (Advanced Physics I)", tier: "Both" },
            { value: "2", label: "Paper 2 (Advanced Physics II)", tier: "Both" },
            { value: "3", label: "Paper 3 (General & Practical)", tier: "Both" }
        ]
    },
    Edexcel_Alevel_Chemistry: {
        board: "Edexcel",
        level: "A Level",
        code: "9CH0",
        badge: "Edexcel A Level Chemistry 9CH0",
        docTitle: "Cioal Tutor Topical Questions • Edexcel A Level Chemistry (9CH0)",
        subtitle: "Pearson Edexcel AS & A Level Chemistry Specification Question Bank & Test Builder",
        examLabel: "Pearson Edexcel AS & A Level Chemistry (9CH0)",
        defaultTestTitle: "Weekly Edexcel A Level Chemistry Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. equilibria, organic, redox, 9CH0)...",
        storageKey: "cioal_test_paper_edexcel_alevel_chemistry",
        syllabusUrl: "data/edexcel_alevel_chemistry_syllabus.json",
        questionsUrl: "data/edexcel_alevel_chemistry_questions.json",
        jsBundleUrl: "data/edexcel_alevel_chemistry_db.js",
        catDir: "Categorized_Questions_Edexcel_Alevel_Chemistry",
        tiers: ["AS Level", "A Level"],
        papers: [
            { value: "1", label: "Paper 1 (Advanced Inorganic & Physical)", tier: "Both" },
            { value: "2", label: "Paper 2 (Advanced Organic & Physical)", tier: "Both" },
            { value: "3", label: "Paper 3 (General & Practical)", tier: "Both" }
        ]
    },
    Edexcel_Alevel_Biology: {
        board: "Edexcel",
        level: "A Level",
        code: "9BN0",
        badge: "Edexcel A Level Biology 9BN0",
        docTitle: "Cioal Tutor Topical Questions • Edexcel A Level Biology (9BN0)",
        subtitle: "Pearson Edexcel AS & A Level Biology (Salters-Nuffield) Question Bank & Test Builder",
        examLabel: "Pearson Edexcel AS & A Level Biology (Salters-Nuffield) (9BN0/8BN0)",
        defaultTestTitle: "Weekly Edexcel A Level Biology Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. circulation, genetics, voice, 9BN0)...",
        storageKey: "cioal_test_paper_edexcel_alevel_biology",
        syllabusUrl: "data/edexcel_alevel_biology_syllabus.json",
        questionsUrl: "data/edexcel_alevel_biology_questions.json",
        jsBundleUrl: "data/edexcel_alevel_biology_db.js",
        catDir: "Categorized_Questions_Edexcel_Alevel_Biology",
        tiers: ["AS Level", "A Level"],
        papers: [
            { value: "1", label: "Paper 1 (Natural Environment & Survival)", tier: "Both" },
            { value: "2", label: "Paper 2 (Energy, Exercise & Coordination)", tier: "Both" },
            { value: "3", label: "Paper 3 (General & Practical Applications)", tier: "Both" }
        ]
    },
    Edexcel_Alevel_Math: {
        board: "Edexcel",
        level: "A Level",
        code: "9MA0",
        badge: "Edexcel A Level Maths 9MA0",
        docTitle: "Cioal Tutor Topical Questions • Edexcel A Level Mathematics (9MA0)",
        subtitle: "Pearson Edexcel AS & A Level Mathematics Specification Question Bank & Test Builder",
        examLabel: "Pearson Edexcel AS & A Level Mathematics (9MA0)",
        defaultTestTitle: "Weekly Edexcel A Level Mathematics Assessment",
        searchPlaceholder: "Search questions by topic, keyword, or paper ID (e.g. proof, calculus, statistics, mechanics, 9MA0)...",
        storageKey: "cioal_test_paper_edexcel_alevel_math",
        syllabusUrl: "data/edexcel_alevel_math_syllabus.json",
        questionsUrl: "data/edexcel_alevel_math_questions.json",
        jsBundleUrl: "data/edexcel_alevel_math_db.js",
        catDir: "Categorized_Questions_Edexcel_Alevel_Math",
        tiers: ["AS Level", "A Level"],
        papers: [
            { value: "1", label: "Paper 1 (Pure Mathematics 1)", tier: "Both" },
            { value: "2", label: "Paper 2 (Pure Mathematics 2)", tier: "Both" },
            { value: "3", label: "Paper 3 (Statistics & Mechanics)", tier: "Both" }
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
        const cacheBuster = "?v=18";
        try {
            [syllabusData, questionsData] = await Promise.all([
                fetch(`${cfg.syllabusUrl}${cacheBuster}`).then(r => {
                    if (!r.ok) throw new Error(`Failed to load ${cfg.syllabusUrl}`);
                    return r.json();
                }),
                fetch(`${cfg.questionsUrl}${cacheBuster}`).then(r => {
                    if (!r.ok) throw new Error(`Failed to load ${cfg.questionsUrl}`);
                    return r.json();
                })
            ]);
        } catch (fetchErr) {
            await loadScriptBundle(`${cfg.jsBundleUrl}${cacheBuster}`);
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

    const isFileProto = (window.location.protocol === "file:");
    const imgCacheSuffix = isFileProto ? "" : "?v=16";
    const questionsById = {};
    questionsData.forEach(q => {
        q.paper_type = String(q.paper_type ?? q.paper_num ?? "");
        const relImg = (q.image_rel_path || q.image_path || "").replace(/\\/g, "/");
        if (relImg) {
            q.image_url = encodeURI(`${cfg.catDir}/${relImg}`) + imgCacheSuffix;
        } else if (q.image_url && !isFileProto && !q.image_url.includes("?v=")) {
            q.image_url += imgCacheSuffix;
        }
        if (!q.is_mc) {
            const relMs = (q.ms_image_rel_path || q.ms_image_path || "").replace(/\\/g, "/");
            if (relMs) {
                q.ms_image_url = encodeURI(`${cfg.catDir}/${relMs}`) + imgCacheSuffix;
            } else if (q.ms_image_url && !isFileProto && !q.ms_image_url.includes("?v=")) {
                q.ms_image_url += imgCacheSuffix;
            }
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

    // If all chapters/subtopics are unchecked (or any core filter group is completely unchecked),
    // no questions should be selected.
    if (
        (subtopicSet.size === 0 && chapterSet.size === 0) ||
        years.length === 0 ||
        months.length === 0 ||
        tiers.length === 0 ||
        paperTypes.length === 0
    ) {
        const perPage = payload.per_page || 15;
        return {
            status: "success",
            total: 0,
            page: 1,
            per_page: perPage,
            total_pages: 1,
            questions: []
        };
    }

    const results = [];
    for (let i = 0; i < db.questions.length; i++) {
        const q = db.questions[i];

        if (!years.includes(parseInt(q.year))) continue;
        if (!months.includes(q.month)) continue;
        if (!tiers.includes(q.tier) && q.tier !== "Both") continue;
        const pNum = String(q.paper_type ?? q.paper_num ?? "");
        const pComp = String(q.component ?? "");
        if (!paperTypes.includes(pNum) && !paperTypes.includes(pComp)) continue;

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
    const bioTag = document.getElementById("biologyStatusTag");
    const mathTag = document.getElementById("mathStatusTag");

    const isCaieIgcse = (splashState.board === "Cambridge" && splashState.level === "IGCSE / O Level");
    const isEdexcelGcse = (splashState.board === "Edexcel" && splashState.level === "IGCSE / O Level");
    const isCaieAlevel = (splashState.board === "Cambridge" && splashState.level === "A Level");
    const isEdexcelAlevel = (splashState.board === "Edexcel" && splashState.level === "A Level");

    if (physTag) {
        if (isCaieIgcse) {
            physTag.textContent = "0625 • Ready ▶";
            physTag.className = "splash-subject-tag tag-ready";
        } else if (isEdexcelGcse) {
            physTag.textContent = "1PH0 • Ready ▶";
            physTag.className = "splash-subject-tag tag-ready";
        } else if (isCaieAlevel) {
            physTag.textContent = "9702 • Ready ▶";
            physTag.className = "splash-subject-tag tag-ready";
        } else if (isEdexcelAlevel) {
            physTag.textContent = "9PH0 • Ready ▶";
            physTag.className = "splash-subject-tag tag-ready";
        } else {
            physTag.textContent = "Coming Soon";
            physTag.className = "splash-subject-tag tag-soon";
        }
    }
    if (chemTag) {
        if (isCaieIgcse) {
            chemTag.textContent = "0620 • Ready ▶";
            chemTag.className = "splash-subject-tag tag-ready";
        } else if (isEdexcelGcse) {
            chemTag.textContent = "1CH0 • Ready ▶";
            chemTag.className = "splash-subject-tag tag-ready";
        } else if (isCaieAlevel) {
            chemTag.textContent = "9701 • Ready ▶";
            chemTag.className = "splash-subject-tag tag-ready";
        } else if (isEdexcelAlevel) {
            chemTag.textContent = "9CH0 • Ready ▶";
            chemTag.className = "splash-subject-tag tag-ready";
        } else {
            chemTag.textContent = "Coming Soon";
            chemTag.className = "splash-subject-tag tag-soon";
        }
    }
    if (bioTag) {
        if (isCaieIgcse) {
            bioTag.textContent = "0610 • Ready ▶";
            bioTag.className = "splash-subject-tag tag-ready";
        } else if (isEdexcelGcse) {
            bioTag.textContent = "1BI0 • Ready ▶";
            bioTag.className = "splash-subject-tag tag-ready";
        } else if (isCaieAlevel) {
            bioTag.textContent = "9700 • Ready ▶";
            bioTag.className = "splash-subject-tag tag-ready";
        } else if (isEdexcelAlevel) {
            bioTag.textContent = "9BI0 • Ready ▶";
            bioTag.className = "splash-subject-tag tag-ready";
        } else {
            bioTag.textContent = "Coming Soon";
            bioTag.className = "splash-subject-tag tag-soon";
        }
    }
    if (mathTag) {
        if (isCaieIgcse) {
            mathTag.textContent = "0580 • Ready ▶";
            mathTag.className = "splash-subject-tag tag-ready";
        } else if (isEdexcelGcse) {
            mathTag.textContent = "1MA1 • Ready ▶";
            mathTag.className = "splash-subject-tag tag-ready";
        } else if (isCaieAlevel) {
            mathTag.textContent = "9709 • Ready ▶";
            mathTag.className = "splash-subject-tag tag-ready";
        } else if (isEdexcelAlevel) {
            mathTag.textContent = "9MA0 • Ready ▶";
            mathTag.className = "splash-subject-tag tag-ready";
        } else {
            mathTag.textContent = "Coming Soon";
            mathTag.className = "splash-subject-tag tag-soon";
        }
    }
}

function renderTierCheckboxes(subject) {
    const cfg = SUBJECT_CONFIG[subject] || SUBJECT_CONFIG.Physics;
    const container = document.getElementById("curriculumTiersGroup");
    if (!container) return;

    const tiers = cfg.tiers || ["Core", "Extended"];
    container.innerHTML = tiers.map(t => `
        <label class="custom-checkbox">
            <input type="checkbox" class="tier-checkbox" value="${t}" checked>
            <span>${t}</span>
        </label>
    `).join("");

    container.querySelectorAll(".tier-checkbox").forEach(cb => {
        cb.addEventListener("change", () => {
            const checkedTiers = new Set(
                Array.from(document.querySelectorAll(".tier-checkbox:checked")).map(el => el.value)
            );
            document.querySelectorAll(".paper-type-checkbox").forEach(pcb => {
                const paperObj = cfg.papers.find(p => String(p.value) === String(pcb.value));
                if (paperObj) {
                    pcb.checked = (paperObj.tier === "Both")
                        ? checkedTiers.size > 0
                        : checkedTiers.has(paperObj.tier);
                }
            });

            // Synchronize syllabus chapter checkboxes when chapters have a tier attribute
            document.querySelectorAll(".chapter-accordion-item").forEach(item => {
                const chTier = item.dataset.tier;
                if (chTier) {
                    const shouldBeChecked = checkedTiers.has(chTier);
                    const chBox = item.querySelector(".chapter-checkbox");
                    if (chBox) {
                        chBox.checked = shouldBeChecked;
                        chBox.indeterminate = false;
                    }
                    item.querySelectorAll(".subtopic-checkbox").forEach(sb => {
                        sb.checked = shouldBeChecked;
                    });
                    item.style.opacity = shouldBeChecked ? "1" : "0.45";
                }
            });

            handleFilterChange();
        });
    });
}

function renderPaperComponentCheckboxes(subject) {
    const cfg = SUBJECT_CONFIG[subject] || SUBJECT_CONFIG.Physics;
    const container = document.getElementById("paperComponentsGroup");
    if (!container) return;

    const checkedTiers = new Set(
        Array.from(document.querySelectorAll(".tier-checkbox:checked")).map(el => el.value)
    );

    container.innerHTML = cfg.papers.map(p => {
        const isChecked = (p.tier === "Both")
            ? checkedTiers.size > 0
            : (checkedTiers.size === 0 || checkedTiers.has(p.tier));
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

    renderTierCheckboxes(subject);
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

    updateMobileFilterBadge();
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
            const validBase = ["Physics", "Chemistry", "Biology", "Math"].includes(subject);
            if (validBase && (splashState.board === "Cambridge" || splashState.board === "Edexcel")) {
                let targetSubject;
                if (splashState.level === "A Level") {
                    targetSubject = (splashState.board === "Edexcel") ? `Edexcel_Alevel_${subject}` : `CAIE_Alevel_${subject}`;
                } else {
                    targetSubject = (splashState.board === "Edexcel") ? `Edexcel_${subject}` : subject;
                }
                splashScreen.classList.add("hidden");
                comingSoonScreen.classList.add("hidden");
                await switchSubject(targetSubject);
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

    const launchBiologyBtn = document.getElementById("launchBiologyNowBtn");
    if (launchBiologyBtn) {
        launchBiologyBtn.addEventListener("click", () => launchSubjectFromSoon("Biology"));
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
    if (initialSubject.startsWith("CAIE_Alevel_")) {
        splashState.board = "Cambridge";
        splashState.level = "A Level";
    } else if (initialSubject.startsWith("Edexcel_Alevel_")) {
        splashState.board = "Edexcel";
        splashState.level = "A Level";
    } else if (initialSubject.startsWith("Edexcel_")) {
        splashState.board = "Edexcel";
        splashState.level = "IGCSE / O Level";
    } else {
        splashState.board = "Cambridge";
        splashState.level = "IGCSE / O Level";
    }
    document.querySelectorAll("#splashBoardGroup .splash-option-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.board === splashState.board);
    });
    document.querySelectorAll("#splashLevelGroup .splash-option-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.level === splashState.level);
    });
    updateSplashSubjectTags();
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

    const checkedTiers = new Set(
        Array.from(document.querySelectorAll(".tier-checkbox:checked")).map(el => el.value)
    );

    let currentTierGroup = null;

    syllabus.forEach(ch => {
        // Render section divider headers when chapters declare a tier (AS Level vs A Level)
        if (ch.tier && ch.tier !== currentTierGroup) {
            currentTierGroup = ch.tier;
            const groupHeader = document.createElement("div");
            const isAS = ch.tier === "AS Level";
            groupHeader.className = `syllabus-tier-group-header ${isAS ? 'tier-group-as' : 'tier-group-a2'}`;
            groupHeader.innerHTML = `
                <span>${isAS ? '📘 AS Level (Year 1)' : '🔬 A Level (Year 2)'}</span>
                <span class="tier-group-tag">${isAS ? 'Foundational' : 'Advanced'}</span>
            `;
            container.appendChild(groupHeader);
        }

        const item = document.createElement("div");
        item.className = "chapter-accordion-item";
        if (ch.tier) {
            item.dataset.tier = ch.tier;
        }

        // Clean name with badge pill
        let displayName = ch.name;
        let pillBadge = "";
        if (ch.name.startsWith("[AS]")) {
            pillBadge = `<span class="pill-tier pill-as">AS</span>`;
            displayName = ch.name.replace(/^\[AS\]\s*/, '');
        } else if (ch.name.startsWith("[A2]")) {
            pillBadge = `<span class="pill-tier pill-a2">A2</span>`;
            displayName = ch.name.replace(/^\[A2\]\s*/, '');
        }

        const isChecked = ch.tier ? (checkedTiers.size === 0 || checkedTiers.has(ch.tier)) : true;
        if (ch.tier && !isChecked) {
            item.style.opacity = "0.45";
        }

        const header = document.createElement("div");
        header.className = "chapter-accordion-header";
        header.innerHTML = `
            <div class="chapter-header-left">
                <input type="checkbox" class="chapter-checkbox" data-chapter="${ch.id}" id="ch_${ch.id}" ${isChecked ? "checked" : ""}>
                <label for="ch_${ch.id}" style="cursor:pointer;">${pillBadge}${displayName}</label>
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
                <input type="checkbox" class="subtopic-checkbox" data-chapter="${ch.id}" data-subtopic="${sub.id}" id="sub_${sub.id}" ${isChecked ? "checked" : ""}>
                <span>${sub.name}</span>
            `;
            body.appendChild(subLabel);
        });

        // Toggle accordion body
        const toggleAccordion = () => {
            const isOpen = body.style.display !== "none";
            body.style.display = isOpen ? "none" : "flex";
            header.querySelector(".chapter-toggle-icon").textContent = isOpen ? "▶" : "▼";
        };
        header.querySelector(".chapter-toggle-icon").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleAccordion();
        });
        header.addEventListener("click", (e) => {
            if (e.target.tagName === "INPUT" || e.target.tagName === "LABEL") return;
            toggleAccordion();
        });

        // Chapter checkbox toggle child subtopics
        const chBox = header.querySelector(".chapter-checkbox");
        chBox.addEventListener("change", () => {
            const checked = chBox.checked;
            chBox.indeterminate = false;
            body.querySelectorAll(".subtopic-checkbox").forEach(sb => {
                sb.checked = checked;
            });
            handleFilterChange();
        });

        // Subtopic checkbox update
        body.querySelectorAll(".subtopic-checkbox").forEach(sb => {
            sb.addEventListener("change", () => {
                const allSubs = Array.from(body.querySelectorAll(".subtopic-checkbox"));
                const anyChecked = allSubs.some(s => s.checked);
                const allChecked = allSubs.every(s => s.checked);
                chBox.checked = anyChecked;
                chBox.indeterminate = anyChecked && !allChecked;
                handleFilterChange();
            });
        });

        item.appendChild(header);
        item.appendChild(body);
        container.appendChild(item);
    });
}

function openMobileSidebar() {
    const sidebar = document.getElementById("appSidebar");
    const backdrop = document.getElementById("sidebarBackdrop");
    if (sidebar) sidebar.classList.add("mobile-open");
    if (backdrop) backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMobileSidebar() {
    const sidebar = document.getElementById("appSidebar");
    const backdrop = document.getElementById("sidebarBackdrop");
    if (sidebar) sidebar.classList.remove("mobile-open");
    if (backdrop) backdrop.classList.remove("active");
    document.body.style.overflow = "";
}

function updateMobileFilterBadge() {
    const badge = document.getElementById("mobileChapterCountBadge");
    if (!badge) return;
    const chCount = appState.selectedChapters.length;
    badge.textContent = `${chCount} Ch`;
    badge.classList.toggle("active", chCount > 0);
}

function setupEventListeners() {
    // Sync Show Mark Scheme checkboxes (sidebar & mobile bar)
    const showMsCb = document.getElementById("showMarkSchemeCheckbox");
    const mobileShowMsCb = document.getElementById("mobileShowMarkSchemeCheckbox");
    const applyMarkSchemeVisibility = (checked) => {
        appState.showMarkScheme = checked;
        if (showMsCb && showMsCb.checked !== checked) showMsCb.checked = checked;
        if (mobileShowMsCb && mobileShowMsCb.checked !== checked) mobileShowMsCb.checked = checked;
        document.querySelectorAll(".question-ms-panel").forEach(panel => {
            panel.style.display = appState.showMarkScheme ? "block" : "none";
        });
    };
    if (showMsCb) {
        showMsCb.addEventListener("change", () => applyMarkSchemeVisibility(showMsCb.checked));
    }
    if (mobileShowMsCb) {
        mobileShowMsCb.addEventListener("change", () => applyMarkSchemeVisibility(mobileShowMsCb.checked));
    }

    // Mobile filter drawer controls
    const openSidebarBtn = document.getElementById("openMobileSidebarBtn");
    if (openSidebarBtn) openSidebarBtn.addEventListener("click", openMobileSidebar);
    const closeSidebarBtn = document.getElementById("closeMobileSidebarBtn");
    if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", closeMobileSidebar);
    const applyMobileBtn = document.getElementById("applyMobileFiltersBtn");
    if (applyMobileBtn) applyMobileBtn.addEventListener("click", closeMobileSidebar);
    const backdrop = document.getElementById("sidebarBackdrop");
    if (backdrop) backdrop.addEventListener("click", closeMobileSidebar);

    // Year checkboxes
    document.querySelectorAll(".year-checkbox").forEach(cb => {
        cb.addEventListener("change", handleFilterChange);
    });

    // Month checkboxes
    document.querySelectorAll(".month-checkbox").forEach(cb => {
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
        document.querySelectorAll(".chapter-checkbox, .subtopic-checkbox").forEach(cb => {
            cb.checked = true;
            cb.indeterminate = false;
        });
        handleFilterChange();
    });
    document.getElementById("clearChapters").addEventListener("click", () => {
        document.querySelectorAll(".chapter-checkbox, .subtopic-checkbox").forEach(cb => {
            cb.checked = false;
            cb.indeterminate = false;
        });
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
            document.querySelectorAll(".random-time-btn").forEach(b => b.classList.remove("active"));
            saveTestToLocalStorage();
            updateTestTray();
            updateAddAllButtonState();
            renderTestModalList();
            renderQuestionsList(currentQuestionsData);
        }
    });

    // Quick Random Paper by Time buttons
    document.querySelectorAll(".random-time-btn").forEach(btn => {
        btn.addEventListener("click", async () => {
            const minutes = parseInt(btn.dataset.minutes, 10);
            if (!minutes || minutes <= 0) return;
            document.querySelectorAll(".random-time-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            await generateRandomPaperByDuration(minutes);
        });
    });
}

async function generateRandomPaperByDuration(targetMinutes) {
    try {
        const db = await ensureSubjectDatabaseLoaded(appState.subject);

        // Read all currently checked filter boxes from the sidebar
        let years = Array.from(document.querySelectorAll(".year-checkbox:checked")).map(cb => parseInt(cb.value));
        let months = Array.from(document.querySelectorAll(".month-checkbox:checked")).map(cb => cb.value);
        let tiers = Array.from(document.querySelectorAll(".tier-checkbox:checked")).map(cb => cb.value);
        let paperTypes = Array.from(document.querySelectorAll(".paper-type-checkbox:checked")).map(cb => cb.value);
        let chapters = Array.from(document.querySelectorAll(".chapter-checkbox:checked")).map(cb => parseInt(cb.dataset.chapter));
        let subtopics = Array.from(document.querySelectorAll(".subtopic-checkbox:checked")).map(cb => cb.dataset.subtopic);

        // If the user hasn't checked any chapters/subtopics yet, auto-select all syllabus chapters so random generation works seamlessly
        let autoCheckedAllChapters = false;
        if (chapters.length === 0 && subtopics.length === 0) {
            document.querySelectorAll(".chapter-checkbox, .subtopic-checkbox").forEach(cb => {
                cb.checked = true;
                cb.indeterminate = false;
            });
            chapters = Array.from(document.querySelectorAll(".chapter-checkbox:checked")).map(cb => parseInt(cb.dataset.chapter));
            subtopics = Array.from(document.querySelectorAll(".subtopic-checkbox:checked")).map(cb => cb.dataset.subtopic);
            appState.selectedChapters = chapters;
            appState.selectedSubtopics = subtopics;
            updateMobileFilterBadge();
            fetchQuestions();
            autoCheckedAllChapters = true;
        }

        const payload = {
            subject: appState.subject,
            years,
            months,
            tiers,
            paper_types: paperTypes,
            chapters,
            subtopics,
            search_query: appState.searchQuery,
            get_all: true
        };

        const data = searchQuestionsStatic(db, payload);
        const pool = (data && data.questions) ? data.questions.slice() : [];

        if (pool.length === 0) {
            showToast("⚠️ No questions match the currently checked filters! Please check more years, papers, or chapters.");
            return;
        }

        // Target marks using the app's 1.125 mins/mark ratio (Time = round(Marks * 1.125))
        const targetMarks = Math.max(1, Math.round(targetMinutes / 1.125));

        // Fisher-Yates shuffle
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = pool[i];
            pool[i] = pool[j];
            pool[j] = tmp;
        }

        const selected = [];
        const selectedIds = new Set();
        let currentMarks = 0;

        // Pass 1: Pick questions across distinct subtopics/chapters first for topical variety
        const usedSubtopics = new Set();
        for (const q of pool) {
            const m = Math.max(1, q.marks || 1);
            const subKey = String(q.subtopic_id || q.chapter_id || "");
            if (!usedSubtopics.has(subKey) && currentMarks + m <= targetMarks) {
                selected.push(q);
                selectedIds.add(q.id);
                usedSubtopics.add(subKey);
                currentMarks += m;
                if (currentMarks === targetMarks) break;
            }
        }

        // Pass 2: Fill remaining marks from the shuffled pool
        if (currentMarks < targetMarks) {
            for (const q of pool) {
                if (selectedIds.has(q.id)) continue;
                const m = Math.max(1, q.marks || 1);
                if (currentMarks + m <= targetMarks) {
                    selected.push(q);
                    selectedIds.add(q.id);
                    currentMarks += m;
                    if (currentMarks === targetMarks) break;
                }
            }
        }

        // Pass 3: If still short by a small gap, try a 1-for-1 swap with an unselected question to hit exact targetMarks
        const gap = targetMarks - currentMarks;
        if (gap > 0 && selected.length > 0) {
            let swapped = false;
            for (let sIdx = selected.length - 1; sIdx >= 0 && !swapped; sIdx--) {
                const sMarks = Math.max(1, selected[sIdx].marks || 1);
                const neededMarks = sMarks + gap;
                const replacement = pool.find(q => !selectedIds.has(q.id) && Math.max(1, q.marks || 1) === neededMarks);
                if (replacement) {
                    selectedIds.delete(selected[sIdx].id);
                    selectedIds.add(replacement.id);
                    selected[sIdx] = replacement;
                    currentMarks += gap;
                    swapped = true;
                }
            }
            // If no exact swap and selected is empty (e.g., all questions have marks > targetMarks), pick the closest single question
            if (selected.length === 0 && pool.length > 0) {
                pool.sort((a, b) => Math.abs((a.marks || 1) - targetMarks) - Math.abs((b.marks || 1) - targetMarks));
                selected.push(pool[0]);
                currentMarks = Math.max(1, pool[0].marks || 1);
            }
        }

        // Order selected questions nicely: MCQs first (if any), then theory questions
        selected.sort((a, b) => {
            if (Boolean(a.is_mc) !== Boolean(b.is_mc)) return a.is_mc ? -1 : 1;
            return 0;
        });

        appState.testPaperQuestions = selected;
        isTimeManuallyEdited = false;
        const timeInput = document.getElementById("customTimeAllowed");
        if (timeInput) {
            timeInput.value = calculateAutoTime(currentMarks);
        }

        saveTestToLocalStorage();
        updateTestTray();
        updateAddAllButtonState();
        renderTestModalList();
        renderQuestionsList(currentQuestionsData);

        const timeLabel = targetMinutes >= 60
            ? (targetMinutes === 60 ? "1 hr (60 mins)" : `${targetMinutes / 60} hrs (${targetMinutes} mins)`)
            : `${targetMinutes} mins`;
        const chNote = autoCheckedAllChapters ? " (all chapters selected)" : "";
        showToast(`🎲 Generated ${timeLabel} paper: ${selected.length} Questions • ${currentMarks} Marks${chNote}`);
    } catch (err) {
        console.error("Error generating random paper:", err);
        alert("Error generating random paper: " + err.message);
    }
}

function handleFilterChange() {
    appState.selectedYears = Array.from(document.querySelectorAll(".year-checkbox:checked")).map(cb => parseInt(cb.value));
    appState.selectedMonths = Array.from(document.querySelectorAll(".month-checkbox:checked")).map(cb => cb.value);
    appState.selectedTiers = Array.from(document.querySelectorAll(".tier-checkbox:checked")).map(cb => cb.value);
    appState.selectedPaperTypes = Array.from(document.querySelectorAll(".paper-type-checkbox:checked")).map(cb => cb.value);

    // Chapters and subtopics
    appState.selectedChapters = Array.from(document.querySelectorAll(".chapter-checkbox:checked")).map(cb => parseInt(cb.dataset.chapter));
    appState.selectedSubtopics = Array.from(document.querySelectorAll(".subtopic-checkbox:checked")).map(cb => cb.dataset.subtopic);

    updateMobileFilterBadge();
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
            const applyMobileBtn = document.getElementById("applyMobileFiltersBtn");
            if (applyMobileBtn) {
                applyMobileBtn.textContent = `✓ Show ${data.total.toLocaleString()} Questions`;
            }
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

// Helper to render KaTeX math in any DOM container
function triggerKaTeX(element) {
    if (!element) return;
    if (typeof renderMathInElement === "function") {
        try {
            renderMathInElement(element, {
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "$", right: "$", display: false },
                    { left: "\\[", right: "\\]", display: true },
                    { left: "\\(", right: "\\)", display: false }
                ],
                throwOnError: false
            });
        } catch (e) {
            console.warn("KaTeX rendering warning:", e);
        }
    }
}

// Render question content from native blocks (text + diagrams) or fallback image
function renderQuestionContentHtml(q) {
    if (q.blocks && Array.isArray(q.blocks) && q.blocks.length > 0) {
        const flowHtml = q.blocks.map(b => {
            if (b.type === "diagram") {
                return `
                    <div class="question-diagram-wrap">
                        <img src="${b.url}" alt="Diagram" class="question-diagram-img" loading="lazy">
                    </div>
                `;
            } else if (b.type === "text") {
                const linesHtml = (b.lines || []).map(line => {
                    const kindCls = line.kind || "body";
                    const marksHtml = line.marks ? `<span class="native-line-marks">[${line.marks}]</span>` : "";
                    return `
                        <div class="native-q-line ${kindCls}">
                            <span class="native-line-content">${line.html}</span>
                            ${marksHtml}
                        </div>
                    `;
                }).join("");
                return `<div class="native-text-block">${linesHtml}</div>`;
            }
            return "";
        }).join("");
        return `<div class="native-question-flow">${flowHtml}</div>`;
    }
    if (q.image_url) {
        return `<img src="${q.image_url}" alt="Question ${q.q_num}" class="question-img" loading="lazy">`;
    }
    return `<div style="padding:1rem; color:#64748b; font-style:italic;">No preview available for question ${q.q_num}.</div>`;
}

// Render structured Mark Scheme rows as a table
function renderMsRowsTableHtml(rows) {
    if (!rows || rows.length === 0) return "";
    const trsHtml = rows.map(r => `
        <tr>
            <td class="ms-cell-part">${r.part || "—"}</td>
            <td class="ms-cell-answer">${r.answer || "—"}</td>
            <td class="ms-cell-marks">${r.marks || "—"}</td>
            <td class="ms-cell-guidance">${r.guidance || "—"}</td>
        </tr>
    `).join("");

    return `
        <div class="ms-table-responsive">
            <table class="ms-table">
                <thead>
                    <tr>
                        <th style="width:14%;">Part</th>
                        <th style="width:48%;">Scheme / Acceptable Answer</th>
                        <th style="width:10%; text-align:center;">Marks</th>
                        <th style="width:28%;">Guidance / Notes</th>
                    </tr>
                </thead>
                <tbody>
                    ${trsHtml}
                </tbody>
            </table>
        </div>
    `;
}

// Render native exam item for exam paper view & print
function renderNativeExamItemHtml(q, badgeText, marks) {
    const marksLabel = `[Total: ${marks} Mark${marks > 1 ? "s" : ""}]`;
    const contentHtml = renderQuestionContentHtml(q);
    return `
        <div class="exam-question-item single-seg native-item">
            <div class="exam-q-header">
                <span class="exam-q-num-badge">${badgeText}</span>
                <span class="exam-q-marks">${marksLabel}</span>
            </div>
            <div class="exam-q-native-body">
                ${contentHtml}
            </div>
        </div>
    `;
}

// Render native Mark Scheme item for exam paper view & print
function renderNativeMsExamItemHtml(q, badgeText, marks) {
    const marksLabel = `[Total: ${marks} Mark${marks > 1 ? "s" : ""}]`;
    const tableHtml = renderMsRowsTableHtml(q.ms_rows);
    return `
        <div class="exam-question-item single-seg native-ms-item">
            <div class="exam-q-header">
                <span class="exam-q-num-badge">${badgeText}</span>
                <span class="exam-q-marks">${marksLabel}</span>
            </div>
            <div class="exam-q-native-ms-body" style="padding:0.35rem 0.6rem;">
                ${tableHtml}
            </div>
        </div>
    `;
}

function renderQuestionsList(questions) {
    const listContainer = document.getElementById("questionsList");
    if (!questions || questions.length === 0) {
        const noChaptersSelected = appState.selectedChapters.length === 0 && appState.selectedSubtopics.length === 0;
        if (noChaptersSelected) {
            listContainer.innerHTML = `
                <div class="empty-state-card">
                    <div class="empty-state-icon">📚</div>
                    <p class="empty-state-title">No Syllabus Chapters Selected</p>
                    <p class="empty-state-subtitle">Check one or more syllabus chapters or subtopics in the filter panel to display questions, or select all chapters below.</p>
                    <div class="empty-state-actions">
                        <button type="button" class="btn btn-accent" id="emptySelectAllChaptersBtn">✓ Select All Chapters</button>
                        <button type="button" class="btn btn-outline mobile-only-btn" id="emptyOpenSidebarBtn">🎛️ Choose Chapters</button>
                    </div>
                </div>
            `;
            const selectAllBtn = document.getElementById("emptySelectAllChaptersBtn");
            if (selectAllBtn) {
                selectAllBtn.addEventListener("click", () => {
                    document.querySelectorAll(".chapter-checkbox, .subtopic-checkbox").forEach(cb => {
                        cb.checked = true;
                        cb.indeterminate = false;
                    });
                    handleFilterChange();
                });
            }
            const openDrawerBtn = document.getElementById("emptyOpenSidebarBtn");
            if (openDrawerBtn) {
                openDrawerBtn.addEventListener("click", openMobileSidebar);
            }
        } else {
            listContainer.innerHTML = `
                <div class="empty-state-card">
                    <div class="empty-state-icon">🔍</div>
                    <p class="empty-state-title">No questions match your filter selection</p>
                    <p class="empty-state-subtitle">Try adjusting your selected years, exam sessions, paper components, or search query.</p>
                </div>
            `;
        }
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
        } else if (q.ms_rows && q.ms_rows.length > 0) {
            msContentHtml = `
                <div class="question-ms-panel" style="display: ${appState.showMarkScheme ? "block" : "none"};">
                    <div class="ms-panel-header">
                        <span class="ms-panel-title">✅ Official Mark Scheme (${paperInfo} • Q${q.q_num})</span>
                        <span style="font-size:0.78rem; font-weight:700; color:#166534;">[Total: ${q.marks} Mark${q.marks > 1 ? "s" : ""}]</span>
                    </div>
                    ${renderMsRowsTableHtml(q.ms_rows)}
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

        const questionContentHtml = renderQuestionContentHtml(q);

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
                ${questionContentHtml}
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

    triggerKaTeX(listContainer);
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
    const containers = [
        document.getElementById("paginationControls"),
        document.getElementById("paginationControlsBottom")
    ].filter(Boolean);

    const total = appState.totalMatching || 0;
    const totalPages = appState.totalPages || 1;
    const current = appState.currentPage || 1;
    const perPage = appState.perPage || 15;

    if (total === 0 || totalPages <= 1) {
        containers.forEach(c => {
            c.innerHTML = "";
            c.style.display = "none";
        });
        return;
    }

    const startIdx = (current - 1) * perPage + 1;
    const endIdx = Math.min(total, current * perPage);

    const goToPage = (targetPage) => {
        if (targetPage < 1 || targetPage > totalPages || targetPage === appState.currentPage) return;
        appState.currentPage = targetPage;
        fetchQuestions();
        const topAnchor = document.getElementById("paginationControls") || document.querySelector(".toolbar-card");
        if (topAnchor) {
            const y = Math.max(0, topAnchor.getBoundingClientRect().top + window.scrollY - 82);
            window.scrollTo({ top: y, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    containers.forEach(container => {
        container.innerHTML = "";
        container.style.display = "flex";

        const info = document.createElement("div");
        info.className = "pagination-info";
        info.innerHTML = `Page <strong>${current}</strong> of <strong>${totalPages}</strong> <span class="pagination-range">• Showing ${startIdx.toLocaleString()}–${endIdx.toLocaleString()} of ${total.toLocaleString()}</span>`;
        container.appendChild(info);

        const btnGroup = document.createElement("div");
        btnGroup.className = "pagination-buttons";

        const prevBtn = document.createElement("button");
        prevBtn.type = "button";
        prevBtn.className = "page-btn page-nav-btn";
        prevBtn.innerHTML = `◀ <span>Prev</span>`;
        prevBtn.disabled = current === 1;
        prevBtn.addEventListener("click", () => goToPage(current - 1));
        btnGroup.appendChild(prevBtn);

        let startPage = Math.max(1, current - 2);
        let endPage = Math.min(totalPages, startPage + 4);
        if (endPage - startPage < 4) {
            startPage = Math.max(1, endPage - 4);
        }

        const createPageBtn = (p) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = `page-btn ${p === current ? "active" : ""}`;
            btn.textContent = p;
            btn.addEventListener("click", () => goToPage(p));
            return btn;
        };

        if (startPage > 1) {
            btnGroup.appendChild(createPageBtn(1));
            if (startPage > 2) {
                const dots = document.createElement("span");
                dots.className = "page-ellipsis";
                dots.textContent = "…";
                btnGroup.appendChild(dots);
            }
        }

        for (let p = startPage; p <= endPage; p++) {
            btnGroup.appendChild(createPageBtn(p));
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const dots = document.createElement("span");
                dots.className = "page-ellipsis";
                dots.textContent = "…";
                btnGroup.appendChild(dots);
            }
            btnGroup.appendChild(createPageBtn(totalPages));
        }

        const nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "page-btn page-nav-btn";
        nextBtn.innerHTML = `<span>Next</span> ▶`;
        nextBtn.disabled = current === totalPages;
        nextBtn.addEventListener("click", () => goToPage(current + 1));
        btnGroup.appendChild(nextBtn);

        container.appendChild(btnGroup);
    });
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

// Automatically slice any single <img> that loads taller than 1 page (fallback if qp_slices not precomputed)
function computeClientImageSlices(imgEl) {
    const w = imgEl.naturalWidth;
    const h = imgEl.naturalHeight;
    const maxSingleH = Math.round(w * 1.23);
    if (!w || !h || h <= maxSingleH) return [[0, h, w, h]];

    const maxFirstH = Math.round(w * 1.18);
    const maxContH = Math.round(w * 1.35);

    try {
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(imgEl, 0, 0);
        const data = ctx.getImageData(0, 0, w, h).data;

        const baseCost = new Float32Array(h);
        for (let y = 0; y < h; y++) {
            let dc = 0;
            let mrun = 0;
            let cur = 0;
            const rowOff = y * w * 4;
            for (let x = 0; x < w; x++) {
                const i = rowOff + x * 4;
                if (data[i] < 200 || data[i + 1] < 200 || data[i + 2] < 200) {
                    dc++;
                    cur++;
                    if (cur > mrun) mrun = cur;
                } else {
                    cur = 0;
                }
            }
            if (dc === 0) baseCost[y] = 0;
            else if (dc <= 12 && mrun <= 4) baseCost[y] = 45;
            else baseCost[y] = 800 + dc;
        }

        const winCost = new Float32Array(h);
        for (let y = 0; y < h; y++) {
            const y0 = Math.max(0, y - 2);
            const y1 = Math.min(h, y + 3);
            let sum = 0;
            for (let r = y0; r < y1; r++) sum += baseCost[r];
            winCost[y] = sum / (y1 - y0);
        }

        const slices = [];
        let curY = 0;
        let isFirst = true;
        while (curY < h) {
            const rem = h - curY;
            const limitH = isFirst ? maxFirstH : maxContH;
            if (rem <= limitH) {
                slices.push([curY, rem, w, h]);
                break;
            }
            let minAllowed, maxAllowed, idealY;
            if (rem <= limitH + maxContH) {
                minAllowed = Math.max(curY + Math.round(limitH * 0.45), h - maxContH + 15);
                maxAllowed = curY + limitH;
                idealY = Math.min(maxAllowed - 15, Math.max(minAllowed, curY + Math.round(rem * 0.50)));
            } else {
                minAllowed = curY + Math.round(limitH * 0.55);
                maxAllowed = curY + limitH;
                idealY = curY + Math.round(limitH * 0.88);
            }
            minAllowed = Math.max(curY + 150, Math.min(minAllowed, maxAllowed - 10));
            let bestY = idealY;
            let bestScore = 1e18;
            for (let y = minAllowed; y <= maxAllowed; y++) {
                const score = winCost[y] + baseCost[y] * 2.0 + Math.abs(y - idealY) * 0.012;
                if (score < bestScore) {
                    bestScore = score;
                    bestY = y;
                }
            }
            slices.push([curY, bestY - curY, w, h]);
            curY = bestY;
            isFirst = false;
        }
        return slices;
    } catch (e) {
        const slices = [];
        let curY = 0;
        let isFirst = true;
        while (curY < h) {
            const rem = h - curY;
            const limitH = isFirst ? maxFirstH : maxContH;
            if (rem <= limitH) {
                slices.push([curY, rem, w, h]);
                break;
            }
            const splitH = (rem <= limitH + maxContH) ? Math.min(limitH, Math.round(rem * 0.5)) : Math.round(limitH * 0.88);
            slices.push([curY, splitH, w, h]);
            curY += splitH;
            isFirst = false;
        }
        return slices;
    }
}

function buildSvgSliceHtml(imgUrl, y0, sh, w, h) {
    return `<svg viewBox="0 ${y0} ${w} ${sh}" width="${w}" height="${sh}" class="exam-q-svg-slice" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><image href="${imgUrl}" xlink:href="${imgUrl}" width="${w}" height="${h}" /></svg>`;
}

window.autoSliceTallExamImg = function(imgEl) {
    if (!imgEl || !imgEl.naturalWidth || !imgEl.naturalHeight) return;
    if (imgEl.naturalHeight <= Math.round(imgEl.naturalWidth * 1.23)) return;
    const itemEl = imgEl.closest(".exam-question-item");
    const firstBlockEl = imgEl.closest(".exam-q-first-block");
    const firstWrapEl = imgEl.closest(".exam-q-seg-wrap");
    if (!itemEl || !firstBlockEl || !firstWrapEl || itemEl.dataset.autoSliced === "1") return;
    itemEl.dataset.autoSliced = "1";

    const slices = computeClientImageSlices(imgEl);
    if (!slices || slices.length <= 1) return;

    const src = imgEl.getAttribute("src");
    itemEl.classList.remove("single-seg");
    itemEl.classList.add("multi-seg");

    const [y0, sh0, w0, h0] = slices[0];
    firstWrapEl.innerHTML = buildSvgSliceHtml(src, y0, sh0, w0, h0);

    for (let i = 1; i < slices.length; i++) {
        const [sy, ssh, sw, sh] = slices[i];
        const contDiv = document.createElement("div");
        contDiv.className = "exam-q-seg-wrap exam-q-continuation-seg";
        contDiv.innerHTML = buildSvgSliceHtml(src, sy, ssh, sw, sh);
        itemEl.appendChild(contDiv);
    }
};

function renderSlicedExamItemHtml(imgUrl, slices, badgeText, marks, altText) {
    const marksLabel = `[Total: ${marks} Mark${marks > 1 ? "s" : ""}]`;
    if (slices && slices.length > 1) {
        const [y0, sh0, w0, h0] = slices[0];
        const restHtml = slices.slice(1).map(([sy, ssh, sw, sh]) => `
            <div class="exam-q-seg-wrap exam-q-continuation-seg">
                ${buildSvgSliceHtml(imgUrl, sy, ssh, sw, sh)}
            </div>
        `).join("");
        return `
            <div class="exam-question-item multi-seg" data-auto-sliced="1">
                <div class="exam-q-first-block">
                    <div class="exam-q-header">
                        <span class="exam-q-num-badge">${badgeText}</span>
                        <span class="exam-q-marks">${marksLabel}</span>
                    </div>
                    <div class="exam-q-seg-wrap">
                        ${buildSvgSliceHtml(imgUrl, y0, sh0, w0, h0)}
                    </div>
                </div>
                ${restHtml}
            </div>
        `;
    }
    return `
        <div class="exam-question-item single-seg">
            <div class="exam-q-first-block">
                <div class="exam-q-header">
                    <span class="exam-q-num-badge">${badgeText}</span>
                    <span class="exam-q-marks">${marksLabel}</span>
                </div>
                <div class="exam-q-seg-wrap">
                    <img src="${imgUrl}" alt="${altText}" class="exam-q-img" loading="eager" onload="window.autoSliceTallExamImg && window.autoSliceTallExamImg(this)">
                </div>
            </div>
        </div>
    `;
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
        if (q.blocks && q.blocks.length > 0) {
            questionsHtml += renderNativeExamItemHtml(
                q,
                `Question ${idx + 1}`,
                q.marks || 1
            );
        } else {
            questionsHtml += renderSlicedExamItemHtml(
                q.image_url,
                q.qp_slices,
                `Question ${idx + 1}`,
                q.marks || 1,
                `Question ${idx + 1}`
            );
        }

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
        } else if (q.ms_rows && q.ms_rows.length > 0) {
            markSchemesHtml += renderNativeMsExamItemHtml(
                q,
                `Question ${idx + 1} — Mark Scheme`,
                q.marks || 1
            );
        } else if (q.ms_image_url) {
            markSchemesHtml += renderSlicedExamItemHtml(
                q.ms_image_url,
                q.ms_slices,
                `Question ${idx + 1} — Mark Scheme`,
                q.marks || 1,
                `Mark Scheme Question ${idx + 1}`
            );
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
    const printArea = document.getElementById("examPaperPrintArea");
    const printRoot = document.getElementById("printPaperRoot");
    if (printArea) {
        printArea.innerHTML = fullHtml;
        triggerKaTeX(printArea);
    }
    if (printRoot) {
        printRoot.innerHTML = fullHtml;
        triggerKaTeX(printRoot);
    }
}

function handleDirectPrint() {
    renderExamPaperView();
    window.print();
}

function openFullPagePrintTab() {
    renderExamPaperView();
    const paperHtml = document.getElementById("printPaperRoot").innerHTML || buildExamPaperHtml();
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
            <link rel="stylesheet" href="static/css/style.css?v=17">
            <!-- KaTeX for rendering mathematical & scientific expressions -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
            <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
            <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" onload="if(window.renderMathInElement)renderMathInElement(document.body,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false},{left:'\\\\[',right:'\\\\]',display:true},{left:'\\\\(',right:'\\\\)',display:false}],throwOnError:false})"></script>
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
        } else if (q.ms_rows && q.ms_rows.length > 0) {
            detailedMsHtml += `
                <div class="exam-question-item single-seg native-ms-item" style="margin-bottom:1rem;">
                    <div class="exam-q-header">
                        <span class="exam-q-num-badge">Question ${idx + 1} — Mark Scheme (${q.year} ${q.month} P${q.component} Q${q.q_num})</span>
                        <span class="exam-q-marks">[Total: ${q.marks} Mark${q.marks > 1 ? "s" : ""}]</span>
                    </div>
                    <div style="padding:0.35rem 0.6rem;">
                        ${renderMsRowsTableHtml(q.ms_rows)}
                    </div>
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

    triggerKaTeX(container);
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
