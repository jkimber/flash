import { Link } from 'react-router-dom';
import { paths } from '../constants';

const toTitleCase = (value: string) =>
    value[0].toString().toUpperCase().concat(value.slice(1));

const linkPath = (path: string) => `/flash/${path}`;

const Menu = () => (
    <nav>
        <ul>
            <li>
                <Link to={`${linkPath(paths.binomial)}`}>
                    {toTitleCase(paths.binomial)}
                </Link>
            </li>
            <li>
                <Link to={`${linkPath(paths.family)}`}>
                    {toTitleCase(paths.family)}
                </Link>
            </li>
            <li>
                <Link to={`${linkPath(paths.glossary)}`}>
                    {toTitleCase(paths.glossary)}
                </Link>
            </li>
            <li>
                <Link to={`${linkPath(paths.five)}`}>
                    {toTitleCase(paths.five)}
                </Link>
            </li>
        </ul>
    </nav>
);

export default Menu;
