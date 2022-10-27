### BeBlended
##### Currently under construction.

**Go to Pages**
- <Home>
- <Client> (logged in)
- <Stylist> (logged in)
- <OnboardingPages>

**Go to Components and open *Onboarding*.**
In onboarding you'll see the folder for *Client* and the one for *Stylist*, that of the *Client* is quite straight forward as all the pages are within One folder. That of the Stylist has several pages that are broken down as follows;

- Intro = <OnboardingStylistIntro.jsx>

- Step 8 - Step 1 & Step 1A - Step 1D = open <StepTwoStylist> ==> <StepTwoStylist.jsx> for Step 8 - 11 and <StylistConfirmation.jsx> for Step 1A - Step 1D

- Business Information = <StepThreeStylist> ==> <OnboardStylistForm.jsx>

- Business Hours = open <StepFourStylist> ==> <BusinessPage> -> <BusinessModal> -> <BusinessHour> 

- ID License & License = <StepFiveStylist> ==> <IdUpload> -> <License>

- Completed Page = <StepSixStylist> ==> <CompletedStylist> which leads to <Client>

They are all linked together in <OnboardingPages> in the Pages folder, so if you're trying to navigate the pages, go through this file, you'll see te routes, use the path i.e "/stylist-step-one" to check out the pages.

{
    <Routes>
      <Route index element={<OnboardingStylistIntro />} />
      <Route path="/stylist-step-one" element={<StepOneStylist/>} />
      <Route path="/stylist-step-two" element={<StylistConfirmationMajor />} />
      <Route path="/stylist-step-three" element={<OnboardStylistForm />} />
      <Route path="/stylist-step-four" element={<BusinessPage />} />
      <Route path="/stylist-step-five" element={<BusinessHour />} />
      <Route path="/stylist-step-six" element={<BusinessModal />} />
      <Route path="/stylist-step-seven" element={<IdUpload />} />
      <Route path="/stylist-step-eight" element={<LicenseQtn />} />
      <Route path="/stylist-step-nine" element={<LicenseUpload />} />
      <Route path="/stylist-completed" element={<CompletedStylist />} />
      <Route path="/logged-in-stylist" element={<Stylist />} />
        <Route path="/onboard-client" element={<OnboardClient />} />
        <Route path="/client-step-One" element={<StepOneClient />} />
        <Route path="/client-step-Two" element={<StepTwoClient />} />
        <Route path="/client-step-Three" element={<StepThreeClient />} />
        <Route path="/client-step-Four" element={<StepFourClient />} />
        <Route path="/welcome" element={<StepFiveClient />} />
        <Route path="/logged-in-client" element={<Client />} />
  </Routes>
}

If you want to check Home, Client or Stylist logged in pages, then go to App.js, comment  <OnboardingPages/> and uncomment whatever page you want to view.