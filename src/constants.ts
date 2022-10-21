export const paths = {
    binomial: 'binomial',
    family: 'family',
    glossary: 'glossary',
    five: 'five',
};

export type FlashType = 'Binomial' | 'Glossary';

export const linkPath = (path: string) => `/flash/${path}`;
