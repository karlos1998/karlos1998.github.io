import Database from 'better-sqlite3'
import {join} from 'path'

// Initialize database
const dbPath = join(process.cwd(), 'contact.db')
const db = new Database(dbPath)

export default defineEventHandler(async (event) => {
    try {
        // Simple auth check (you could add proper JWT authentication later)
        const authHeader = getHeader(event, 'authorization')

      // For now, just check if there's any auth header (basic protection)
      if (!authHeader) {
          throw createError({
              statusCode: 401,
              statusMessage: 'Unauthorized - provide authorization header',
          })
      }

      // Get all messages ordered by newest first
      const stmt = db.prepare(`
      SELECT id, name, email, subject, message, created_at
      FROM messages
      ORDER BY created_at DESC
    `)

      const messages = stmt.all()

      return {
          success: true,
          count: messages.length,
          messages,
    }
  } catch (error: unknown) {
      console.error('Messages fetch error:', error)

      const err = error as any
      throw createError({
          statusCode: err.statusCode || 500,
          statusMessage: err.statusMessage || 'Internal server error',
      })
  }
})
