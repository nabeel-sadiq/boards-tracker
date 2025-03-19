import {fail, redirect} from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import {db} from "$lib/server/db"
import {Users} from '$lib/server/db/schema';
import {eq} from 'drizzle-orm';
import insertStandardData from "$lib/server/db/StandardData"

export const load = async () => {
    // todo
};

const register = async ({request}) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    if (
        typeof username !== 'string' ||
        typeof password !== 'string' ||
        !username ||
        !password
    ) {
        return fail(400, {invalid: true});
    }

    const user = await db
        .select()
        .from(Users)
        .where(eq(Users.username, username));


    if (user.length > 0) {
        return fail(400, {user: true});
    }

    const [newUser] = await db.insert(Users).values({
        username,
        passwordHash: await bcrypt.hash(password, 10),
        userAuthToken: crypto.randomUUID(),
    }).returning({id: Users.id});

    insertStandardData(newUser.id)

    throw redirect(303, '/login');
};

export const actions = {register};
