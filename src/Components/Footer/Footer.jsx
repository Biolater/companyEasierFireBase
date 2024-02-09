import { NavbarLogo, Arrow } from "../../Utilities/Svgs";
import { IoIosArrowDown } from "react-icons/io";
import { TbMail } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMiscellaneousServices, MdPrivacyTip } from "react-icons/md";
import { PiSealWarningFill } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [footerItems, setFooterItems] = useState([]);

  const handleFooterItemsChange = (footerItemName) => {
    return setFooterItems((prev) => {
      const newArr = [...prev];
      if (newArr.includes(footerItemName)) {
        newArr.splice(newArr.indexOf(footerItemName), 1);
      } else {
        newArr.push(footerItemName);
      }
      return newArr;
    });
  };
  return (
    <footer className="bg-navy">
      <div className="container py-8 mx-auto">
        <div className="footer__logo px-4 cursor-pointer">
          <NavbarLogo />
        </div>
        <div className="footer__wrapper mt-4">
          <FooterItem
            onSelect={() => handleFooterItemsChange("footer-item1")}
            isClicked={footerItems.includes("footer-item1")}
            className="footerItem max-h-14 overflow-hidden  list-none"
          >
            <a
              className={`footerItem__header cursor-pointer py-4 px-4 flex items-center justify-between text-grey-bg ${
                footerItems.includes("footer-item1")
                  ? "text-opacity-100"
                  : "text-opacity-75"
              } font-bold text-sm`}
            >
              <span className="footerItem__title">CONTACT INFORMATION</span>
              <IoIosArrowDown
                fontSize={20}
                className={
                  footerItems.includes("footer-item1")
                    ? "rotate-icon transition-all"
                    : "transition"
                }
              />
            </a>
            <div className="footerItem__body bg-bluish">
              <div className="footerItem__details flex flex-col gap-1">
                <p className="flex items-center px-4 py-3 text-grey-bg gap-2 font-bold">
                  <TbMail fontSize={24} />
                  <a href="mailto:yusifovmurad1@gmail.com">
                    yusifovmurad1@gmail.com
                  </a>
                </p>
                <p className="flex items-center text-grey-bg px-4 py-3 gap-2 font-bold">
                  <FaGithub fontSize={24} />
                  <a href="https://github.com/Biolater">github/Biolater</a>
                </p>
                <p className="flex items-center text-grey-bg px-4 py-3 gap-2 font-bold">
                  <FaLinkedin fontSize={24} />
                  <a href="https://www.linkedin.com/in/murad-yusubov-1518b1271/">
                    linkedIn/murad-yusubov
                  </a>
                </p>
              </div>
            </div>
          </FooterItem>
          <FooterItem
            onSelect={() => handleFooterItemsChange("footer-item2")}
            isClicked={footerItems.includes("footer-item2")}
            className="footerItem max-h-14 overflow-hidden  list-none"
          >
            <a
              className={`footerItem__header cursor-pointer py-4 px-4 flex items-center justify-between text-grey-bg ${
                footerItems.includes("footer-item2")
                  ? "text-opacity-100"
                  : "text-opacity-75"
              } font-bold text-sm`}
            >
              <span className="footerItem__title">COPYRIGHT INFORMATION</span>
              <IoIosArrowDown
                fontSize={20}
                className={
                  footerItems.includes("footer-item2")
                    ? "rotate-icon transition-all"
                    : "transition"
                }
              />
            </a>
            <div className="footerItem__body bg-bluish">
              <div className="footerItem__details flex flex-col gap-1">
                <p className="flex items-center px-4 py-3 text-grey-bg gap-2 font-bold">
                  Copyright © Murad Yusubov 2024
                </p>
              </div>
            </div>
          </FooterItem>
          <FooterItem
            onSelect={() => handleFooterItemsChange("footer-item3")}
            isClicked={footerItems.includes("footer-item3")}
            className="footerItem max-h-14 overflow-hidden  list-none"
          >
            <a
              className={`footerItem__header cursor-pointer py-4 px-4 flex items-center justify-between text-grey-bg ${
                footerItems.includes("footer-item3")
                  ? "text-opacity-100"
                  : "text-opacity-75"
              } font-bold text-sm`}
            >
              <span className="footerItem__title">LEGAL INFORMATION</span>
              <IoIosArrowDown
                fontSize={20}
                className={
                  footerItems.includes("footer-item3")
                    ? "rotate-icon transition-all"
                    : "transition"
                }
              />
            </a>
            <div className="footerItem__body bg-bluish">
              <div className="footerItem__details flex flex-col gap-1">
                <p className="flex items-center text-grey-bg px-4 py-3 gap-2 font-bold">
                  <MdMiscellaneousServices fontSize={24} />
                  Terms of Service
                </p>
                <p className="flex items-center px-4 py-3 text-grey-bg gap-2 font-bold">
                  <MdPrivacyTip fontSize={24} />
                  Privacy Policy
                </p>
                <p className="flex items-center text-grey-bg px-4 py-3 gap-2 font-bold">
                  <PiSealWarningFill fontSize={24} />
                  Disclaimer
                </p>
              </div>
            </div>
          </FooterItem>
        </div>
        <p className="px-4 text-grey-bg text-center">
          Made with ❤️ by Murad Yusubov
        </p>
      </div>
    </footer>
  );
};

const FooterItem = ({ children, isClicked, onSelect }) => {
  const footerItemRef = useRef();
  const [height, setHeight] = useState(null);

  useEffect(() => {
    if (isClicked) {
      setHeight(footerItemRef.current.scrollHeight);
    }
  }, [isClicked]);

  return (
    <motion.li
      style={{ maxHeight: isClicked && height }}
      ref={footerItemRef}
      onClick={onSelect}
      className="footerItem transition-all max-h-14 overflow-hidden list-none"
    >
      {children}
    </motion.li>
  );
};

export default Footer;
