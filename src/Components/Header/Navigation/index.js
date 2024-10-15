import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import { GiFruitBowl } from "react-icons/gi";
import { CiMobile3 } from "react-icons/ci";
import { FaBlogger } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <Button className="allCatTab align-items-center">
              <span className="icon1 mr-2">
                <IoIosMenu />
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="icon2 ml-2">
                <FaAngleDown />
              </span>
            </Button>
          </div>

          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto ">
              <li className="list-inline-item">
                <Link to="/">
                  <IoHomeOutline /> &nbsp; <Button> Home
                </Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <GiClothes /> &nbsp; <Button> Fashion 
                   </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <FcElectronics /> &nbsp;<Button>  Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <GiFruitBowl /> &nbsp;<Button>  Grocery
                 </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <CiMobile3 /> &nbsp;<Button>  Mobiles
                 </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <FaBlogger /> &nbsp;<Button> Blog
                 </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <IoIosContacts /> &nbsp;<Button>Contact{" "}
                 </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
