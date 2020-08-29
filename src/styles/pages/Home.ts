import React from 'react'
import styled from 'styled-components'
import {
  palette,
  PaletteProps,
  spacing,
  SpacingProps
} from '@material-ui/system'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const Box = styled.div<PaletteProps & SpacingProps>`
  ${palette}
  ${spacing}

  height:300
`
