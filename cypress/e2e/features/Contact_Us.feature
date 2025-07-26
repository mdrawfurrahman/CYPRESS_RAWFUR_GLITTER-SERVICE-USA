Feature: Open Glitter-Service-USA End to End - Contact Us Page

  Background: Open Contact page With Valid url

  Scenario:Verify Navigate to Contact-Us page with vaild url
    When Open Browser and Visit Website
    And Click contact_us button and navigate Contact_US page
    Then the URL should be "glitterserviceusa.com/contact-us/"
    Then the page title should be "Contact Us – Glitter Service USA"

  Scenario: Verify Form is Visible and all function is active
    When should be landed on contact page
    Then contact form is visible
    Then all function is active


  Scenario: Contact form vaild submission
    When navigate to Contact Us Page
    Then Enter a vaild Name
    Then Enter a vaild Email Address
    Then Enter a vaild Contact Number
    Then Enter a Message
    Then Click on the Send Message Button

  Scenario: Submit form with only required fields
    When navigate to Contact Us Page
    Then Enter a vaild Name
    Then Enter a vaild Email Address
    Then Click on the Send Message Button

  Scenario: Submit form with empty Name and Email
    When navigate to Contact Us Page
    Then Enter a vaild Contact Number
    Then Enter a Message
    Then Click on the Send Message Button

  Scenario: Submit form with invaild Email format
    When navigate to Contact Us Page
    Then Enter a vaild Name
    Then Enter invalid email
    Then Enter a vaild Contact Number
    Then Enter a Message
    Then Click on the Send Message Button

  Scenario: Submit form with invaild Contant Number
    When navigate to Contact Us Page
    Then Enter a vaild Name
    Then Enter a vaild Email Address
    Then Enter invaild Contact Number
    Then Enter a Message
    Then Click on the Send Message Button

  Scenario: Submit form with Message field empty
    When navigate to Contact Us Page
    Then Enter a vaild Name
    Then Enter a vaild Email Address
    Then Enter a vaild Contact Number
    Then Click on the Send Message Button

  Scenario: Submit form with long Name and Message
    When navigate to Contact Us Page
    Then Enter a long Name
    Then Enter a vaild Email Address
    Then Enter a vaild Contact Number
    Then Enter a long Message
    Then Click on the Send Message Button

  Scenario: Submit form with special characters in Name Field
    When navigate to Contact Us Page
    Then Enter name with special characters
    Then Enter a vaild Email Address
    Then Enter a vaild Contact Number
    Then Enter a Message
    Then Click on the Send Message Button

  Scenario: Submit form with numbers in Name field
    When navigate to Contact Us Page
    Then Enter numbers in name field
    Then Enter a vaild Email Address
    Then Enter a vaild Contact Number
    Then Enter a Message
    Then Click on the Send Message Button

  Scenario: Submit form with contact number exceeding limit
    When navigate to Contact Us Page
    Then Enter a vaild Name
    Then Enter a vaild Email Address
    Then Enter number of exceeding limit
    Then Enter a Message
    Then Click on the Send Message Button

  Scenario: Submit form with Email field without domain extension
    When navigate to Contact Us Page
    Then Enter a vaild Name
    Then Enter a Email without domain extension
    Then Enter a vaild Contact Number
    Then Enter a Message
    Then Click on the Send Message Button

  Scenario: Submit form with Contact field with only special characters
    When navigate to Contact Us Page
    Then Enter a vaild Name
    Then Enter a vaild Email Address
    Then Enter contact with only special characters
    Then Enter a Message
    Then Click on the Send Message Button

  Scenario: Form submission via enter key
    When navigate to Contact Us Page
    Then Enter a vaild Name
    Then Enter a vaild Email Address
    Then Enter a vaild Contact Number
    Then Enter a Message
    Then submission via Enter key














