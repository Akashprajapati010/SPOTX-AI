import { State, City } from "country-state-city";

/**
 * Parse and validate location slug (format: city-state)
 * @param {string} slug - The URL slug (e.g., "gurugram-haryana")
 * @returns {Object} - { city, state, isValid }
 */

export function createLocationSlug(city, state) {
    if (!city || !state) return "";

    const citySlug = city.toLowerCase().replace(/\s+/g, "-");
    const stateSlug = state.toLowerCase().replace(/\s+/g, "-");

    return `${citySlug}-${stateSlug}`;
}

export function parseLocationSlug(slug) {
  if (!slug || typeof slug !== "string") {
    return { city: null, state: null, isValid: false };
  }

  const parts = slug.split("-");

  const indianStates = State.getStatesOfCountry("IN");

  // 🔥 Try matching longest possible state from end
  for (let i = 1; i < parts.length; i++) {
    const stateParts = parts.slice(i).join(" ");
    const cityParts = parts.slice(0, i).join(" ");

    const stateName = stateParts
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    const cityName = cityParts
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    const stateObj = indianStates.find(
      (s) => s.name.toLowerCase() === stateName.toLowerCase()
    );

    if (stateObj) {
      const cities = City.getCitiesOfState("IN", stateObj.isoCode);

      const cityExists = cities.some(
        (c) => c.name.toLowerCase() === cityName.toLowerCase()
      );

      if (cityExists) {
        return { city: cityName, state: stateName, isValid: true };
      }
    }
  }

  return { city: null, state: null, isValid: false };
}

/**
 * Create location slug from city and state
 * @param {string} city - City name
 * @param {string} state - State name
 * @returns {string} - URL slug (e.g., "gurugram-haryana")
 */
// export function createLocationSlug(city, state) {
//   if (!city || !state) return "";

//   const citySlug = city.toLowerCase().replace(/\s+/g, "-");
//   const stateSlug = state.toLowerCase().replace(/\s+/g, "-");

//   return `${citySlug}-${stateSlug}`;
