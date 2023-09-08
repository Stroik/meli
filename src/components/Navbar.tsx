import Image from "next/image";
import { SearchInput } from "./SearchInput";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/assets/images/logo-mercado-libre.png"
              width={53}
              height={36}
              alt="Logo de Mercado Libre"
            />
          </Link>
        </div>
        <SearchInput />
      </div>
    </nav>
  );
};
