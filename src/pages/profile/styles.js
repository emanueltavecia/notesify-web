import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    padding: 0 124px;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.5rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding: 0 2rem;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: -84px auto 0;
  padding-inline: 1rem;
  
  > div:nth-child(4) {
    margin-top: 1.5rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 2rem;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 3;
    height: 3;

    background: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`
