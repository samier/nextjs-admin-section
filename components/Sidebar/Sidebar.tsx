"use client";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "/public/assets/images/logo.svg";
import logosmalmenu from "/public/assets/images/logosmalmenu.png";
import HomeIcon from "../SvgIcons/HomeIcon";
import InHandIcon from "../SvgIcons/InHandIcon";
import ClipboardTickIcon from "../SvgIcons/ClipboardTickIcon";
import BoardIcon from "../SvgIcons/BoardIcon";
import SearchWorkIcon from "../SvgIcons/SearchWorkIcon";
import SearchIndexIcon from "../SvgIcons/SearchIndexIcon";
import Bag2Icon from "../SvgIcons/Bag2Icon";
import MagicPenIcon from "../SvgIcons/MaginPenIcon";
import DoorClosed from "../SvgIcons/DoorClosed";
import Navlink from "./components/Navlink";
import { ROUTES } from "@/constants/RouteConstants";

export interface SidebarProps {
  isToggled: boolean;
  onToggle: () => void;
}

function Sidebar({ isToggled, onToggle }: SidebarProps) {

  return (
    <section className={`${styles.sidebar} ${isToggled ? "closemenu" : ""}`}>
      <div className={styles.navbar_head} id="close_head">
        <Link href={ROUTES.dashboard}>
          <Image src={logo} alt="logo" className="logo" />
        </Link>
        <Link href={ROUTES.dashboard}>
          <Image
            src={logosmalmenu}
            alt="logo"
            className="logosmalmenu"
            id={styles.logosmalmenu_hide}
          />
        </Link>
        <button
          className={isToggled ? "closemenu closebt" : ""}
          onClick={onToggle}
        >
          {" "}
          {isToggled ? "" : ""}
        </button>
      </div>
      <div className={styles.navbar_menu}>
        <Navbar>
          <Nav className="navbar_list">
            <Navlink title={"Dashboard"} href={ROUTES.dashboard} Icon={<HomeIcon />} />
            <div className={styles.menuline}></div>
            <Navlink title={"Menu-1"} href={ROUTES.menu1} Icon={<InHandIcon />} />
            <Navlink title={"Menu-2"} href={ROUTES.menu2} Icon={<ClipboardTickIcon />} />
            <div className={styles.menuline}></div>
            <Navlink title={"Menu-3"} href={ROUTES.menu3} Icon={<BoardIcon />} />
            <Navlink title={"Menu-4"} href={ROUTES.menu4} Icon={<SearchWorkIcon />} />
            <Navlink title={"Menu-6"} href={ROUTES.menu6} Icon={<SearchIndexIcon />} />
            <Navlink title={"Menu-7"} href={ROUTES.menu7} Icon={<Bag2Icon />} />
            <Navlink title={"Menu-8"} href={ROUTES.menu8} Icon={<MagicPenIcon />} />
            <Navlink title={"Menu-9"} href={ROUTES.menu9} Icon={<DoorClosed />} />
          </Nav>
        </Navbar>
      </div>
    </section>
  );
}

export default Sidebar;
