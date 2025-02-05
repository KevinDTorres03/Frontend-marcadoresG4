import React from 'react'
import logoNav from '../ui/android-chrome-192x192.png'


export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-menu  mb-3">
  <div className="container-fluid">
    <a className="navbar-brand text-nav"  href="/">
    <img src={logoNav} alt="" width="35" height="30" className="d-inline-block align-text-top mx-3"/>Marcadores</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-nav"   aria-current="page" href="/">Eventos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-nav"   aria-current="page" href="/usuarios">Usuarios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-nav"  aria-current="page" href="/equipos">Equipos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
