import { CardContent, Typography } from '@mui/material'
import React,{forwardRef} from 'react'
import './Message.css'

const Message =  forwardRef(({username, message},ref) => {
    const isUser = (username===message.username);
    return (
        <div ref={ref} className={`message && ${isUser ? "message_host" : "message_guest"}`}>
                <CardContent >
                    {
                        (!isUser &&
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {message.username || "Unknown User"}
                            </Typography>)
                        
                    }
                    <Typography variant="body2">
                        {message.text}
                    </Typography>
                </CardContent>
        </div>

    )
})

export default Message
