import Image from "next/image"
import Link from "next/link"
import { headerLogo } from "../../../assets/images"
import { hamburger } from "../../../assets/icons"
import { navLinks } from "../../../constants"

const Navbar = () => {
  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <Link href={"/"}>
            <Image src={headerLogo} alt="logo" width={138} height={29} />
          </Link>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {
              navLinks.map((item) => 
             (   <li key={item.label}>
                  <Link className="font-montserrat leading-normal text-lg text-slate-gray" href={item.href}>{item.label}</Link>
                </li>)
              )
            }
          </ul>
          <div className="hidden max-lg:block">
            <Image
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar
