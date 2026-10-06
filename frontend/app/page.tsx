import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatWeDo from "@/components/WhatWeDo";
import OurWork from "@/components/OurWork";
import JoinAsIntern from "@/components/JoinAsIntern";
import { getSocialLinks, getProjects } from "@/libs/api-requests";
import { SocialLink } from "@/components/Footer";
import { Project } from "@/components/OurWork";
import Show from "@/components/Show";

export default async function Home() {
  const socialLinks: SocialLink[] = await getSocialLinks();
  const projects: Project[] = await getProjects();

  return (
    <div className="flex flex-col flex-1">
      <Nav />
      <Hero />
      <Show>
        <WhatWeDo />
      </Show>
      <Show>
        <OurWork projects={projects} />
      </Show>
      <Show>
        <JoinAsIntern />
      </Show>
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
