export const prev = () => ({ type: 'PREV_SLIDE' });

export const next = () => ({ type: 'NEXT_SLIDE' });

export const dot = (activeInd) => ({ type: 'BY_DOTS', activeInd })
