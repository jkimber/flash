import { ReactNode } from 'react';
import { PictureType } from '../Pages/Flash';
import './Card.css';

interface CardProps {
    term: string;
    cardText: ReactNode;
    onClick: () => void;
    showPicture?: PictureType;
}

export const Card = ({ term, showPicture, cardText, onClick }: CardProps) => {
    const imageFilename = term.split(' ')[0] + '_' + term.split(' ')[1];

    return term ? (
        <div
            className="Card"
            onClick={onClick}
        >
            {showPicture !== 'None' && (
                <div className="Card-Image">
                    {showPicture === 'Image' && (
                        <img
                            alt={imageFilename}
                            src={
                                process.env.PUBLIC_URL + '/img/' + imageFilename
                            }
                        />
                    )}
                    {showPicture === 'ImagePlaceholder' && (
                        <div className="Card-EmptyImage"></div>
                    )}
                </div>
            )}
            <div className="Card-Text">{cardText}</div>
        </div>
    ) : (
        <div
            className="Card"
            onClick={() => {}}
        >
            All done!
        </div>
    );
};
