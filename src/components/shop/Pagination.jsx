import React from 'react';
import styles from './Pagination.module.css';

/**
 * Pagination Component
 * Displays page navigation controls
 */
export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  isDisabled = false,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        disabled={currentPage === 1 || isDisabled}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        type="button"
        disabled={currentPage === totalPages || isDisabled}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
