import {redirect} from "@sveltejs/kit";
import {db} from "$lib/server/db/index.js";
import {Chapters} from "$lib/server/db/schema.js";
import {and, eq, inArray, desc} from "drizzle-orm";

export const load = async (event) => {
    if (!event.locals.user) {
        redirect(302, "/login");
    }

    // Subject groups with updated chapter counts
    const subjectGroups = {
        medical: {subjects: ["Biology", "Physics", "Chemistry"], total: 51},
        engineering: {subjects: ["Maths", "Physics", "Chemistry"], total: 45},
        ICS: {subjects: ["Maths", "Physics", "Computer"], total: 31},
    };

    const userCore = event.locals.user.core;
    const {subjects, total} = subjectGroups[userCore] ?? {subjects: [], total: 0};

    // Fetch done chapters
    const doneChapters = await db.select().from(Chapters).where(and(eq(Chapters.userId, event.locals.user.id), eq(Chapters.status, "Done"), inArray(Chapters.subject, subjects)))
        .orderBy(desc(Chapters.id));

    // Calculate percentage with 1 decimal place
    const donePercentage = total > 0 ? parseFloat(((doneChapters.length / total) * 100).toFixed(1)) : 0;

    return {
        donePercentage,
        doneChapters,
    };
};
