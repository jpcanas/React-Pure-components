import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-3xl font-semibold text-red-500 mb-5">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
