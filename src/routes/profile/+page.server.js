import {redirect} from "@sveltejs/kit";
import {db} from "$lib/server/db/index.js";
import {Users} from "$lib/server/db/schema.js";

export const load = async (event) => {
    if (!event.locals.user) {
        redirect(302, "/login");
    }

    return {
        user: event.locals.user
    }
}

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const core = data.get('core');

        await db.update(Users).set({core: core})
            .where(eq(Users.id, event.locals.user.id));

    }
}