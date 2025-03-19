import {db} from '$lib/server/db/index.js';
import {Users} from '$lib/server/db/schema.js';
import {eq} from 'drizzle-orm';

export const handle = async ({event, resolve}) => {
    // get cookies from browser
    const session = event.cookies.get('session');

    if (!session) {
        // if there is no session load page as normal
        return await resolve(event);
    }

    // find the user based on the session
    const user = await db
        .select()
        .from(Users)
        .where(eq(Users.userAuthToken, session));

    // if `user` exists set `event.locals`
    if (user.length > 0) {
        event.locals.user = {
            name: user[0].username,
        };
    }

    // load page as normal
    return await resolve(event);
};
