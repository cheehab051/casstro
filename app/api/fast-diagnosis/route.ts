import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import { stringify } from 'csv-stringify/sync'

// Utility function to sanitize filenames
function sanitizeFilename(name: string) {
  return name.replace(/[^a-z0-9]/gi, '_').toLowerCase(); // Replace non-alphanumeric characters with '_'
}

export async function POST(req: Request) {
  const formData = await req.formData()
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string
  const xray = formData.get('xray') as File

  // Sanitize the name and phone number for use in the file name
  const sanitizedFileName = sanitizeFilename(name);
  const sanitizedPhone = sanitizeFilename(phone);

  // Set CSV save location
  const submissionsDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(submissionsDir)) {
    fs.mkdirSync(submissionsDir, { recursive: true })
  }
  const csvFilePath = path.join(submissionsDir, 'fast-diagnosis.csv')
  
  let records = []

  if (fs.existsSync(csvFilePath)) {
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' })
    records = parse(fileContent, { columns: true })
  }

  // Set file upload save location
  const uploadsDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true })
  }
  
  // Name the uploaded file using the user's name and phone number
  const xrayFileName = xray ? `${sanitizedFileName}-${sanitizedPhone}-${xray.name}` : ''
  if (xray) {
    const xrayBuffer = await xray.arrayBuffer()
    const xrayPath = path.join(uploadsDir, xrayFileName)
    fs.writeFileSync(xrayPath, Buffer.from(xrayBuffer))
  }

  records.push({ name, email, phone, message, xrayFileName, date: new Date().toISOString() })

  const csv = stringify(records, { header: true })
  fs.writeFileSync(csvFilePath, csv)

  return NextResponse.json({ success: true })
}
