
import React from 'react'
import CRMDEMO from '../assets/video/CRMDEMO.mp4';


function CRM() {return (
    <div className='container'>
        <div >
            <h4 className='text-primary mt-4 '>Customer Relationship Management Web Application</h4>
            <p className='mt-5'><strong>Tech Stack:</strong> React.js, Spring Boot, MySQL, Spring Security (JWT), Bootstrap, Axios<br></br><strong>Project Overview:</strong>
Developed a role-based Customer Relationship Management (CRM) system with distinct functionalities for Admin and User roles. The application streamlines lead management, customer conversion, and user administration while ensuring secure access control.
<br></br>
<strong>Key Features:</strong>

<h6>User Role:</h6>
<ul>
    <li>
        Login with secure authentication.
    </li>
    <li>
        Perform CRUD operations on leads.
    </li>
    <li>
        Convert leads into customers based on lead status.
    </li>
    <li>
        View all leads and customers added by themselves.
    </li>
    <li>
        Update personal details securely.
    </li>
</ul>
<h6>Admin Role:</h6>
<ul><li>Full application control with login and registration capabilities.
</li>
<li>Perform CRUD operations on users, leads, and customers.</li>
<li>View all leads and customers across the system.</li>
<li>Manage and monitor all user activities.</li>
<li>Update personal profile details.</li>
<li>Security & Access Control:</li>
<li>Role-based access implemented using Spring Security and JWT.</li>
<li>Users can only access their own leads and customers.Admins have full access to all data and system operations.</li>
</ul>

<h6>Highlights:</h6>
<ul>
    <li>Efficient lead-to-customer conversion workflow.</li>
    <li>Intuitive interface for role-based access.</li>
    <li>Secure authentication and authorization for data protection.</li>
    <li>Seamless integration of React frontend with Spring Boot backend using REST APIs.</li>
</ul>
<h6>Outcome:</h6><p>The CRM application enables streamlined management of leads, customers, and users with role-specific access, improving operational efficiency and data visibility for both users and administrators.</p>
<h6>Project Video:</h6>
<div>
   <video height={400} width={500} controls>
  <source src={CRMDEMO} type="video/mp4" />
</video>
</div>
<h6>Github Link: <a href='https://github.com/SurajGhodge/crms'>Click Here</a></h6>
</p>
        </div>
    </div>
  )
}

export default CRM