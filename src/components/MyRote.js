import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
export class MyRote extends Component {
  render() {
    return (
      <>
    
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/crm" element={<CRM />} />
      <Route path="/leave" element={<LeaveManagement />} />
      <Route path="/citizen" element={<CitizenPortal />} />
      <Route path="/weather" element={<WeatherApp />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
    </Routes>
  </>
    )
  }
}

export default MyRote