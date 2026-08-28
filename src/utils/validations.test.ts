import { describe, it, expect } from "vitest";
import {
  isValidEmail,
  isValidPhone,
  isRequiredFieldValid,
  isPositiveNumber,
} from "./validations";

describe("isValidEmail", () => {
  it("accepts a properly formatted email", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
  });

  it("rejects an improperly formatted email", () => {
    expect(isValidEmail("invalid-email")).toBe(false);
  });
});

describe("isValidPhone", () => {
  it("accepts a 9-digit phone number", () => {
    expect(isValidPhone("609871425")).toBe(true);
  });

  it("rejects a phone number with less than 9 digits", () => {
    expect(isValidPhone("123456")).toBe(false);
  });
});

describe("isRequiredFieldValid", () => {
  it("accepts a non-empty string", () => {
    expect(isRequiredFieldValid("Oriol Cali")).toBe(true);
  });

  it("rejects an empty string", () => {
    expect(isRequiredFieldValid("")).toBe(false);
  });
});

describe("isPositiveNumber", () => {
  it("accepts a positive number", () => {
    expect(isPositiveNumber(5)).toBe(true);
  });

  it("rejects a negative number", () => {
    expect(isPositiveNumber(-5)).toBe(false);
  });
  it("rejects zero", () => {
    expect(isPositiveNumber(0)).toBe(false);
  });
});
