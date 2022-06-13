const FePagination = () => {
  return (
    <div className="page-type1-pagination">
      <button className="page-type1-pagination-btn prev">
        <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.935198 13.0565C0.351696 12.4684 0.355391 11.5187 0.943452 10.9352L10.5265 1.42643C11.1145 0.842929 12.0643 0.846624 12.6478 1.43469C13.2313 2.02275 13.2276 2.97249 12.6395 3.55599L5.62711 10.514L36.4814 10.6341L36.4698 13.6341L5.61543 13.514L12.5735 20.5264C13.157 21.1145 13.1533 22.0642 12.5652 22.6477C11.9772 23.2312 11.0274 23.2275 10.4439 22.6395L0.935198 13.0565Z"
          />
        </svg>
        <div className="type1-pagination-btn-text">Prev</div>
      </button>
      <div className="page-type1-pagination-pagenum">
        <span className="mx-3">1</span>/<span className="mx-3">4</span>
      </div>
      <button className="page-type1-pagination-btn next active">
        <svg width="37" height="23" viewBox="0 0 37 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.0317 0.494568L36.5404 10.0776C37.1239 10.6656 37.1202 11.6154 36.5321 12.1989L26.9491 21.7076C26.3611 22.2911 25.4113 22.2874 24.8278 21.6994C24.2443 21.1113 24.248 20.1616 24.8361 19.5781L31.8485 12.62L0.994152 12.4999L1.00583 9.49997L31.8601 9.62003L24.9021 2.60762C24.3186 2.01956 24.3223 1.06982 24.9103 0.486314C25.4984 -0.0971889 26.4482 -0.0934934 27.0317 0.494568Z"
          />
        </svg>
        <div className="type1-pagination-btn-text">Next</div>
      </button>
    </div>
  );
};
export default FePagination;
