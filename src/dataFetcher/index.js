import { fetchResultData, fetchCandidateData } from "../fakeAPI"; // Let's imagine this is an external service that we are calling via https

async function fetchResults() {
  const results = await fetchResultData();
  const candidateData = fetchCandidateData();

  const formattedResults = results.results.map((result) => {
    const candidateMatch = candidateData.find(
      (candidate) => candidate.id === result.candidateId
    );

    if (!candidateData) {
      throw new Error(`No candidate data found for the candidate`);
    }

    return {
      ...result,
      candidateName: candidateMatch.name,
    };
  });

  return {
    ...results,
    results: formattedResults,
  };
}

export default fetchResults;
