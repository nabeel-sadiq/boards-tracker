import {redirect} from "@sveltejs/kit";
import {db} from "$lib/server/db/index.js";
import {Chapters} from "$lib/server/db/schema.js";
import {and, eq} from "drizzle-orm";

export const load = async (event) => {
    if (!event.locals.user) {
        redirect(302, "/login");
    }

    console.log("hello")

    const doneChapters = await db.select().from(Chapters)
        .where(
            and(
                eq(Chapters.userId, event.locals.user.id),
                eq(Chapters.status, "Done")
            )
        );

    let donePercentage = 0;

    if (event.locals.user.core === "medical") {
        donePercentage = (doneChapters / 100) * 100
        console.log(`${donePercentage}%`)
    } else if (event.locals.user.core === "engineering") {
        donePercentage = (doneChapters / 100) * 100
        console.log(`${donePercentage}%`)
    } else if (event.locals.user.core === "ICS") {

    }
}