import { end_page } from "./constants";

const NoResiPage= () => {
  return (
    <>
      <div className="end-page-card">
        <img className="end-page" src={end_page} />
      </div>

      <div className="tag-line">
        <h1>NO RESIDENTS</h1>
      </div>
    </>
  );
};

export default NoResiPage;
