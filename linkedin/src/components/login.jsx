import styled from "styled-components"

const Login = () => {
    return (
        <div className="login">
            <Container>
                <Nav>
                    <a href="/">
                        <img src="/images/linkedin.svg" alt="logo" />
                    </a>
                </Nav>
            </Container>
        </div>
    )
}

const Container = styled.div
    `
padding: 0px;
`

const Nav = styled.div `
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative
  
  & > a {
  width: 135px;
  }
`

export default Login


