import "./PartyLinks.css";
import partyLinksData from "../../data/partyLinksData.json";

const PARTIES = partyLinksData;

function PartyLinks() {
  return (
    <ul className="Party-links">
      {PARTIES.map((party) => (
        <li key={party.name} className="Party-link">
          <a href={party.url} className="Party-link-anchor-container">
            {party.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default PartyLinks;
