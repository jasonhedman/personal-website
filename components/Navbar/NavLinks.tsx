import React from 'react';

import {Button, Stack} from "@chakra-ui/react";

import {NAVBAR_HEIGHT} from "@/components/Navbar/index";

import { NavLink as NavLinkType } from "@/types/NavLink";

interface Props {
    onClick?: () => void;
}

const NavLinks: React.FC<Props> = ({ onClick }) => {
    return (
        <Stack
            spacing={{
                base: 1,
                lg: 4
            }}
            direction={{
                base: "column",
                md: "row"
            }}
        >
            {navLinks.map((navLink, index) => (
                <NavLink
                    key={index}
                    navLink={navLink}
                    onClick={onClick}
                />
            ))}
        </Stack>
    );
};

interface NavLinkProps {
    navLink: NavLinkType;
    onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ navLink, onClick}) => {
    return (
        // <Link
        //     href={navLink.href}
        // >
            <Button
                variant={'ghost'}
                _hover={{
                    bg: 'blackAlpha.500'
                }}
                onClick={() => {
                    const ele = document.getElementById(navLink.href);
                    if(!ele) return;
                    if(onClick) onClick();
                    window.scrollTo(ele.offsetLeft, ele.offsetTop - NAVBAR_HEIGHT);
                }}
            >
                {navLink.label}
            </Button>
        // </Link>
    )
}

const navLinks: NavLinkType[] = [
    {
        href: "about",
        label: "About"
    },
    {
        href: "education",
        label: "Education"
    },
    {
        href: "projects",
        label: "Projects"
    },
    {
        href: "hackathons",
        label: "Hackathons"
    }
]


export default NavLinks;
