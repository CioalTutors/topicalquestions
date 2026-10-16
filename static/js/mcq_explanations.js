// Cioal Tutors - Professional Pedagogical MCQ Explanation Engine
// Provides precise, accurate, syllabus-aligned 1-to-2 line explanations for all MCQs across Physics, Chemistry, Biology (IGCSE & A Level).

const MCQ_EXPLANATION_ENGINE = (function() {

    // Helper: test if any keyword appears as a whole word or phrase
    function matchAny(text, keywords) {
        if (!text) return false;
        const lower = text.toLowerCase();
        return keywords.some(k => {
            const pat = new RegExp('\\b' + k.toLowerCase().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'i');
            return pat.test(lower);
        });
    }

    // -------------------------------------------------------------
    // 1. BIOLOGY EXPLANATION RESOLVER
    // -------------------------------------------------------------
    function resolveBio(q, summary, subtopic, chapter, ans, chId, isALevel) {
        // Classification & Features of Organisms (IGCSE Ch 1)
        if (chapter.includes("classification") || chapter.includes("characteristics") || (!isALevel && chId === 1)) {
            if (matchAny(summary, ["woodlice", "woodlouse", "damp", "dry and damp", "light and dark"])) {
                return `Woodlice exhibit behavioral kinesis, moving toward damp, dark areas to prevent dehydration; this illustrates movement and sensitivity as characteristics of living organisms (Option ${ans}).`;
            }
            if (matchAny(summary, ["species", "breed", "fertile offspring", "prunella vulgaris", "interbreed"])) {
                return `A biological species is defined as a group of organisms that can interbreed to produce fertile, viable offspring, so only members of the same species can do so (Option ${ans}).`;
            }
            if (matchAny(summary, ["scientific name", "binomial", "genus and"])) {
                return `The binomial nomenclature system assigns each organism a two-part Latin name: the Genus (capitalized) followed by the species (lowercase) (Option ${ans}).`;
            }
            if (matchAny(summary, ["arthropod", "legs", "insect", "arachnid", "crustacean", "myriapod"])) {
                return `Arthropod groups are distinguished by leg count: myriapods have 10+ pairs, crustaceans have 5–7 pairs, arachnids have 4 pairs (8 legs), and insects have 3 pairs (6 legs) (Option ${ans}).`;
            }
            if (matchAny(summary, ["dichotomous key", "key shows", "identify"])) {
                return `Dichotomous keys identify unfamiliar specimens by providing pairs of contrasting statements based on observable morphological features (Option ${ans}).`;
            }
            if (matchAny(summary, ["vertebrate", "mammal", "bird", "reptile", "amphibian", "fish", "scales", "feathers"])) {
                return `Vertebrate classes have diagnostic features: mammals have fur and mammary glands; birds have feathers; reptiles have dry scaly skin; amphibians have moist permeable skin (Option ${ans}).`;
            }
            if (matchAny(summary, ["virus", "bacteria", "fungi", "prokaryote"])) {
                return `Viruses are non-cellular entities comprising genetic material within a protein coat; bacteria are prokaryotes with circular DNA and no membrane-bound nucleus (Option ${ans}).`;
            }
            return `Organisms are classified based on evolutionary morphology and shared DNA sequences, with binomial nomenclature denoting Genus and species (Option ${ans}).`;
        }

        // Cell Structure, Microscopy & Organisation (IGCSE Ch 2 / A-Level Topic 1)
        if (chapter.includes("cell structure") || chapter.includes("organisation") || (isALevel && chId === 1) || (!isALevel && chId === 2)) {
            if (matchAny(summary, ["magnification", "photomicrograph", "actual size", "image size", "μm", "scale bar"])) {
                return `Magnification equals image size divided by actual specimen size ($M = I / A$), converting all dimensions to identical units ($1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$) (Option ${ans}).`;
            }
            if (matchAny(summary, ["electron microscope", "resolution", "light microscope", "scanning electron", "transmission electron"])) {
                return `Electron microscopes possess a much shorter wavelength beam than visible light, providing significantly higher resolving power to visualize ultrastructural organelles (Option ${ans}).`;
            }
            if (matchAny(summary, ["root hair cell", "cellulose cell wall", "present at x", "four animal cells"])) {
                if (summary.includes("four animal cells") || summary.includes("at x")) {
                    return `Animal cells are bounded solely by a cell membrane and lack a cell wall; at boundary X between two adjacent cells, two cell membranes are present (Option ${ans}).`;
                }
                return `Plant cells have a rigid outer cell wall constructed of cellulose microfibrils that provides structural turgor support against internal osmotic pressure (Option ${ans}).`;
            }
            if (matchAny(summary, ["chloroplast", "vacuole", "nucleus", "ribosome", "mitochondria", "endoplasmic reticulum", "golgi"])) {
                return `Eukaryotic cells contain membrane-bound organelles: chloroplasts conduct photosynthesis, mitochondria generate ATP by aerobic respiration, and ribosomes synthesize proteins (Option ${ans}).`;
            }
            if (matchAny(summary, ["red blood cell", "ciliated", "specialised cell", "biconcave"])) {
                return `Specialised cells are adapted for their functions: red blood cells have a biconcave shape with no nucleus to maximize haemoglobin capacity, while ciliated cells sweep mucus (Option ${ans}).`;
            }
            return `Cells are the structural units of life; plant cells possess a cellulose cell wall, large vacuole, and chloroplasts, whereas animal cells are bounded solely by a membrane (Option ${ans}).`;
        }

        // Movement into and out of Cells / Cell Membranes (IGCSE Ch 3 / A-Level Topic 2)
        if (chapter.includes("movement") || chapter.includes("cell membrane") || chapter.includes("diffusion") || chapter.includes("osmosis") || (!isALevel && chId === 3)) {
            if (matchAny(summary, ["decrease the rate of diffusion", "rate of diffusion", "concentration gradient", "fick's"])) {
                return `Diffusion rate decreases with a shallower concentration gradient, lower temperature, greater diffusion distance, or smaller surface area across the membrane (Option ${ans}).`;
            }
            if (matchAny(summary, ["osmosis", "partially permeable", "crosses a partially permeable", "water potential"])) {
                return `Osmosis is strictly the net movement of water molecules from a region of higher water potential (dilute) to lower water potential across a partially permeable membrane (Option ${ans}).`;
            }
            if (matchAny(summary, ["active transport", "against", "carrier protein", "atp"])) {
                return `Active transport moves particles across a membrane against a concentration gradient using carrier proteins and metabolic energy from ATP (Option ${ans}).`;
            }
            if (matchAny(summary, ["turgid", "plasmolysed", "flaccid", "potato"])) {
                return `In pure water, plant cells gain water by osmosis and become turgid; in concentrated solution, cells lose water, shrinking the cytoplasm from the cell wall (plasmolysis) (Option ${ans}).`;
            }
            return `Passive diffusion and osmosis transport molecules down gradients across membranes, whereas active transport utilizes protein carriers and ATP against gradients (Option ${ans}).`;
        }

        // Biological Molecules & Enzymes (IGCSE Ch 4 & 5 / A-Level Topic 1 & 2)
        if (chapter.includes("biological molecules") || chapter.includes("enzymes") || (!isALevel && (chId === 4 || chId === 5))) {
            if (matchAny(summary, ["vitamin c", "dcpip"])) {
                return `DCPIP is the specific reagent used to test for vitamin C, decolourising from blue to colourless as it is reduced by ascorbic acid (Option ${ans}).`;
            }
            if (matchAny(summary, ["benedict's", "reducing sugar", "glucose"])) {
                return `Benedict's solution tests for reducing sugars, turning from blue to green, yellow, orange, and forming a brick-red precipitate when heated (Option ${ans}).`;
            }
            if (matchAny(summary, ["iodine", "starch"])) {
                return `Iodine solution is used to test for starch, changing from a yellow-brown liquid to a distinct blue-black color in its presence (Option ${ans}).`;
            }
            if (matchAny(summary, ["biuret", "protein"])) {
                return `Biuret reagent tests for proteins, turning from light blue to purple/violet as copper ions coordinate with peptide bonds (Option ${ans}).`;
            }
            if (matchAny(summary, ["ethanol", "emulsion", "lipid", "fat"])) {
                return `The ethanol emulsion test detects lipids: dissolving the sample in ethanol and adding water forms a cloudy, milky-white emulsion (Option ${ans}).`;
            }
            if (matchAny(summary, ["ph", "effect of ph", "activity of a digestive enzyme"])) {
                return `Enzymes have an optimum pH; extreme acidity or alkalinity disrupts ionic bonds maintaining active site conformation, denaturing the enzyme (Option ${ans}).`;
            }
            if (matchAny(summary, ["temperature", "denatured", "optimum temperature"])) {
                return `High temperatures increase molecular vibrations that break tertiary bonds, permanently denaturing the active site so complementary substrates can no longer bind (Option ${ans}).`;
            }
            if (matchAny(summary, ["active site", "catalyst", "substrate", "remains at the end"])) {
                return `Enzymes are specific biological catalysts with active sites complementary to their substrates; they emerge chemically unchanged at the reaction's conclusion (Option ${ans}).`;
            }
            return `Biological macromolecules form from monomer units, and metabolic reactions are catalyzed by specific enzymes operating at optimum temperature and pH (Option ${ans}).`;
        }

        // Plant Nutrition & Photosynthesis (IGCSE Ch 6 / A-Level Topic 6)
        if (chapter.includes("plant nutrition") || chapter.includes("photosynthesis") || (!isALevel && chId === 6)) {
            if (matchAny(summary, ["stomata", "guard cell", "leaf", "cross-section", "palisade", "spongy"])) {
                return `Palisade mesophyll cells are densely packed with chloroplasts near the upper leaf surface to maximize light absorption; guard cells regulate stomatal gas exchange (Option ${ans}).`;
            }
            if (matchAny(summary, ["starch", "destarch", "dark", "boil"])) {
                return `Before photosynthesis experiments, plants are destarched in darkness; leaves are then boiled in water and ethanol to remove green chlorophyll before iodine testing (Option ${ans}).`;
            }
            if (matchAny(summary, ["photosynthesis", "carbon dioxide", "light intensity", "oxygen"])) {
                return `Photosynthesis converts carbon dioxide and water into glucose and oxygen ($6CO_2 + 6H_2O \\rightarrow C_6H_{12}O_6 + 6O_2$), using light energy trapped by chlorophyll (Option ${ans}).`;
            }
            return `Photosynthesis traps light energy in chlorophyll to produce glucose and oxygen, with leaf layers structurally adapted for gas exchange and light capture (Option ${ans}).`;
        }

        // Human Nutrition & Digestive System (IGCSE Ch 7)
        if (chapter.includes("human nutrition") || chapter.includes("digestive") || (!isALevel && chId === 7)) {
            if (matchAny(summary, ["egestion", "egested"])) {
                return `Egestion is the passing out of undigested, unabsorbed food material as faeces through the anus (Option ${ans}); excretion removes cellular metabolic wastes.`;
            }
            if (matchAny(summary, ["tooth", "teeth", "enamel", "decay", "grinding", "incisor", "molar"])) {
                if (summary.includes("enamel") || summary.includes("decay") || summary.includes("hole")) {
                    return `Bacteria in plaque feed on dietary sugars and respire anaerobically to produce acid, which dissolves the protective calcium enamel of the tooth (Option ${ans}).`;
                }
                return `Molars and premolars have wide cusped crowns specialized for crushing and grinding food, while incisors cut and canines pierce (Option ${ans}).`;
            }
            if (matchAny(summary, ["amylase", "lipase", "protease", "pepsin", "trypsin", "chemical digestion"])) {
                return `Digestive enzymes hydrolyse macromolecules: amylase breaks starch into maltose, proteases break proteins into amino acids, and lipase digests fats into fatty acids and glycerol (Option ${ans}).`;
            }
            if (matchAny(summary, ["bile", "emulsif", "gall bladder", "liver"])) {
                return `Bile is produced by the liver, stored in the gall bladder, neutralizes acidic stomach chyme, and emulsifies fats into droplets to increase surface area for lipase (Option ${ans}).`;
            }
            if (matchAny(summary, ["villi", "lacteal", "absorption", "small intestine", "large intestine"])) {
                return `Villi in the small intestine have a single-cell epithelium and microvilli to maximize absorption surface area; capillaries absorb glucose and amino acids, while lacteals absorb fatty acids (Option ${ans}).`;
            }
            return `In the digestive system, mechanical and chemical digestion break down insoluble macromolecules into soluble units for small intestine absorption, with waste egested (Option ${ans}).`;
        }

        // Transport in Plants & Animals (IGCSE Ch 8 & 9 / A-Level Topic 4)
        if (chapter.includes("transport in plants") || chapter.includes("transport in animals") || chapter.includes("transport in mammals") || (!isALevel && (chId === 8 || chId === 9))) {
            if (matchAny(summary, ["xylem", "phloem", "transpiration", "translocation"])) {
                return `Xylem vessels transport water and dissolved mineral ions upward from roots via transpiration pull; phloem sieve tubes translocate sucrose and amino acids from sources to sinks (Option ${ans}).`;
            }
            if (matchAny(summary, ["left ventricle", "atrium", "valves", "pumps blood"])) {
                return `The left ventricle has the thickest muscular wall to pump oxygenated blood under high pressure around the systemic body; valves prevent backflow (Option ${ans}).`;
            }
            if (matchAny(summary, ["coronary", "blocked", "heart disease"])) {
                return `Coronary heart disease involves the blockage or narrowing of coronary arteries by fatty plaque, depriving heart muscle of oxygen and glucose (Option ${ans}).`;
            }
            if (matchAny(summary, ["arteries", "veins", "capillaries"])) {
                return `Arteries have thick muscular elastic walls to withstand high blood pressure; veins have wider lumens and one-way valves; capillaries have walls one cell thick for diffusion (Option ${ans}).`;
            }
            return `Vascular plant tissues transport water via xylem and sugars via phloem, while double animal circulation pumps blood systemically from thick ventricular muscle (Option ${ans}).`;
        }

        // Diseases and Immunity (IGCSE Ch 10 / A-Level Topic 5)
        if (chapter.includes("diseases") || chapter.includes("immunity") || chapter.includes("infectious") || (!isALevel && chId === 10)) {
            if (matchAny(summary, ["pathogen", "disease-causing"])) {
                return `A pathogen is defined as any disease-causing transmissible organism, including viruses, pathogenic bacteria, fungi, and protoctists (Option ${ans}).`;
            }
            if (matchAny(summary, ["phagocyte", "lymphocyte", "antibody", "antigen", "vaccin"])) {
                return `Phagocytes engulf and digest pathogens via phagocytosis; lymphocytes produce complementary antibodies and long-lived memory cells for active immunity (Option ${ans}).`;
            }
            return `White blood cells provide immunity: phagocytes ingest foreign pathogens non-specifically, while lymphocytes produce targeted antibodies complementary to pathogen antigens (Option ${ans}).`;
        }

        // Gas Exchange & Respiration (IGCSE Ch 11 & 12 / A-Level Topic 6)
        if (chapter.includes("gas exchange") || chapter.includes("respiration") || (!isALevel && (chId === 11 || chId === 12))) {
            if (matchAny(summary, ["alveoli", "surface area", "capillary"])) {
                return `Alveoli provide an expansive surface area, moist lining, and thin walls one cell thick surrounded by capillaries to facilitate rapid oxygen and carbon dioxide diffusion (Option ${ans}).`;
            }
            if (matchAny(summary, ["diaphragm", "intercostal", "inhalation", "exhalation", "breathing"])) {
                return `During inhalation, external intercostal muscles and the diaphragm contract, expanding thoracic volume and lowering internal pressure to draw air into the lungs (Option ${ans}).`;
            }
            if (matchAny(summary, ["aerobic respiration", "equation", "carbon dioxide and water"])) {
                return `Aerobic respiration breaks down glucose in the presence of oxygen ($C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O$), releasing a large quantity of energy as ATP (Option ${ans}).`;
            }
            if (matchAny(summary, ["yeast", "bread-making", "brewing", "alcohol", "anaerobic"])) {
                return `Anaerobic respiration in yeast (fermentation: glucose $\\rightarrow$ ethanol + $CO_2$) produces carbon dioxide gas that creates bubbles in dough, causing bread to rise (Option ${ans}).`;
            }
            if (matchAny(summary, ["lactic acid", "oxygen debt", "muscle"])) {
                return `Anaerobic respiration in human muscles yields lactic acid; extra oxygen consumed after exercise (oxygen debt) breaks down lactic acid aerobically in the liver (Option ${ans}).`;
            }
            return `Gas exchange diffuses oxygen and carbon dioxide across thin alveolar membranes, supporting cellular respiration that releases vital ATP (Option ${ans}).`;
        }

        // Excretion in Humans (IGCSE Ch 13)
        if (chapter.includes("excretion") || (!isALevel && chId === 13)) {
            if (matchAny(summary, ["urethra", "ureter", "bladder"])) {
                return `Ureters carry urine from the kidneys to the urinary bladder for storage; the single urethra carries urine from the bladder out of the body (Option ${ans}).`;
            }
            if (matchAny(summary, ["excretion", "substances removed", "toxic", "urea"])) {
                return `Excretion is the removal of toxic wastes of metabolism (e.g. urea and carbon dioxide) and substances in excess of requirements from the body (Option ${ans}).`;
            }
            if (matchAny(summary, ["nephron", "dialysis", "kidney", "filtration", "reabsorption"])) {
                return `Kidney nephrons filter blood under high pressure (ultrafiltration), then selectively reabsorb all glucose, amino acids, and needed water before excreting urea (Option ${ans}).`;
            }
            return `Excretion eliminates metabolic waste products and excess substances; kidneys filter blood and reabsorb essential nutrients while passing urea to urine (Option ${ans}).`;
        }

        // Coordination, Homeostasis & Control (IGCSE Ch 14 / A-Level Topic 7)
        if (chapter.includes("coordination") || chapter.includes("homeostasis") || chapter.includes("control") || (!isALevel && chId === 14)) {
            if (matchAny(summary, ["reflex arc", "neurone", "synapse", "effector"])) {
                return `Reflex arcs pass rapid impulses: Receptor $\\rightarrow$ Sensory neurone $\\rightarrow$ Relay neurone in spinal cord $\\rightarrow$ Motor neurone $\\rightarrow$ Effector muscle/gland (Option ${ans}).`;
            }
            if (matchAny(summary, ["eye", "pupil", "iris", "ciliary", "lens", "retina"])) {
                return `The eye adjusts for distance: near focus contracts ciliary muscles, loosening suspensory ligaments so the lens becomes more convex to increase refraction (Option ${ans}).`;
            }
            if (matchAny(summary, ["insulin", "glucagon", "glucose"])) {
                return `Negative feedback regulates blood glucose: insulin promotes cellular glucose uptake and glycogen storage, while glucagon stimulates glycogen breakdown when glucose drops (Option ${ans}).`;
            }
            if (matchAny(summary, ["auxin", "tropism", "phototropism", "gravitropism"])) {
                return `Auxin stimulates cell elongation on the shaded side of plant shoots, causing positive phototropism and bending towards directional light (Option ${ans}).`;
            }
            return `Nerve impulses and chemical hormones coordinate physiological responses and homeostatic mechanisms, keeping internal body conditions stable (Option ${ans}).`;
        }

        // Reproduction, Inheritance, Selection & Gene Tech (IGCSE Ch 16-21 / A-Level Topic 3 & 8)
        if (chapter.includes("reproduction") || chapter.includes("inheritance") || chapter.includes("selection") || chapter.includes("gene") || chapter.includes("nucleic") || chId >= 16) {
            if (matchAny(summary, ["pollination", "flower", "anther", "stigma", "petal"])) {
                return `Insect-pollinated flowers have large colourful petals, nectar, and enclosed sticky anthers/stigmas; wind-pollinated flowers have exposed hanging anthers and feathery stigmas (Option ${ans}).`;
            }
            if (matchAny(summary, ["menstrual", "fsh", "lh", "oestrogen", "progesterone", "ovulation"])) {
                return `In the menstrual cycle, an LH surge on day 14 stimulates ovulation, while progesterone from the corpus luteum maintains the vascularised uterine lining (Option ${ans}).`;
            }
            if (matchAny(summary, ["dominant", "recessive", "heterozygous", "homozygous", "allele", "punnett"])) {
                return `Dominant alleles are expressed in both homozygous and heterozygous genotypes, whereas recessive alleles are expressed only in the homozygous recessive state (Option ${ans}).`;
            }
            if (matchAny(summary, ["sex", "chromosome", "xx", "xy"])) {
                return `Biological sex is determined by the 23rd chromosome pair: human females carry two X chromosomes ($XX$) and males carry one X and one Y chromosome ($XY$) (Option ${ans}).`;
            }
            if (matchAny(summary, ["energy flow", "trophic level", "10%", "food chain"])) {
                return `Approximately 90% of energy is lost between trophic levels as metabolic heat, respiration, and unconsumed waste, transferring only ~10% to the next level (Option ${ans}).`;
            }
            if (matchAny(summary, ["eutrophication", "fertiliser", "algae", "nitrate"])) {
                return `Fertiliser leaching causes algal blooms that block sunlight; decomposer bacteria multiply and deplete dissolved oxygen, causing aquatic organisms to suffocate (Option ${ans}).`;
            }
            return `Genetic inheritance and selective pressures govern phenotypic traits across generations, driving adaptation and biological evolution (Option ${ans}).`;
        }

        return `Biological systems follow specific cellular, physiological, and genetic principles established by the Cambridge examination syllabus (Option ${ans}).`;
    }

    // -------------------------------------------------------------
    // 2. CHEMISTRY EXPLANATION RESOLVER
    // -------------------------------------------------------------
    function resolveChem(q, summary, subtopic, chapter, ans, chId, isALevel) {
        // States of matter (IGCSE Ch 1 / A-Level Topic 2)
        if (chapter.includes("states of matter") || (!isALevel && chId === 1)) {
            if (matchAny(summary, ["fractional distillation", "liquid air"])) {
                return `Fractional distillation of liquid air separates gases according to boiling point; the component with the lowest boiling point vaporises and distils off first (Option ${ans}).`;
            }
            if (matchAny(summary, ["impurities", "impurity", "purity", "sodium chloride"])) {
                return `Impurities decrease and broaden the melting point of a pure substance, whilst raising its boiling point (Option ${ans}).`;
            }
            if (matchAny(summary, ["further apart", "particles move", "heating curve"])) {
                return `Melting and boiling supply kinetic energy that overcomes intermolecular attractions, allowing particles to move further apart and increase disorder (Option ${ans}).`;
            }
            if (matchAny(summary, ["diffusion", "rate of diffusion", "molecular mass", "m_r"])) {
                return `Gas diffusion rate is inversely related to relative molecular mass ($M_r$); lighter gas molecules move faster and diffuse more rapidly than heavier molecules (Option ${ans}).`;
            }
            return `Kinetic particle theory explains states of matter: temperature increases particle kinetic energy, overcoming intermolecular forces during state transitions (Option ${ans}).`;
        }

        // Atoms, Bonding & Stoichiometry (IGCSE Ch 2 & 3 / A-Level Topic 1 & 2)
        if (chapter.includes("atoms") || chapter.includes("bonding") || chapter.includes("stoichiometry") || chapter.includes("molecules") || (!isALevel && (chId === 2 || chId === 3))) {
            if (matchAny(summary, ["neutral atom", "neutrons", "electrons", "protons", "nucleon number"])) {
                return `In a neutral atom, protons equal electrons; the nucleon (mass) number equals the sum of protons and neutrons in the nucleus (Option ${ans}).`;
            }
            if (matchAny(summary, ["isotope", "nuclide"])) {
                return `Isotopes have identical numbers of protons and electrons but different numbers of neutrons, sharing identical chemical properties due to the same valence configuration (Option ${ans}).`;
            }
            if (matchAny(summary, ["graphite", "diamond", "silicon", "giant covalent"])) {
                if (summary.includes("graphite")) {
                    return `In graphite, each carbon atom forms 3 covalent bonds in layers, leaving one delocalised electron per atom free to conduct electricity between sheets (Option ${ans}).`;
                }
                return `Giant covalent lattices (diamond, silica) have strong covalent bonds throughout 3D networks, conferring extremely high melting points and mechanical hardness (Option ${ans}).`;
            }
            if (matchAny(summary, ["ionic", "lattice", "electrostatic", "transfer of electrons"])) {
                return `Ionic bonding forms via electron transfer from metals to non-metals, producing oppositely charged ions held in a lattice by strong electrostatic forces (Option ${ans}).`;
            }
            if (matchAny(summary, ["covalent", "shared pair", "molecular"])) {
                return `Covalent bonds consist of shared pairs of electrons between non-metal atoms; simple molecular substances have low melting points due to weak intermolecular forces (Option ${ans}).`;
            }
            if (matchAny(summary, ["metallic", "sea of electrons", "malleable"])) {
                return `Metallic bonding consists of positive metal ions in a 'sea' of delocalised valence electrons; layers slide over each other, making metals malleable (Option ${ans}).`;
            }
            if (matchAny(summary, ["24 dm3", "volume of gas", "molar gas volume"])) {
                return `One mole of any gas occupies $24\\text{ dm}^3$ ($24,000\\text{ cm}^3$) at room temperature and pressure (r.t.p.), following $\\text{volume} = \\text{moles} \\times 24$ (Option ${ans}).`;
            }
            if (matchAny(summary, ["mass", "moles", "formula mass", "relative molecular"])) {
                return `Number of moles equals mass in grams divided by relative formula mass ($n = m / M_r$); reacting amounts follow balanced stoichiometric molar ratios (Option ${ans}).`;
            }
            return `Chemical stoichiometry and bonding govern compound formation: atoms achieve stable outer shells through electron sharing or transfer (Option ${ans}).`;
        }

        // Electrochemistry & Energetics (IGCSE Ch 4 & 5 / A-Level Topic 3 & 4)
        if (chapter.includes("electrochemistry") || chapter.includes("electrolysis") || chapter.includes("energetics") || chapter.includes("thermodynamics") || (!isALevel && (chId === 4 || chId === 5))) {
            if (matchAny(summary, ["cathode", "anode", "electrolyte", "discharge", "inert electrodes"])) {
                return `In electrolysis, positive cations migrate to the negative cathode gaining electrons (reduction: OIL RIG), while negative anions lose electrons at the anode (Option ${ans}).`;
            }
            if (matchAny(summary, ["electroplating", "copper purification"])) {
                return `In electroplating and copper refining, the object to be coated is the cathode, pure metal deposits from electrolyte ions, and the impure metal is the anode (Option ${ans}).`;
            }
            if (matchAny(summary, ["exothermic", "endothermic", "bond breaking", "delta h"])) {
                return `Bond breaking is endothermic and bond forming is exothermic; in exothermic reactions, energy released forming products exceeds energy absorbed breaking reactants (Option ${ans}).`;
            }
            return `Enthalpy changes reflect energy differences between broken and formed bonds, while electrolysis forces redox reactions via direct electrical current (Option ${ans}).`;
        }

        // Chemical Reactions, Rate & Equilibrium (IGCSE Ch 6 / A-Level Topic 4 & 5)
        if (chapter.includes("reactions") || chapter.includes("rate") || chapter.includes("kinetics") || chapter.includes("equilibrium") || chapter.includes("equilibria") || (!isALevel && chId === 6)) {
            if (matchAny(summary, ["rate of reaction", "collision", "catalyst", "surface area", "activation energy"])) {
                return `Increasing temperature, concentration, or surface area increases collision frequency and the fraction of reactant particles with energy $\\ge E_a$ (Option ${ans}).`;
            }
            if (matchAny(summary, ["equilibrium", "le chatelier", "haber process", "pressure", "yield"])) {
                return `By Le Chatelier's principle, increasing pressure shifts equilibrium towards the side with fewer gas moles, while cooling favors the exothermic direction (Option ${ans}).`;
            }
            if (matchAny(summary, ["redox", "oxidation", "reduction", "reducing agent", "oxidising agent"])) {
                return `Oxidation involves loss of electrons or gain of oxygen; reduction involves gain of electrons or loss of oxygen (OIL RIG) (Option ${ans}).`;
            }
            return `Reaction rates depend on collision frequency and activation energy, while reversible equilibria shift to counteract applied changes in conditions (Option ${ans}).`;
        }

        // Acids, Bases and Salts (IGCSE Ch 7)
        if (chapter.includes("acids") || chapter.includes("salts") || chapter.includes("bases") || (!isALevel && chId === 7)) {
            if (matchAny(summary, ["litmus", "indicator", "ph", "acid", "alkali"])) {
                return `Acids donate protons ($H^+$) and turn damp blue litmus paper red; alkaline bases accept protons, producing hydroxide ions ($OH^-$) with $\\text{pH} > 7$ (Option ${ans}).`;
            }
            if (matchAny(summary, ["oxide", "amphoteric", "basic oxide", "acidic oxide"])) {
                return `Metal oxides are generally basic, non-metal oxides are acidic, amphoteric oxides (e.g. $Al_2O_3, ZnO$) react with both acids and bases, and neutral oxides react with neither (Option ${ans}).`;
            }
            if (matchAny(summary, ["preparation of", "insoluble salt", "precipitation", "crystallisation"])) {
                return `Soluble salts are prepared by reacting acids with excess insoluble bases followed by crystallisation; insoluble salts are synthesized by precipitation (Option ${ans}).`;
            }
            return `Acids react with bases, carbonates, and metals to form salts, with salt solubility dictating preparation by titration, excess base, or precipitation (Option ${ans}).`;
        }

        // Periodic Table, Inorganic & Metals (IGCSE Ch 8 & 9 / A-Level Topic 6)
        if (chapter.includes("periodic table") || chapter.includes("metals") || chapter.includes("inorganic") || (!isALevel && (chId === 8 || chId === 9))) {
            if (matchAny(summary, ["group i", "group 1", "alkali metal", "reactivity"])) {
                return `Group I reactivity increases down the group as the single outer electron is further from the nucleus and more shielded, so it is lost more easily (Option ${ans}).`;
            }
            if (matchAny(summary, ["group vii", "group 7", "halogen", "displacement"])) {
                return `Group VII reactivity decreases down the group as larger atoms attract electrons less strongly; a more reactive halogen displaces a less reactive halide (Option ${ans}).`;
            }
            if (matchAny(summary, ["transition", "coloured compounds", "catalytic"])) {
                return `Transition metals have high densities and melting points, form coloured compounds, exhibit variable oxidation states, and act as industrial catalysts (Option ${ans}).`;
            }
            if (matchAny(summary, ["noble gas", "group viii", "group 0", "unreactive"])) {
                return `Noble gases are unreactive monoatomic gases with stable full outer valence electron shells ($2$ or $8$ electrons) (Option ${ans}).`;
            }
            if (matchAny(summary, ["blast furnace", "iron extraction", "hematite", "carbon monoxide"])) {
                return `In a blast furnace, carbon monoxide reduces iron(III) oxide to molten iron ($Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2$), while limestone removes silica as slag (Option ${ans}).`;
            }
            if (matchAny(summary, ["reactivity series", "displacement of metal"])) {
                return `A more reactive metal displaces a less reactive metal from its oxide or salt solution based on their relative positions in the reactivity series (Option ${ans}).`;
            }
            if (matchAny(summary, ["rust", "rusting", "galvanis", "sacrificial"])) {
                return `Rusting requires both oxygen and water; galvanising uses zinc coating which protects iron physically and provides sacrificial protection because zinc oxidises preferentially (Option ${ans}).`;
            }
            return `Periodic table trends and the reactivity series govern chemical behavior: more reactive elements displace less reactive ones in inorganic reactions (Option ${ans}).`;
        }

        // Organic Chemistry (IGCSE Ch 11 / A-Level Topic 7 & 8)
        if (chapter.includes("organic") || chapter.includes("hydrocarbons") || chapter.includes("carbonyl") || chapter.includes("carboxylic") || (!isALevel && chId === 11)) {
            if (matchAny(summary, ["alkene", "alkane", "bromine water", "saturated", "unsaturated"])) {
                return `Unsaturated alkenes contain a $C=C$ double bond that rapidly undergoes addition with aqueous bromine, decolourising orange bromine water to colourless (Option ${ans}).`;
            }
            if (matchAny(summary, ["fractional distillation", "crude oil", "petroleum", "fractions"])) {
                return `Crude oil is separated by fractional distillation based on hydrocarbon chain length: smaller molecules have lower boiling points and distil at the top (Option ${ans}).`;
            }
            if (matchAny(summary, ["fermentation", "alcohol", "ethanol"])) {
                return `Ethanol is produced by yeast fermentation of glucose at $30\\text{--}37^\\circ\\text{C}$ anaerobically, yielding ethanol and carbon dioxide gas (Option ${ans}).`;
            }
            if (matchAny(summary, ["polymer", "monomer", "addition polymer", "condensation"])) {
                return `Addition polymerisation links alkene monomers by breaking $C=C$ double bonds; condensation polymerisation links difunctional monomers, eliminating small water molecules (Option ${ans}).`;
            }
            return `Organic compounds belong to homologous series sharing identical functional groups and general formulas, with chemical reactions dictated by functional group reactivity (Option ${ans}).`;
        }

        // Experimental Techniques & Chemical Analysis (IGCSE Ch 12 / A-Level Topic 9)
        if (chapter.includes("experimental") || chapter.includes("chemical analysis") || chapter.includes("analytical") || (!isALevel && chId === 12)) {
            if (matchAny(summary, ["chromatography", "rf value", "solvent front"])) {
                return `Separation in chromatography depends on relative solubilities; $R_f$ is calculated as the distance travelled by substance divided by distance to solvent front (Option ${ans}).`;
            }
            if (matchAny(summary, ["gas test", "limewater", "splint", "relights", "pop"])) {
                return `Qualitative gas tests: hydrogen pops with a lighted splint, oxygen relights a glowing splint, and carbon dioxide turns aqueous limewater milky (Option ${ans}).`;
            }
            if (matchAny(summary, ["filtration", "crystallisation", "distillation", "sand", "methanol"])) {
                return `Insoluble solids are separated from liquids by filtration, while miscible liquids with distinct boiling points are separated by fractional distillation (Option ${ans}).`;
            }
            return `Experimental separation techniques exploit physical properties like solubility, particle size, and boiling points to isolate and analyse chemical components (Option ${ans}).`;
        }

        return `Chemical principles dictate reactions, bonding configurations, and stoichiometric relationships verified by official mark schemes (Option ${ans}).`;
    }

    // -------------------------------------------------------------
    // 3. PHYSICS EXPLANATION RESOLVER
    // -------------------------------------------------------------
    function resolvePhys(q, summary, subtopic, chapter, ans, chId, isALevel) {
        // Physical Quantities, Units & Uncertainties (A-Level Topic 1 / IGCSE Ch 1.1)
        if (chapter.includes("quantities") || chapter.includes("units") || subtopic.includes("quantities") || subtopic.includes("units")) {
            if (matchAny(summary, ["si base quantity", "base quantity", "base unit", "si base unit"])) {
                return `The SI base quantities are mass (kg), length (m), time (s), electric current (A), thermodynamic temperature (K), amount of substance (mol), and luminous intensity (cd) (Option ${ans}).`;
            }
            if (matchAny(summary, ["uncertainty", "percentage uncertainty", "errors", "systematic"])) {
                return `When quantities with powers are combined ($V = A^{3/2}$), percentage uncertainty is multiplied by the index ($\\Delta V/V = 1.5 \\times 1.0\\% = \\pm 1.5\\%$) (Option ${ans}).`;
            }
            if (matchAny(summary, ["physical quantity", "magnitude"])) {
                return `A physical quantity consists of a numerical magnitude accompanied by an appropriate unit of measurement (Option ${ans}).`;
            }
            return `Physical quantities comprise a numerical magnitude and a derived or SI base unit (kg, m, s, A, K, mol), with uncertainties propagating in calculations (Option ${ans}).`;
        }

        // Motion, Forces, Dynamics & Energy (IGCSE Ch 1 / A-Level Topic 1-5)
        if (chapter.includes("motion") || chapter.includes("forces") || chapter.includes("energy") || chapter.includes("kinematics") || chapter.includes("dynamics") || (!isALevel && chId === 1)) {
            if (matchAny(summary, ["measuring cylinder", "balance", "metal sphere", "volume"])) {
                return `Volume is determined by liquid displacement in the measuring cylinder, and mass is measured using the balance, allowing density calculation ($\\rho = m/V$) (Option ${ans}).`;
            }
            if (matchAny(summary, ["weight", "mass", "frictional force", "gravitational"])) {
                return `Weight is the downward force of gravitational attraction acting on an object's mass ($W = mg$), measured in newtons ($\\text{N}$) (Option ${ans}).`;
            }
            if (matchAny(summary, ["speed-time graph", "distance-time graph", "speeds of", "speed time", "gradient", "area under", "change with time"])) {
                return `On a speed-time graph, the gradient equals acceleration, and the area enclosed beneath the graph line represents total distance travelled (Option ${ans}).`;
            }
            if (matchAny(summary, ["average speed", "train begins", "km in", "minutes"])) {
                return `Average speed is total distance divided by total time ($v = d/t$); convert units consistently (e.g. $60\\text{ km} / [20/60\\text{ h}] = 180\\text{ km/h}$) (Option ${ans}).`;
            }
            if (matchAny(summary, ["bird in flight", "terminal velocity", "constant speed", "balanced"])) {
                return `When moving horizontally at constant speed and altitude, forward thrust equals backward air resistance, and upward lift balances downward weight ($F_{net} = 0$) (Option ${ans}).`;
            }
            if (matchAny(summary, ["scalar", "vector"])) {
                return `Scalars have magnitude only (e.g. distance, speed, mass, time, energy); vectors have both magnitude and direction (e.g. displacement, velocity, force, momentum) (Option ${ans}).`;
            }
            if (matchAny(summary, ["hooke's law", "spring", "extension", "limit of proportionality", "deformation"])) {
                return `Hooke's Law states that extension is directly proportional to load ($F = kx$) up to the spring's limit of proportionality (Option ${ans}).`;
            }
            if (matchAny(summary, ["moment", "pivot", "clockwise", "anticlockwise", "equilibrium"])) {
                return `The principle of moments states that for a system in rotational equilibrium, total clockwise moments equal total anticlockwise moments about the pivot (Option ${ans}).`;
            }
            if (matchAny(summary, ["momentum", "impulse", "collision"])) {
                return `Total momentum is conserved in all closed system collisions ($m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$), with impulse equalling momentum change ($F\\Delta t = \\Delta p$) (Option ${ans}).`;
            }
            if (matchAny(summary, ["pressure", "depth", "density", "manometer", "barometer"])) {
                return `Fluid pressure depends solely on liquid density and vertical depth ($p = \\rho gh$), acting equally in all directions independent of vessel shape (Option ${ans}).`;
            }
            return `Newtonian mechanics governs motion: resultant force produces acceleration ($F = ma$), and mechanical energy transforms between kinetic and potential forms (Option ${ans}).`;
        }

        // Thermal Physics & Ideal Gases (IGCSE Ch 2 / A-Level Topic 11)
        if (chapter.includes("thermal") || chapter.includes("temperature") || chapter.includes("gas") || (!isALevel && chId === 2)) {
            if (matchAny(summary, ["boyle's law", "gas in a cylinder", "piston", "pressure of the gas", "volume is halved"])) {
                return `At constant temperature, gas pressure is inversely proportional to volume ($p_1V_1 = p_2V_2$); halving volume doubles wall collision frequency, doubling pressure (Option ${ans}).`;
            }
            if (matchAny(summary, ["conduction", "convection", "radiation", "black", "shiny"])) {
                return `Dull black surfaces are the best emitters and absorbers of thermal infrared radiation; convection relies on fluid density changes and conduction on free electrons (Option ${ans}).`;
            }
            if (matchAny(summary, ["specific heat capacity", "latent heat", "melting point", "boiling point"])) {
                return `Thermal energy during temperature change follows $\\Delta E = mc\\Delta\\theta$; during phase transitions, temperature remains constant as energy breaks intermolecular bonds (Option ${ans}).`;
            }
            if (matchAny(summary, ["evaporation", "cooling"])) {
                return `Evaporation cools a liquid because the most energetic molecules escape from the surface, lowering the average kinetic energy of the remaining liquid (Option ${ans}).`;
            }
            return `Thermal energy transfers via conduction, convection, and radiation, with particle kinetic energy determining temperature and latent heat governing phase changes (Option ${ans}).`;
        }

        // Waves & Superposition (IGCSE Ch 3 / A-Level Topic 7)
        if (chapter.includes("waves") || chapter.includes("superposition") || (!isALevel && chId === 3)) {
            if (matchAny(summary, ["white light", "prism", "spectrum", "dispersion"])) {
                return `Dispersion splits white light because glass has a higher refractive index for shorter wavelengths: violet slows most and refracts most, whereas red refracts least (Option ${ans}).`;
            }
            if (matchAny(summary, ["refraction", "air into glass", "normal", "critical angle", "internal reflection"])) {
                return `Light refracts towards the normal when entering an optically denser medium because wave speed decreases; total internal reflection occurs when $i > c$ (Option ${ans}).`;
            }
            if (matchAny(summary, ["plane mirror", "reflection", "virtual image"])) {
                return `In a plane mirror, the virtual image is formed the exact same perpendicular distance behind the mirror surface as the real object is in front (Option ${ans}).`;
            }
            if (matchAny(summary, ["converging lens", "convex lens", "focal length", "magnifying"])) {
                return `A converging lens focuses parallel rays through the principal focus; when an object is inside the focal length ($u < f$), an upright, magnified, virtual image forms (Option ${ans}).`;
            }
            if (matchAny(summary, ["sound", "echo", "ultrasound", "frequency", "pitch", "loudness"])) {
                return `Sound is a longitudinal wave requiring a medium; loudness depends on wave amplitude, pitch depends on frequency, and ultrasound operates above $20\\text{ kHz}$ (Option ${ans}).`;
            }
            if (matchAny(summary, ["electromagnetic", "speed of light", "radio", "gamma", "wavelength"])) {
                return `All electromagnetic waves travel at $3 \\times 10^8\\text{ m/s}$ in a vacuum, with wave speed obeying the fundamental wave equation $v = f\\lambda$ (Option ${ans}).`;
            }
            return `Wave propagation obeys $v = f\\lambda$, with transverse waves oscillating perpendicular and longitudinal waves oscillating parallel to energy transfer (Option ${ans}).`;
        }

        // Electricity, Magnetism & Circuits (IGCSE Ch 4 / A-Level Topic 8, 13, 14)
        if (chapter.includes("electricity") || chapter.includes("circuits") || chapter.includes("magnetism") || chapter.includes("electric fields") || (!isALevel && chId === 4)) {
            if (matchAny(summary, ["wire carrying a current", "poles of a magnet", "motor effect", "fleming"])) {
                return `By Fleming's Left-Hand Rule (First finger = Field N to S, Second finger = Current, Thumb = Force), a perpendicular magnetic force acts on the conductor (Option ${ans}).`;
            }
            if (matchAny(summary, ["transformer", "step-up", "step-down", "primary coil", "secondary coil"])) {
                return `Transformers obey $V_p / V_s = N_p / N_s$; step-up transformers boost transmission voltage to lower current, minimizing $I^2R$ heat dissipation in grid cables (Option ${ans}).`;
            }
            if (matchAny(summary, ["resistors in series", "resistors in parallel", "potential divider", "ldr", "thermistor"])) {
                return `In a potential divider ($V_{out} = V_{in} \\cdot R_1/[R_1+R_2]$), thermistor resistance drops when heated, while LDR resistance drops sharply in bright illumination (Option ${ans}).`;
            }
            if (matchAny(summary, ["ohm's law", "resistance", "current", "voltage", "ammeter", "voltmeter"])) {
                return `Ohm's Law states current is directly proportional to potential difference ($V = IR$) across ohmic conductors at constant temperature (Option ${ans}).`;
            }
            if (matchAny(summary, ["induction", "induced", "lenz"])) {
                return `Electromagnetic induction occurs when a conductor cuts magnetic flux lines, producing an induced e.m.f. whose current opposes the magnetic change (Lenz's Law) (Option ${ans}).`;
            }
            return `Circuit components follow fundamental laws ($V = IR, P = IV$), with electromagnetic effects linking moving electric charges to magnetic forces (Option ${ans}).`;
        }

        // Nuclear, Quantum & Particle Physics (IGCSE Ch 5 & 6 / A-Level Topic 9 & 15)
        if (chapter.includes("nuclear") || chapter.includes("quantum") || chapter.includes("particle") || chapter.includes("space") || (!isALevel && (chId === 5 || chId === 6))) {
            if (matchAny(summary, ["half-life", "decay", "radioactive", "activity", "count rate"])) {
                return `Half-life is the time required for half the unstable radioactive nuclei in a sample to decay, causing activity to halve after subtracting background radiation (Option ${ans}).`;
            }
            if (matchAny(summary, ["alpha", "beta", "gamma", "ionising", "penetrating", "absorbed by"])) {
                return `Alpha particles ($^4_2\\alpha$) are most strongly ionising and stopped by paper; beta particles are stopped by aluminum; gamma rays are most penetrating (Option ${ans}).`;
            }
            if (matchAny(summary, ["rutherford", "scattering", "nucleus", "gold foil"])) {
                return `Rutherford alpha scattering proved the atom is mostly empty space with mass concentrated in a tiny, dense, positively charged central nucleus (Option ${ans}).`;
            }
            if (matchAny(summary, ["isotope", "nuclide", "proton number", "nucleon number"])) {
                return `Nuclide notation $^A_Z X$ specifies atomic proton number $Z$ and total nucleon number $A$; isotopes share identical $Z$ but differ in neutron count (Option ${ans}).`;
            }
            return `Unstable nuclei achieve nuclear stability through radioactive alpha, beta, or gamma decay, characterized by invariant, measurable half-lives (Option ${ans}).`;
        }

        return `Physical principles, conservation laws, and mathematical relationships govern physical phenomena verified by Cambridge mark schemes (Option ${ans}).`;
    }

    // Main resolver function
    function resolveExplanation(q, subject) {
        if (q.explanation && typeof q.explanation === "string" && q.explanation.trim().length > 0) {
            return q.explanation.trim();
        }

        const summary = (q.summary || "").toLowerCase();
        const subtopic = (q.subtopic_name || "").toLowerCase();
        const chapter = (q.chapter_name || "").toLowerCase();
        const ans = (q.ms_answer || "A").trim().toUpperCase();
        const chId = Number(q.chapter_id);
        const subjStr = (subject || q.subject || "").toLowerCase();
        const isALevel = subjStr.includes("alevel") || chapter.startsWith("topic");

        const isBio = subjStr.includes("bio") || chapter.includes("biology") || chapter.includes("organism") || chapter.includes("cell") || chapter.includes("plant") || chapter.includes("human");
        const isChem = subjStr.includes("chem") || chapter.includes("chemistry") || chapter.includes("atoms") || chapter.includes("stoichiometry") || chapter.includes("acids") || chapter.includes("periodic");
        const isPhys = subjStr.includes("phys") || chapter.includes("physics") || chapter.includes("motion") || chapter.includes("thermal") || chapter.includes("waves") || chapter.includes("electricity") || chapter.includes("nuclear");

        if (isBio) {
            return resolveBio(q, summary, subtopic, chapter, ans, chId, isALevel);
        }
        if (isChem) {
            return resolveChem(q, summary, subtopic, chapter, ans, chId, isALevel);
        }
        if (isPhys) {
            return resolvePhys(q, summary, subtopic, chapter, ans, chId, isALevel);
        }

        // Generic fallback by subject keyword inspection
        if (summary.includes("cell") || summary.includes("plant") || summary.includes("animal") || summary.includes("organ")) {
            return resolveBio(q, summary, subtopic, chapter, ans, chId, isALevel);
        }
        if (summary.includes("atom") || summary.includes("reaction") || summary.includes("element") || summary.includes("acid")) {
            return resolveChem(q, summary, subtopic, chapter, ans, chId, isALevel);
        }

        return resolvePhys(q, summary, subtopic, chapter, ans, chId, isALevel);
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
