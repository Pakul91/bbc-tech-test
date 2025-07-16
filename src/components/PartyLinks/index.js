import "./PartyLinks.css";

const PARTIES = [
  { name: "Hippo Party", url: "https://en.wikipedia.org/wiki/Hippopotamus" },
  { name: "Giraffe Party", url: "https://en.wikipedia.org/wiki/Giraffe" },
  { name: "Tiger Party", url: "https://en.wikipedia.org/wiki/Tiger" },
  { name: "Zebra Party", url: "https://en.wikipedia.org/wiki/Zebra" },
  { name: "Meerkat Party", url: "https://en.wikipedia.org/wiki/Meerkat" },
  { name: "Pelican Party", url: "https://en.wikipedia.org/wiki/Pelican" },
];

function PartyLinks() {
  return (
    <div className="Party-links">
      {PARTIES.map((party) => (
        <span className="Party-link" key={party.name}>
          <span className="Party-link-anchor-container">
            <a href={party.url}>{party.name}</a>
          </span>
        </span>
      ))}
    </div>
  );
}

export default PartyLinks;
