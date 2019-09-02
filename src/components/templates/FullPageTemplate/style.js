import styled from 'styled-components'

export const Wrapper = styled.div`
  background-image: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)';
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export const Header = styled.header``

export const MainContent = styled.main`
  box-sizing: border-box;
  padding: ${({ mainPadding }) => mainPadding};
  width: 100%;
`
