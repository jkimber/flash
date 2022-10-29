import { Link } from 'react-router-dom';
import { paths, linkPath } from '../constants';

const toTitleCase = (value: string) =>
    value[0].toString().toUpperCase().concat(value.slice(1));

const Menu = () => (
    <nav>
        <ul>
            <li>
                <Link to={`${linkPath(paths.binomial)}`}>
                    {toTitleCase(paths.binomial)}
                </Link>
            </li>
            <li>
                <Link to={`${linkPath(paths.glossary)}`}>
                    {toTitleCase(paths.glossary)}
                </Link>
            </li>
            <li>
                <Link to={`${linkPath(paths.nutrient)}`}>
                    {toTitleCase(paths.nutrient)}
                </Link>
            </li>
        </ul>
    </nav>
);

export default Menu;
