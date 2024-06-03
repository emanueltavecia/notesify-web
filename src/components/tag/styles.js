import styled from "styled-components";

export const Container = styled.span`
  font-size: 0.75rem;
  padding: 0.375rem 0.875rem;
  border-radius: 0.375rem;
  margin-right: 0.375rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background: ${({ theme }) => theme.COLORS.PRIMARY};
`