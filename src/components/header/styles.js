import styled from "styled-components";
import { Link } from 'react-router-dom'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 20px;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    line-height: 1.5rem;

    span {
      font-size: 0.875rem;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.125rem;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 2.25rem;
  }
`