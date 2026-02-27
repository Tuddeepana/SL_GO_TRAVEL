export const iso2ToFlag = (iso2: string) => {
  return typeof String.fromCodePoint !== 'undefined'
    ? iso2
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : iso2;
}

export const countries = [
  { name: "Sri Lanka", dial: "+94", iso2: "LK" },
  { name: "United States", dial: "+1", iso2: "US" },
  { name: "United Kingdom", dial: "+44", iso2: "GB" },
  { name: "Canada", dial: "+1", iso2: "CA" },
  { name: "Australia", dial: "+61", iso2: "AU" },
  { name: "Germany", dial: "+49", iso2: "DE" },
  { name: "France", dial: "+33", iso2: "FR" },
  { name: "India", dial: "+91", iso2: "IN" },
  { name: "China", dial: "+86", iso2: "CN" },
  { name: "Japan", dial: "+81", iso2: "JP" },
  { name: "Russia", dial: "+7", iso2: "RU" },
  { name: "Brazil", dial: "+55", iso2: "BR" },
  { name: "South Africa", dial: "+27", iso2: "ZA" },
  { name: "United Arab Emirates", dial: "+971", iso2: "AE" },
  { name: "Singapore", dial: "+65", iso2: "SG" },
  { name: "Malaysia", dial: "+60", iso2: "MY" },
  { name: "Thailand", dial: "+66", iso2: "TH" },
  { name: "New Zealand", dial: "+64", iso2: "NZ" },
  { name: "Italy", dial: "+39", iso2: "IT" },
  { name: "Spain", dial: "+34", iso2: "ES" },
  { name: "Netherlands", dial: "+31", iso2: "NL" },
  { name: "Switzerland", dial: "+41", iso2: "CH" },
  { name: "Sweden", dial: "+46", iso2: "SE" },
  { name: "Norway", dial: "+47", iso2: "NO" },
  { name: "Denmark", dial: "+45", iso2: "DK" },
  { name: "Finland", dial: "+358", iso2: "FI" },
  { name: "Belgium", dial: "+32", iso2: "BE" },
  { name: "Austria", dial: "+43", iso2: "AT" },
  { name: "Ireland", dial: "+353", iso2: "IE" },
  { name: "Portugal", dial: "+351", iso2: "PT" },
  { name: "Poland", dial: "+48", iso2: "PL" },
  { name: "Greece", dial: "+30", iso2: "GR" },
  { name: "Turkey", dial: "+90", iso2: "TR" },
  { name: "Israel", dial: "+972", iso2: "IL" },
  { name: "Saudi Arabia", dial: "+966", iso2: "SA" },
  { name: "Qatar", dial: "+974", iso2: "QA" },
  { name: "Kuwait", dial: "+965", iso2: "KW" },
  { name: "Bahrain", dial: "+973", iso2: "BH" },
  { name: "Oman", dial: "+968", iso2: "OM" },
  { name: "Maldives", dial: "+960", iso2: "MV" },
  { name: "Pakistan", dial: "+92", iso2: "PK" },
  { name: "Bangladesh", dial: "+880", iso2: "BD" },
  { name: "Nepal", dial: "+977", iso2: "NP" },
  { name: "Indonesia", dial: "+62", iso2: "ID" },
  { name: "Philippines", dial: "+63", iso2: "PH" },
  { name: "Vietnam", dial: "+84", iso2: "VN" },
  { name: "South Korea", dial: "+82", iso2: "KR" },
  { name: "Taiwan", dial: "+886", iso2: "TW" },
  { name: "Hong Kong", dial: "+852", iso2: "HK" }
].sort((a, b) => a.name.localeCompare(b.name));
