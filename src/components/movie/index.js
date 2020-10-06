import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container, Card, Spinner } from 'react-bootstrap'
import AliceCarousel from 'react-alice-carousel'
import { getMoviesAction, getMovieDetailsAction } from 'actions/movies'
import { formatDate } from 'utils'
import { REACT_APP_THUMB, THUMB_220_330, THUMB_138_175 } from 'const/api'
import { getActorAction } from 'actions/actor'

const responsive = {
  0: { items: 3 },
  576: { items: 3 },
  768: { items: 4 },
  1024: { items: 6 },
}

export default function OnBoarding(props) {
  const { t } = useTranslation()
  const [movie, setMovie] = useState(null)

  const dispatch = useDispatch()
  const history = useHistory()
  const id = history.location.pathname.replace('/movie/', '')
  const { details, allMovies } = useSelector((state) => state.movies)

  useEffect(() => {
    if (!allMovies) {
      dispatch(getMoviesAction())
    } else {
      const result = allMovies.items.filter((m) => m.id.toString() === id)[0]
      setMovie(result)
    }
  }, [dispatch, allMovies, id])

  useEffect(() => {
    dispatch(getMovieDetailsAction({ id }))
  }, [dispatch, id])

  const onActorSelect = (actorId) => {
    dispatch(getActorAction({ actorId }))
    history.push(`/actor/${actorId}`)
  }

  return (
    <Container fluid className="movie">
      <h1>{t('movie.title')}</h1>
      {!movie && (
        <Spinner animation="border" role="status" className="spinner__center" />
      )}
      {movie && (
        <Card className="item__width">
          <Card.Img
            variant="top"
            src={`${REACT_APP_THUMB}${THUMB_220_330}${movie.poster_path}`}
          />
          <Card.Body>
            <Card.Title className="ellipsis">{movie.original_title}</Card.Title>
            <Card.Text>{formatDate(movie.release_date)}</Card.Text>
          </Card.Body>
        </Card>
      )}

      {details && movie && (
        <AliceCarousel
          dotsDisabled={true}
          infinite={false}
          responsive={responsive}
          stagePadding={{
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          {details.cast.map((actor) => {
            return (
              <Card
                key={actor.id}
                style={{ width: '10rem' }}
                onClick={() => onActorSelect(actor.id)}
              >
                <Card.Img
                  variant="top"
                  src={`${REACT_APP_THUMB}${THUMB_138_175}${actor.profile_path}`}
                />
                <Card.Body>
                  <Card.Title className="ellipsis">{actor.name}</Card.Title>
                  <Card.Title className="ellipsis">
                    {actor.character}
                  </Card.Title>
                  <Card.Title className="ellipsis">
                    {movie.original_title}
                  </Card.Title>
                </Card.Body>
              </Card>
            )
          })}
        </AliceCarousel>
      )}
    </Container>
  )
}
