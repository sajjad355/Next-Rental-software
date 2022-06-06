import Search from '../../components/Search/Search'
import Data from '../../../src/data/data.json'


function Products() {
    return (
        <div className="App">
            {localStorage.getItem('data') ? "" : localStorage.setItem('data', JSON.stringify(Data))}
            <Search />
        </div>
    );
}

export default Products;
