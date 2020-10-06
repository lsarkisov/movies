import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Container, Card, Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { REACT_APP_THUMB, THUMB_220_330 } from 'const/api'

import { getActorAction } from 'actions/actor'

export default function Actor(props) {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const history = useHistory()
  const actorId = history.location.pathname.replace('/actor/', '')
  const { person } = useSelector((state) => state.actor)

  useEffect(() => {
    dispatch(getActorAction({ actorId }))
  }, [dispatch, actorId])

  return (
    <Container fluid className="p-0 actor">
      {!person && (
        <Spinner animation="border" role="status" className="spinner__center" />
      )}
      {person && (
        <Card className="item__width">
          <Card.Img
            variant="top"
            src={`${REACT_APP_THUMB}${THUMB_220_330}${person.profile_path}`}
          />
          <Card.Body>
            <Card.Title className="ellipsis">
              {t('actor.name')}: {person.name}
            </Card.Title>
            <Card.Text>
              <b>{t('actor.place_of_birth')}</b>: {person.place_of_birth}
            </Card.Text>
            <Card.Text>
              <b>{t('actor.popularity')}</b>: {person.popularity}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  )
}
