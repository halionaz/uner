import { style } from '@vanilla-extract/css'

export const Wrapper = style({
  display: 'flex',
  height: '100%',
  width: '100%',
  flexDirection: 'row',
  gap: 16,
  padding: '20px 10px',
})

export const ContentsWrapper = style({
  flexGrow: 1,
})
