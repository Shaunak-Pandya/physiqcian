import React from 'react'

function Header({data}) {
  return (
    <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            <a href="index.html">{data.siteName} ✨</a>
          </h1>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#departments">
                  Departments
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#doctors">
                  Doctors
                </a>
              </li>
              
              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a href="#appointment" class="appointment-btn scrollto">
            <span class="d-none d-md-inline">Make an</span> Appointment
          </a>
        </div>
      </header>
  )
}

export default Header