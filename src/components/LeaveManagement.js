import React from 'react';
import LeaveDemo from '../assets/video/LeaveDemo.mp4';

function LeaveManagement() {
  return (
    <div className='container'>
      <div>
        <h4 className='text-primary mt-4'>Leave Management System</h4>
        <p className='mt-5'>
          <strong>Tech Stack:</strong> Java 17, Spring Boot, Spring Security, Spring Data JPA, Hibernate, MySQL, Thymeleaf, Bootstrap, Maven<br />
          <strong>Project Overview:</strong> Developed a Spring Boot-based Leave Management System that streamlines employee leave management, allocation, and approvals with role-based access control and a user-friendly dashboard.
          <br /><br />
          <strong>Key Features:</strong>

          <h6>Employee Role:</h6>
          <ul>
            <li>Register and login securely using Spring Security.</li>
            <li>Apply for leaves with automatic balance calculation.</li>
            <li>View leave history and status updates.</li>
            <li>Cancel pending leave requests.</li>
            <li>Update personal profile details securely.</li>
          </ul>

          <h6>Admin Role:</h6>
          <ul>
            <li>Full control over employee management with registration and login capabilities.</li>
            <li>View leave requests from employees under their supervision.</li>
            <li>Approve or reject leave requests.</li>
            <li>Update personal profile details.</li>
            <li>Manage leave types, allocations, and balances.</li>
            <li>View all employee leave requests and statuses.</li>
            <li>Monitor system activities and ensure role-based access control.</li>
          </ul>

          <h6>Highlights:</h6>
          <ul>
            <li>Efficient leave request, approval, and allocation workflow.</li>
            <li>Role-based access for Admin, Manager, and Employee.</li>
            <li>Secure authentication and authorization using Spring Security.</li>
            <li>Seamless integration of Thymeleaf frontend with Spring Boot backend.</li>
          </ul>

          <h6>Outcome:</h6>
          <p>The Leave Management System simplifies leave administration, ensures accurate leave balances, and provides role-specific dashboards to improve organizational efficiency.</p>

          <h6>Project Video:</h6>
          <div>
            <video height={400} width={500} controls>
              <source src={LeaveDemo} type="video/mp4" />
            </video>
          </div>

          <h6>Github Link: <a href='https://github.com/SurajGhodge/leave-management-system'>Click Here</a></h6>
        </p>
      </div>
    </div>
  );
}

export default LeaveManagement;
