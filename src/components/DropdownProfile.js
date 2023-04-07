import { ImUser } from 'react-icons/im'
import { IoMdLogOut } from 'react-icons/io'
import { Dropdown } from 'react-bootstrap'
import { GrUserSettings } from 'react-icons/gr'
import { TbSettings } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const DropdownProfile = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="user-dropdown">
                <ImUser className="fs-5" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item > 
                    <Link to='/profile' className='text-decoration-none text-dark '><GrUserSettings className='fs-5 ' /> Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item >  
                    <Link to='/settings' className='text-decoration-none text-dark'> <TbSettings className='fs-5' /> Settings </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#"> 
                <Link to='/logout' className='text-decoration-none text-dark'><IoMdLogOut className='fs-5' /> Logout</Link>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownProfile