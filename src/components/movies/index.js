import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'
import Pagination from 'react-js-pagination'

import { getMoviesAction } from 'actions/movies'
import { formatDate } from 'utils'
import { REACT_APP_THUMB, THUMB_220_330 } from 'const/api'

import SearchMovie from 'components/search'

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Movies(props) {
  const itemsNum = 6

  const [current, setCurrent] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const dispatch = useDispatch()
  const { allMovies } = useSelector((state) => state.movies)

  const [params, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  useEffect(() => {
    if (!allMovies) {
      dispatch(getMoviesAction())
    }
  }, [dispatch, allMovies])

  useEffect(() => {
    if (!current && allMovies) {
      const it = allMovies.items.slice(0, itemsNum)
      setCurrent(it)
    }
  }, [current, allMovies])

  const onPaginate = (page) => {
    if (page !== currentPage) {
      const step = (page - 1) * itemsNum
      const it = allMovies.items.slice(step, step + itemsNum)
      setCurrent(it)
      setCurrentPage(page)
    }
  }

  return (
    <Container className="movies p-0">
      <SearchMovie />
      {!allMovies && (
        <Spinner animation="border" role="status" className="spinner__center" />
      )}
      {allMovies && (
        <React.Fragment>
          <Container>
            <Row className="justify-content-md-center">
              {current &&
                current.map((movie) => {
                  return (
                    <Col key={movie.id}>
                      <animated.div
                        class="card"
                        onMouseMove={({ clientX: x, clientY: y }) =>
                          set({ xys: calc(x, y) })
                        }
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: params.xys.interpolate(trans) }}
                      >
                        <Link to={`/movie/${movie.id}`}>
                          <Card className="item__width">
                            <Card.Img
                              variant="top"
                              src={`${REACT_APP_THUMB}${THUMB_220_330}${movie.poster_path}`}
                            />
                            <Card.Body>
                              <Card.Title className="ellipsis">
                                {movie.original_title}
                              </Card.Title>
                              <Card.Text>
                                <span>{formatDate(movie.release_date)}</span>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Link>
                      </animated.div>
                    </Col>
                  )
                })}
            </Row>
          </Container>
          <Pagination
            activeClass="active"
            activePage={currentPage}
            itemsCountPerPage={itemsNum}
            totalItemsCount={allMovies.items.length}
            pageRangeDisplayed={5}
            onChange={onPaginate}
          />
        </React.Fragment>
      )}
    </Container>
  )
}
