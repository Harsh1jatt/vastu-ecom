import {
  SITE_NAME,
  SITE_URL,
  CONTACT_EMAIL,
  ADDRESS,
  WHATSAPP_NUMBER,
  CONTACT_PERSONS
} from '../config/site';

const replacements = {
  SITE_NAME,
  SITE_URL,
  CONTACT_EMAIL,
  WHATSAPP_NUMBER,
  ADDRESS: typeof ADDRESS === 'string' ? ADDRESS : ADDRESS.full || JSON.stringify(ADDRESS),
  ADDRESS_FULL: typeof ADDRESS === 'string' ? ADDRESS : ADDRESS.full || JSON.stringify(ADDRESS),
  ADDRESS_LINE1: ADDRESS.line1 || '',
  ADDRESS_LINE2: ADDRESS.line2 || '',
  CONTACT_PERSONS: Array.isArray(CONTACT_PERSONS) ? CONTACT_PERSONS.map(p => p.name).join(', ') : CONTACT_PERSONS
};

function replaceInString(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/\{([A-Z0-9_]+)\}/g, (_, key) => {
    if (Object.prototype.hasOwnProperty.call(replacements, key)) {
      return replacements[key];
    }
    return `{${key}}`;
  });
}

export default function replaceSiteVariables(input) {
  if (typeof input === 'string') return replaceInString(input);

  if (Array.isArray(input)) {
    return input.map((item) => replaceSiteVariables(item));
  }

  if (input && typeof input === 'object') {
    const out = Array.isArray(input) ? [] : {};
    Object.keys(input).forEach((key) => {
      out[key] = replaceSiteVariables(input[key]);
    });
    return out;
  }

  return input;
}

export { replacements };
