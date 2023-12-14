import View from './view.js';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;
      const goToPage = +btn.dataset.goTo;
      handler(goToPage);
    });
  }
  _generateMarkup() {
    const { page } = this._data;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const prev = `<button class="btn--inline pagination__btn--prev" data-go-to="${
      page - 1
    }">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${page - 1}</span>
  </button>`;
    const next = ` <button class="btn--inline pagination__btn--next" data-go-to="${
      page + 1
    }">
  <span>Page ${page + 1}</span>
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
  </svg>
</button>`;
    //page 1 and there are other pages
    if (page === 1 && numPages > 1) {
      return next;
    }
    //last page
    if (page === numPages && numPages > 1) {
      return prev;
    }
    //Other page
    if (page < numPages) {
      return prev + next;
    }
    //page 1 and there are NO other pages
    return '';
  }
}
export default new PaginationView();
