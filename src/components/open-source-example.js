import React from 'react'

const OpenSourceExample = (props) => {
  return (
    <div className="open-source-example">
      <h2>
        Open source / work example.
      </h2>

      <p>
        I'm currently working on a small, community application which 
        allows Duolingo users to discover and share public clubs.
      </p>

      <p>
        It's called <em>Trio</em>.
      </p>

      <p>
        The app is approximately 85% complete, with source code available 
        on GitHub
      </p>

      <ul>
        <li>
          <a href="https://github.com/lukerollans/trio-frontend">React frontend on GitHub</a>
        </li>

        <li>
          <a href="https://github.com/lukerollans/trio">Elixir backend on GitHub</a>
        </li>
      </ul>
    </div>
  )
}

export default OpenSourceExample