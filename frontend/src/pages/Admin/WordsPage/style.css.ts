import { style } from '@vanilla-extract/css'

export const PageWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: 40,
})

export const WordListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: 20,
  width: 160,
})

export const Title = style({
  textAlign: 'center',
  fontWeight: 700,
})

export const WordList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
})
