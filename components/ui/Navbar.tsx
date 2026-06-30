import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-primary">
    <NavigationMenu>
    <NavigationMenuList>
    <h1 className="text-2xl font-bold text-primary-foreground">
        StudyMate AI
      </h1>
      
      <NavigationMenuItem>
      <NavigationMenuTrigger className="text-primary-foreground ml-5 hover:text-primary-foreground">Features</NavigationMenuTrigger>
        <NavigationMenuContent>
        <NavigationMenuLink>
          <Link href="/quiz">
            MCQ Quiz
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink>
          <Link href="/dashboard">
            DashBoard
          </Link>
        </NavigationMenuLink>
        <NavigationMenuLink>
          <Link href="/chat">
            Chat
          </Link>
        </NavigationMenuLink>
      </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
    </NavigationMenu>
    </div>
  );
}

export default Navbar;