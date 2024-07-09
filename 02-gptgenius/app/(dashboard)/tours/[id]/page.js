import TourInfo from "@/components/TourInfo";
import { generateTourImage, getSingleTour } from "@/utils/action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import axios from "axios";

const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;
console.log({url});
const SingleTourPage = async ({ params }) => {
  const tour = await getSingleTour(params.id);
  if (!tour) {
    redirect("/tours");
  }

  // Generate Image using Unsplash
  let tourImage;
  try {
      const { data } = await axios(`${url}${tour.city}`);
      tourImage = data?.results[0]?.urls?.raw;    
  } catch (error) {
    console.log(error);
  }

  // Generate Image using OpenAI API
  //   const tourImage = await generateTourImage({
  //     city: tour.city,
  //     country: tour.country,
  //   });
  return (
    <div>
      <Link href="/tours" className="btn btn-secondary mb-12">
        back to tours
      </Link>
      {tourImage ? (
        <div>
          <Image
            src={tourImage}
            width={300}
            height={300}
            className="rounded-xl shadow-xl mb-16 h-96 w-96 object-cover"
            alt={tour.title}
            priority
          />
        </div>
      ) : null}
      <TourInfo tour={tour} />
    </div>
  );
};
export default SingleTourPage;
