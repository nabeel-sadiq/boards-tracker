import {fail, redirect} from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import {db} from '$lib/server/db';
import {Users} from '$lib/server/db/schema';
import {eq} from 'drizzle-orm';

export const load = async () => {
    // todo
};

const login = async ({cookies, request}) => {
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

    if (user.length === 0) {
        return fail(400, {credentials: true});
    }

    const userPassword = await bcrypt.compare(password, user[0].passwordHash);

    if (!userPassword) {
        return fail(400, {credentials: true});
    }

    const newAuthToken = crypto.randomUUID();

    await db
        .update(Users)
        .set({userAuthToken: newAuthToken})
        .where(eq(Users.username, username));

    cookies.set('session', newAuthToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 60,
    });

    throw redirect(302, '/');
};

export const actions = {login};
