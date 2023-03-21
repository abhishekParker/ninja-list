export const getStaticPaths = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      ninja: data,
    },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h3>Name - {ninja.name}</h3>
      <h3>Username - {ninja.username}</h3>
      <h3>Email - {ninja.email}</h3>
      <h3>Phone - {ninja.phone}</h3>
      <h3>City - {ninja.address.city}</h3>
    </div>
  );
};

export default Details;
