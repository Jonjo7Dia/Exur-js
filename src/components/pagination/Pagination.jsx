import classes from "./Pagination.module.css";
import {  useSelector } from "react-redux";
import { useMemo } from "react";
import PaginationButtons from './PaginationButtons';
function range(start, end) {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  }
function Pagination(){

    const filterItems = useSelector(state => state.fetch);
    const totalCount = filterItems.totalCount;
    const pageSize = 1;
    const siblingCount = 1;
    const currentPage = filterItems.currentPage;
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        const totalPageNumbers = siblingCount + 5;
        if (totalPageNumbers >= totalPageCount) {
          return range(1, totalPageCount);
        }
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
          currentPage + siblingCount,
          totalPageCount
        );
    
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
    
        if (!shouldShowLeftDots && shouldShowRightDots) {
          let leftItemCount = 3 + 2 * siblingCount;
          let leftRange = range(1, leftItemCount);
          return [...leftRange, "...", totalPageCount];
        }
        if (shouldShowLeftDots && !shouldShowRightDots) {
          let rightItemCount = 3 + 2 * siblingCount;
          let rightRange = range(
            totalPageCount - rightItemCount + 1,
            totalPageCount
          );
          return [firstPageIndex, "...", ...rightRange];
        }
        if (shouldShowLeftDots && shouldShowRightDots) {
          let middleRange = range(leftSiblingIndex, rightSiblingIndex);
          return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
        }
      }, [filterItems.currentPage, filterItems.totalCount]);

      return <div className={classes.pagination}>
          <PaginationButtons range={paginationRange}/>
      </div>

}

export default Pagination;