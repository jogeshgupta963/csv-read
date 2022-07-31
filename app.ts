import express from 'express'
import cors from 'cors'
import mongoose, { mongo } from 'mongoose'
import fs from 'fs'
import csv from 'csv-parser'
import nodemailer from 'nodemailer'
import { setTimeout } from 'timers/promises'
const app = express()
app.use(express.json())

type dataType = {
  name: string
  email: string
  rollNo: string
  date: string
  slot: string
  venue: string
}

app.get('/', async (req, res) => {
  try {
    let arr: dataType[] = []
    fs.createReadStream('./data.csv')
      .pipe(csv({}))
      .on('data', (data) => {
        // arr.push(data)
      })
      .on('end', async () => {})
  } catch (error) {
    res.json(error)
  }
})
;(async function () {
  try {
    await mongoose.connect(
     mongo_uri,
    )
  } catch (err) {
    console.log(err)
  }
})
app.listen(5000, () => console.log('server started'))
