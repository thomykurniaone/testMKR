import regPage from "../pages/regPage";

describe("User registration flow", () => {
  const registerObjects = new regPage();
  beforeEach(function () {
    cy.visit(Cypress.env("URL"));
  });
  it("Registration flow", () => {
    cy.visit(Cypress.env("URL"));
    cy.wait(5000);
    cy.fixture("regDetail").then((data) => {
      registerObjects.phoneNumberField(data.phoneNumber);
      registerObjects.emailField(data.email);
      registerObjects.firstNameField(data.firstName);
      registerObjects.lastNameField(data.lastName);
      registerObjects.registerButton();
      registerObjects.errorMessage();
    });
  });
});