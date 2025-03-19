import {sqliteTable, text, integer} from 'drizzle-orm/sqlite-core';

export const Users = sqliteTable('users', {
    id: integer('id').primaryKey({autoIncrement: true}),
    username: text('username').notNull().unique(),
    core: text('core').notNull().default("ICS"),
    passwordHash: text('password_hash').notNull(),
    userAuthToken: text('user_auth_token').notNull().unique(),

    createdAt: text('created_at').default('CURRENT_TIMESTAMP').notNull(),
    updatedAt: text('updated_at').default('CURRENT_TIMESTAMP').notNull(),
});

export const Chapters = sqliteTable('chapters', {
    id: integer().primaryKey({autoIncrement: true}),
    subject: text('subject').notNull(),
    chapter: text('chapter').notNull(),
    status: text('status').default("Not Done").notNull(),
    userId: integer('user_id').references(() => Users.id, {onDelete: "cascade"}).notNull(),
})
