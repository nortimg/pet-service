import { makeStyles } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { Video } from 'react-feather'
import io from 'socket.io-client'
import Page from 'src/components/Page'
import Peer from 'simple-peer'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        padding: theme.spacing(3),
    }
}))

const PetPreview = (props) => {
    const [users, setUsers] = useState({})
    const [yourID, setYourID] = useState()
    const [stream, setStream] = useState()
    const [receivingCall, setReceivingCall] = useState(false)
    const [caller, setCaller] = useState('')
    const [callerSignal, setCallerSignal] = useState()
    const [callAccepted, setCallAccepted] = useState(false)

    const userVideo = useRef()
    const partnerVideo = useRef()
    const socket = useRef()

    console.log({users})

    useEffect(() => {
        socket.current = io.connect('ws://localhost:8000')
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                setStream(stream)
                if (userVideo.current) {
                    userVideo.current.srcObject = stream
                }
            })

        socket.current.on('yourID', id => {
            setYourID(id)
        })

        socket.current.on('allUsers', users => {
            setUsers(users)
        })

        socket.current.on('hey', data => {
            setReceivingCall(true)
            setCaller(data.from)
            setCallerSignal(data.signal)
        })
    }, [])

    function callPeer(id) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        })

        peer.on('signal', data => {
            socket.current.emit('callUser', {
                userToCall: id,
                signalData: data,
                from: yourID
            })
        })

        peer.on('stream', stream => {
            if (partnerVideo.current) {
                partnerVideo.current.srcObject = stream
            }
        })

        socket.current.on('callAccepted', signal => {
            setCallAccepted(true)
            peer.signal(signal)
        })
    }

    function acceptCall() {
        setCallAccepted(true)
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream
        })

        peer.on('signal', data => {
            socket.current.emit('acceptCall', {
                signal: data,
                to: caller
            })
        })

        peer.on('stream', stream => {
            partnerVideo.current.srcObject = stream 
        })

        peer.signal(callerSignal)
    }

    let UserVideo
    if (stream) {
        UserVideo = (
            <video playsInline muted ref={userVideo} autoPlay />
        )
    }

    let PartnerVideo
    if (callAccepted) {
        PartnerVideo = (
            <video playsInline muted ref={partnerVideo} autoPlay />
        )
    }

    let incomingCall
    if (receivingCall) {
      incomingCall = (
        <div>
          <h1>{caller} is calling you</h1>
          <button onClick={acceptCall}>Accept</button>
        </div>
      )
    }

    return (
        <Page
            title="Pet Preview"
        >
            <h1>Pet Preview</h1>

            {UserVideo}
            {PartnerVideo}

            {Object.keys(users).map(key => key === yourID ? null : (
                <button onClick={() => callPeer(key)} key={key}>Call {key}</button>
            ))}

            {incomingCall}
        </Page>
    )
}

export default PetPreview