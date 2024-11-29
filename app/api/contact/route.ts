import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import { stringify } from 'csv-stringify/sync'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, phone, message } = body

  const csvFilePath = path.join(process.cwd(), 'data', 'contacts.csv')
  let records = []

  if (fs.existsSync(csvFilePath)) {
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' })
    records = parse(fileContent, { columns: true })
  }

  records.push({ name, email, phone, message, date: new Date().toISOString() })

  const csv = stringify(records, { header: true })
  fs.writeFileSync(csvFilePath, csv)

  return NextResponse.json({ success: true })
}

