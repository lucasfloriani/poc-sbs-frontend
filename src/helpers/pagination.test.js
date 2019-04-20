import paginate from './pagination'

describe('pagination', () => {
  it('should return correct values with only number of itens', () => {
    const paginateResult = paginate({ totalItems: 150 })
    expect(paginateResult).toMatchObject({
      currentPage: 1,
      endPage: 10,
      pageSize: 10,
      pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      startPage: 1,
      totalItems: 150,
      totalPages: 15,
    })
  })

  it('should return correct values with number of itens and current page', () => {
    const paginateResult = paginate({
      totalItems: 150,
      currentPage: 7,
    })
    expect(paginateResult).toMatchObject({
      currentPage: 7,
      endPage: 11,
      pageSize: 10,
      pages: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      startPage: 2,
      totalItems: 150,
      totalPages: 15,
    })
  })

  it('should return correct values with number of itens, current page and page size', () => {
    const paginateResult = paginate({
      totalItems: 150,
      currentPage: 7,
      pageSize: 15,
    })
    expect(paginateResult).toMatchObject({
      currentPage: 7,
      endPage: 10,
      pageSize: 15,
      pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      startPage: 1,
      totalItems: 150,
      totalPages: 10,
    })
  })

  it('should return correct values with number of itens, current page, page size and max pages', () => {
    const paginateResult = paginate({
      totalItems: 150,
      currentPage: 7,
      pageSize: 15,
      maxPages: 5,
    })
    expect(paginateResult).toMatchObject({
      currentPage: 7,
      endPage: 9,
      pageSize: 15,
      pages: [5, 6, 7, 8, 9],
      startPage: 5,
      totalItems: 150,
      totalPages: 10,
    })
  })
})
