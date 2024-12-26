"use client";
import styles from "./Dashboard.module.scss";
import Image from "next/image";
import profileImg from "/public/assets/images/avatar3d.png";
import dahtow_01 from "/public/assets/images/dahtow_01.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import MailIcon from "../SvgIcons/MailIcon";
import WalletIcon from "../SvgIcons/WalletIcon";
import NotePenIcon from "../SvgIcons/NotePenIcon";
import BagIcon from "../SvgIcons/BagIcon";
import { Form } from 'react-bootstrap';
import cardm from "/public/assets/images/master.svg";
import { ROUTES } from "@/constants/RouteConstants";

const Dashboard = () => {
  const router = useRouter();
  const [loadingProfile, setLoadingProfile] = useState(false);

  const gotoSettings = (queryVal: string) => {
    router.push(`${ROUTES.menu9}?tab=${queryVal}`);
  };

  const gotoRegisterNew = () => {
    router.push(ROUTES.menu2);
  };

  return (
    <section className={styles.dashboard}>
      <div className={styles.dash_top}>
        <div className={styles.dash_top_bottom}>
          <div className={styles.dash_top_bottomuser}>
            <div
              className={`${styles.dash_topuser_img} items-center justify-center d-flex`}
            >
              {loadingProfile ? (
                <ClipLoader color="#BD48D4" />
              ) : (
                <Image
                  src={profileImg}
                  height={500}
                  width={500}
                  alt=""
                />
              )}
            </div>
            {!loadingProfile && (
              <div className={styles.dash_top_bottom_cnt}>
                <h2>
                  {"John Doe"}
                </h2>
                <p>
                  <span>
                    <MailIcon />
                  </span>
                  {"john@gmail.com"}
                </p>
              </div>
            )}
          </div>
          <div className={styles.dash_top_bottomright}>
            <button className={styles.primary_btn} onClick={() => gotoSettings('security')}>
              Change Password
            </button>
          </div>
        </div>
      </div>
      <div className={styles.dash_sec2}>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <div className={styles.dashtow_box}>
                <div className={styles.dashtow_box_left}>
                  <span>
                    <WalletIcon />
                  </span>
                  {loadingProfile ? (
                    <ClipLoader color="#BD48D4" size={20} />
                  ) : (
                    <h4>
                      {"10.00"}
                    </h4>
                  )}
                  <p>Credit Balance</p>
                  <button className={styles.primary_btn} onClick={() => gotoSettings('billing')}>
                    Buy More
                  </button>
                </div>
                <div className={styles.dashtow_box_right}>
                  <Image src={dahtow_01} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div
                  className={`${styles.px_0} ${styles.dashtow_center_box} col-md-6`}
                >
                  <div
                    className={`${styles.dashtow_box} ${styles.dashtow_sm_box}`}
                  >
                    <div className={styles.dashtow_box_left}>
                      <span>
                        <NotePenIcon />
                      </span>
                      <h4>{10}</h4>
                      <p>Registered Works</p>
                      <button
                        onClick={gotoRegisterNew}
                        className={styles.primary_btn}
                      >
                        Register New
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.dashtow_box}>
                    <div className={styles.dashtow_box_left}>
                      <span>
                        <BagIcon />
                      </span>
                      <h4>{7}</h4>
                      <p>Licensed Works</p>
                      <button
                        onClick={gotoRegisterNew}
                        className={styles.primary_btn}
                      >
                        Register New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dash_sec3}>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h3>Payment Methods</h3>
            </div>
            <div className="col-md-6">
              <div className={styles.dashtree_box}>
                <h5>Credit Card Details</h5>
                <div className={styles.dashtree_box_left}>
                  <div className="row">
                    <div className="col-md-12 ">
                      <Form.Group
                        className={styles.mb_15}
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Card Number"
                          className={styles.form_control}
                        // id={styles.form_control}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group
                        className={styles.mb_15}
                        controlId="exampleForm.ControlInput2"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Name"
                          className={styles.form_control}
                        // id={styles.form_control}
                        />
                      </Form.Group>
                    </div>
                    <div
                      className={`${styles.px_0} ${styles.exp_fld} col-md-3`}
                    >
                      <Form.Group
                        className={styles.mb_15}
                        controlId="exampleForm.ControlInput3"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Expiry"
                          className={styles.form_control}
                        // id={styles.form_control}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-3">
                      <Form.Group
                        className={styles.mb_15}
                        controlId="exampleForm.ControlInput4"
                      >
                        <Form.Control
                          type="email"
                          placeholder="CVV"
                          className={styles.form_control}
                        // id={styles.form_control}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <div className="slide_dogle">
                        <Form>
                          <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Save card for future billing?"
                          />
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.dash_bottom_bt}>
                <button className={styles.primary_btn} onClick={() => gotoSettings('billing')}>
                  Buy More
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.dashtree_box}>
                <h5>My Cards</h5>
                <div className={styles.dashthree_box_right}>
                  <div className={styles.card_dash_box}>
                    <div className={styles.card_dash_box_l}>
                      <Image src={cardm} alt="" />
                      <div className={styles.card_l_name}>
                        <h4>Tom McBride </h4>
                        <span>Primary</span>
                      </div>
                      <p>**** **** 9856</p>
                    </div>
                    <div className={styles.card_dash_box_r}>
                      <button className={`${styles.primary_btn} me-2`}>
                        Edit
                      </button>
                      <button className={styles.primary_btn}>Delete</button>
                      <p>Card expires at 12/26</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
