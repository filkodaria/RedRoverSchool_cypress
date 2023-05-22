describe('tiles Elements', () => {
	
	beforeEach(() => {
		cy.visit('https://demoqa.com');
	});
	
	it.skip('clicking the tile Elements', () => {
		cy.get("div.card-body h5").contains("Elements").click();
		cy.url().should("include", "/elements");
		cy.get("div.main-header").should('have.text', 'Elements');
	});

	it.skip("clicking the dropdown Text Box", () => {
    cy.get("div.card-body h5").contains("Elements").click();
    cy.get("#item-0 span").contains("Text Box").click();
	});

	it('fill out the field Full Name', () => {
		cy.get("div.card-body h5").contains("Elements").click();
		cy.get("#item-0 span").contains("Text Box").click();
		cy.get('#userName').type('Daria');
	});
	
})