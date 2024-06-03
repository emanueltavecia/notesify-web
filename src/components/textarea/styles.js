import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  resize: vertical;

  margin-bottom: 0.5rem;
  border-radius: 0.625rem;

  padding: 1rem;

  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
