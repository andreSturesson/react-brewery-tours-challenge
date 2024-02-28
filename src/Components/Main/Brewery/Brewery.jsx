import PropTypes from "prop-types";

export default function Brewery({ brewery }) {
  return (
    <li>
      <h2>{brewery.name}</h2>
      <div className="type">{brewery.brewery_type}</div>
      <section className="address">
        <h3>Address:</h3>
        <p>{brewery.address_1}</p>
        <p>
          <strong>
            {brewery.state_province} {brewery.postal_code}
          </strong>
        </p>
      </section>
      <section className="phone">
        <h3>Phone:</h3>
        <p>{brewery.phone}</p>
      </section>
      <section className="link">
        <a href={brewery.website_url} target="_blank">
          Visit Website
        </a>
      </section>
    </li>
  );
}

Brewery.propTypes = {
  brewery: PropTypes.object.isRequired,
};
