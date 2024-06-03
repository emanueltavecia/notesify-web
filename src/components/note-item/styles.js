import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme, $isnew }) =>
    $isnew == 'true' ? 'transparent' : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, $isnew }) =>
    $isnew == 'true' ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 0.5rem;
  border-radius: 0.625rem;
  padding-right: 1rem;

  > button {
    border: 0;
    background: transparent;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  > input {
    height: 3.5rem;
    width: 100%;

    padding: 0.75rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
