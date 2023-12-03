import { time } from "console";
import { pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";


export const typeEnum = pgEnum("session_type_enum", ['reflect','goal-setting','problem-solving','skill-building','explore-and-learn','check-in']);
export const feelingsEnum = pgEnum("feelings-enum", ['happy','sad']);

export const chatSession = pgTable('chatSession', {
    id: serial('id').primaryKey(),
    sessionName: text("session_name").notNull(),
    sessionType: typeEnum("sessionType").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    userId: varchar("user_id", { length: 256 }).notNull(),
})

export const dailyJournal = pgTable('dailyJournal', {
    id: serial('id').primaryKey(),
    date: timestamp('date').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    title: text('title'),
    story: text('story').notNull(),
    feelings: feelingsEnum('feelings').notNull(),
    dids: text('dids'),
    dos: text('dos'),
    userId: varchar("user_id", { length: 256 }).notNull(),
})

