import { end_page } from "./constants";

const EndPage = () => {
  return (
    <>
      <div className="end-page-card">
        <img className="end-page" src={end_page} />
      </div>

      <div className="tag-line">
        <h1>NO MORE PLANETS</h1>
      </div>
    </>
  );
};

export default EndPage;
