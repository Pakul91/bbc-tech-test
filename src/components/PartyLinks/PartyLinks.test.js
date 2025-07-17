import { render, screen } from "@testing-library/react";
import PartyLinks from ".";
import partyLinksData from "../../data/partyLinksData.json";

const PARTIES = partyLinksData;

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
