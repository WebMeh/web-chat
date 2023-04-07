import DropdownProfile from "./DropdownProfile"
import FieldMessage from "./FieldMessage"
import Container from 'react-bootstrap/Container'


const MainChat = ({ showUserDetails, show }) => {
  return (
    <div className="col-auto col-md-9 container">
      <Container >
        <Container>
          <Container>
            <nav className="navbar navbar-expand-md">
              <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">

                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <DropdownProfile />
                  </li>
                </ul>
              </div>
            </nav>
          </Container>
          <Container>
            <div style={{ marginTop: "8rem" }} className="justify-content-center text-center container">
              <h1 className="">Web GPT By Mehdi</h1>
              <div style={{ position: "fixed", width: " 50%", height: "200px", left: "38%", bottom: "-15%" }}><FieldMessage className="container" /></div>

            </div>
          </Container>
        </Container>
      </Container>
    </div >
  )
}

export default MainChat
