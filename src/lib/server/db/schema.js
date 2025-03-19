import {sqliteTable, text, integer} from 'drizzle-orm/sqlite-core';

export const Users = sqliteTable('users', {
    id: integer('id').primaryKey({autoIncrement: true}),
    username: text('username').notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    userAuthToken: text('user_auth_token').notNull().unique(),

    createdAt: text('created_at').default('CURRENT_TIMESTAMP').notNull(),
    updatedAt: text('updated_at').default('CURRENT_TIMESTAMP').notNull(),
});
