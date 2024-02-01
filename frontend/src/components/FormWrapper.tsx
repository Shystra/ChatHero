'use client';
import { useState } from "react";
import Button from "./Button";
import { Input } from "./Input";
import { Join } from "./Join";
import { Create } from "./Create";

export function FormWrapper() {
    const [selectedRoom, setSelectedRoom] = useState<'join' | 'create'>('join');



    const handleSelectRoom = (room: 'join' | 'create') => {
        setSelectedRoom(room)
    }
    return (
        <div className="w-full">
            <div className="flex items-center text-center cursor-pointer">
                <span className={`w-1/2 p-4 ${selectedRoom === 'join' && 'rounded-t-lg text-primary bg-secondary '}`} onClick={() => handleSelectRoom('join')}>Ingressar</span>
                <span className={`w-1/2 p-4 ${selectedRoom === 'create' && 'rounded-t-lg text-primary bg-secondary '}`} onClick={() => handleSelectRoom('create')}>Nova reunião</span>
            </div>
            {/* <Container> */}
            <div className=" bg-secondary rounded-b-lg  space-y-8 p-10">
                <RoomSelector selectedRoom={selectedRoom}/>
            </div>
        </div>
    )
}

const RoomSelector = ({selectedRoom}: {selectedRoom: 'join' | 'create'}) => {
    switch (selectedRoom){
        case 'join':
            return <Join/>

        case 'create':
            return <Create/>

            default:
                <Join/>
    }
}