/**
 * Upload all videos from public/videos/ to Vercel Blob Storage.
 *
 * Usage:
 *   BLOB_READ_WRITE_TOKEN=vercel_blob_... node scripts/upload-videos.mjs
 *
 * Requires: npm install @vercel/blob
 *
 * Output: scripts/blob-urls.json — a map of { filename: blobUrl }
 *         Copy the URLs into dummy-content.ts and work-data.ts
 */

import { put } from '@vercel/blob'
import { createReadStream, readdirSync, statSync, writeFileSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const VIDEOS_DIR = join(__dirname, '..', 'public', 'videos')
const OUTPUT_FILE = join(__dirname, 'blob-urls.json')

const VIDEO_EXTS = new Set(['.mp4', '.mov', '.webm'])

async function uploadAll() {
  const token = process.env.BLOB_READ_WRITE_TOKEN
  if (!token) {
    console.error('❌  BLOB_READ_WRITE_TOKEN env var is required.')
    console.error('    Get it from: Vercel Dashboard → zyra-website → Settings → Environment Variables')
    process.exit(1)
  }

  const files = readdirSync(VIDEOS_DIR).filter(f => VIDEO_EXTS.has(extname(f).toLowerCase()))
  console.log(`Found ${files.length} video files to upload.\n`)

  const results = {}

  for (const file of files) {
    const filePath = join(VIDEOS_DIR, file)
    const size = (statSync(filePath).size / 1024 / 1024).toFixed(1)
    process.stdout.write(`Uploading ${file} (${size} MB)... `)

    try {
      const stream = createReadStream(filePath)
      const contentType = file.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'

      const blob = await put(`videos/${file}`, stream, {
        access: 'public',
        contentType,
        token,
      })

      results[file] = blob.url
      console.log(`✅  ${blob.url}`)
    } catch (err) {
      console.error(`\n❌  Failed: ${err.message}`)
      results[file] = null
    }
  }

  writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2))
  console.log(`\n✅  Done! URLs saved to scripts/blob-urls.json`)
  console.log('\nNext step: copy the URLs into src/lib/dummy-content.ts and src/lib/work-data.ts')
}

uploadAll()
