import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const context = useContext(MyContext);
  useEffect();
  return (
    <>
      <Button className=" countryDrop " onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label"> Your Location: </span>
          <span className="name"> India </span>
        </div>

        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        className="locationModal"
        TransitionComponent={Transition}
      >
        <h4 className="mb-0">Choose Your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area</p>
        <Button className="close_" onClick={() => setisOpenModal(false)}>
          <MdClose />
        </Button>
        <div className="headerSearch w-100">
          <input type="text" placeholder="Search for  Area......" />
          <Button>
            <IoIosSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {context.countryList?.length !== 0 &&
            context.countryList?.map((item, index) => {
              return (
                <li>
                  <Button onClick={() => setisOpenModal(false)}>India </Button>{" "}
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
