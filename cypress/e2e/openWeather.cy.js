describe('test', () => {

	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit("https://openweathermap.org");
	});

	it('Banner Title', () => {
		cy.get("h1 span.white-text").contains("OpenWeather");
	})

	it("Menu Navigation", () => {
    cy.get('#desktop-menu a[href="/price"]')
      .contains("Pricing")
			.click({ force: true });
		cy.get("div.col-sm-7 h1").should("have.text", "Pricing");
  });

})