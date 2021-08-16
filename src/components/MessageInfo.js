import { useTicketsContext } from './../contexts/ticketsContext'

function MessageInfo() {
    const { selectedTicket } = useTicketsContext();
    const isMessageExist = selectedTicket.hasOwnProperty('message');

    return (
        <div className={`col rounded align-self-start p-4 ${isMessageExist && 'shadow'}`}>
            {isMessageExist && (
                <>
                  <h3 className="fs-6">Message:</h3>
                  <p>{selectedTicket.message}</p>
                  <h3 className="fs-6">Reply:</h3>
                  <p className="mb-0">{selectedTicket.reply}</p>
                </>
            )}
        </div>
    )
}

export default MessageInfo
