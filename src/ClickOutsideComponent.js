import { useState, useRef } from "react";
import useClickOutside from "./useClickOutside";

const ClickOutsideComponent = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  useClickOutside(modalRef, () => {
    if (open) {
      setOpen(false);
    }
  });

  const modalStyle = {
    display: open ? "flex" : "none",
    color: "#FFF",
    backgroundColor: "rebeccapurple",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "11rem",
    left: "36rem",
    width: "25rem",
    height: "25rem",
  };

  return (
    <>
      <div ref={modalRef}>
        <button onClick={() => setOpen(true)}>Open</button>
        <div style={modalStyle}>
          <span>Modal</span>
        </div>
      </div>
    </>
  );
};

export default ClickOutsideComponent;
