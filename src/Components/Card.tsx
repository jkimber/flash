import { PictureType } from '../Pages/Flash';
import './Card.css';

interface CardProps {
    binomialName: string;
    commonNames: string[];
    imageFilename?: string;
    onClick: () => void;
    showPicture?: PictureType;
    toggleNames: boolean;
}

export const Card = ({
    binomialName,
    toggleNames,
    showPicture,
    imageFilename,
    commonNames,
    onClick,
}: CardProps) => (
    <div
        className="Card"
        onClick={onClick}
    >
        <div className="Card-Text">
            {toggleNames ? (
                Array.isArray(commonNames) ? (
                    commonNames.map(name => <p key={name}>{name}</p>)
                ) : (
                    <p key={commonNames}>{commonNames}</p>
                )
            ) : (
                <p>{binomialName}</p>
            )}
        </div>
        {showPicture === 'Image' && (
            <img
                alt={imageFilename}
                src={
                    process.env.PUBLIC_URL +
                    '/img/' +
                    binomialName.split(' ')[0] +
                    '_' +
                    binomialName.split(' ')[1]
                }
            />
        )}
        {showPicture === 'ImagePlaceholder' && (
            <div className="Card-EmptyImage"></div>
        )}
    </div>
);
