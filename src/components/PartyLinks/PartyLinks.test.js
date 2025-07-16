import { render, screen } from "@testing-library/react";
import PartyLinks from ".";

const PARTIES = [
  { name: "Hippo Party", url: "https://en.wikipedia.org/wiki/Hippopotamus" },
  { name: "Giraffe Party", url: "https://en.wikipedia.org/wiki/Giraffe" },
  { name: "Tiger Party", url: "https://en.wikipedia.org/wiki/Tiger" },
  { name: "Zebra Party", url: "https://en.wikipedia.org/wiki/Zebra" },
  { name: "Meerkat Party", url: "https://en.wikipedia.org/wiki/Meerkat" },
  { name: "Pelican Party", url: "https://en.wikipedia.org/wiki/Pelican" },
];

test("renders all the party links", async () => {
  render(<PartyLinks />);
  const partyLinks = screen.getAllByRole("link");
  expect(partyLinks.length).toBe(6);
});

test("renders a party link with the correct text and href", async () => {
  render(<PartyLinks />);

  PARTIES.forEach((party) => {
    const partyLink = screen.getByRole("link", { name: party.name });
    expect(partyLink).toHaveAttribute("href", party.url);
  });
});
