import React from 'react'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              <i className="mdi mdi-home menu-icon" />
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i className="mdi mdi-circle-outline menu-icon" />
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link to="/home/buttons" className="nav-link">Buttons</Link></li>
                <li className="nav-item"> <Link to="/home/typographies" className="nav-link">Typography</Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/home/forms">
              <i className="mdi mdi-view-headline menu-icon" />
              <span className="menu-title">Form elements</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/home/charts">
              <i className="mdi mdi-chart-pie menu-icon" />
              <span className="menu-title">Charts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/home/tables">
              <i className="mdi mdi-grid-large menu-icon" />
              <span className="menu-title">Tables</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/home/icons">
              <i className="mdi mdi-emoticon menu-icon" />
              <span className="menu-title">Icons</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i className="mdi mdi-account menu-icon" />
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="/login" > Login </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/register" > Register </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/lockscreen" > Lockscreen </Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/documentation">
              <i className="mdi mdi-file-document-box-outline menu-icon" />
              <span className="menu-title">Documentation</span>
            </Link>
          </li>
        </ul>
      </nav>
    )
}
