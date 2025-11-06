import Link from "next/link";
import "./Logo.css";

export default function Logo() {
  return (
    <Link href="/" className="logo-container" aria-label="Joe Sleiman Home Page Logo">
      <span className="logo-text" aria-hidden="true">JS</span>
    </Link>
  );
}
