import fetchResults from "../dataFetcher";
import { fetchResultData, fetchCandidateData } from "../fakeAPI";

jest.mock("../fakeAPI");

const mockFakeApi = () => {
  fetchResultData.mockImplementationOnce(() => {
    return Promise.resolve({
      isComplete: false,
      results: [
        {
          party: "Giraffe Party",
          candidateId: 2,
          votes: "9900",
        },
      ],
    });
  });

  fetchCandidateData.mockImplementationOnce(() => {
    return [
      {
        id: 2,
        name: "Lord Buckethead",
      },
    ];
  });
};

test("returns an Object", async () => {
  mockFakeApi();
  const resultData = await fetchResults();
  expect(typeof resultData).toBe("object");
});

test("response contains a result array", async () => {
  mockFakeApi();
  const resultData = await fetchResults();
  expect(Array.isArray(resultData.results)).toBe(true);
});

test("expect result object to have candidate name attached", async () => {
  mockFakeApi();
  const resultData = await fetchResults();
  const resultObject = resultData.results[0];

  expect(resultObject.party).toEqual(expect.any(String));
  expect(resultObject.candidateId).toEqual(expect.any(Number));
  expect(resultObject.votes).toEqual(expect.any(String));
  expect(resultObject.candidateName).toEqual(expect.any(String));
});
