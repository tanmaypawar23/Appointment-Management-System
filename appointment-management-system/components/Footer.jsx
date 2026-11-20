import Link from "next/link";
import style from "../style/Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.row}>
          {/* Company Information */}
          <div className={style.col}>
            <div className={style.logo}>
              <img
                src="/logo.png"
                alt="RoomBuddy Logo"
                style={{ width: "3rem" }}
              />

              <img
                src="/white_logoName.png"
                alt="AppointEasy"
                style={{ width: "12rem" }}
              />
            </div>

            <p>&copy; 2026 AppointEasy • All Rights Reserved</p>

            {/* Social Media */}
            <div className={style.socialMedia}>
              <h5>Follow Us</h5>

              <Link
                href="https://www.linkedin.com/in/tanmay-pawar-4a072b293/"
                className={style.socialMediaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>

              <Link
                href="https://github.com/tanmaypawar23"
                className={style.socialMediaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </Link>

              <Link
                href="https://www.instagram.com/"
                className={style.socialMediaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>

              <Link
                href="https://x.com/"
                className={style.socialMediaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className={style.col}>
            <h5>Quick Links</h5>

            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/support">Support</Link>
            <Link href="/requests">All Requests</Link>
          </div>

          {/* Resources */}
          <div className={style.col}>
            <h5>Resources</h5>

            <Link href="/help">Help</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>

          {/* Contact */}
          <div className={style.col}>
            <h5>Contact</h5>

            <Link href="mailto:tanmaypawar230705@gmail.com">
              <i className="fa-solid fa-envelope"></i>{" "}
              tanmaypawar230705@gmail.com
            </Link>

            <Link href="tel:+919403281305">
              <i className="fa-solid fa-phone"></i> +91 9403281305
            </Link>

            <p>
              <i className="fa-solid fa-location-dot"></i> Pune, Maharashtra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
