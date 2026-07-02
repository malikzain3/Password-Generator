import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-red-600">Opps! Data nahi mil saka</h1>
      <p className="mt-4 text-gray-500">{error.statusText || error.message}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
      >
        Dobara Try Karen
      </button>
      
    </div>
    <Link to='/' className='bg-red-500 ml-135 cursor-pointer w-70 mx-auto my-0 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block text-center'>
              Go to Password Generator
            </Link>
            </>
  );
}