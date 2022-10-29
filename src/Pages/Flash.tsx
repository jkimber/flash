import { useState } from 'react';
import { Card } from '../Components/Card';
import { FlashType } from '../constants';
import { getData } from '../data';

export type PictureType = 'Image' | 'ImagePlaceholder' | 'None';

interface FlashProps {
    dataType: FlashType;
}

const Flash = ({ dataType }: FlashProps) => {
    const [data, setData] = useState(getData(dataType));
    const [item, setItem] = useState(data[0]);
    const [toggle, setToggle] = useState(false);
    const [binomialFirst, setBinomialFirst] = useState(true);
    const [pictureToggle, setPictureToggle] = useState<PictureType>('Image');

    const getNext = () => {
        const randomInteger = (min: number, max: number) =>
            Math.floor(Math.random() * (max - min + 1)) + min;

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

    return (
        <main className="Main">
            <Card
                binomialName={
                    data.length > 0 && data.includes(item)
                        ? (item[0] as string)
                        : ''
                }
                commonNames={
                    data.length > 0 && data.includes(item)
                        ? dataType === 'Nutrient' ?
                             ([
                                  `${item[1]}`,
                                  <br />,
                                  `Role: ${item[2]}`,
                                  <br />,
                                  `Deficiency: ${item[3]}`
                              ] as string[]) : item[1] as string[]
                        : ['']
                }
                toggleNames={toggle}
                showPicture={dataType === 'Binomial' ? pictureToggle : 'None'}
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
