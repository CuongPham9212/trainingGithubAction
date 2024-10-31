describe('check some link spec', () => {
  before(() => {
    cy.visit('https://example.optimizely.com')
  })
  it('verify External Link, pass', () => {
    cy.contains('External Link').should('be.visible')
  })
  it('verify Absolute internal link, pass', () => {
    cy.get('a').should('be.enabled')
  })
})