// Formular til register.html
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("incidentForm");
  if (!form) return;

  const titleInput = document.getElementById("title");
  const titleCounter = document.getElementById("titleCounter");
  const successEl = document.getElementById("formSuccess");

  const anonCheckbox = document.getElementById("anonymous"); // ← vigtigt: matcher HTML
  const nameField = document.getElementById("nameField");
  const fullNameInput = document.getElementById("fullName");

  // Live tegnoptælling på titel
  if (titleInput && titleCounter) {
    titleInput.addEventListener("input", () => {
      titleCounter.textContent = titleInput.value.length;
    });
  }

  // Funktion der viser/skjuler navnefeltet og sætter required
  const updateNameVisibility = () => {
    if (!anonCheckbox || !nameField || !fullNameInput) return;

    if (anonCheckbox.checked) {
      // anonym: SKJUL navn og fjern required
      nameField.classList.add("hidden");
      fullNameInput.required = false;
    } else {
      // ikke anonym: VIS navn og gør det obligatorisk
      nameField.classList.remove("hidden");
      fullNameInput.required = true;
    }
  };

  // Kør ved load, så navnefeltet matcher checkboxens start-tilstand
  updateNameVisibility();

  // Reager når man ændrer anonymitet
  if (anonCheckbox) {
    anonCheckbox.addEventListener("change", updateNameVisibility);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // vi sender ikke rigtigt, kun demo / frontend

    let isValid = true;
    successEl.textContent = "";

    // helper til fejlbeskeder
    const setError = (id, message) => {
      const el = document.querySelector(`[data-error-for="${id}"]`);
      if (el) el.textContent = message || "";
    };

    // ryd tidligere fejl – TILFØJ fullName i listen
    ["incidentType", "title", "location", "date", "description", "email", "consent", "fullName"].forEach((id) => setError(id, ""));

    const incidentType = document.getElementById("incidentType");
    const location = document.getElementById("location");
    const date = document.getElementById("date");
    const description = document.getElementById("description");
    const email = document.getElementById("email");
    const consent = document.getElementById("consent");
    const fullName = document.getElementById("fullName");
    const anonymous = document.getElementById("anonymous");

    if (!incidentType.value) {
      setError("incidentType", "Vælg venligst en kategori.");
      isValid = false;
    }

    if (!titleInput.value.trim()) {
      setError("title", "Titlen må ikke være tom.");
      isValid = false;
    }

    if (!location.value.trim()) {
      setError("location", "Angiv hvor hændelsen fandt sted.");
      isValid = false;
    }

    if (!date.value) {
      setError("date", "Vælg en dato.");
      isValid = false;
    }

    if (!description.value.trim()) {
      setError("description", "Skriv en kort beskrivelse af hændelsen.");
      isValid = false;
    }

    // 🔹 NYT: navn er påkrævet, hvis man IKKE er anonym
    if (!anonymous.checked && !fullName.value.trim()) {
      setError("fullName", "Angiv dit navn – eller vælg at indberette anonymt.");
      isValid = false;
    }

    if (!consent.checked) {
      setError("consent", "Du skal acceptere behandlingen af din indberetning.");
      isValid = false;
    }

    if (email.value && !/^\S+@\S+\.\S+$/.test(email.value)) {
      setError("email", "Indtast en gyldig e-mailadresse, eller lad feltet stå tomt.");
      isValid = false;
    }

    if (!isValid) return;

    // Hvis alt er ok:
    successEl.textContent = "Tak for din indberetning. Den er nu registreret i systemet.";
    form.reset();
    if (titleCounter) titleCounter.textContent = "0";

    // Efter reset bliver anonym-checkbox checked igen – så opdaterer vi synlighed
    updateNameVisibility();
  });
});
