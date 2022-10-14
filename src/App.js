import React from 'react'
import axios from 'axios'

axios
.get('https://mymoney-carlos-default-rtdb.firebaseio.com/')
.then(res => {
  console.log(res)
})

function App() {
  return (
    <div>
      <h1>My Money</h1>
    </div>
  )
}

export default App
