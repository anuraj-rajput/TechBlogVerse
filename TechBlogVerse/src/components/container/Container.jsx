import React from "react";
//container component to give our child/input component css 
function Container({ childComp }) {
  return <div className="w-full max-w-7xl mx-auto px-4">{childComp}</div>;
}

export default Container;
