"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lightbulb,
  SHousing,
  Warehouse,
  Education,
  TagUser,
  HouseIcon,
  SmartRetail,
  UniCap,
} from "./Icons.jsx";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const icons = {
    Chevron: <ChevronDown fill="currentColor" size={16} />,
    Warehouse: <Warehouse fill="#336699" size={35} />,
    Lightbulb: <Lightbulb fill="#d97706" size={35} />,
    SHousing: <SHousing fill="#336699" size={35} />,
    UniCap: <UniCap fill="#d97706" size={35} />,
    Support: <TagUser fill="#336699" size={35} />,
    HouseIcon: <HouseIcon fill="#336699" size={35} />,
    SmartRetail: <SmartRetail fill="#d97706" size={35} strokeWidth={0.1} />,
  };

  const menuItems = [
    { label: "Warehouse and Logistics", href: "/wandl" },
    { label: "Education", href: "/education" },
    { label: "Social Housing", href: "/shousing" },
    { label: "Smart Retail", href: "/sretail" },
    { label: "Toracare Support", href: "/about" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Articles", href: "/articles" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      disableAnimation
      isBordered
      maxWidth="full"
      className="bg-white h-20"
    >
      {/* Mobile menu toggle */}
      <NavbarContent className="lg:hidden z-20" justify="start">
        <NavbarMenuToggle
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarBrand className="flex items-center justify-start lg:w-auto">
        <Link href="/" aria-label="Homepage">
          <Image
            src="/TS-1.png"
            alt="ToraSense Logo"
            width={200}
            height={36}
            priority
            className="cursor-pointer min-w-[150px] min-h-[27px] sm:min-w-[150px] sm:min-h-[27px]"
          />
        </Link>
      </NavbarBrand>

      {/* Spacer to push the logo to the left on larger screens */}
      <div className="hidden lg:flex flex-grow" />

      {/* Center Navbar items */}
      <NavbarContent className="hidden lg:flex gap-6 justify-center">
        {/* Industries Dropdown */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent text-[#336699] hover:text-orange-700 font-medium text-lg"
                endContent={icons.Chevron}
                radius="sm"
                variant="light"
              >
                Industries
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="ToraSense IoT Industries" className="w-[340px]">
            <DropdownItem
              href="/wandl"
              key="Warehouse and Logistics"
              className="whitespace-normal break-words"
              description={
                <span className="whitespace-normal break-words">
                  Optimise warehouse efficiency, safety, and cost-effectiveness with real-time IoT 
                  monitoring and predictive analytics tailored to your needs.
                </span>
              }
              startContent={<div className="flex items-center">{icons.Warehouse}</div>}
            >
              Enterprise Wireless
            </DropdownItem>
            <DropdownItem
              href="/education"
              key="Education"
              className="whitespace-normal break-words"
              description={
                <span className="whitespace-normal break-words">
                  Transform the learning environment with IoT solutions that enhance safety, 
                  optimise resource usage, and personalise the educational experience.
                </span>
              }
              startContent={<div className="flex items-center">{icons.UniCap}</div>}
            >
              Enterprise Networks
            </DropdownItem>
            <DropdownItem
              href="/shousing"
              key="Social Housing"
              className="whitespace-normal break-words"
              description={
                <span className="whitespace-normal break-words">
                  Enhance tenant safety, comfort, and energy efficiency in social housing with 
                  smart IoT solutions that monitor and optimise living environments in real-time.
                </span>
              }
              startContent={<div className="flex items-center">{icons.HouseIcon}</div>}
            >
              Mobile Devices
            </DropdownItem>
            <DropdownItem
              href="/sretail"
              key="Smart Retail"
              className="whitespace-normal break-words"
              description={
                <span className="whitespace-normal break-words">
                  Elevate customer experiences and streamline operations with IoT solutions that 
                  personalise shopping, optimise inventory, and enhance in-store efficiency.
                </span>
              }
              startContent={<div className="flex items-center">{icons.SmartRetail}</div>}
            >
              Mobile device Onboarding
            </DropdownItem>
            <DropdownItem
              href="/about"
              key="supreme_support"
              className="whitespace-normal break-words"
              description={
                <span className="whitespace-normal break-words">
                  Overcome any challenge with a supporting team ready to respond.
                </span>
              }
              startContent={<div className="flex items-center">{icons.Support}</div>}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link href="/articles" className="text-[#336699] hover:text-orange-700 font-medium text-lg">
            Articles
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className="text-[#336699] hover:text-orange-700 font-medium text-lg">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" className="text-[#336699] hover:text-orange-700 font-medium text-lg">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Spacer to push the social icons to the right */}
      <div className="hidden lg:flex flex-grow" />

      {/* Social Media Icons */}
      <NavbarContent justify="end" className="md:flex items-center">
        <NavbarItem className="flex space-x-4">
          <Link
            href="https://www.linkedin.com/company/1538744/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#336699] hover:text-orange-700"
          >
            <FaLinkedin size={24} />
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu
        className="mt-4 overflow-y-auto max-h-[calc(100vh-5rem)]"
        style={{
          scrollbarWidth: "thin",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link href={item.href} className="w-full text-[#336699] hover:text-orange-700">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
