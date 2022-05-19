import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [info, setInfo] = useState(-1);
    function changeInfo(message: number) {
        setInfo(message);
    }
    useEffect(() => {
        setInfo(-1);
        subscribe(props.sourceId, changeInfo);
        return () => {
            unsubscribe(props.sourceId, changeInfo);
        };
    }, [props.sourceId]);
    return (
        <div>{props.sourceId}: {info}</div>
    );
}
