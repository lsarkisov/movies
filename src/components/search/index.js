import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container, Form, InputGroup, FormControl } from 'react-bootstrap'
import { searchMovieAction } from 'actions/search'

export default function SearchMovie(props) {
  const { t } = useTranslation()
  const [value, setValue] = useState()

  const dispatch = useDispatch()
  const history = useHistory()

  const onSearch = (e) => {
    e.preventDefault()
    dispatch(searchMovieAction({ title: value }))
    history.push(`/search?query=${value}`)
  }

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Container className="search">
      <Form onSubmit={onSearch}>
        <InputGroup>
          <FormControl
            placeholder={t('ui.search.placeholder')}
            onChange={onChange}
          />
          <InputGroup.Append>
            <InputGroup.Text className="search__button" onClick={onSearch}>
              {t('ui.search.button')}
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </Container>
  )
}
