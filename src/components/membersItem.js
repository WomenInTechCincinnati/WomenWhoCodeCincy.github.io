import PropTypes from "prop-types";
import React from "react";

const ImgDefaultSource = (event) => 
  (event.target.src = 
    "https://avatars3.githubusercontent.com/u/13358086?s=200&v=4");

const MembersItem = ({ name, image, location, techs, hobbies, links }) => (
  <div>
    {image && (
      <img
        src={image}
        alt={name + `'s beautiful face`}
        style={{ maxWidth: 200 }}
        onError={ImgDefaultSource}
      />
    )}
    <h2>{name}</h2>
    {location && <p>{location}</p>}
    {techs && (
      <div>
        <h3>Favorite Technologies</h3>
        <ul>
          {techs.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    )}
    {hobbies && (
      <div>
        <h3>Hobbies</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    )}
    {links && (
      <div>
        <h3>Contact Info</h3>
        <ul>
          {links.twitter && (
            <li>
              <a href={links.twitter}>Twitter</a>{" "}
            </li>
          )}
          {links.facebook && (
            <li>
              <a href={links.facebook}>Facebook</a>{" "}
            </li>
          )}
          {links.linkedIn && (
            <li>
              <a href={links.linkedIn}>LinkedIn</a>{" "}
            </li>
          )}
          {links.website && (
            <li>
              <a href={links.website}>Website</a>{" "}
            </li>
          )}
          {links.github && (
            <li>
              <a href={links.github}>Github</a>{" "}
            </li>
          )}
          {links.meetup && (
            <li>
              <a href={links.meetup}>Meetup</a>{" "}
            </li>
          )}
        </ul>
      </div>
    )}
    <hr />
  </div>
);

MembersItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  techs: PropTypes.arrayOf(PropTypes.string),
  hobbies: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    linkedIn: PropTypes.string,
    website: PropTypes.string,
    github: PropTypes.string,
    meetup: PropTypes.string,
  }),
};

MembersItem.defaultProps = {
  name: ``,
  image: ``,
  location: ``,
  techs: [],
  hobbies: [],
  links: {
    twitter: ``,
    facebook: ``,
    linkedIn: ``,
    website: ``,
    github: ``,
    meetup: ``,
  },
};

export default MembersItem;
