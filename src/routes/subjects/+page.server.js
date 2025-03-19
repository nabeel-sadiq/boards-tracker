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