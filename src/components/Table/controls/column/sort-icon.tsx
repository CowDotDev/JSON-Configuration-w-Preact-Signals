import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { SortDirection } from '@tanstack/react-table';
import React, { memo } from 'react';

export const SortIcon = memo(
  ({
    isSorted,
    sortIndex,
    dataTestId,
  }: {
    isSorted: false | SortDirection;
    sortIndex: number;
    dataTestId: string;
  }) => {
    if (!isSorted) return null;
    return (
      <Sort data-testid={dataTestId} data-testkey="sort-direction" data-testvalue={isSorted}>
        {isSorted === 'desc' ? (
          <ArrowDownwardIcon
            sx={{ fontSize: '20px', color: (theme) => theme.palette.secondary.main }}
          />
        ) : (
          <ArrowUpwardIcon
            sx={{ fontSize: '20px', color: (theme) => theme.palette.secondary.main }}
          />
        )}
        {sortIndex > 0 ? <SortIndex>{sortIndex + 1}</SortIndex> : ''}
      </Sort>
    );
  },
);

const SortIndex = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '7px',
  right: '9px',
  fontSize: '10px',
  color: theme.palette.text.primary,
}));

const Sort = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
}));
