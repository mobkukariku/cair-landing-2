import {Navbar} from "@/components/landing/ui/Navbar";
import {Header} from "@/components/landing/ui/Header";

export default function Home() {
  return (
      <div
          style={{
            backgroundImage: `url(/bg.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100dvh",
          }}
      >
          <Header />

      </div>

  );
}
