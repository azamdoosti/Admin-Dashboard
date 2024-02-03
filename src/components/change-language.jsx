import usFlag from '@assets/images/en.png'
import faFlag from '@assets/images/fa.png'
import { useEffect, useReducer, useState } from 'react'

const ChangeLanguage = () => {
    const [show, setShow] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const checkIfClickOutSide = e => {
            if (show && ref.current && !ref.current.contains(e.target)) {
                setShow(false)
            }
        }

        document.addEventListener('mousedown', checkIfClickOutSide)

        return document.removeEventListener('mousedown', checkIfClickOutSide)

    }, [show])
    return (
        <div className="dropdown">
            <a className="nav-flag dropdown-toggle" onClick={() => setShow(true)}>
                <img src={usFlag} alt="English" />
            </a>
            <div ref={ref} className={`dropdown-menu dropdown-menu-end ${show ? 'show' : undefined}`}>
                <a className='dropdown-item fw-bolder' style={{ textAlign: ' right' }}>
                    <img src={usFlag} width="20" className='ms-2' />
                    <span className='align-middle'>English</span>
                </a>

                <a className='dropdown-item fw-bolder' style={{ textAlign: ' right' }}>
                    <img src={faFlag} width="20" className='ms-2' />
                    <span className='align-middle'>فارسی</span>
                </a>
            </div>
        </div >
    )
}
export default ChangeLanguage