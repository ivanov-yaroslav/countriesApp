import { Link } from 'react-router-dom';

import Button from '../components/UI/Button';

function NotFound(props) {
    return (
        <div className='container'>
            <div className='status-block'>
                <h1 className='status-title'>Page not found :(</h1>
                <Link to={'/'}>
                    <Button>Back home</Button>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
