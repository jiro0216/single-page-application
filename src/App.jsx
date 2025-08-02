import React from 'react'
import "./App.css";


const App = () => {
  return (

    <div className='HomePage'>
      <h1>John Wick</h1>

      <h2>The Baba Yaga</h2>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrcSSAflJfljmHCgZi7cMx7kjtYZSj8V1Qw&s' alt='keannu-reeves'></img>
      <p>A silhouette carved from vengeance, shrouded in bespoke black — not stitched, but forged.
        Each seam a scar. Each thread, a eulogy.
        Where others walk, he glides — not with grace, but with intent so sharp it cleaves silence itself.
      </p>

      <button type="button" onclick="alert('We Are So Back') ">Hit me for JohnWick</button>
    </div>

  )
}

export default App
