import hotels from '../../json/hotels.json'
import HotelList from './components/HotelList'
import SearchFilters from './components/SearchFilters'

function SearchResultsPage() {
  return (
    <>
      <h1>Search Results</h1>
      <SearchFilters />
      <HotelList hotels={hotels} />
    </>
  )
}

export default SearchResultsPage
