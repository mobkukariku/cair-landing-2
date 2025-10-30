import {navItems} from "@/sections/header/model/constants";


export function MobileMenuItemsList() {
    return (
        <div className={"absolute z-50 flex flex-col justify-center font-bold rounded-[36px] border p-4 border-white/50 backdrop-blur-md bg-blue-300/20 w-[85%]"}>
            {navItems.map((item) => (
                <button key={item.id} className={"p-4  w-full"}>
                    {item.label}
                </button>
            ))}
            <button className={"p-4 border bg-blue-400/10  border-white/30 rounded-full w-full"}>
                Contact
            </button>
        </div>
    )
}