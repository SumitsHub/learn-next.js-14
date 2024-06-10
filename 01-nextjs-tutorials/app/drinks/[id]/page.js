import Link from "next/link";
import drinkImg from "./drink.jpg";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async id => {
  const res = await fetch(url + id);
  if (!res.ok) throw new Error("Failed to fetch drink!");
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
      {/* Local images -  */}
      {/* <img src={drinkImg.src} alt="s" className='w-48 h-48 rounded' /> */}
      {/* <Image src={drinkImg} className='w-48 h-48 rounded' alt='' /> */}

      {/* Remote image */}
      <Image
        src={imgSrc}
        height={300}
        width={300}
        className="h-48 w-48 rounded-lg shadow-lg"
        priority
        alt={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
}
export default SingleDrinkPage;
