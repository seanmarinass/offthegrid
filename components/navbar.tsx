import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 p-[1rem]">
      <NavigationMenu className="w-full">
        <NavigationMenuList className="flex w-full">
          <NavigationMenuItem className="flex-grow">
            <Image src="/logo.png" alt="Logo" height={75} width={75} />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
