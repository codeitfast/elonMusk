const Database = require("@replit/database")
const db = new Database()
db.set('asdf', 10)

import {useState} from 'react'
export default function Database(){

  let [val, setVal] = useState(db.get('asdf'))
  return(
    <div>
    {val}
    </div>
  )
}