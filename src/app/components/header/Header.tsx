import "./header.css";

export default function Header() {
    return (
        // make this header span full width and have a visible height so bg-black can show
        <div className="bg-black w-full h-16 fixed top-0 left-0 z-50">
            <div className="logo-container">
                <span className="logo-text" id="js-logo">JS</span>
            </div>
        </div>
    );
}