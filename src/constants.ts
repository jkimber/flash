export const paths = {
    binomial: 'binomial',
    glossary: 'glossary',
    nutrient: 'nutrient',
};

export type FlashType = 'Binomial' | 'Glossary' | 'Nutrient';

export const linkPath = (path: string) => `/flash/${path}`;
