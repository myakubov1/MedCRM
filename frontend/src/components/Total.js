function Total({ name, summary, icon }) {
  return (
    <div className="col-sm-6 col-xl-3">
      <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
        <i className={`fa fa-3x  text-primary ${icon}`} />
        <div className="ms-3">
          <p className="mb-2">{name}</p>
          <h6 className="mb-0">{`$${summary}`}</h6>
        </div>
      </div>
    </div>
  );
}
export default Total;
