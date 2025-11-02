"use client";
import {useMediaQuery} from "@/hooks/useMediaQuery";
import {MobileHeader} from "@/sections/header/ui/MobileHeader";
import {DesktopHeader} from "@/sections/header/ui/DesktopHeader";
import {useEffect, useState} from "react";

export function Header() {
    const [hasMounted, setHasMounted] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return isMobile ? <MobileHeader /> : <DesktopHeader />;
}
