import React from 'react'
import { TextField,Button } from '@mui/material'

export const ContactForm = () => {
    return (
        <div className='flex flex-col gap-10'>
            <h1 className=' text-4xl text-center font-bold text-dark1'>
                Send a message to us!
            </h1>
            <form className='flex flex-col gap-6' action="">
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Subject" variant="outlined" />
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    defaultValue="Send a message"
                />
                <Button style={{padding:'10px 0px'}} variant="contained">Send Message</Button>
            </form>
        </div>
    )
}
