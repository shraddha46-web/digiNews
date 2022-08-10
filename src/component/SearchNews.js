import React from 'react'

export default function SearchNews() {
  return (
    <div className='container-fluid'>
      <nav class="navbar bg-light">
        <form class="container-fluid">
            <div class="input-group">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Keyword" aria-label="Keyword" aria-describedby="basic-addon1" />
            </div>
        </form>
        </nav>
    </div>
  )
}
