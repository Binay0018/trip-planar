import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <div>
        <img className="w-24 h-auto" src="/logo.png" alt="Logo" />
      </div>

      <div className="flex items-center gap-3">
        <a href="/my-trip">
          <Button variant="outline" className="rounded-full">
            My Trips
          </Button>
        </a>

        <Button className="rounded-full">
          Profile
        </Button>
      </div>
    </header>
  );
};

export default Header;