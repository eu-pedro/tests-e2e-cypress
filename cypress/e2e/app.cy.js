import assert from 'assert'
import { register } from 'module'

class RegisterForm {
  elements = {
    titleInput: () => cy.get('#title'),
    imageUrl: () => cy.get('#imageUrl'),
    titleFeedback: () => cy.get('#titleFeedback'),
    urlFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit'),
  }

  typeTitle(text) {
    if(!text) return
    this.elements.titleInput().type(text)
  }

  typeUrl(url) {
    if(!url) return
    this.elements.imageUrl().type(url)
  }

  clickSubmit() {
    this.elements.submitBtn().click()
  }
}

const registerForm = new RegisterForm()

const colors = {
  errors: 'rgb(220, 53, 69)',
  success: 'rgb(25, 135, 84)'
}

describe('Image Registration', () => {
  // describe('Submitting an image with invalid inputs', () => {

  //   after(() => {
  //     cy.clearAllLocalStorage()
  //   })

  //   const input = {
  //     title: '',
  //     url: ''
  //   }

  //   it('Given I am on the image registration page', () => {
  //     cy.visit('/')
  //   })

  //   it(`When I enter ${input.title} in the title field`, () => {
  //     registerForm.typeTitle(input.title)
  //   })

  //   it(`When I enter ${input.url} in the title field`, () => {
  //     registerForm.typeUrl(input.url)
  //   })

  //   it(`Then I click the submit button`, () => {
  //     registerForm.clickSubmit()
  //   })

  //   it('Then I should see "Please type a title for the image" message above the title field', () => {
  //     // registerForm.elements.titleFeedback().should((element) => {
  //     //   debugger
  //     // })

  //     registerForm.elements.titleFeedback().should('contains.text', 'Please type a title for the image.')
  //   })

  //   it('And I should see "Please type a valid URL" message above the imageUrl field', () => {
  //     registerForm.elements.urlFeedback().should('contains.text', 'Please type a valid URL')

  //   })

  //   it('And I should see an exclamation icon in the title and URL fields', () => {
  //       registerForm.elements.titleInput().should(([element]) => {
  //         const styles = window.getComputedStyle(element)
  //         const border = styles.getPropertyValue('border-right-color')
  //         assert.strictEqual(border, colors.errors)
  //     }) 
  //   })
  // })

  describe('Submitting an image with valid inputs using enter key', () => {

    const input = { 
      title: 'Alien BR'
    }
    const url = { 
      title: 'https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg'
    }

    it('Given I am on the image registration page', () => {
      cy.visit('/')
    })

    it(`When I enter ${input.title} in the title field`, () => {
      registerForm.typeTitle(input.title)
    })

    it('Then I should see a check icon in the title field', () => {
      registerForm.clickSubmit()
      registerForm.elements.titleInput().should(([element]) => {
        const styles = window.getComputedStyle(element)
        const border = styles.getPropertyValue('border-right-color')
        assert.strictEqual(border, colors.success)
      })
    })


    it(`When I enter ${url.title} in the URL field`, () => {
      registerForm.typeUrl(url.title)
    })
    it('Then I should see a check icon in the imageUrl field', () => {
      registerForm.elements.imageUrl().should(([element]) => {
        const styles = window.getComputedStyle(element)
        const border = styles.getPropertyValue('border-right-color')
        assert.strictEqual(border, colors.success)
      })
    })
    it('Then I can hit enter to submit the form', () => {
      new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', which: 13, keyCode: 13, });
      registerForm.clickSubmit()
    })
    it('And the list of registered images should be updated with the new item')
    it('And the new item should be stored in the localStorage')
    it('Then The inputs should be cleared')


  })
  
})


