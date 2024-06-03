import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 'header' 'content';
  
  > main {
    grid-area: content;
    overflow-y: auto;
    padding-inline: 2rem;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Form = styled.form`
  max-width: 550px;
  margin: 2.375rem auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2.25rem;

    a {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
