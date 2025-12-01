import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-footer relative mt-18 max-h-screen overflow-hidden rounded-2xl p-6 md:mt-12">
      <h2 className="text-brand-dark w-full py-4 text-[32px]/normal md:w-1/2 md:py-0 md:text-3xl/[1.05]">
        It's never too late to start taking care of yourself.
      </h2>
      <div className="text-footer-dark flex flex-col gap-3 py-9 text-2xl md:flex-row md:gap-4 md:text-xs">
        <a href="#" className="hover:text-brand">
          Home
        </a>
        <a href="#" className="hover:text-brand">
          About Us
        </a>
        <a href="#" className="hover:text-brand">
          Products
        </a>
        <a href="#" className="hover:text-brand">
          Collaborate with us!
        </a>
      </div>
      <div className="text-text relative mt-8 flex justify-between">
        <div className="text-footer-light hidden gap-4 text-[10px] font-medium md:flex">
          <a href="#" className="hover:text-brand">
            Terms of Service
          </a>
          <a href="#" className="hover:text-brand">
            Privacy Policy
          </a>
        </div>
        <div className="text-brand-dark flex gap-3 text-2xl md:gap-2 md:text-sm md:text-black">
          <FaFacebook className="hover:text-brand cursor-pointer" />
          <FaXTwitter className="hover:text-brand cursor-pointer" />
          <FaInstagram className="hover:text-brand cursor-pointer" />
          <FaLinkedin className="hover:text-brand cursor-pointer" />
        </div>
      </div>
      <img
        src="./footer.png"
        alt="footer image"
        className="absolute -right-55 -bottom-20 w-100 scale-110 md:right-25 md:bottom-0 md:w-50 md:scale-100"
      />
    </footer>
  );
}

export default Footer;
