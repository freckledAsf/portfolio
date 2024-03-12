"use client";

import Card from "@/components/Card";
import Social from "@/components/Socials";
import { profile, projects } from "./constants";
import Searchbar from "@/components/Searchbar";
import { useMemo, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const onSearch = (query: string) => setQuery(query);
  const filtered = useMemo(
    () =>
      projects.filter((card) =>
        card.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <main className="flex flex-col justify-center items-center p-16 gap-8">
      <Searchbar className="w-[600px]" {...{ onSearch }} />
      <div className="flex flex-col gap-5 items-center">
        <Card {...profile}>
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
        <div className="flex flex-wrap gap-5 justify-center mx-auto max-w-7xl">
          {filtered.map((card, index) => (
            <Card key={index} {...card}>
              {card.links.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target={link.includes("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  <Social color={card.color} {...{ link }} />
                </a>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
