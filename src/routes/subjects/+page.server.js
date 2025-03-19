import {redirect} from "@sveltejs/kit";
import {Chapters} from "$lib/server/db/schema.js";
import {db} from "$lib/server/db";
import {eq} from "drizzle-orm";

export const load = async (event) => {
    if (!event.locals.user) {
        redirect(302, "/login");
    }

    let user = event.locals.user;

    const chapters = await db.select().from(Chapters).where(eq(Chapters.userId, user.id))
    return {
        user: user, chapters: chapters,
    }
}

export const actions = {
    updateStatus: async ({request}) => {
        const data = await request.formData();
        const chapterId = data.get('chapterId');
        const newStatus = data.get('status');

        if (!chapterId || !newStatus) {
            return {error: 'Invalid data'};
        }

        await db.update(Chapters)
            .set({status: newStatus})
            .where(eq(Chapters.id, Number(chapterId)));

        redirect(302, "/");
        return {success: true};
    }
};
