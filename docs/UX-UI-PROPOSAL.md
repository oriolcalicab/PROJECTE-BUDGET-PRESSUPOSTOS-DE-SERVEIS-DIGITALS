# UX/UI Improvement Proposal

This document outlines potential improvements for future iterations of the
Digital Services Quote Generator, beyond the current MVP.

## 1. Visual design

- Introduce a defined color palette beyond Tailwind's default blue/gray,
  aligned with the company's branding.
- Add consistent spacing and typography scale across all pages.
- Use subtle shadows and rounded corners consistently across cards and
  buttons to reinforce visual hierarchy.

## 2. User flow

- Split the quote creation form into a multi-step wizard (Select services →
  Configure → Your details → Summary) instead of a single long page. This
  reduces cognitive load, especially on mobile.
- Add a persistent progress indicator during the multi-step flow.
- Add a sticky "Generate quote" button at the bottom of the screen on
  mobile, so the user doesn't need to scroll back up.

## 3. Accessibility

- Add skip-to-content link for keyboard users.
- Ensure all interactive elements have a visible focus state (currently
  relies on browser defaults).
- Add `aria-live` regions for form validation errors, not just visual
  styling.

## 4. Mobile experience

- Replace the history table with cards on small screens (implemented).
- Consider bottom-sheet style filters for the search/history page on
  mobile, instead of a plain input field.

## 5. Feedback and confirmation

- Add a toast/snackbar notification when a quote is successfully generated,
  instead of relying only on page navigation.
- Add a "Copy link" button with visual confirmation on the quote detail
  page, to support the sharing use case described in Epic 4.

## 6. Future features

- PDF export button on the quote detail page (Epic 4 bonus).
- Email the quote directly to the client from the detail page.