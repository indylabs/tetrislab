import { CONSENT_DATA } from "../../src/data/consent";
import { MMTR_DATA } from "../../src/data/mmtr";

describe("TetrisLab spec", () => {
  it("should allow control flow", () => {
    // 1. INFO SHEET
    cy.visit("http://localhost:3000/info-sheet");
    // Confirm read
    cy.contains("I have read all sections of this information sheet").click();
    // continue
    cy.contains("button:visible", "Continue").click();

    // 2. PARTICULARS
    // set gender
    cy.get(`[data-cy = "select-gender"]`).click();
    cy.get(`[data-cy = "option-gender-male"]`).click();
    // set age
    cy.get(`[data-cy = "select-age"]`).click();
    cy.get(`[data-cy = "option-age-45"]`).click();
    // check requirements
    cy.contains(
      "I am using a desktop computer with a modern web browser, keyboard and mouse or trackpad."
    ).click();
    cy.contains("I am in a quiet, distraction free environment.").click();
    cy.contains("I am familiar with the video game Tetris.").click();
    cy.contains("I have normal or corrected-to-normal vision.").click();
    cy.contains("I do not have ADHD.").click();
    // continue
    cy.contains("button:visible", "Continue").click();

    // 3. CONSENT
    // check consent
    CONSENT_DATA.forEach(({ text }) => {
      cy.contains(text).click();
    });
    // continue
    cy.contains("button:visible", "Continue").click();

    // 4. MMT-R
    MMTR_DATA.forEach(({ text, responses }) => {
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      cy.contains("label", text)
        .parent() // Get the parent element that contains the radio buttons
        .find(`input[type="radio"][value="${randomResponse.value}"]`) // Find the radio button with the desired value
        .check(); // Check the radio button
    });
    // continue
    cy.contains("button:visible", "Submit Responses").click();

    // 5. Tetris
    cy.contains("button:visible", "Start Tetris").click();

    // Speed through game
    cy.get("body").type(Array(500).fill("{downArrow}").join(""));
  });
});
