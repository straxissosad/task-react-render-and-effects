import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [info, setInfo] = useState(-1);
    useEffect(() => {
        setInfo(-1);
        subscribe(props.sourceId, changeInfo);
        return () => {
            unsubscribe(props.sourceId, changeInfo);
        };
    }, [props.sourceId]);


    function changeInfo(message: number) {
        setInfo(message);
    }
 
    return (
        <div>
            {props.sourceId}: {info}
        </div>
    );
}

