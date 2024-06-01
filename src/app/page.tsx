// pages/index.js
"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-slate-800 overflow-hidden">
      <div className="mx-auto max-w-[1280px] flex flex-row px-[24px] py-[96px]">
        <div
          className="w-[50%] flex flex-col h-screen overflow-hidden"
          style={{ height: "calc(100vh - 192px)" }}
        >
          <div className="text-[#E2E8F0] space-y-[8px]">
            <p className="text-5xl">Seksak Jewudomchai</p>
            <p className="text-2xl">Frontend Developer</p>
          </div>
          <div className="mt-auto text-[#E2E8F0] space-x-[16px]">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              className="hover:text-teal-300"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              className="hover:text-teal-300"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              className="hover:text-teal-300"
            />
          </div>
        </div>
        <div className="w-[50%] overflow-y-auto">
          <div className="text-white mb-[144px]">tester</div>
          <div onClick={() => router.push("/about")}>test</div>
        </div>
      </div>
    </div>
  );
}
