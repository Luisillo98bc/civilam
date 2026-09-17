const preservedTerms = [
  'ANA',
  'ArcGIS',
  'CIRAS',
  'EIA',
  'EVAR',
  'FITSA',
  'GNSS',
  'HEC-HMS',
  'HEC-RAS',
  'IBER',
  'MVCS',
  'PTAP',
  'PTAR',
  'QGIS',
  'RTK',
  'SWMM',
];

/** Makes legacy all-caps content easier to scan without changing its meaning. */
export function formatProjectText(value: string) {
  const sentence = value.toLocaleLowerCase('es-PE').replace(/\s+/g, ' ').trim();
  const firstLetterIndex = sentence.search(/[a-záéíóúñü]/i);
  const readable = firstLetterIndex === -1
    ? sentence
    : `${sentence.slice(0, firstLetterIndex)}${sentence[firstLetterIndex].toLocaleUpperCase('es-PE')}${sentence.slice(firstLetterIndex + 1)}`;

  return preservedTerms.reduce(
    (formatted, term) => formatted.replace(new RegExp(`\\b${term.toLowerCase()}\\b`, 'gi'), term),
    readable,
  );
}

export function splitProjectHeading(value: string) {
  const formatted = formatProjectText(value);
  const match = formatted.match(/^(\d+)\.\s*(.*)$/u);

  return {
    number: match?.[1] ?? '',
    title: match?.[2] ?? formatted,
  };
}
