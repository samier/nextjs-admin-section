"use client";
import styles from "./Head.module.scss";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import eventEmitter from "@/util/eventUtils";
import {
  REFRESH_PROFILE_EVENT,
} from "@/constants/CommonConstants";
import profileImg from "/public/assets/images/avatar3d.png";

function Head() {
  const [walletLoading, setWalletLoading] = useState(true);

  const getWalletBalance = async () => {
    setWalletLoading(true);
    try {
      // API Call
    } catch (error) {
      toast.error("Failed to fetch balance");
    } finally {
      setWalletLoading(false);
    }
  };

  useEffect(() => {
    eventEmitter.on(REFRESH_PROFILE_EVENT, getWalletBalance);
    getWalletBalance();
    return () => {
      eventEmitter.off(REFRESH_PROFILE_EVENT, getWalletBalance);
    };
  }, []);

  return (
    <section>
      <div className="col-md-12">
        <div className={styles.header}>
          <div className={styles.had_right}>
            <button className={`${styles.primary_btn} btn d-flex btn-primary`}>
              <p className="pe-2">$</p>
              {walletLoading ? (
                <ClipLoader
                  className="bg-transparent"
                  size={18}
                  color={"#fff"}
                />
              ) : (
                <span>
                  {"10.00"}
                </span>
              )}
            </button>

            <div className="user">
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  {walletLoading ? (
                    <ClipLoader
                      className="bg-transparent"
                      size={18}
                      color={"#BD48D4"}
                    />
                  ) : (
                    <Image
                      src={profileImg}
                      height={500}
                      width={500}
                      alt=""
                    />
                  )}
                  <div className={styles.user_name}>
                    <h5>{"John"}</h5>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.profile_drpdwn}>
                  <Dropdown.Item
                    onClick={() =>
                      signOut({ callbackUrl: "/auth/signin", redirect: true })
                    }
                  >
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Head;
