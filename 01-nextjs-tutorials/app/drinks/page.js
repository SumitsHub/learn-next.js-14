import DrinksList from "@/components/DrinksList";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
  // for testing loading.js page
  // await new Promise(resolve => {
  //   setTimeout(resolve, 10000);
  // });
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch data!');
  const data = response.json();
  return data;
};

async function DrinksPage() {
  const {drinks} = await fetchDrinks();
  // console.log(drinks); // - this log can be seen in terminal, since it's server component
  return (
    <div>
      <DrinksList drinks={drinks}/>
    </div>
  );
}
export default DrinksPage;
