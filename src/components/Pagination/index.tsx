import { ContainerPagination, RoundEffect } from './styles'
import React from 'react'

interface PaginationProps {
  pages: number
  currentPage: number
  handlePagination: (page: number) => void
}

export function Pagination({
  pages,
  handlePagination,
  currentPage,
}: PaginationProps) {
  return (
    <ContainerPagination>
      <h3>Paginas: </h3>
      {Array.from(Array(pages), (_, index) => (
        <RoundEffect
          key={index}
          value={index}
          onClick={() => handlePagination(index)}
          className={currentPage === index ? 'active' : ''}
        >
          {index + 1}
        </RoundEffect>
      ))}
    </ContainerPagination>
  )
}
