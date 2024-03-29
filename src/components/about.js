import React from 'react';

const Header = ({ data }) => (
  <div className="about section" id="About">
    <div className="container">
      <div className="about-main row">
        <div className="about-details">
          <span className="name">My Name is {data.name}.</span>
          <h2 className="sub-position">
            I'm a Fashion Designer turned Developer.
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.description.childMarkdownRemark.html,
            }}
          />
          <ul className="details">
            <li>
              <strong>Full Name</strong>
              <p>{data.name}</p>
            </li>
            <li>
              <strong>Location</strong>
              <p>{data.location}</p>
            </li>
            <li>
              <strong>Email</strong>
              <p>
                <a href={`mailto:${data.gmail}`}>{data.gmail}</a>
              </p>
            </li>
          </ul>
          <div className="socials">
            <ul>
              <li>
                <a
                  className="fab fa-linkedin-in"
                  href={data.linkdin}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-github"
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
