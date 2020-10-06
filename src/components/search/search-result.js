import React from 'react'
import { useSelector } from 'react-redux'
import { Spinner, Card } from 'react-bootstrap'
import { REACT_APP_THUMB, THUMB_94_141 } from 'const/api'

function SearchResult(props) {
  const { searchedMovie } = useSelector((state) => state.search)

  return (
    <div className="search">
      {!searchedMovie && (
        <Spinner animation="border" role="status" className="spinner__center" />
      )}
      {searchedMovie &&
        searchedMovie.results.map((movie) => {
          return (
            <Card key={movie.id} className="search__result">
              <Card.Img
                variant="top"
                src={`${REACT_APP_THUMB}${THUMB_94_141}${movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title className="ellipsis">
                  {movie.original_title}
                </Card.Title>
                <Card.Text>
                  <span>{movie.overview}</span>
                  <span>{movie.release_date}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })}
    </div>
  )
}

export default SearchResult
