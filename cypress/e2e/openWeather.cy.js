describe('test', () => {

	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit("https://openweathermap.org");
		cy.get('#desktop-menu a[href="/guide"]').invoke('text').as('menuGuide');
	});

	it('banner title', () => {
		cy.get("h1 span.orange-text")
			.should('have.text', 'OpenWeather');
	});

	it("Menu items | Pricing", () => {
		cy.get('#desktop-menu a[href="/price"]')
			.contains("Pricing")
			.click({ force: true });
		cy.get("div.col-sm-7 h1")
			.should("have.text", "Pricing");
	});

	it('invoke method', () => {
		cy.get('#desktop-menu a[href*="marketplace"]')
			.contains('Marketplace')
			.invoke('removeAttr', 'target')
			.click();
	});

	it('wrap method', () => {
		cy.get('div.search-container>input')
			.type('New York');
		cy.get('div.search>button')
			.click();
		cy.get('ul.search-dropdown-menu>li')
			.each(($el, index) => {
				let text = $el.text()
				if (text.includes('New York City, US ')) {
					cy.wrap($el).click()
				}
			});
		cy.get('div.current-container h2')
			.should('have.text', 'New York City, US');
	});

	it('alias using - menuGuide', function() {
		cy.get('#desktop-menu a[href="/guide"]')
			.click();
		cy.get('h1.breadcrumb-title')
			.should('have.text', this.menuGuide)
	})

});
