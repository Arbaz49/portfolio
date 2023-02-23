import React from 'react'

const Projects1 = () => {
  return (
    <main className="row g-4 p-3 mx-auto project" id="project">
    <h1 className="text-center">Project's</h1>

    <section className="col-10 col-md-3 mx-auto">
      <div className="card">
        <img src={""} className="card-img-top" alt="reactWeb" />
        <div className="card-body">
          <h5 className="card-title">
            <strong>Ecommerce Website</strong>
          </h5>
          <p className="card-text">
            Technologies Used: - React - Redux Toolkit - React-Hook Form -
            react-router-dom - Bootstrap - react-bootstrap
          </p>
          <a
            href="https://ecommsite.netlify.app/"
            className="btn btn-outline-primary me-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>

          <a
            href="https://github.com/ajayjhaDev/Ecommerce"
            className="btn btn-outline-primary mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            github repo
          </a>
        </div>
      </div>
    </section>

    <section className="col-10 col-md-3 mx-auto">
      <div className="card">
        <img src={""} className="card-img-top" alt="reactWeb" />
        <div className="card-body">
          <h5 className="card-title">
            <strong>Management or Tangent Dashboard</strong>
          </h5>
          <p className="card-text">
            Management or Tangent Dashboard built in React, Redux Toolkit,
            React-Router-Dom
          </p>
          <a
            href="https://tangentdashboard.netlify.app/"
            className="btn btn-outline-primary me-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>

          <a
            href="https://github.com/ajayjhaDev/TangentDashboard"
            className="btn btn-outline-primary mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            github repo
          </a>
        </div>
      </div>
    </section>

    <section className="col-10 col-md-3 mx-auto">
      <div className="card">
        <img src={""} className="card-img-top" alt="reactWeb" />
        <div className="card-body">
          <h5 className="card-title">
            <strong>BloggingSite</strong>
          </h5>
          <p className="card-text">
            BloggingSite with CRUD and authentication functionality
            Technologies Used - React - Redux Toolkit - React-Router-Dom -
            React-Hook Form - Ant Design - react-bootstrap
          </p>
          <a
            href="https://bloggingsite.netlify.app/"
            className="btn btn-outline-primary me-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>

          <a
            href="https://github.com/ajayjhaDev/BloggingSite"
            className="btn btn-outline-primary mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            github repo
          </a>
        </div>
      </div>
    </section>

    <section className="col-10 col-md-3 mx-auto">
      <div className="card">
        <img src={""} className="card-img-top" alt="reactWeb" />
        <div className="card-body">
          <h5 className="card-title">
            <strong>Coavin Tech</strong>
          </h5>
          <p className="card-text">
            A fully responsiveness business Company Website built in React
          </p>
          <a
            href="https://coavintech.netlify.app/"
            className="btn btn-outline-primary me-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>

          <a
            href="https://github.com/ajayjhaDev/coavinTech"
            className="btn btn-outline-primary mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            github repo
          </a>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Projects1
