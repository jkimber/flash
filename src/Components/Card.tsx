import './Card.css';

interface CardProps {
    binomialName: string;
    commonNames: string[];
    imageFilename: string;
    onClick: () => void;
    showPicture: boolean;
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
        {showPicture && (
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
        {!showPicture && <div className="Card-EmptyImage"></div>}
        <div className="Card-Text">
            {toggleNames ? (
                commonNames.map(name => <p key={name}>{name}</p>)
            ) : (
                <p>{binomialName}</p>
            )}
        </div>
    </div>
);
