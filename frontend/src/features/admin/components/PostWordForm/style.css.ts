import { style } from '@vanilla-extract/css'

export const InputArea = style({
  display: 'flex',
  flexDirection: 'row',
  gap: 16,
})

export const InputColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
})

export const Section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: 225,
})

export const Label = style({
  fontSize: 20,
  fontWeight: 700,
})

export const ErrorMessageBox = style({
  height: 20,
  color: 'red', // todo: var로 변경
})

export const ArrayFormBlock = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: 4,
  background: 'lightgray',
  borderRadius: 5,
  padding: 4,
})
