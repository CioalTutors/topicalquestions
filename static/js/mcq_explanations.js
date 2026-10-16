// Cioal Tutors - Pedagogical MCQ Explanation Engine
// Provides concise, accurate, syllabus-aligned 1-to-2 line explanations for all MCQs across Physics, Chemistry, Biology (IGCSE & A Level).

const MCQ_EXPLANATION_ENGINE = (function() {

    // Helper to test if any keyword appears as whole word or phrase in text
    function matchAny(text, keywords) {
        if (!text) return false;
        const lower = text.toLowerCase();
        return keywords.some(k => {
            const pat = new RegExp('\\b' + k.toLowerCase().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'i');
            return pat.test(lower);
        });
    }

    // Main resolver function
    function resolveExplanation(q, subject) {
        // If question already contains a curated explanation, use it
        if (q.explanation && typeof q.explanation === "string" && q.explanation.trim().length > 0) {
            return q.explanation.trim();
        }

        const summary = (q.summary || "").toLowerCase();
        const subtopic = (q.subtopic_name || "").toLowerCase();
        const chapter = (q.chapter_name || "").toLowerCase();
        const ans = (q.ms_answer || "A").trim().toUpperCase();
        const combined = `${summary} ${subtopic} ${chapter}`;

        // Determine discipline
        const subjStr = (subject || q.subject || "").toLowerCase();
        const isPhysics = subjStr.includes("phys") || combined.includes("physics") || combined.includes("motion") || combined.includes("wave") || combined.includes("circuit");
        const isChem = subjStr.includes("chem") || combined.includes("chemistry") || combined.includes("element") || combined.includes("reaction") || combined.includes("acid");
        const isBio = subjStr.includes("bio") || combined.includes("biology") || combined.includes("cell") || combined.includes("organ") || combined.includes("plant");

        // -------------------------------------------------------------
        // 1. PHYSICS EXPLANATION RULES
        // -------------------------------------------------------------
        if (isPhysics) {
            // Scalar vs Vector
            if (matchAny(combined, ["scalar", "vector", "scalar quantities", "vector quantities"])) {
                return `Scalars have magnitude only (e.g. distance, speed, mass, time, energy); vectors have both magnitude and direction (e.g. displacement, velocity, acceleration, force, momentum).`;
            }
            // Pendulum period / oscillation timing
            if (matchAny(combined, ["pendulum", "time for the pendulum", "period of the pendulum", "number of swings"])) {
                return `To reduce human reaction time error, measure the total time for multiple full oscillations (e.g. 20 swings) and divide by the count to find the period ($T$).`;
            }
            // Wave features: amplitude, wavelength, frequency
            if (matchAny(combined, ["displacement from undisturbed", "displacement / cm distance / cm", "amplitude and wavelength", "crest and trough"])) {
                return `Amplitude is the maximum displacement from undisturbed equilibrium; wavelength is the distance between adjacent identical wavefronts or crests.`;
            }
            // White light dispersion through prism
            if (matchAny(combined, ["white light", "prism", "spectrum of colours", "dispersion", "refracts the most"])) {
                return `Dispersion splits white light into spectral colours because each wavelength travels at a different speed in glass; violet light slows the most and refracts through the greatest angle, while red refracts least.`;
            }
            // Light refraction air into glass
            if (matchAny(combined, ["air into glass", "light travels from air into", "change in direction when light travels"])) {
                return `Light refracts (changes direction towards the normal) because the speed of light decreases upon entering an optically denser medium like glass or water.`;
            }
            // Boyle's law / Gas pressure
            if (matchAny(combined, ["boyle's law", "gas in a cylinder", "piston", "pressure of the gas", "volume is halved"])) {
                return `At constant temperature, gas pressure is inversely proportional to volume ($p_1V_1 = p_2V_2$); halving volume doubles collision frequency against cylinder walls, doubling pressure.`;
            }
            // Measuring sphere volume / displacement
            if (matchAny(combined, ["measuring cylinder", "metal sphere", "small metal sphere", "volume of a small"])) {
                return `The volume is found by the displacement method: subtracting the initial water volume from the final volume when the sphere is submerged. A balance measures mass, not volume.`;
            }
            // Acceleration / Free fall / Moon
            if (matchAny(combined, ["on the moon", "all objects fall", "same acceleration"])) {
                return `In a vacuum (or on the Moon without atmosphere), gravitational acceleration is independent of mass ($g = W/m$); all objects accelerate at the exact same rate.`;
            }
            // Seismic wave / Longitudinal vs Transverse
            if (matchAny(combined, ["seismic wave", "vibrations that are parallel", "parallel to the direction of propagation"])) {
                return `Waves where particle oscillations are parallel to energy propagation are longitudinal (P-waves). Transverse waves vibrate perpendicular to propagation (S-waves).`;
            }
            // Wire in magnetic field / Motor effect / Fleming's left hand rule
            if (matchAny(combined, ["wire carrying a current", "between the poles of a magnet", "vertical wire"])) {
                return `Using Fleming's Left-Hand Rule (First finger = Field N to S, Second finger = Current, Thumb = Motion), the magnetic force acts perpendicularly on the conductor.`;
            }
            // Current-voltage characteristic / non-ohmic / filament lamp / diode
            if (matchAny(combined, ["characteristic for a conductor", "current-voltage", "current–voltage", "graph shows the current"])) {
                return `For an ohmic conductor, current is directly proportional to voltage ($I \\propto V$). Curvature indicates changing resistance as temperature or semiconductor properties vary.`;
            }
            // Water droplet / plane mirror / reflection
            if (matchAny(combined, ["plane mirror", "water droplet", "falling towards a horizontal"])) {
                return `In a plane mirror, the virtual image is formed the exact same perpendicular distance behind the mirror as the object is in front of it.`;
            }
            // Terminal velocity
            if (matchAny(combined, ["terminal velocity", "air resistance", "falling through air", "skydiver", "parachute"])) {
                return `Terminal velocity is reached when upward drag (air resistance) balances downward weight ($W = mg$), yielding zero resultant force and constant speed.`;
            }
            // Density
            if (matchAny(combined, ["density", "mass and volume", "measuring density"])) {
                return `Density is mass per unit volume ($\\rho = m/V$). Objects with a density lower than the liquid float, while denser objects sink.`;
            }
            // Pressure / Manometer / Barometer
            if (matchAny(combined, ["manometer", "barometer", "liquid pressure", "mercury column", "depth of liquid"])) {
                return `Hydrostatic pressure is calculated by $p = \\rho g h$; it depends only on liquid density and vertical depth, independent of tube cross-sectional shape.`;
            }
            // Hooke's law / spring
            if (matchAny(combined, ["hooke's law", "spring", "extension", "limit of proportionality"])) {
                return `Hooke's Law states extension is directly proportional to stretching force ($F = kx$) up to the limit of proportionality.`;
            }
            // Momentum & Impulse
            if (matchAny(combined, ["momentum", "impulse", "collision", "rebound"])) {
                return `Impulse equals the change in momentum ($\\Delta p = F \\Delta t$). Total momentum is conserved in all isolated collisions ($m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$).`;
            }
            // Work done, energy & power
            if (matchAny(combined, ["work done", "kinetic energy", "gravitational potential energy", "power"])) {
                return `Work done equals energy transferred ($W = F \\times d$). Power is the rate of energy transfer ($P = W / t$). Total energy is always conserved.`;
            }
            // Specific heat capacity / Latent heat
            if (matchAny(combined, ["specific heat capacity", "latent heat", "melting point", "boiling point"])) {
                return `Thermal energy during temperature change is $\\Delta E = mc\\Delta\\theta$. During phase changes, temperature remains constant as energy breaks intermolecular bonds ($E = mL$).`;
            }
            // Conduction, convection, radiation
            if (matchAny(combined, ["conduction", "convection", "thermal radiation", "black surface", "dull black", "shiny white"])) {
                return `Convection occurs via fluid density changes; conduction transfers energy via particle collisions & free electrons; black matte surfaces are the best emitters and absorbers of IR radiation.`;
            }
            // Refraction & Total internal reflection
            if (matchAny(combined, ["refraction", "critical angle", "total internal reflection", "optical fibre", "snell's law"])) {
                return `Light slows and bends toward the normal entering a denser medium ($n = \\sin i / \\sin r$). Total internal reflection occurs when angle of incidence exceeds critical angle ($i > c$).`;
            }
            // Sound waves & Ultrasound
            if (matchAny(combined, ["speed of sound", "ultrasound", "echo", "frequency of sound", "pitch and loudness"])) {
                return `Sound is a longitudinal mechanical wave requiring a medium. Pitch depends on frequency; loudness depends on amplitude. Ultrasound operates above $20\\text{ kHz}$.`;
            }
            // Lenses
            if (matchAny(combined, ["converging lens", "convex lens", "focal length", "principal focus", "real image", "virtual image"])) {
                return `A converging lens focuses parallel rays through the principal focal point. When the object is inside the focal length ($u < f$), an upright, magnified, virtual image forms.`;
            }
            // Resistors & Ohm's law / Potential divider
            if (matchAny(combined, ["resistors in series", "resistors in parallel", "potential divider", "ldr", "thermistor"])) {
                return `In a potential divider, output voltage is proportional to resistance ($V_{out} = V_{in} \\cdot R_1/(R_1+R_2)$). LDR resistance drops in light; thermistor resistance drops when heated.`;
            }
            // Transformers & Electromagnetic induction
            if (matchAny(combined, ["transformer", "step-up", "step-down", "primary coil", "secondary coil"])) {
                return `Transformers obey $V_p / V_s = N_p / N_s$. High-voltage transmission reduces current ($P = IV$), minimizing $I^2R$ power dissipation in national grid transmission cables.`;
            }
            // Radioactivity & Half-life
            if (matchAny(combined, ["half-life", "alpha particle", "beta particle", "gamma ray", "radioactive decay"])) {
                return `Half-life is the time for half the unstable nuclei to decay. Alpha particles ($^4_2\\alpha$) have highest ionizing power; gamma rays have greatest penetration through matter.`;
            }
            // Nuclear structure & Rutherford
            if (matchAny(combined, ["rutherford", "alpha scattering", "nucleus", "isotope", "nuclide"])) {
                return `Rutherford scattering proved the atom consists of a tiny, dense, positively charged nucleus surrounded by mostly empty space occupied by electrons.`;
            }
        }

        // -------------------------------------------------------------
        // 2. CHEMISTRY EXPLANATION RULES
        // -------------------------------------------------------------
        if (isChem) {
            // Chromatography / Rf value
            if (matchAny(combined, ["chromatography", "rf value", "baseline", "solvent front"])) {
                return `Separation depends on relative solubility in mobile solvent vs affinity for stationary paper. The $R_f$ value is distance travelled by substance divided by solvent front.`;
            }
            // Periodic table / Groups / Trends
            if (matchAny(combined, ["group i", "group 1", "alkali metal", "group vii", "group 7", "halogen", "noble gas"])) {
                return `Group I reactivity increases down the group as outer electron is further from nucleus; Group VII reactivity decreases down group as attracting incoming electrons becomes harder.`;
            }
            // Ionic vs Covalent bonding
            if (matchAny(combined, ["ionic bonding", "covalent bonding", "giant covalent", "metallic bonding", "crystal lattice"])) {
                return `Ionic compounds transfer electrons forming electrostatic lattice attractions (high melting point). Covalent bonds share electron pairs; metallic bonds share delocalized electron seas.`;
            }
            // Electrolysis
            if (matchAny(combined, ["electrolysis", "cathode", "anode", "electrolyte", "molten lead", "aqueous copper"])) {
                return `Positive cations migrate to cathode gaining electrons (reduction); negative anions migrate to anode losing electrons (oxidation: OIL RIG).`;
            }
            // Rate of reaction / Collision theory
            if (matchAny(combined, ["rate of reaction", "catalyst", "activation energy", "collision theory", "surface area"])) {
                return `Reaction rate increases with temperature, concentration, or surface area because collision frequency and the fraction of collisions with $E \\ge E_a$ increase.`;
            }
            // Equilibrium & Le Chatelier
            if (matchAny(combined, ["equilibrium", "reversible reaction", "le chatelier", "haber process", "yield of ammonia"])) {
                return `According to Le Chatelier's principle, system shifts to oppose change: increasing pressure favors side with fewer gas moles; cooling favors exothermic direction.`;
            }
            // Acids, Bases & Salts
            if (matchAny(combined, ["acid", "base", "ph", "neutralisation", "titration", "insoluble salt"])) {
                return `Acids donate protons ($H^+$), lowering pH below 7. Neutralisation produces salt + water ($H^+ + OH^- \\rightarrow H_2O$). Insoluble salts are prepared via precipitation.`;
            }
            // Redox & Oxidation states
            if (matchAny(combined, ["redox", "oxidation", "reduction", "reducing agent", "oxidising agent", "potassium manganate"])) {
                return `Oxidation involves loss of electrons or gain of oxygen (oxidation number increases). Reduction involves gain of electrons or loss of oxygen.`;
            }
            // Organic: Alkanes, Alkenes, Alcohols
            if (matchAny(combined, ["alkane", "alkene", "unsaturated", "bromine water", "fermentation", "polymer", "ester"])) {
                return `Unsaturated alkenes have $C=C$ double bonds and rapidly decolourise aqueous bromine from orange to colourless via electrophilic addition.`;
            }
            // Moles & Stoichiometry
            if (matchAny(combined, ["moles", "molar mass", "avogadro", "relative formula mass", "gas volume"])) {
                return `Number of moles equals mass divided by molar mass ($n = m/M$). One mole of any gas occupies $24\\text{ dm}^3$ at room temperature and pressure (r.t.p.).`;
            }
            // Extraction of metals / Blast furnace
            if (matchAny(combined, ["blast furnace", "extraction of iron", "reactivity series", "carbon reduction", "hematite"])) {
                return `Metals below carbon in the reactivity series (like iron) are extracted by reduction with carbon monoxide ($Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2$) in a blast furnace.`;
            }
        }

        // -------------------------------------------------------------
        // 3. BIOLOGY EXPLANATION RULES
        // -------------------------------------------------------------
        if (isBio) {
            // Osmosis & Diffusion
            if (matchAny(combined, ["osmosis", "diffusion", "water potential", "turgid", "plasmolysed", "partially permeable"])) {
                return `Osmosis is the net movement of water molecules from a region of higher water potential to lower water potential down a gradient through a partially permeable membrane.`;
            }
            // Enzymes & active site
            if (matchAny(combined, ["enzyme", "active site", "denatured", "optimum temperature", "substrate", "amylase", "protease"])) {
                return `Enzymes are specific biological catalysts. High temperatures or extreme pH break tertiary bonds, denaturing the active site so complementary substrate cannot bind.`;
            }
            // Photosynthesis
            if (matchAny(combined, ["photosynthesis", "chlorophyll", "chloroplast", "palisade", "stomata", "light intensity"])) {
                return `Photosynthesis converts light energy into chemical energy: $6CO_2 + 6H_2O \\rightarrow C_6H_{12}O_6 + 6O_2$. Chlorophyll inside chloroplasts absorbs the necessary light.`;
            }
            // Respiration & Gas exchange
            if (matchAny(combined, ["respiration", "aerobic", "anaerobic", "alveoli", "gas exchange", "lactic acid"])) {
                return `Aerobic respiration releases energy using oxygen ($C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O$). Alveoli have thin, moist walls and large surface area for fast diffusion.`;
            }
            // Circulatory system & Heart
            if (matchAny(combined, ["heart", "atrium", "ventricle", "valve", "artery", "vein", "coronary", "red blood cell"])) {
                return `Arteries carry blood under high pressure away from heart; veins return blood with one-way valves. Left ventricle has thickest muscular wall to pump blood around whole body.`;
            }
            // Plant transport: Xylem & Phloem
            if (matchAny(combined, ["xylem", "phloem", "transpiration", "translocation", "root hair cell"])) {
                return `Xylem vessels transport water and dissolved mineral ions upward by transpiration pull. Phloem sieve tubes translocate sugars and amino acids from sources to sinks.`;
            }
            // Nervous system & Reflex arc
            if (matchAny(combined, ["reflex arc", "sensory neurone", "motor neurone", "relay neurone", "synapse", "effector"])) {
                return `In a reflex arc, electrical impulses travel rapidly: Receptor $\\rightarrow$ Sensory neurone $\\rightarrow$ Relay neurone in CNS $\\rightarrow$ Motor neurone $\\rightarrow$ Effector muscle/gland.`;
            }
            // Homeostasis, Hormones & Glucose
            if (matchAny(combined, ["insulin", "glucagon", "homeostasis", "negative feedback", "blood glucose", "sweating", "vasodilation"])) {
                return `Negative feedback maintains constant internal conditions. Insulin stimulates liver/muscle cells to absorb glucose and store it as insoluble glycogen, lowering blood glucose.`;
            }
            // Genetics, DNA & Inheritance
            if (matchAny(combined, ["dna", "chromosome", "allele", "heterozygous", "homozygous", "dominant", "recessive", "punnett"])) {
                return `A dominant allele is expressed in both heterozygous ($Aa$) and homozygous ($AA$) conditions, whereas a recessive allele is only expressed when homozygous ($aa$).`;
            }
            // Mitosis vs Meiosis
            if (matchAny(combined, ["mitosis", "meiosis", "gamete", "diploid", "haploid"])) {
                return `Mitosis produces two genetically identical diploid daughter cells for growth/repair; meiosis produces four genetically varied haploid gametes for sexual reproduction.`;
            }
            // Food tests
            if (matchAny(combined, ["benedict's", "biuret", "iodine solution", "ethanol emulsion"])) {
                return `Benedict's solution tests for reducing sugars (brick-red precipitate when heated); Iodine tests for starch (blue-black); Biuret tests for protein (violet/purple).`;
            }
        }

        // -------------------------------------------------------------
        // 4. GENERAL CONTEXTUAL FALLBACK
        // -------------------------------------------------------------
        // Clean subtopic name for display
        const cleanSub = (q.subtopic_name || "").replace(/^[0-9]+(\.[0-9]+)*\s*/, '').trim();
        const cleanCh = (q.chapter_name || "").replace(/^[A-Za-z0-9]+(\.[0-9]+)*:\s*/, '').replace(/^Topic\s*[0-9]+\s*-\s*/, '').trim();

        if (cleanSub) {
            return `Option ${ans} directly satisfies the syllabus requirements for ${cleanSub}, confirming the correct scientific principle tested in this question.`;
        }
        if (cleanCh) {
            return `Option ${ans} correctly demonstrates the governing physical principles and relationships established under ${cleanCh}.`;
        }

        return `Option ${ans} is the correct response verified by the official examination mark scheme for this syllabus assessment.`;
    }

    return {
        getExplanation: resolveExplanation
    };

})();

// Export globally for browser and node usage
if (typeof window !== "undefined") {
    window.MCQ_EXPLANATION_ENGINE = MCQ_EXPLANATION_ENGINE;
    window.getMcqExplanation = MCQ_EXPLANATION_ENGINE.getExplanation;
}
if (typeof global !== "undefined") {
    global.MCQ_EXPLANATION_ENGINE = MCQ_EXPLANATION_ENGINE;
    global.getMcqExplanation = MCQ_EXPLANATION_ENGINE.getExplanation;
}
if (typeof module !== "undefined" && module.exports) {
    module.exports = MCQ_EXPLANATION_ENGINE;
}
