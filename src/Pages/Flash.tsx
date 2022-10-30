import { useState } from 'react';
import { Card } from '../Components/Card';
import { FlashType } from '../constants';
import { getData } from '../data';

export type PictureType = 'Image' | 'ImagePlaceholder' | 'None';

interface FlashProps {
    dataType: FlashType;
}

const Flash = ({ dataType }: FlashProps) => {
    const randomInteger = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const [data, setData] = useState(getData(dataType));
    const [item, setItem] = useState(data[randomInteger(0, data.length - 1)]);
    const [toggle, setToggle] = useState(false);
    const [binomialFirst, setBinomialFirst] = useState(true);
    const [pictureToggle, setPictureToggle] = useState<PictureType>('Image');
    const [textToggle, setTextToggle] = useState(true);

    const getNext = () => {
        let next = data[randomInteger(0, data.length - 1)];
        while (next[0] === item[0] && data.length > 1) {
            next = data[randomInteger(0, data.length - 1)];
        }

        setToggle(!binomialFirst);
        setItem(next);
    };

    const supress = (supressed: string) => {
        setData(data.filter(item => item[0] !== supressed));
        getNext();
    };

    const cardText = toggle ? (
        Array.isArray(item[1]) ? (
            item[1].map(item => <p key={item}>{item}</p>)
        ) : dataType === 'Nutrient' ? (
            <p>
                {`${item[1]} nutrient`}
                <br />
                <br />
                {`Role: ${item[2]}`}
                <br />
                <br />
                {`Deficiency: ${item[3]}`}
            </p>
        ) : (
            <p key={item[1]}>{item[1]}</p>
        )
    ) : (
        <p>{item[0]}</p>
    );

    return (
        <main className="Main">
            <Card
                term={
                    data.length > 0 && data.includes(item)
                        ? (item[0] as string)
                        : ''
                }
                cardText={cardText}
                showPicture={dataType === 'Binomial' ? pictureToggle : 'None'}
                showText={textToggle}
                onClick={() => setToggle(!toggle)}
            />
            <div className="Toolbar">
                <label htmlFor="binomial">
                    {dataType === 'Glossary' ? 'Term' : dataType}
                    <input
                        type="radio"
                        name="direction"
                        value="binomial"
                        id="binomial"
                        checked={binomialFirst}
                        onChange={() => setBinomialFirst(true)}
                    />
                </label>
                <label htmlFor="common">
                    {dataType === 'Binomial' ? 'Common' : 'Description'}
                    <input
                        type="radio"
                        name="direction"
                        value="Common"
                        id="common"
                        checked={!binomialFirst}
                        onChange={() => setBinomialFirst(false)}
                    />
                </label>
                {dataType === 'Binomial' && (
                    <>
                        <label htmlFor="text">
                            Text
                            <input
                                type="checkbox"
                                name="text"
                                id="text"
                                checked={textToggle}
                                onChange={() =>
                                    setTextToggle(
                                        !textToggle
                                    )
                                }
                            />
                        </label>
                        <label htmlFor="picture">
                            Picture
                            <input
                                type="checkbox"
                                name="picture"
                                id="picture"
                                checked={pictureToggle === 'Image'}
                                onChange={() =>
                                    setPictureToggle(
                                        pictureToggle === 'Image'
                                            ? 'ImagePlaceholder'
                                            : 'Image'
                                    )
                                }
                            />
                        </label>
                    </>
                )}
            </div>
            <footer className="Footer">
                <input
                    type="button"
                    className="App-button"
                    onClick={() => supress(item[0] as string)}
                    value={`Card done (${data.length} left)`}
                    disabled={data.length === 0 || !data.includes(item)}
                />
                <input
                    type="button"
                    className="App-button"
                    onClick={getNext}
                    value="Next"
                    disabled={
                        data.length === 0 ||
                        (data.length === 1 && data.includes(item))
                    }
                />
            </footer>
        </main>
    );
};

export default Flash;
