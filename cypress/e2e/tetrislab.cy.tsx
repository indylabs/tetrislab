import { CONSENT_DATA } from "../../src/data/consent";
import { MMTR_DATA } from "../../src/data/mmtr";
import { FSS_DATA } from "../../src/data/ffs";

const InfoSheetStep = (variant?: string) => {
  cy.visit(`http://localhost:3000/info-sheet${variant ? `?variant=${variant}` : ''}`);
  // Confirm read
  cy.contains("I have read all sections of this information sheet").click();
  // continue
  cy.contains("button:visible", "Continue").click();
}

const ParticularsStep = () => {
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
}

const ConsentStep = () => {
  // check consent
  CONSENT_DATA.forEach(({ text }) => {
    cy.contains(text).click();
  });
  // continue
  cy.contains("button:visible", "Continue").click();
}

const MMTRStep = () => {
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
}

const TetrisStepControl = () => {
  cy.contains("button:visible", "Start Tetris").click();

  // Speed through game
  cy.get("body").type(Array(350).fill("{downArrow}").join(""));

  cy.contains("button:visible", "Continue").click();
}

const TetrisStepVariantA = () => {
  cy.contains("button:visible", "Start Tetris").click();

  cy.get(`[data-cy="passive-notification"]`).should("not.exist");

  cy.wait(11000); // Wait 11 seconds for notification to appear

  cy.get(`[data-cy="passive-notification"]`).should("be.visible"); 

  cy.wait(5000); // Wait 5 seconds for notification to disappear

  cy.get(`[data-cy="passive-notification"]`).should("not.exist");

  // Speed through game
  cy.get("body").type(Array(350).fill("{downArrow}").join(""));

  cy.contains("button:visible", "Continue").click();
}

const TetrisStepVariantB = () => {
  cy.contains("button:visible", "Start Tetris").click();

  cy.get(`[data-cy="active-notification"]`).should("not.exist");

  cy.wait(11000); // Wait 11 seconds for notification to appear

  cy.get(`[data-cy="active-notification"]`).should("be.visible"); 

  cy.get(`[data-cy="active-notification-yes"]`).click();

  cy.get(`[data-cy="active-notification"]`).should("not.exist");

  // Speed through game
  cy.get("body").type(Array(350).fill("{downArrow}").join(""));

  cy.contains("button:visible", "Continue").click();
}

const FSSStep = () => {
  FSS_DATA.forEach(({ text, responses }) => {
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];

    cy.contains("label", text)
      .parent() // Get the parent element that contains the radio buttons
      .find(`input[type="radio"][value="${randomResponse.value}"]`) // Find the radio button with the desired value
      .check(); // Check the radio button
  });

  // continue
  cy.contains("button:visible", "Submit Responses").click();
}

const DebriefStep = () => {
  // Confirm read
  cy.contains("I have read all sections of this debrief sheet").click();
  // continue
  cy.contains("button:visible", "Continue").click();
}

const FinishStep = () => {  
  // Confirm participant code
  cy.get(`[data-cy = "participant-code"]`)
  .invoke("text")
  .then((text) => {
    expect(text).not.to.be.empty;
  });

  // save and finish
  cy.contains("button:visible", "Save and Finish").click();
}

describe("TetrisLab spec", () => {
  it("should allow control flow", () => {
    InfoSheetStep(); // 1. Info Sheet (loading control)
    ParticularsStep(); // 2. Particulars
    ConsentStep(); // 3. Consent
    MMTRStep(); // 4. MMT-R
    TetrisStepControl(); // 5. Tetris (Control)
    FSSStep(); // 6. FSS
    DebriefStep(); // 7. Debrief
    FinishStep(); // 8. Finish

    cy.contains("Your data has been saved.").should("be.visible");
  });

  it("should allow variant A flow", () => {
    InfoSheetStep('a'); // 1. Info Sheet (loading variant A)
    ParticularsStep(); // 2. Particulars
    ConsentStep(); // 3. Consent
    MMTRStep(); // 4. MMT-R
    TetrisStepVariantA(); // 5. Tetris (Variant A)
    FSSStep(); // 6. FSS
    DebriefStep(); // 7. Debrief
    FinishStep(); // 8. Finish

    cy.contains("Your data has been saved.").should("be.visible");
  });

  it("should allow variant B flow", () => {
    InfoSheetStep('b'); // 1. Info Sheet (load variant B)
    ParticularsStep(); // 2. Particulars
    ConsentStep(); // 3. Consent
    MMTRStep(); // 4. MMT-R
    TetrisStepVariantB(); // 5. Tetris (Variant B)
    FSSStep(); // 6. FSS
    DebriefStep(); // 7. Debrief
    FinishStep(); // 8. Finish

    cy.contains("Your data has been saved.").should("be.visible");
  });
});
