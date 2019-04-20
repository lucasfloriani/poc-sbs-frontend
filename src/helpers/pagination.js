const FIRST_PAGE = 1
const limitBetween = (num, min, max) => Math.max(min, Math.min(num, max))
const createArrayInRange = (start, end) => Array(end - start + 1).fill().map((_, idx) => start + idx)

const getStartEndPageNumber = (totalPages, maxPages, currentPage) => {
  if (totalPages <= maxPages) {
    return { startPage: FIRST_PAGE, endPage: totalPages }
  }

  const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2)
  const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1

  if (currentPage <= maxPagesBeforeCurrentPage) {
    return { startPage: FIRST_PAGE, endPage: maxPages }
  }

  if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
    return {
      startPage: totalPages - maxPages + 1,
      endPage: totalPages,
    }
  }

  return {
    startPage: currentPage - maxPagesBeforeCurrentPage,
    endPage: currentPage + maxPagesAfterCurrentPage,
  }
}

const paginate = ({
  totalItems, currentPage = FIRST_PAGE, pageSize = 10, maxPages = 10,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize)
  const currentPageVerified = limitBetween(currentPage, 1, totalPages)
  const { startPage, endPage } = getStartEndPageNumber(totalPages, maxPages, currentPageVerified)
  const arrayOfPages = createArrayInRange(startPage, endPage)

  return {
    currentPage: currentPageVerified,
    endPage,
    pages: arrayOfPages,
    pageSize,
    startPage,
    totalItems,
    totalPages,
  }
}

export default paginate
