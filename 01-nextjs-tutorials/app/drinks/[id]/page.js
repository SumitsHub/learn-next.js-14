import Link from "next/link";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async id => {
  const res = await fetch(url + id);
  if (!res.ok) throw new Error('Failed to fetch drink!');
  const data = await res.json();
  return data;
};

async function SingleDrinkPage({ params }) {
  const { id } = params;
  const data = await getSingleDrink(id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
}
export default SingleDrinkPage;
