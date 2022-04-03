import request from "supertest";
import app from "../src/app";
import '@types/jest';

describe("GET /example/123", () => {
  it("should return 200 OK", () => {
    return request(app).get("/api").expect(200);
  });
});