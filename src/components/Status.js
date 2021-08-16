import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai'
import { HiMailOpen } from 'react-icons/hi'
import { BsArrowRepeat } from 'react-icons/bs'

function Status({ status }) {
    const colors = {
        open: 'primary',
        closed: 'success',
        reopened: 'warning',
        replied: 'info'
    }

    return (
        <span className={`ms-2 text-${colors[status]} text-center`} style={{ width: '100px' }}>
           {status === 'open' && <HiMailOpen className="me-1" />} 
           {status === 'closed' && <AiFillCloseCircle className="me-1" />} 
           {status === 'reopened' && <BsArrowRepeat className="me-1" />}
           {status === 'replied' && <AiFillCheckCircle className="me-1" />}
           {status}
        </span>
    )
}

export default Status
