import React from "react";

const Link = ({ route }) => {
  const { path, name } = route;
  return (
    <div>
      <ul className="">
        <li>
          <a href={path}>{name}</a>
        </li>
      </ul>
    </div>
  );
};

export default Link;
