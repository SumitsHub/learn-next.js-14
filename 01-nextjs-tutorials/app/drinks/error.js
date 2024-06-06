'use client';

function Error({error}) {
    console.log(error);
  return (
    <div>{error.message}</div>
  )
}
export default Error