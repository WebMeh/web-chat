import Offcanvas from 'react-bootstrap/Offcanvas'
import { BiMessageDots } from 'react-icons/bi'

const Sidebar = () => {
  const arr = [1, 1, 1, 1, 1]
  return (
    <div className="bg-dark col-auto col-md-3 min-vh-100">
      <div className="mt-3 ">
        <button className="btn btn-dark w-100 p-2 border-1 border-white fs-6">+ Nouveau message</button>
        {/* <span className="text-white fs-4 border m-4 p-1"> + New message</span> */}
      </div>
      <ul className="nav nav-pill flex-column height-25 ">
        {/* {arr.map((index, value) => (
          <li className="nav-item text-white fs-6 w-100" key={index}>
            <button className='btn text-white '> <BiMessageDots className='mx-1 fs-5' /> message {value+1}</button>
          </li>
        ))} */}
        <li className="nav-item text-white fs-6 w-100">
          <button className='btn text-white '> <BiMessageDots className='mx-1 fs-5' /> User a envoyé un message</button>
        </li>
      </ul>
      <div className='col'></div>
    </div>
  )
}

export default Sidebar