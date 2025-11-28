import Database from 'better-sqlite3'
import {join} from 'path'

// Initialize database (creates file if it doesn't exist)
const dbPath = join(process.cwd(), 'contact.db')
const db = new Database(dbPath)

// Create messages table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

      // Basic validation
      const {name, email, subject, message} = body

      if (!name || !email || !message) {
          throw createError({
              statusCode: 400,
              statusMessage: 'Missing required fields: name, email, message',
          })
      }

      // Email validation (basic)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
          throw createError({
              statusCode: 400,
              statusMessage: 'Invalid email format',
          })
      }

      // Insert message into database
      const stmt = db.prepare(`
      INSERT INTO messages (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `)

      const result = stmt.run(name, email, subject || '', message)

      // Log successful submission (you could add email sending here later)
      console.log(`New contact message from ${name} (${email}): ${subject}`)

      return {
          success: true,
          message: 'Message sent successfully!',
          id: result.lastInsertRowid,
    }
  } catch (error: unknown) {
      console.error('Contact form error:', error)

      const err = error as any
      throw createError({
          statusCode: err.statusCode || 500,
          statusMessage: err.statusMessage || 'Internal server error',
      })
  }
})
