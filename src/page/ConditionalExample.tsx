import React, { ReactNode, useState } from 'react';
import './index.scss';

type Fruit = 'apple'|'kiwi'|'cherry'|'grape';

const Apple = ()=><span>🍎🍏</span>;
const Kiwi = ()=><span>🥝</span>;
const Cherry = ()=><span>🍒</span>;
const Grape = ()=><span>🍇</span>;

const selectList = [
    {
        key: 'apple',
        title: 'Apple'
    },
    {
        key: 'kiwi',
        title: 'Kiwi'
    },
    {
        key: 'cherry',
        title: 'Cherry'
    },
    {
        key: 'grape',
        title: 'Grape'
    }
];

const ConditionalFruitFacts = ({fruit}: { fruit: Fruit }) =>{
    const fact: Record<Fruit, string> = {
        apple: 'Apples ripen up to 10 times faster at room temperature than if they are refrigerated.',
        kiwi: 'Kiwi fruits contain about as much potassium as Bananas and a high amount of Vitamin C, more than Oranges.',
        cherry: 'Cherries are rich in vitamin A, B and C, mineral salts and dietary minerals (zinc, copper, manganese, cobalt).',
        grape: 'Grapes come in many colors, including green, red, black, yellow, pink, and purple. "White" grapes are actually green.'
    };
    
    const icon: Record<Fruit, ReactNode> = {
        apple: <Apple/>,
        kiwi: <Kiwi/>,
        cherry: <Cherry/>,
        grape: <Grape/>,
    };

    return (
        <div className='conditional-div'>
            <span className='conditional-span'>
                {fact[fruit]}
                {icon[fruit]}
            </span>
        </div>
    );
}

const CNode = ()=>{
    const [value, setValue] = useState(selectList[0].key as Fruit);
    return (
        <>
        <select defaultValue={0} onChange={(e)=>{setValue(e.target.value as Fruit)}}>
            {selectList.map((item, index)=>{
                return (
                    <option key={`CNode-${index}`} value={item.key}>{item.title}</option>
                );
            })}
        </select>
        <ConditionalFruitFacts fruit={value}/>
        </>
    );
}

export default React.memo(CNode);