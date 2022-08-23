import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.svg";

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between font-bold text-white">
			<Image src={Logo} />
			<div className="hidden h-10 md:flex md:space-x-8">
				<div className="group">
					<Link href="#">About</Link>
					<div className="mx-2 group-hover:border-b group-hover:border-b-blue-50"></div>
				</div>
				<div className="group">
					<Link href="#">Products</Link>
					<div className="mx-2 group-hover:border-b group-hover:border-b-blue-50"></div>
				</div>
				<div className="group">
					<Link href="#">Support</Link>
					<div className="mx-2 group-hover:border-b group-hover:border-b-blue-50"></div>
				</div>
				<div className="group">
					<Link href="#">Events</Link>
					<div className="mx-2 group-hover:border-b group-hover:border-b-blue-50"></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
