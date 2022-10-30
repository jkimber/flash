import { ReactNode } from 'react';
import { PictureType } from '../Pages/Flash';
import './Card.css';

interface CardProps {
    term: string;
    cardText: ReactNode;
    onClick: () => void;
    showPicture?: PictureType;
    showText: boolean;
    notes: string;
}

export const Card = ({
    term,
    showPicture,
    showText,
    cardText,
    notes,
    onClick,
}: CardProps) => {
    const imageFilename =
        term !== undefined ? term.split(' ')[0] + '_' + term.split(' ')[1] : '';

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
            {showText && (
                <div className="Card-Text">
                    <div className="Card-Notes">
                        {notes && notes.split(',').join(', ')}
                    </div>
                    {cardText}
                </div>
            )}
        </div>
    ) : (
        <div
            className="Card"
            onClick={() => {}}
        >
            <br />
            All done!
        </div>
    );
};
