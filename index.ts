import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse'
import csv from 'csv-parser'
type data = {
  name: string
  email: string
  rollNo: string
  data: string
  time: string
  venue: string
}
// ;(() => {
//   const headers = ['name', 'email', 'rollNo', 'data', 'time', 'venue']
//   const fileContent = fs.readFileSync('./data.csv', { encoding: 'utf-8' })
//   parse(
//     fileContent,
//     {
//       delimiter: ',',
//       columns: headers,
//     },
//     (error, result: data[]) => {
//       if (error) {
//         console.log(error)
//         return
//       }
//       console.log(result)
//     },
//   )
// })()
// type typeData={
//   name:string
//   email:string
//   rollNo:string
//   github:string
//   linkedin:string
//   extras:string
//   depart:string,
//   skills:string

// }
;(() => {
  let jsonData: string = ''
  try {
    fs.createReadStream('./pi2.csv')
      .pipe(csv({}))
      .on('data', (data: any) => {
        //   create_user(data)
        if (data.pref === 'Quiz Round') {
          jsonData += ' ' + data.email
        }
      })
      .on('end', () => {
        // console.log('CSV file successfully processed')

        fs.writeFileSync('./pi2.json', JSON.stringify(jsonData))

        // console.log(jsonData)
      })
  } catch (error) {
    console.log(error)
  }
})()
