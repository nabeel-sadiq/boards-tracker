import {db} from "$lib/server/db";
import {Chapters} from "$lib/server/db/schema.js";

export default async function insertStandardData(userId) {
    for (const subject in ChaptersData) {
        const chapters = ChaptersData[subject]; // Get the chapters for the current subject

        for (const chapterNumber in chapters) {
            const chapterName = chapters[chapterNumber]; // Get the actual chapter name

            await db.insert(Chapters).values({
                subject: subject,
                chapter: chapterName, // Use the chapter name here
                userId: userId
            });
        }
    }
}


const ChaptersData = {
    Maths: {
        1: "Complex Numbers",
        2: "Matrices and Determinants",
        3: "Vectors",
        4: "Sequences and Series",
        5: "Polynomials",
        6: "Permutation and Combination",
        7: "Mathematical Induction and Binomial Theorem",
        8: "Fundamentals of Trigonometry",
        9: "Trigonometric Functions"
    },
    Physics: {
        1: "Physical Quantities & Measurement",
        2: "Vectors",
        3: "Translatory Motion",
        4: "Rotational and Circular Motion",
        5: "Work and Kinetic Energy",
        6: "Fluid Mechanics",
        7: "Deformation of Solids",
        8: "Heat and Thermodynamics",
        9: "Waves",
        10: "Electrostatics",
        11: "Electricity",
        12: "Magnetism",
        13: "Relativity",
        14: "Particle Physics"
    },
    Computer: {
        1: "Computer Systems",
        2: "Computational Thinking and Algorithms",
        3: "Programming Fundamentals",
        4: "Data and Analysis",
        5: "Application of Computer Science",
        6: "Impacts of Computing",
        7: "Digital Literacy",
        8: "Entrepreneurship in Digital Age"
    },
    Biology: {
        1: "Cells and Sub-Cellular Organelles",
        2: "Molecular Biology",
        3: "Enzymes",
        4: "Bioenergetics",
        5: "Acellular Life",
        6: "Prokaryotes",
        7: "Protista and Fungi",
        8: "Plantae",
        9: "Diversity in Plant Functions",
        10: "Animalia",
        11: "Reproduction",
        12: "Inheritance",
        13: "Chromosome and DNA",
        14: "Evolution",
        15: "Ecology"
    },
    Chemistry: {
        1: "Nature of Science in Chemistry",
        2: "Atomic Structure",
        3: "Chemical Bonding",
        4: "Stoichiometry",
        5: "States And Phases of Matter",
        6: "Thermochemistry",
        7: "Chemical Kinetics",
        8: "Chemical Equilibrium",
        9: "Acids - Bases Chemistry",
        10: "Periodic Table",
        11: "Nitrogen and Sulphur",
        12: "Halogens",
        13: "Environmental Chemistry - Air",
        14: "Environmental Chemistry - Water",
        15: "Organic Chemistry",
        16: "Hydrocarbons",
        17: "Halogenoalkanes",
        18: "Alcohol",
        19: "Carbonyl Compounds",
        20: "Nitrogen Compounds - Amines",
        21: "Organic Synthesis",
        22: "Energy"
    }
};

