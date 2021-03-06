import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Tile = props => {
  const { header, children } = props
  return (
    <S.Title>
      <S.Header>{header}</S.Header>
      <S.Content>{children}</S.Content>
    </S.Title>
  )
}

Tile.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
}

export default Tile
