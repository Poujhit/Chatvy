import { Interpolation, Theme } from '@emotion/react';

export const scrollbarStyle: Interpolation<Theme> = {
  '*::-webkit-scrollbar': {
    width: '12px',
    backgroundColor: '#B7BDCB',
  },
  '*::-webkit-scrollbar-track': {
    backgroundColor: '#FFFFFF9C',
  },
  '-webkit-scrollbar-track:hover': {
    backgroundColor: '#B0B6C4',
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: '#B7BDCB',
    borderRadius: '10px',
  },
  '*::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#A0A8C0',
  },
};
