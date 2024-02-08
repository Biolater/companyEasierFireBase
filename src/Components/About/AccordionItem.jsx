import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Arrow } from "../../Utilities/Svgs";
const AccordionItem = ({ headerText, icon, text, isActive, onSelect, idx }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (isActive) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isActive]);

  return (
    <div
      ref={contentRef}
      onClick={onSelect}
      className={`accordion__item grid overflow-hidden backdrop:filter cursor-pointer bg-rgba-black bg-opacity-55 backdrop-blur-xl px-4 py-5 rounded-2xl`}
      style={{ height: isActive ? contentHeight + "px" : "72px" }}
    >
      <div className="accordion__header flex items-center justify-between mb-5">
        <span className="accordion__header-text text-2xl  text-white font-extrabold">
          {headerText}
        </span>
        <Arrow isActive={isActive} />
      </div>
      <div className="accordion-body">
        <div className="accordion-body__icon flex justify-center">{icon}</div>
        <p className="text-xl text-white font-black mt-4 text-center">{text}</p>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  headerText: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default AccordionItem;
