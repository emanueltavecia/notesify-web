import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'new-note content';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: auto;
    grid-template-rows: 64px auto auto auto auto 48px;
    grid-template-areas:
      'brand'
      'header'
      'search'
      'menu'
      'content'
      'new-note';
  }
`
export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`
export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 64px;
  text-align: center;
  list-style: none;
  white-space: nowrap;

  > li {
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    overflow-x: auto;
    gap: 1.5rem;
    padding: 1rem 1.5rem;
    background: none;

    > li {
      margin-bottom: 0;
    }
  }
`
export const Search = styled.div`
  grid-area: search;

  padding: 64px 64px 0;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 1.5rem 1.5rem 0;
  }
`
export const Content = styled.div`
  grid-area: content;

  padding: 0 64px;
  overflow-y: auto;
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 1.5rem;
  }
`
export const NewNote = styled(Link)`
  grid-area: new-note;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.5rem;
  }
`
