"use client";

import Image from "next/image";
import style from "../styles/fotter.module.css";
import backgroundImage from "../../public/image/footter_group_1.svg";

const Fotter = () => {
  return (
    <footer className={style.fotter_section}>
      <div className={style.fotter_contaienr}>
        <div className={style.fotter_content_wrapper}>
          <Image
            src={backgroundImage}
            alt="footer background image"
            className={style.bgimage}
          />
          {/* Logo and tagline */}
          <div className={style.fotter_container}>
            <div className={style.logo_section}>
              <i
                className={`ri-menu-2-line ${style.menuicon}`}
                onClick={() => setMenuOpen(true)}
              ></i>

              <div className={style.logo}>
                <Image
                  src="/assets/icons/logo.png"
                  alt=""
                  width={44.42}
                  height={34.73}
                />
                <div className={style.logo_icon}></div>
              </div>

              <div className={style.logo_text}>
                <div className={style.logo_header}>
                  <div className={style.single_logo_header}>
                    <Image
                      src="/assets/icons/logo_h.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className={style.single_logo_header}>
                    <Image
                      src="/assets/icons/logo_e.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className={style.single_logo_header}>
                    <Image
                      src="/assets/icons/logo_c.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className={style.single_logo_header}>
                    <Image
                      src="/assets/icons/logo_h.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className={style.single_logo_header}>
                    <Image
                      src="/assets/icons/logo_t.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                <div className={style.logo_para}>
                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/s.png"
                      alt=""
                      width={11}
                      height={19}
                    />
                  </div>

                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/i.png"
                      alt=""
                      width={4}
                      height={18}
                    />
                  </div>

                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/c.png"
                      alt=""
                      width={10}
                      height={13}
                    />
                  </div>

                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/h.png"
                      alt=""
                      width={10}
                      height={18}
                    />
                  </div>

                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/t.png"
                      alt=""
                      width={8}
                      height={16}
                    />
                  </div>

                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/b.png"
                      alt=""
                      width={10}
                      height={19}
                    />
                  </div>

                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/a.png"
                      alt=""
                      width={9}
                      height={13}
                    />
                  </div>

                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/r.png"
                      alt=""
                      width={6}
                      height={13}
                    />
                  </div>

                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/b.png"
                      alt=""
                      width={10}
                      height={19}
                    />
                  </div>

                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/e.png"
                      alt=""
                      width={10}
                      height={13}
                    />
                  </div>

                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/small_s.png"
                      alt=""
                      width={9}
                      height={13}
                    />
                  </div>

                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/small_s.png"
                      alt=""
                      width={9}
                      height={13}
                    />
                  </div>

                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/e.png"
                      alt=""
                      width={10}
                      height={13}
                    />
                  </div>

                  <div className={style.single_logo_para}>
                    <Image
                      src="/assets/icons/r.png"
                      alt=""
                      width={6}
                      height={13}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main columns */}
            <div className={style.fotter_columns}>
              {/* Contact Us */}
              <div className={style.fotter_col}>
                <h3>Contact us</h3>
                <div className={style.fotter_contact_item}>
                  <Image
                    src="/assets/icons/email.svg"
                    alt="email"
                    width={18}
                    height={18}
                  />
                  <span>hechtcontactlinsengmbh@gmail.com</span>
                </div>
                <div className={style.fotter_contact_item}>
                  <Image
                    src="/assets/icons/phone.svg"
                    alt="phone"
                    width={18}
                    height={18}
                  />
                  <span>+82 7993863789</span>
                </div>
                <div className={style.fotter_contact_item}>
                  <Image
                    src="/assets/icons/location.svg"
                    alt="location"
                    width={18}
                    height={18}
                  />
                  <span>Level 1, 12 Sample St, Sydney NSW 2000</span>
                </div>
              </div>

              {/* Quick Links */}
              <div className={style.fotter_col}>
                <h3>Quick links</h3>
                <ul>
                  <li>Home</li>
                  <li className={style.active}>About Us</li>
                  <li>Resources</li>
                  <li>Technology</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              {/* Services */}
              <div className={style.fotter_col}>
                <h3>Services</h3>
                <ul>
                  <li>imprint</li>
                  <li>Conditions</li>
                  <li>Quality management</li>
                  <li>data protection</li>
                  <li>Online support</li>
                  <li>File transfer to Hecht</li>
                  <li>Pike in Europe</li>
                  <li>Jobs</li>
                </ul>
              </div>

              {/* Subscribe */}
              <div className={style.fotter_col}>
                <h3>Subscribe Today!</h3>
                <form className={style.fotter_subscribe_form}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className={style.fotter_input}
                  />
                  <button type="submit" className={style.fotter_signup_btn}>
                    SIGN UP
                  </button>
                </form>
                <div className={style.fotter_subscribe_text}>
                  Get the latest news on Eye health, wellness, new offers and
                  updates.
                </div>
                <div className={style.fotter_socials}>
                  <a href="#" aria-label="Facebook">
                    <i class="ri-facebook-fill"></i>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <i class="ri-instagram-fill"></i>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <i class="ri-linkedin-box-fill"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i class="ri-twitter-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
