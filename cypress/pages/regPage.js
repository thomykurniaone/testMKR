class regPage {
    firstName = "#firstName";
    lastName = "#lastName";
    email = "#email";
    phoneNumber = "#mobilePhone";
    regButton = ".RegistrationForm_form-container__button-text__G_fL8";
  

    phoneNumberField(Phn) {
      cy.get(this.phoneNumber).type(Phn);
    }
    emailField(Email) {
      cy.get(this.email).type(Email);
    }
    firstNameField(FN) {
      cy.get(this.firstName).type(FN);
    }
    lastNameField(LN) {
      cy.get(this.lastName).type(LN);
    }
    registerButton() {
      cy.get(this.regButton).click();
    }
    errorMessage() {
      // Verifying error message
      cy.wait(3000);
      
      cy.get(".alert__text_inF7f")
      .should("have.text","No. Handphone atau Email sudah terdaftar pada akun lain");
    }
  }
  export default regPage;