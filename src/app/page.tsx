"use client";

import Card from "@/components/Card";
import Social from "@/components/Socials";
import { profile, projects } from "./constants";
import Searchbar from "@/components/Searchbar";
import { useMemo, useState } from "react";
import SocialLink from "@/components/SocialLink";

export default function Home() {
  const [query, setQuery] = useState("");
  const onSearch = (query: string) => setQuery(query);
  const filtered = useMemo(() => {
    return projects.filter((card) =>
      card.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <main className="flex flex-col justify-center items-center py-16 px-8 sm:px-16 gap-8">
      <Searchbar className="w-[300px] sm:w-[600px]" {...{ onSearch }} />
      <div className="flex flex-col w-full gap-5 items-center">
        <Card {...profile} className="w-[300px] sm:w-[600px]">
          {profile.links.map((link, index) => (
            <a
              key={index}
              href={link}
              target={link.includes("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
            >
              <Social {...{ link }} />
            </a>
          ))}
        </Card>
        <div className="flex flex-wrap gap-5 justify-center">
          {filtered.map((card, index) => (
            <Card
              key={index}
              {...{ ...card }}
              onClick={() => window.open(card.website)}
              className="w-[300px] sm:w-[600px]"
            >
              {card.repo && (
                <SocialLink href={card.repo}>
                  <Social color={card.color} link={card.repo} />
                </SocialLink>
              )}
              {card.website && (
                <SocialLink href={card.website}>
                  <Social color={card.color} link={card.website} />
                </SocialLink>
              )}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
