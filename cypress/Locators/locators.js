class locatorsPage {
  // Navigation Links
  //contact_us = "//a[contains(@href, 'contact-us')]";
  // contact_us = "a.ekit-menu-nav-link active";
  // contact_us_active = 'a.ekit-menu-nav-link.active';
  contact_us = 'a.ekit-menu-nav-link[href*="contact-us"]';
  //contact_us = '/html[1]/body[1]/div[1]/header[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/div[1]/ul[1]/li[5]/a[1]'


  // Contact Form Section or Wrapper

  contactForm = '#metform-wrap-784e56d1-1110';
  name = '#mf-input-text-2e4ede03';

  email = '#mf-input-email-60b1a9d';
  phone = '#mf-input-telephone-d42fb87';
  message = '#mf-input-text-area-1e2e030';
  submit = '.metform-btn';
}

export default locatorsPage;
