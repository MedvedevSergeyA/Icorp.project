import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const Collapse = ({ children, title, name }) => {
  const [display, setDisplay] = useState(false);
  const collapseRef = useRef();
  const toggleDisplay = () => {
    setDisplay((prevState) => !prevState);
  };
  useEffect(() => {
    const newCollapse = new Accordion(collapseRef.current, {
      toggle: false
    });
    display ? newCollapse.show() : newCollapse.hide();
  }, [display]);

  return (
    <div>
      hello
      <button onClick={toggleDisplay}></button>
    </div>
  );
};

Collapse.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  title: PropTypes.string,
  name: PropTypes.string
};
export default Collapse;
