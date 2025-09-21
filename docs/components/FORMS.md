# Forms & Interactive Components (Task 7)

Task 7 modernises the contact experience with Nuxt UI form primitives and shared atoms so validation, state changes, and accessibility stay consistent across future interactive work.

## ContactCard
- **Purpose:** Renders the marketing contact form inside the `/contact` page (and future reuse) with Nuxt UI controls wrapped by shared `Tag`, `AppButton`, and gradient card styling.
- **Props:**
  - `title`, `eyebrow`, `description` for card copy.
  - `projectTypes` array to populate the select input.
  - `submitLabel`, `successTitle` for CTA and confirmation text tweaks.
- **Behaviour:**
  - Uses `UForm`, `UFormGroup`, `UInput`, `USelect`, and `UTextarea` to ensure labelled, focusable controls with consistent validation messaging.
  - Emits visual feedback via `UAlert` on success and error; the submit button shows a loading state while `useContactForm` resolves.
  - Fields expose HTML autocomplete hints (`name`, `email`, `organization`) and `aria` labels inherited from `UFormGroup`.

## useContactForm
- **Purpose:** Composable that centralises form state, validation, submission side-effects, and status messaging.
- **Exports:**
  - `state`: reactive form data shared with `UForm`.
  - `validate(state)`: returns `FormError[]` with required fields, email format checks, and character limits for timeline/budget.
  - `submit(event)`: simulates an async submission (placeholder for future API integration) and handles success/error status.
  - `status` helpers (`isSubmitting`, `isSuccess`, `isError`) plus `message` for user feedback and `reset()` if we need manual clearing.
- **Accessibility:** Validation errors map to the corresponding control `name`, so Nuxt UI automatically links errors to `aria-describedby`. Success and error alerts include icons + text and remain focusable, enabling screen readers to announce the result. Button loading states rely on `aria-busy` under the hood via `@nuxt/ui`.

### Implementation Notes
1. Keep future forms behind composables so server integrations swap in without touching templates.
2. Reuse the provided validation scaffolding—extend `ContactFormState`/`useContactForm` when new fields are added to avoid per-component logic.
3. For production APIs, replace the simulated delay in `useContactForm.submit` with `await $fetch('/api/contact', { method: 'POST', body: event.data })` and adjust the success message based on API responses.
