"use client"
import {useMediaQuery} from "@/hooks/useMediaQuery";
import {MobileHeader} from "@/sections/header/ui/MobileHeader";
import {DesktopHeader} from "@/sections/header/ui/DesktopHeader";

export function Header() {

    const isMobile = useMediaQuery("(max-width: 768px)");

    return isMobile ? <MobileHeader /> : <DesktopHeader />;

}