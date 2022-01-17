import { Businesses } from "@/services/businesses/types";
import { fetchBusinesses } from "../businesses";

import MockAdapter from "axios-mock-adapter";

import API from "@/utils/api";
import { ApplicationError } from "@/utils/errors/app-error";

const MOCK_DATA: Businesses = [
  {
    id: "test",
    name: "TEST",
    description: "TEST",
    phone: "609-306-3610",
    image:
      "https://images.unsplash.com/photo-1527015175922-36a306cf0e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=1000",
    email: "test@test.com",
    address: {
      number: "84586",
      street: "Straubel",
      zip: "SG4",
      city: "Manchester",
      country: "United Kingdom",
    },
  },
];

let mock: MockAdapter;

beforeEach(() => {
  mock = new MockAdapter(API);
});

describe("Business service", () => {
  test("Return correct data", async () => {
    mock.onGet("/").reply(200, MOCK_DATA);
    const response = await fetchBusinesses();
    expect(response[0].id).toEqual(MOCK_DATA[0].id);
  });

  test("Throws application error on error", async () => {
    mock.onGet("/").reply(422, { error: true });
    return expect(fetchBusinesses()).rejects.toThrowError(ApplicationError);
  });
});

export {};
